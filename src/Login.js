import React from 'react'
import bootstrap from 'bootstrap'

export default function Login() {
    return (
        <div class="container ">

            <div className='row  d-flex justify-content-center align-items-center' style={{ height: "100vh" }} >

                <div className='col-8 ' >
                    <form>
                        <div class="row margin-40">
                            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Username</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Enter Username" required />
                            </div>
                        </div>

                        <div class="row margin-40">
                            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Enter Password" required />
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
