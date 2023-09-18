import React from 'react'
import Topbar from './Topbar'
import { Link } from 'react-router-dom'
import img1 from '../images/user.jpg'

import SideBar from './SideBar';

export default function UserProfile() {
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
                    <div className="row light-gray">
                        <div className="col-md-12 ">
                            <div className="edit-text">
                                <i class="fa-solid fa-user edit-icon"></i>
                                <h1>Edit Profile</h1>
                            </div>
                        </div>
                       
                        <form>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
                                    </div>
                                        <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                        <div className="mb-3 select-img formbox">                
                                            <img src={img1} alt="" />
                                            <label for="formFile" class="form-label">Select Image</label>
                                            <input class="form-control" type="file" id="formFile"/>
                                        </div>
                                </div>
                                <div className="col-md-12">
                                <button type="submit" class="btn btn-primary mb-3 btn-submit">Update Profile</button>
                                </div>
                                
                               
                            </div>
                        </form>
                    </div>


                    <div className="row light-gray ">
                        <div className="col-md-12 ">
                            <div className="edit-text">
                            <i class="fa-solid fa-lock edit-icon"></i>
                                <h1>Change Password</h1>
                            </div>
                        </div>
                       
                        <form>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput" class="form-label">Current Password</label>
                                        <input type="password" class="form-control" id="formGroupExampleInput" placeholder="Current Password"/>
                                    </div>
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">New Password</label>
                                        <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="New Password"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">Confirm Password</label>
                                        <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Re-type Password"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                <button type="submit" class="btn btn-primary mb-3 btn-submit">Change Password</button>
                                </div>
                                
                               
                            </div>
                        </form>
                    </div>
                   
                </div>
            </div>
        </section>

        
    </>
    
  )
}
