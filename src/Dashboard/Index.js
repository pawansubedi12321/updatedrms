import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './SideBar';
import Topbar from './Topbar';
import mimg from '../images/user-icon.svg';
import roleicon from '../images/role-icon.svg';
import Chartreport from './Report/report';
export default function Index() {
  
    return (
     <>
        <section className='container-fluid admin-bg p-4'>
            <div className="row">
                <div className="col-md-2">
                    <SideBar/>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <Topbar/>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-3">
                            <div class="card">
                                <img src={mimg} className="card-img" alt="..."/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title number">1000</h5>
                                    <p className="card-text">Overall Users</p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div class="card">
                                <img src={roleicon} className="card-img" alt="..."/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title number">1000</h5>
                                    <p className="card-text">Overall Roles</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-md-12">
                            <Chartreport/>
                        </div>
                    </div>                   
                </div>
            </div>
        </section>
     </>
    )
  }

