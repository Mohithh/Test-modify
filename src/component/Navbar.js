import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'



export default function Navbar(props ) {

  // const mycolor = ()=>{

  //   document.body.style.backgroundColor="green";

  // }


  return (
    <div>
      
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="/#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link> */}
                <a className="nav-link active" aria-current="page" href="/#">{props.home}</a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/Link">Link</Link> */}
                <a className="nav-link" href="/#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="nav-link disabled" aria-disabled="true">Disabled</button>
              </li>
            </ul>



            {/* <details>
                        <summary>choose</summary>

                        <button onClick={mycolor}  className="mx-4" style={{backgroundColor:'green',margin: "2px 4px", padding: "0px 19px",borderRadius: "30px", color:"purple"}} >light
                          
                        </button>


                                <button onClick={props.toggleMode} className="mx-4" style={{backgroundColor:'Black',margin: "2px 4px", padding: "0px 19px",borderRadius: "30px" , color:"purple" }}>dark</button>

                                <button onClick={props.toggleMode}  className="mx-4" style={{backgroundColor:'white',margin: "2px 4px", padding: "0px 19px" ,borderRadius: "30px", color:"purple" }}>green</button>
                      </details> */}




            
            <form className="d-flex" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button> */}            

              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label>
              </div>
            </form>
            
          </div>
        </div>
      </nav>
    </div>
  )
  
}



Navbar.prototype = {title:PropTypes.string,
                    home:PropTypes.string
}

// Navbar.defaultProps = {
//   title : "title",
//   home:"home"
// }