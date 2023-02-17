import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [OpenModal, setOpenModal] = useState(true);
  const ToggleModal = (value) => {
    setOpenModal(value);
  }
  return (
    <div className="maindiv">
      {OpenModal ?
        <Modal onClose={() => ToggleModal(false)} />
        :
     <></>
      }
   <button onClick={() => ToggleModal(true)}>
          Open Modal
        </button>
    </div>
  );
}

export default App;
