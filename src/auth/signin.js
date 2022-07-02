import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../core/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const { email, password, buttonText } = values;
    let history = useHistory();

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });

        setTimeout(() => {
            toast.success(`Hey, Welcome back!`);
            setValues({ buttonText: 'Submited' });
            pushToDashboard();
        }, 1000);
    };

    const pushToDashboard = () => {
        setTimeout(() => {
            history.push("/signup");
        }, 1000);
    }

    const signinForm = () => (
        <form>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
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
            value={password}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
              <button  type="submit" className="btn btn-primary" onClick={clickSubmit}>
                 {buttonText}
             </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                <h1 className="p-5 text-center">Signin</h1>
                {signinForm()}
            </div>
        </Layout>
    );
};

export default Signin;