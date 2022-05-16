import React, { useState } from 'react'
import bootstrap from 'bootstrap'

export default function Login() {

    const handleSubmit = (event) => {
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
                    localStorage.setItem('token', data.token)
                } else {
                    alert(data.message)
                }

            })
    }

    return (
        <div class="container ">

            <div className='row  d-flex justify-content-center align-items-center' style={{ height: "100vh" }} >

                <div className='col-8 ' >
                    <form onSubmit={handleSubmit}>
                        <div class="row margin-40">
                            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Username</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-lg" name="username" id="colFormLabelLg" placeholder="Enter Username" required />
                            </div>
                        </div>

                        <div class="row margin-40">
                            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control form-control-lg" name="password" id="colFormLabelLg" placeholder="Enter Password" required />
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
