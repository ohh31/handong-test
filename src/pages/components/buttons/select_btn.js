import React,{useState} from 'react';
import '../../../App.css';
function SelectBtn ({id, value, onChange}){
    
    const btnStyle = {
        borderRadius: "15px",
        backgroundColor: "white",
        width: "256px",
        height:  "68px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "8px",
        marginLeft: "24px",
        border : "none",
    }
    const btnText = {
        fontWeight: "bold",
        fontSize: "21px",
        textAlign: "center",
      }
    const linkStyle = {
            textDecoration: "none",
            color: "#383838"
    }

    return (
        <input id = {id} className = 'select-btn' type = "button" value = {value} onClick = {onChange}></input>
        // <button className = 'select-btn' onClick = {onChange} value = {value}>
        //      <span style = {btnText}>{value}</span>
        // </button>
    );
}

SelectBtn.defaultProps = {
    path : " "
};
export default SelectBtn;