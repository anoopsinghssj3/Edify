import React from 'react'

function Register_As_Admin() {
    return (
        <div className="register-as-admin">

            <div className="title">Register As Admin</div>

            <label className='name-l' htmlFor="name">Name</label>
            <input className='name-i' type="text" placeholder='enter username' />

        </div>
    )
}

export default Register_As_Admin