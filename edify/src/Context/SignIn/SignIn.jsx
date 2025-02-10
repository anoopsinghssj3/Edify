import React from 'react'
import '../../App.css'

function SignIn() {
    return (
        <div className='sign-in'>
            <div className='title' >Sign In</div>

            <div className="container">
                {<label className='user-l' htmlFor="username">Username</label>}
                <input className='user-i' type="text" placeholder='enter username' />

                <label className='pass-l' htmlFor="password">Password</label>
                <input className='pass-i' type="password" placeholder='enter password' />

                {/* loop of toggle between visibility for password */}
                <img className="visibility" src="./src/Component/Images/visibility_pass.png" alt="" />
                {/* <img className="visibility" src="./src/Component/Images/visibility_off.png" alt="" /> */}

                <button className='sign-in-btn'>Sign In</button>
            </div></div>
    )
}

export default SignIn