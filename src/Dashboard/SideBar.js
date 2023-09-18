import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <>
       <section className="container-fluid sidebar-bg">
        <div classNameName="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid vertical-navbar">
                <Link className="navbar-brand" to="/dashboard">Restaurant<br></br> Management <br></br> System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className='nav-link' to="/dashboard">
                    <i className="fa-solid fa-house navbar-icon"></i>                      
                        Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/user-edit"> <i className="fa-solid fa-user navbar-icon"></i>
                        User Profile</Link>
                    </li>

                    <li className="nav-item">
                    <Link className='nav-link' to="/user-management">
                    <i className="fa-solid fa-users-gear navbar-icon"></i>
                       User Management</Link>
                    </li>
                   
                    <li className="nav-item">
                    <Link className='nav-link' to="/role-management">  <i className="fa-solid fa-user-check navbar-icon"></i>
                        Role Management</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li> */}
                    
                  </ul>
                  <button className="btn  sign-out-btn">
                      <i class="fa-solid fa-right-from-bracket mr-4"></i>
                      Sign Out
                    </button>
                 

                </div>
              </div>
             
            </nav>
          </div>
        </div>
       </section>
    </>
  )
}
