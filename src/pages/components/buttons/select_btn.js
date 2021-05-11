import React,{useState} from 'react';
import { Route, Link } from 'react-router-dom';
import '../../../App.css';

function SelectBtn ({path, value, onChange}){
    
    const btnStyle = {
        borderRadius: "15px",
        backgroundColor: "white",
        width: "256px",
        height:  "68px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: "8px",
        marginLeft: "24px",
        border : "none",
    }
    const btnText = {
        fontWeight: "bold",
        fontSize: "21px",
      }

    const linkStyle = {
            textDecoration: "none",
            color: "#383838"
    }
    return (
        // <Link style ={linkStyle} to = {String(path)}>
        <button className= "select-btn" style = {btnStyle} onClick = {onChange}>
              <span class="btn-text" style = {btnText}>{value}</span>
        </button>
        // </Link>

    );
}

SelectBtn.defaultProps = {
    path : " "
};
export default SelectBtn;