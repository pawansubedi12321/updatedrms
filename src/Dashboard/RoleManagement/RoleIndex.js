import React from 'react'
import SideBar from '../SideBar'
import Topbar from '../Topbar'
import { Link } from 'react-router-dom'

export default function RoleIndex() {
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
                                <i class="fa-solid fa-users-gear edit-icon"></i>
                                <h1>Role Management</h1>
                            </div>
                        </div>

                        <div className="col-md-12 mt-2 my-2">
                           
                            <div class="wrap">
                                <div class="search">
                                    <button type="submit" class="searchButton">
                                        <i class="fa fa-search"></i>
                                    </button>
                                    <input type="text" class="searchTerm" placeholder="Search"/>
                                    
                                </div>
                                <Link type='submit' className='mb-3 btn-submit' to='/add-role'>
                                Add role
                                </Link>     
                                 {/* <button type="submit" class="btn btn-primary mb-3 btn-submit"></button> */}
                            </div>
                        </div>
                       
                        <form>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                            <th scope="col">S.N.</th>
                                            <th scope="col">Role Type</th>
                                            <th scope="col">Created At</th>
                                            <th scope="col">Expire Date</th>
                                            <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">1</th>
                                            <td>Admin</td>
                                            <td>Jun-25, 2023</td>
                                            <td>Jun-25, 2024</td>
                                            <td>
                                            <Link><i class="fa-solid fa-pen mx-3 edit"></i></Link>
                                            <Link><i class="fa-solid fa-trash delete"></i></Link>
                                           
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row">2</th>
                                            <td>Chef</td>
                                            <td>July-25, 2023</td>
                                            <td>July-25, 2024</td>
                                            <td>
                                            <Link><i class="fa-solid fa-pen mx-3 edit"></i></Link>
                                            <Link><i class="fa-solid fa-trash delete"></i></Link>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row">3</th>
                                            <td >Larry the Bird</td>
                                            <td>Sep-25, 2023</td>
                                            <td>Sep-25, 2024</td>
                                            <td>
                                            <Link><i class="fa-solid fa-pen mx-3 edit"></i></Link>
                                            <Link><i class="fa-solid fa-trash delete"></i></Link>
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                
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
