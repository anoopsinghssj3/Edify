import React from 'react'

function Register_As_Admin() {
    return (
        <div className="register-as-admin">

            <div className="title">Register As Admin</div>

            <label className='name-l' htmlFor="name">Name</label>
            <input className='name-i' type="text" placeholder='enter name' />


            <label className='user-l' htmlFor="name">Username</label>
            <input className='user-i' type="text" placeholder='enter username' />

            <label className='pass-l' htmlFor="name">Password</label>
            <input className='pass-i' type="text" placeholder='enter password' />

            {/* loop of toggle between visibility for password */}
            <img className="visibility" src="./src/Component/Images/visibility_pass.png" alt="" />
            {/* <img className="visibility" src="./src/Component/Images/visibility_off.png" alt="" /> */}

            <label className='sec-code-l' htmlFor="name">Security Code</label>
            <input className='sec-code-i' type="text" placeholder='enter security code' />


            <button className='sign-in-btn'>Sign In</button>
        </div>
    )
}

export default Register_As_Admin