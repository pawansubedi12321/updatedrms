import React from 'react'

export default function LoginContent() {
    const formSubmit = (event) =>{
        event.preventDefault();
        alert('Your Form Is Submitted Successfully!!!')
    }
  return (
    <>
        
            <form onSubmit={formSubmit}>
                <div class="input-container">
                    <i class="fa-solid fa-user icon"></i>
                    <input class="input-field" type="text" placeholder="Username" name="name" required />
                </div>
                <div class="input-container">
                    <i class="fa-solid fa-key icon"></i>
                    <input class="input-field" type="password" placeholder="Password" name="email" required />
                </div>
                <div className="inputBox">
                    <a to="#" className="forget">Forget Password ?</a>
                </div>
                <div className="inputBox">
                    <input type="submit" value="Login" className="submit-btn" />
                </div>

            </form>
    </>
  )
}
