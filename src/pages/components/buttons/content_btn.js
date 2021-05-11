import { render } from '@testing-library/react';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../../../App.css';


function ContentBtn ({path, value}){
  const btnStyle = {
    borderRadius: "15px",
    backgroundColor: "white",
    width: "186px",
    height: "48px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "8px",
    marginLeft: "24px",
    border : "none",
}

const linkStyle = {
    textDecoration: "none",
    color: "#383838"
}

const btnText = {
    fontWeight: "bold",
    fontSize: "21px",
  }

return (
  <Link style={linkStyle} to={String(path)}>
    <button class="content-btn" style = {btnStyle}>
      <span style = {btnText}>{value}</span>
    </button>
    </Link>

  
);
}

export default ContentBtn;