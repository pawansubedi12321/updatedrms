import React from 'react'
import SideBar from '../SideBar'
import Topbar from '../Topbar'
import { Link } from 'react-router-dom'

export default function AddRole() {
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
                        <div className="col-md-6 ">
                            <div className="edit-text">
                                <i class="fa-solid fa-user-plus edit-icon"></i>
                                <h1>Add Role</h1>
                            </div>
                           
                        </div>
                        <div className="col-md-6 ">
                        <Link className='btn btn-primary mb-3 btn-back' to="/role-management">Back To List</Link>  
                        </div>

                        <div className="col-md-12">
                        <form>
                            <div className="row mt-4">
                                <div className="row mb-5">
                                    <div class="col-md-6 formbox">
                                        <label for="inputEmail4" class="form-label">Role Name</label>
                                        <input type="text" class="form-control" id="inputEmail4" placeholder='Role Name'/>
                                    </div>
                                    <div class="col-md-6 formbox">
                                        <label for="inputPassword4" class="form-label">Expire Date</label>
                                        <input type="date" class="form-control" id="inputPassword4"/>
                                    </div>
                                </div>  
                                <div className="col-md-12">
                                    <div class="form-check form-check-inline formbox">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <label class="form-check-label" for="inlineCheckbox1">Admin</label>
                                    </div>
                                    <div class="form-check form-check-inline formbox">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                        <label class="form-check-label" for="inlineCheckbox2">Chef</label>
                                    </div>
                                    <div class="form-check form-check-inline formbox">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                                        <label class="form-check-label" for="inlineCheckbox3">Chef 1</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                <button type="submit" class="btn btn-primary mb-3 btn-submit">Add Role</button>
                                </div>
                            
                            </div>
                        </form>
                        </div>

                        
                       
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
