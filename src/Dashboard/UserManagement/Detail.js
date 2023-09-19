import React,{useContext} from 'react'

import {Contextdata } from './Context';
export default function Detail() {
    const{text,settext,email,setemail,phone,setphone,age,setage,file,setfile,contact,setcontact,address,setaddress}=useContext(Contextdata);
    console.log("hey");
    console.log(text);
    console.log("end");
    
    const textdata=(e)=>{
        const data=e.target.value;
        settext(data);
        //console.log(data);

    }
    const emaildata=(e)=>{
        const data=e.target.value;
        setemail(data);
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
        const data=e.target.value;
        setfile(data);
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
                                        <input type="number"class="form-control"onChange={phonedata}  id="formGroupExampleInput2" placeholder="Enter Phone Number"/>
                                    </div>
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">Age</label>
                                        <input type="text" class="form-control"onChange={agedata} id="formGroupExampleInput2" placeholder="Provide Age"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                        <div className="mb-3 select-img formbox">                

                                            <label for="formFile" class="form-label">Select Image</label>
                                            <input class="form-control"onChange={filedata}type="file"  id="formFile"/>
                                        </div>
                                        <div class="mb-3 formbox">
                                            <label for="formGroupExampleInput2" class="form-label">Contact Number</label>
                                            <input type="number"onChange={numberdata} class="form-control" id="formGroupExampleInput2" placeholder="EnterContact Number"/>
                                        </div>
                                    <div class="mb-3 formbox">
                                        <label for="formGroupExampleInput2" class="form-label">Address</label>
                                        <input type="text" class="form-control"onChange={addressdata} id="formGroupExampleInput2" placeholder="Full Address"/>
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
