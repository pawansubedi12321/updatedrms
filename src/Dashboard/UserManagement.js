import React from 'react'
import SideBar from './SideBar'
import Topbar from './Topbar'
import { Link,Location, useLocation } from 'react-router-dom'

export default function UserManagement() {
    const storedata=JSON.parse(localStorage.getItem('arrayofform'));
    console.log("hii i am localstorage");
    console.log(storedata);
    console.log("end");
    // const {arrayofform} =useLocation();
    // console.log("hello location passed")
    // console.log(arrayofform);
  // localStorage.clear();
    //localStorage.clear();
  return (
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
                                <h1>User management</h1>
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
                                <Link type='submit' className='mb-3 btn-submit' to='/add-user'state={{storedata:storedata}}>
                                Add User
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
                                            <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>
                                            <Link><i class="fa-solid fa-pen mx-3 edit"></i></Link>
                                            <Link><i class="fa-solid fa-trash delete"></i></Link>
                                           
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>
                                            <Link><i class="fa-solid fa-pen mx-3 edit"></i></Link>
                                            <Link><i class="fa-solid fa-trash delete"></i></Link>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row">3</th>
                                            <td >Larry the Bird</td>
                                            <td >Larry the Bird</td>
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
  )
}
