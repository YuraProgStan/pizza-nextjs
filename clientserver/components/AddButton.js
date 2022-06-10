import React from 'react';
import styles from  '../styles/AddButton.module.css'

const AddButton = ({setClose}) => {
    return (
        <div  onClick={()=>setClose(false)} className={styles.mainAddButton}>
AddNewPizza
        </div>
    );
};

export default AddButton;