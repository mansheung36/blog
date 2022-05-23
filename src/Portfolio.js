import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import { IsloggedInContext } from './IsloggedInContext';
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {

    const { isLoggedIn } = useContext(IsloggedInContext)

    const navigate = useNavigate();

    const [portfolioData, setPortfolioData] = useState({
        id: null,
        username: null,
        nickname: null
    })

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login", { replace: true });
        }

        fetch('https://student-json-api.lidemy.me/me', {
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.ok) {
                    let userInfo = {
                        id: data.data.id,
                        username: data.data.username,
                        nickname: data.data.nickname
                    }
                    setPortfolioData(userInfo)
                } else {
                    alert(data.message)
                }

            })
    }, [])

    return (
        <div>
            <div className="container ">

                <div className='row  d-flex justify-content-center align-items-center' style={{ height: "100vh" }} >

                    <div className='col-8  ' >

                        <div className="row margin-40">
                            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">ID</label>
                            <div className="col-sm-10">
                                <input type="text" className="col-sm-12 col-form-label col-form-label-lg" value={portfolioData.id} disabled={true}></input>
                            </div>
                        </div>

                        <div className="row margin-40">
                            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Username</label>
                            <div className="col-sm-10">
                            <input type="text" className="col-sm-12 col-form-label col-form-label-lg" value={portfolioData.username} disabled={true}></input>
                            </div>
                        </div>

                        <div className="row margin-40">
                            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Nickname</label>
                            <div className="col-sm-10">
                            <input type="text" className="col-sm-12 col-form-label col-form-label-lg" value={portfolioData.nickname} disabled={true}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
