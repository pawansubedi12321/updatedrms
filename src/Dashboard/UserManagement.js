import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Topbar from './Topbar'
import { Link,Location, useLocation } from 'react-router-dom'

export default function UserManagement() {
    const[items,setitems]=useState([]);
    //let storedata;
    
       const storedata=JSON.parse(localStorage.getItem('arrayofform'));
        //setitems(storedata);


    
    console.log("hii i am localstorage");
    //console.log(storedata)
    //console.log(storedata[24]);
    console.log("end");
    // const {arrayofform} =useLocation();
    // console.log("hello location passed")
    // console.log(arrayofform);
 // localStorage.clear();
    //localStorage.clear();
    const deletevalue=(index)=>{
       // console.log("hii");
       const datatodelete=[...storedata];
       datatodelete.splice(index,1);
       setitems(datatodelete);
        console.log("data is");
        console.log(datatodelete);
        console.log("end");
        localStorage.setItem('arrayofform', JSON.stringify(datatodelete));
         //localStorage.setItem('datavalue', JSON.stringify(datatodelete));
        

    }
    // console.log("this is item");
    // console.log(item[1]);
    // console.log("end");
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
                                            <th scope="col">Name</th>
                                            <th scope="col">Role Type</th>
                                            <th scope="col">Images</th>
                                            <th scope="col">Action</th>
                                            
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td></td>
                                            <td>
                                            <Link><i class="fa-solid fa-pen mx-3 edit"></i></Link>
                                            <Link><i class="fa-solid fa-trash delete"></i></Link>
                                           
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td></td>
                                            <td>
                                            <Link><i class="fa-solid fa-pen mx-3 edit"></i></Link>
                                            <Link><i class="fa-solid fa-trash delete"></i></Link>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row">3</th>
                                            <td >Larry the Bird</td>
                                            <td >Larry the Bird</td>
                                            <td></td>
                                            <td>
                                            <Link><i class="fa-solid fa-pen mx-3 edit"></i></Link>
                                            <Link><i class="fa-solid fa-trash delete"></i></Link>
                                            </td>
                                            </tr>
                                        
                                        {
                                                    storedata.map((item, index) => (
                                                    
                                                        <tr key={index+1}>
                                                                  
                                                                <th scope='row'>{index+1}</th>
                                                                <td>{item.text}</td>
                                                                <td>{item.admin===true ?"admin ":""}
                                                                  {item.chef===true?"chef ":""}
                                                                  {item.chef1===true?"chef2 ":""}</td>
                                                                 
                                                                {/* {console.log("location")}
                                                                {console.log(location)} */}
                                                                
                                                               
                                                                <td><img className='userprofileshow'defaultValue={item.file} src={item.file}alt="img"/></td>
                                                                
                                                                <td>
                                                                <Link to='/add-user'state={{storedata,item,index}}>
                                                                <i className="fa-solid fa-pen mx-3 edit"></i>
                                                                </Link >
                                                                
                                                                 <i class="fa-solid fa-trash delete"onClick={()=>deletevalue(index)}></i>
                                                                </td>

                                                         
                                                        
                                                        </tr>
                                                      ))
                                                      
                                                            }
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
