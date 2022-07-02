import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
// import jwt from 'jsonwebtoken';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const Activate = ({match}) => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        show: true
    })

    useEffect(() => {
        console.log(`checking useEffect`);
    }, [])

    const { name, token, show } = values;

    const clickSubmit = event => {
        //
    }

    const activationLink = () => (
        <div className="text-center">
            <h1 className="p-5">Hey {name}, Ready to activate your account?</h1>
            <button className="btn btn-outline-primary" onClick={(e) => clickSubmit(e)}>
                Activate Account
            </button>
        </div>
    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                {activationLink()}
            </div>
        </Layout>
    );
}

export default Activate