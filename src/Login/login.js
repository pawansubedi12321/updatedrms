import React, { useState } from 'react'
import ForgetPassword from './forgetPassword';
import LoginContent from './LoginContent';
import VerificationCode from './VerificationCode';
import ChangePassword from './ChangePassword';
import { Link } from 'react-router-dom';


export default function Login() {

    const [data, setData]= useState({
        phone:'',
        password:'',
    });

    const [page, setPAge]= useState(0);
    const PageDisplay =() =>{
        if(page==0){
            return <LoginContent/>
        }
        else if(page === 1){
            return <ForgetPassword/>
        }else if(page === 2){
            return<VerificationCode/>
        }else{
           return <ChangePassword/>
        }
      }
        const FormTitle =["Super Admin Login","Forget Password","Verification Code","Change Password"];

    const formSubmit = (event) =>{
        event.preventDefault();
        alert('Your Form Is Submitted Successfully!!!')
    }
    
    return (
        <>
        <section className="container-fluid bg">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="login">
                            <h2>
                                <Link to="/" className='text-white mr-5' style={{display:page==0 ? "none" : "initial"}}><i class="fa-solid fa-angle-left"></i></Link>
                                {FormTitle[page]}
                            </h2>
                            {
                                PageDisplay()
                            }
                        </div>
                        
                    </div>
                </div>

            </section>
            </>
    )
    }
