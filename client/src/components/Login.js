import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';


class Login extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.elements.username.value)
        console.log(event.target.elements.password.value)
        const article = {
            username: event.target.elements.username.value,
            password: event.target.elements.password.value
        };
        fetch('http://localhost:7000/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        })
    }
    render() {
        return (
            <div class=" login text-center ">
                <Navbar></Navbar>
                <h3 class="text-capitalize text-center mb-5">Login</h3>
                <form onSubmit={
                    this.handleSubmit
                }>
                    <div class="form-group mb-4">
                        <div class="d-flex justify-content-center align-items-center">
                            <input class="form-control w-50" type="text" name="username" placeholder='Username'
                                ref={
                                    node => (this.inputNode = node)
                                }/>
                        </div>
                    </div>
                    <div class="form-group mb-4">
                        <div class="d-flex justify-content-center align-items-center">
                            <input class="form-control w-50" type="password" placeholder='password' name="password"
                                ref={
                                    node => (this.inputNode = node)
                                }/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-danger w-50">Submit</button>
                    <li>
                        <Link to='/Register'>
                            <span className='header__optionLineTwo'>
                                Register
                            </span>
                        </Link>
                    </li>

                </form>
            </div>
        )
    }
}
export default Login;
