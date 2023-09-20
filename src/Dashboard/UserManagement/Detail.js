import React,{useContext, useEffect, useState} from 'react'
import { Location,useLocation} from 'react-router-dom';
import {Contextdata } from './Context';
export default function Detail() {
    const{text,settext,email,setemail,phone,setphone,age,setage,file,setfile,contact,setcontact,address,setaddress}=useContext(Contextdata);
    const location=useLocation();
    let {storedata,item,index}=location.state||{};
    console.log("heii l i am item");
   console.log(item);
   console.log("end");
   console.log("hei i am index");
   console.log(index);
   console.log("end");
   
   const[edittext,setedittext]=useState('');
   const[editemail,seteditemail]=useState('');
   console.log(" i am edit");
   console.log(edittext);
   console.log("end");
    if(item && edittext==="")
   {
    
    settext(item.text);
    //setemail(item.email);
    //setemail(item.email);
   
       console.log(text);
    
   }
   else
   {
    //item[index]=edittext
   // item[index]=edittext
    settext(edittext);
    //setemail(editemail);
   }

     // settext(item.text);

   
   
    const textdata=(e)=>{
        
     
            const data=e.target.value;
            settext(data);
            setedittext(data);
          //  setedit(data);
            
        
        
        
        //console.log(data);

    }
    const emaildata=(e)=>{
        const data=e.target.value;
        setemail(data);
        seteditemail(data);
    }
    const phonedata=(e)=>{
        const data=e.target.value;
        setphone(data)
    }
    const agedata=(e)=>{
        const data=e.target.value;
        setage(data);
    }
    const filedata=(e)=>{
        const data=e.target.files[0];
        const imageurl=window.URL.createObjectURL(data);
        setfile(imageurl);;
        //console.log(data);
    }
    const numberdata=(e)=>{
        const data=e.target.value;
        setcontact(data);
    }
    const addressdata=(e)=>{
        const data=e.target.value;
        setaddress(data);
    }
   
  return (
    <>
                        <form>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput" class="form-label">Name</label>
                                        <input type="text"defaultValue={text}class="form-control"onChange={textdata} id="formGroupExampleInput" placeholder="Full Name"/>
                                    </div>
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">Email</label>
                                        <input type="email"defaultValue={email}class="form-control"onChange={emaildata} id="formGroupExampleInput2" placeholder="example@gmail.com"/>
                                    </div>
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">Phone</label>
                                        <input type="number"defaultValue={phone}class="form-control"onChange={phonedata}  id="formGroupExampleInput2" placeholder="Enter Phone Number"/>
                                    </div>
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">Age</label>
                                        <input type="text"defaultValue={age}class="form-control"onChange={agedata} id="formGroupExampleInput2" placeholder="Provide Age"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                        <div className="mb-3 select-img formbox">                

                                            <label for="formFile" class="form-label">Select Image</label>
                                            <input class="form-control"onChange={filedata}type="file"  id="formFile"/>
                                            
                                             
                                           {file && 
                                           <div>
                                            <img className='userprofile'defaultValue={file}src={file}alt="images"/>
                                            </div>} 



                                        </div>
                                        <div class="mb-3 formbox">
                                            <label for="formGroupExampleInput2" class="form-label">Contact Number</label>
                                            <input type="number"defaultValue={contact}onChange={numberdata} class="form-control" id="formGroupExampleInput2" placeholder="EnterContact Number"/>
                                        </div>
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">Address</label>
                                        <input type="text"defaultValue={address} class="form-control"onChange={addressdata} id="formGroupExampleInput2" placeholder="Full Address"/>
                                    </div>
                                </div>
                                {/* <div className="col-md-12">
                                <button type="submit" class="btn btn-primary mb-3 btn-submit">Next</button>
                                </div> */}
                                
                               
                            </div>
                        </form>
    </>
    
  )
}
