import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from '../core/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'   //* dynamically change the button text
    });


    const {name, email, password, buttonText} = values; //* Desctructuring the button text


    const signupForm = () => (
        <form>
            <div className="form-group">
                <lable className="text-muted">Name</lable>
                <input onChange={handleChange('name')}  type="text" className="form-control"/>
            </div>
          
            <div className="form-group">
                <lable className="text-muted">Email</lable>
                <input onChange={handleChange('email')}  type="email" className="form-control"/>
            </div>
          
            <div className="form-group">
                <lable className="text-muted">Password</lable>
                <input onChange={handleChange('password')}  type="password" className="form-control"/>
            </div>
            
            <div>
                <button className="btn btn-primary" onClick={(e) => clickSubmit(e)}>{buttonText}</button>
            </div>
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
                setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
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