import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Register() {

    const navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            navigate("/", { replace: true });
        }

    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://student-json-api.lidemy.me/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                nickname: event.target.nickname.value,
                username: event.target.username.value,
                password: event.target.password.value
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    localStorage.setItem('token', data.token);
                    alert('ok');
                    navigate("/", { replace: true });
                } else {
                    alert(data.message)
                }

            })
    }

    return (
        <div className="container ">

            <div className='row  d-flex justify-content-center align-items-center' style={{ height: "100vh" }} >

                <div className='col-8 ' >
                    <form onSubmit={handleSubmit}>

                        <div className="row margin-40">
                            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Nickname</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control form-control-lg" name="nickname" id="colFormLabelLg-nickname" placeholder="Enter Nickname" required />
                            </div>
                        </div>

                        <div className="row margin-40">
                            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control form-control-lg" name="username" id="colFormLabelLg-username" placeholder="Enter Username" required />
                            </div>
                        </div>

                        <div className="row margin-40">
                            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control form-control-lg" name="password" id="colFormLabelLg-password" placeholder="Enter Password" required />
                            </div>
                        </div>

                        <div className='row margin-40'>
                            <div className='col d-flex justify-content-center'>
                                <button type="submit" >Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}