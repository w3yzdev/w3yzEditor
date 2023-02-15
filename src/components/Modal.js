import React from "react";
import { ReactComponent as Close } from '../assets/close.svg';
import classes from './Modal.module.css';


const Modal = (props) => {

  
    return (
        <div className={classes.backdrop }>
            <div className={classes.modal}>
                <div className={classes.topdiv}>
                    <h1 className={classes.text}>Sayfa Ekle</h1>
                    <button onClick={props.onClose} className={classes.closeBTN}>
                    <Close/>
                    </button>
                  
                </div>
            </div>
        </div>
    )
}
export default Modal;