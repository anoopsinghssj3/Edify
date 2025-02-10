import React from 'react'
import SignInAs from '../../Context/SignInAs/SignInAs'
import SignIn from '../../Context/SignIn/SignIn'
import Register_As_Admin from '../../Context/Register_As_Admin/Register_As_Admin'

function HomeContainer() {
    return (
        <div className="home-container">
            {/* <SignInAs /> */}
            <SignIn />
            {/* <Register_As_Admin /> */}

        </div>
    )
}

export default HomeContainer