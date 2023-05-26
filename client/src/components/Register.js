import React from 'react'
import Navbar from './Navbar';

class Register extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault()
      console.log(event.target.elements.username.value)
      console.log(event.target.elements.email.value)
      console.log(event.target.elements.address.value)
      console.log(event.target.elements.password.value)
      const article = { username: event.target.elements.username.value,
                        email: event.target.elements.email.value,
                        password: event.target.elements.password.value};
    //   axios.post('localhost:9000/api/auth/register', article);
    fetch('http://localhost:7000/api/auth/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(article)
      })
//       then((result) => result.json())
// .then((info) => { console.log(info); })
    }
    render() {
      return (
        <div class=" login text-center ">
            <Navbar></Navbar>
        <h3 class="text-capitalize text-center mb-5">Register</h3>          
        <form onSubmit={this.handleSubmit}>
            <div class="form-group mb-4">
                    <div class="d-flex justify-content-center align-items-center">
                            <input
                            class="form-control w-50"
                            type="text"
                            name="username"
                            placeholder='Username'
                            ref={node => (this.inputNode = node)}
                            />
                    </div>
            </div>
            <div class="form-group mb-4">
                    <div class="d-flex justify-content-center align-items-center">
                    <input
                            class="form-control w-50"
                            type="text"
                            name="email"
                            placeholder='E-mail'
                            ref={node => (this.inputNode = node)}
                            />
                    </div>
            </div>
            {/* <div class="form-group mb-4">
                    <div class="d-flex justify-content-center align-items-center">
                        <input
                            class="form-control w-50"
                            type="text"
                            name="address"
                            placeholder='Adress'
                            ref={node => (this.inputNode = node)}
                            />
                    </div>
            </div> */}
            <div class="form-group mb-4">
                    <div class="d-flex justify-content-center align-items-center">
                            <input
                            class="form-control w-50"
                            type="password"
                            placeholder='password'
                            name="password"
                            ref={node => (this.inputNode = node)}
                            />
                    </div>
            </div>
                                 <button type="submit" class="btn btn-danger w-50">Submit</button>
        </form>
        </div>
      )
    }
}
  export default Register;