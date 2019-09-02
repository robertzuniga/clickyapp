import React from "react";
import "./style.css";

// const Header = props => (
//   <div className="header">
//     <div className="title">{props.children}</div>
//     <div className="scores">
//       score: {props.score} highscore: {props.highscore}
//     </div>
//   </div>
// );


function Navbar() {
  return ( 
    <nav className="navbar navbar-dark navbar-expand-md justify-content-between">
        <div className="container-fluid">

            <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link pl-0 brand " href="/">Clicky Game<span className="sr-only">Clicky Game</span></a>
                    </li>
                    {/* <li className="centerText"> Click an image to begin! </li> */}


                </ul>
            </div>

            <a href="/" className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25">Click an image to begin!</a>
    
            <div className="navbar-collapse collapse dual-nav w-50 order-2">
                <ul className="nav navbar-nav ml-auto">
                {/* score: {props.score} highscore: {props.highscore} */}
                    {/* <li className="centerText"> Score: {state.props.score} </li> */}
                    {/* <li className="centerText"> Score: </li> */}
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;