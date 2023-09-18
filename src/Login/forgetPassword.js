import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgetPassword() {
  return (
    <>
        <form>
            <div className="inputBox">
                <p>Please enter registered mail !</p>
            </div>
            <div class="input-container">
            <i class="fa-sharp fa-solid fa-envelope-open icon"></i>
                <input class="input-field" type="email" placeholder="Email" name="email" required />
            </div>
            
            <div className="inputBox">
                <input type="submit" value="Get Code" className="submit-btn" />
            </div>

        </form>
    </>
  )
}
