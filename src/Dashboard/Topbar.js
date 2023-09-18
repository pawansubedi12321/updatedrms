import React, { useState } from 'react'
import img1 from '../images/user.jpg'
import { Link } from 'react-router-dom';

let currentDate =new Date();
currentDate= currentDate.getHours();

let greeting ='';
if(currentDate >= 1 && currentDate < 12){
  greeting = 'Good Morning';
}else if(currentDate >=12 && currentDate < 17){
  greeting = 'Good Afternoon';
}else if(currentDate >=17 && currentDate < 20){
  greeting = 'Good Evening';
}else{
  greeting = 'Good Night';
}

export default function Topbar() {
  return (
    <>
        <div className="topbar d-flex ">
            <div className="text">
                    <h1>DashBoard</h1>
            </div>
            <div className="greeting">
                <h1>{greeting}, Admin <br></br>
                <Link className='btn-edit btn-success' to="/user-edit">Edit</Link>
                </h1>
                
                <img src={img1} alt="" />
                
            </div>

            {/* <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="src/images/user.png" alt="" />
                {greeting}, Admin<br></br>
                <a href="" className='btn btn-pirmary text-white'>Edit</a>
                </button>
                
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
            </div> */}


            {/* <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                </svg>
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Notification oNe</a></li>
                    <li><a className="dropdown-item" href="#">Notification Two</a></li>
                    <li><a className="dropdown-item" href="#">Notification Three</a></li>
                </ul>
            </div> */}

           


        
     
    </div>
    </>
  )
}
