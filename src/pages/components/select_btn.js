import { render } from '@testing-library/react';
import React from 'react';
import { Route, Link } from 'react-router-dom';

function SelectBtn ({path, value}){
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
        marginLeft: "24px"
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
        <div className= "select-btn" style = {btnStyle}>
        <Link style ={linkStyle} to={String(path)}>
              <span class="btn-text" style = {btnText}>{value}</span>
              </Link>
        </div>
    );
}

export default SelectBtn;