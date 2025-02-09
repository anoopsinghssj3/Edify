import React from 'react'
import Sign_In_As from '../../Context/Sign_In_As/Sign_In_As'
import Sign_in from '../../Context/Sign_in/Sign_in'
import Register_As_Admin from '../../Context/Register_As_Admin/Register_As_Admin'

function HomeContainer() {
    return (
        <div className="home-container">
            {/* <Sign_In_As /> */}
            {/* <Sign_in /> */}
            <Register_As_Admin />

        </div>
    )
}

export default HomeContainer