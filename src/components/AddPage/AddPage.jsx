import React, { useEffect, useState } from "react";
import classes from '../AddPage/AddPage.module.css';
import axios from "axios";
import FlatList from "flatlist-react/lib";



const SubAddPage = (props) => {



    const renderAddPageList = (item, index) => {
        console.log(item.title);
        return (
            <div className={classes.renderPageItem}>
                <div className={classes.images}>            
                        <img src={item.image} className={classes.image} />
                        <button onClick={()=> console.log(index)} className={classes.addPageBTN} >Sayfayı ekle</button>
                </div>

            </div>
        )

    }
    return (
        <section>
            <ul  >
                <FlatList
                    list={props.subdataList}
                    renderItem={renderAddPageList}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                    display={{
                        grid: true,
                        gridGap: "13px"
                    }}
                />
            </ul>
        </section>

    )
}






const AddPage = (props) => {
    const [TitleList, setTitleList] = useState([]);
    const [isloading, setisloading] = useState(true);
    const [subDataList, setsubDataList] = useState([]);

    const getAddPageData = () => {
        axios.get('https://w3yz.com/api/react/editor/pages').then((response) => {
            console.log(JSON.stringify(response.data));
            setTitleList(response.data);
            setsubDataList(response.data[0].pages);
            setisloading(false);
        }
        ).catch((error) =>
            console.log(error))
    }

    useEffect(() => {
        if (isloading === true) {
            getAddPageData();
        }

    });
    return (
        <div className={classes.maindivAddPage}>
            <nav>
                <ul className={classes.ulStyle}>
                    {!!TitleList && TitleList?.map((item) =>
                    (<li className={classes.liStyle}>
                        <button onClick={() => setsubDataList(item.pages)} className={classes.BTNS}> {item.title}</button>
                    </li>)
                    )}

                </ul>
                <hr class="solid" className={classes.divider}></hr>
            </nav>

            <div className={classes.modalContainer}>
                <SubAddPage subdataList={subDataList} />
            </div>
        </div>
    )
}

export default AddPage;