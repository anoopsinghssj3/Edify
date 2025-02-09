import React from 'react'
import  '../../App.css'

function Sign_In_As() {
    return (
        <div className='sign-in-as'>
            <div className='title' >Sign In As</div>

            <div className="main-container">
                <div className="container container-1">
                    <button >
                        <img src="./src/Component/Images/student_sign_in_i.png" alt="" />
                        <span>Student</span>
                    </button>
                </div>

                <div className="container container-2">
                    <button>
                        <img src="./src/Component/Images/teacher_sign_in_i.png" alt="" />
                        <span>Teacher</span>
                    </button>
                </div>

                <div className="container container-3">
                    <button>
                        <img src="./src/Component/Images/admin_sign_in_i.png" alt="" />
                        <span>Admin</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Sign_In_As