import React, { useState,useContext, useEffect } from 'react'
import SideBar from '../SideBar'
import Topbar from '../Topbar'
import Detail from './Detail';
import AssignPassword from './AssignPassword';
import AssignRole from './AssignRole';
import { Link,Location, useLocation } from 'react-router-dom';
import {Contextdata } from './Context';

export default function AddUser() {
    let arrayofformdata;
    const [page, setPage]= useState(0);
    const location=useLocation();
    let {storedata,item,index}=location.state||{};
    let[alldataofform,setalldataofform]=useState({});
    const{text,settext,email,setemail,phone,setphone,age,setage,file,setfile,contact,setcontact,address,setaddress,password,setpassword,confirmpassword,setconfirmpassword,admin,setadmin,chef,setchef,chef1,setchef1}=useContext(Contextdata);
   let[arrayofform,setarrayofform]=useState([...storedata]);
    //const[storedarray,setstoredarray]=useState([]);
  
  //  storedata={};
    //arrayofform=[...storedata];
    // const location=useLocation();
    // let {storedata,item,index}=location.state||{};
    // console.log("this is item data");
    // console.log(arrayofform[0]);
    // console.log(arrayofform[1]);
    // console.log(arrayofform[0]={text:"pawan"});
    // console.log("end this data");
   useEffect(()=>{
    localStorage.setItem('arrayofform', JSON.stringify(arrayofform));
   })
    function NextButton() {
      
        
    
            setalldataofform({
                text:text,
                email:email,
                phone:phone,
                age:age,
                file:file,
                contact:contact,
                address:address,
                password:password,
                confirmpassword:confirmpassword,
                //admin:admin,
                
                
        
            
        });
        
       

        if(page === FormTitle.length-1 ){
            
              
                let updated=[{...alldataofform}];
                console.log("this is updated");
                console.log(updated);
                console.log("end");
                // if(item)
        
                // //item[index]=updated;
                // arrayofform [index]=updated
               
                // setarrayofform(arrayofform)
                // }
                if(item)
                {
                   // const edit=Object.fromEntries(updated);
                   //const edit=Object.fromEntries(updated);
                   //const data=[{...updated}];
                    console.log("hello i am edit");
                    //console.log(data);
                    console.log("end");
                    arrayofform[index]=alldataofform;
                    setarrayofform(arrayofform)
                }
                else
                {
                arrayofform=[...updated,...storedata];
                setarrayofform(arrayofform)
                }
                
                 //setarrayofform([...arrayofform,alldataofform]);
                 
                
        
               
               
                alert("User Added Successfully");
                setalldataofform("");
                settext("");
                setemail("");
                setphone("");
                setage("");
                setfile("");
                setcontact("");
                setaddress("");
                setpassword("");
                setconfirmpassword("");
                setadmin("");
                setchef("");
                setchef1("");
            
           
           
            
        }else{
            

            setPage((currPage) => currPage+1);
        }
    
        
        
  }
  console.log("this is array of form");
        console.log(arrayofform);
        console.log("end");

  function PreviousButton() {
        setPage((currPage) => currPage-1);
  }
  const PageDisplay =() =>{
    if(page === 0){
        return <Detail/>
    }
    else if(page === 1){
        console.log("this i page 2")
        {console.log(alldataofform)}
        return <AssignPassword/>
    }else{
        // console.log("this is page 3")
        // console.log(alldataofform);
        console.log("this is page 3");
            console.log(alldataofform);
            console.log("end");
        return <AssignRole
        setalldataofform={setalldataofform}
        alldataofform={alldataofform}
        arrayofform={arrayofform}
        setarrayofform={setarrayofform}
        />
    }
  }
    const FormTitle =["Personal Details","Assign Password","Assign Role"];
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
                                <h1>Add User</h1>
                            </div>
                           
                        </div>
                        <div className="col-md-6 ">
                        <Link className='btn btn-primary mb-3 btn-back' to="/user-management">Back To List</Link>  
                        </div>

                        {/* <div className="col-md-12">
                        <form>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Full Name"/>
                                    </div>
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="example@gmail.com"/>
                                    </div>
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">Phone</label>
                                        <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="Enter Phone Number"/>
                                    </div>
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">Age</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Provide Age"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                        <div className="mb-3 select-img formbox">                

                                            <label for="formFile" class="form-label">Select Image</label>
                                            <input class="form-control" type="file" id="formFile"/>
                                        </div>
                                        <div class="mb-3 formbox">
                                            <label for="formGroupExampleInput2" class="form-label">Contact Number</label>
                                            <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="EnterContact Number"/>
                                        </div>
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">Address</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Full Address"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                <button type="submit" class="btn btn-primary mb-3 btn-submit">Next</button>
                                </div>
                                
                               
                            </div>
                        </form>
                        </div> */}

                        <div className="col-md-12">
                            <div className="form">
                                <div className="progressbar">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                    <div style={{width:page===0 ? "33.3%" : page === 1 ? "66%" : "100%"}}></div>
                                </div>
                                    <div className="form-container">
                                        <div className="header">
                                            <h2>{FormTitle[page]}</h2>
                                        </div>
                                        <div className="body">
                                            {
                                                PageDisplay()
                                            }
                                        </div>
                                        <div className="footer">
                                        <button onClick={NextButton} className='btn btn-primary mb-3 btn-submit'>{page === FormTitle.length-1 ? "Submit" : "Next"}</button>
                                            <button style={{display:page== 0 ? "none" : "block"}}  onClick={PreviousButton} className='btn btn-primary mb-3 btn-submit'>Previous</button>
                                            
                                        </div>
                                    </div>
                               
                            </div>
                        </div>
                       
                        
                    </div>


                    
                   
                </div>
            </div>
        </section>
    </>
  )
}
