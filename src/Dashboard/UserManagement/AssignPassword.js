import { useContext, useEffect } from 'react';
//import React{useContext} from 'react'
import {Contextdata } from './Context';
export default function AssignPassword() {
    const{confirmpassword,setconfirmpassword,password,setpassword}=useContext(Contextdata);
    const createpassworddata=(e)=>{
        const data=e.target.value;
        setpassword(data);

    }
    const confirmpassworddata=(e)=>{
        const data=e.target.value;
        setconfirmpassword(data);

    }
    // useEffect(()=>{
    //     if(password!==confirmpassword)
    //     {
    //         alert("password does not match");
    //     }
    //     else
    //     {
    //         alert("password match");
    //     }
    
    // },[password,confirmpassword]);
  return (
    <>
        
                       
        <form>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div class="mb-3 formbox">
                        <label for="formGroupExampleInput" class="form-label">Create Password</label>
                        <input type="password"defaultValue={password}onChange={createpassworddata} class="form-control" id="formGroupExampleInput" placeholder="Enter Password"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="mb-3 formbox">
                        <label for="formGroupExampleInput2" class="form-label">Confirm Password</label>
                        <input type="password"defaultValue={confirmpassword}onChange={confirmpassworddata} class="form-control" id="formGroupExampleInput2" placeholder="Confirm Password"/>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}
