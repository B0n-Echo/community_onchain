import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Layout from '../core/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'Sign-Up'   //* dynamically change the button text
    });


    const {name, email, password, buttonText} = values; //* Desctructuring the button text
    let history = useHistory();

    const signupForm = () => (
        <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={handleChange('name')}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange('email')}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange('password')}
          />
        </div>
        <div className="d-grid">
        <button className="btn btn-primary" onClick={(e) => clickSubmit(e)}>{buttonText}</button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/signin">sign in?</a>
        </p>
      </form>
    );

    const handleChange = (name) => (event) => {
        setValues({...values, [name]: event.target.value});
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues({...values, buttonText: 'Submitting'});

        toast(`Hey ${name} you have been signed Up, Please sign in`,  {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

            setTimeout(() => {
                pushToSignin();
                setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
            }, 1000);
    }

    const pushToSignin = () => {
        setTimeout(() => {
            history.push("/signin");
        }, 1000);
    }

   return ( 
    <Layout>
    <div className="col-md-6 offset-md-3">
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <h1 className="p-5 text-center">Signup</h1>
        {signupForm()}
    </div>
</Layout>
    )
}

export default Signup;