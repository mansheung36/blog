import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { IsloggedInContext } from './IsloggedInContext';

export default function Login() {

    const { isLoggedIn, setIsLoggedIn } = useContext(IsloggedInContext)

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/", { replace: true });
        }
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://student-json-api.lidemy.me/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                username: event.target.username.value,
                password: event.target.password.value
            })
        })
            .then(res => res.json())
            .then(data => {

                if (data.ok) {
                    localStorage.setItem('token', data.token);
                    setIsLoggedIn(true)
                    navigate("/", { replace: true });
                } else {
                    alert(data.message)
                }

            })
    }

    return (
        <div className="container">

            <div className='row  d-flex justify-content-center align-items-center' style={{ height: "100vh" }} >

                <div className='col-8 ' >
                    <form onSubmit={handleSubmit}>
                        <div className="row margin-40">
                            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control form-control-lg" name="username" id="colFormLabelLg" placeholder="Enter Username" required />
                            </div>
                        </div>

                        <div className="row margin-40">
                            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control form-control-lg" name="password" id="colFormLabelLg" placeholder="Enter Password" required />
                            </div>
                        </div>

                        <div className='row margin-40'>
                            <div className='col d-flex justify-content-center'>


                                <button type="submit" >Login</button>


                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
