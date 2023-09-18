import React from 'react'
import { Link } from 'react-router-dom'
export default function ChangePassword() {
  return (
    <>
        
        <form >
            <div className="inputBox">
                <p>Please Enter New Password</p>
            </div>
            <div class="input-container">
                <i class="fa-solid fa-lock icon"></i>
                <input class="input-field" type="password" placeholder="New Password" name="password" required />
            </div>
            <div class="input-container">
                <i class="fa-solid fa-key icon"></i>
                <input class="input-field" type="password" placeholder="Confirm Password" name="confirm_password" required />
            </div>
            <div className="inputBox">
                <input type="submit" value="Change" className="submit-btn" />
            </div>

        </form>
    </>
  )
}
