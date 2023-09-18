import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function VerificationCode() {


  const [countdown, setCountdown] = useState(120);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
        <form>
            <div className="inputBox">
                <p>Please check your mail for verification code !!</p>
            </div>
            <div class="d-flex mb-3 inputBox">
                <input type="tel" maxlength="1" pattern="[0-9]" class="form-control" placeholder='#'/>
                <input type="tel" maxlength="1" pattern="[0-9]" class="form-control"/>
                <input type="tel" maxlength="1" pattern="[0-9]" class="form-control"/>
                <input type="tel" maxlength="1" pattern="[0-9]" class="form-control"/>
            </div>
            <div className="inputBox">
              <p>OTP Countdown: {formatTime(countdown)}</p>
                {countdown === 0 && <p>OTP Expired!</p>}
            </div>
            <div className="inputBox">
                <p>Didn't receive code?<Link to='' className='resend'>Resend</Link></p>
            </div>
            <div className="inputBox">
                <input type="submit" value="Verify" className="submit-btn" />
            </div>

        </form>
    </>
  )
}
