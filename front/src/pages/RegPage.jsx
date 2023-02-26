import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import top from '../assets/top.png'
import bottom from '../assets/bottom.png'

const RegisterPage = () => {
    return (
        <div className=" w-full bg-darkBg">
            <div className="relative z-10 container mx-auto px-4">
                <div className=" relative z-10 flex justify-center items-center h-screen">
                    <Formik
                        initialValues={ { username: '', email: '', password: '' } }
                        validationSchema={ Yup.object({
                            username: Yup.string()
                                .min(3, 'Username must be at least 3 characters')
                                .max(15, 'Username must be 15 characters or less')
                                .required('Required'),
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),
                            password: Yup.string()
                                .min(8, 'Password must be at least 8 characters')
                                .required('Required'),
                        }) }
                        onSubmit={ (values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        } }
                    >
                        { ({ isSubmitting }) => (
                            <Form className="bg-lightBg shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full lg:w-1/2">
                                <div className="mb-4">
                                    <label
                                        className="block text-white text-sm font-bold mb-2"
                                        htmlFor="username"
                                    >
                                        Username
                                    </label>
                                    <Field
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        name="username"
                                        placeholder="Enter your username"
                                        style={ { backgroundColor: '#FFFFFF' } }

                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="username"
                                        className="text-red-500 text-xs italic"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-white text-sm font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <Field
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        style={ { backgroundColor: '#FFFFFF' } }
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        className="text-red-500 text-xs italic"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="block text-white text-sm font-bold mb-2"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <Field
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        style={ { backgroundColor: '#FFFFFF' } }
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="text-red-500 text-xs italic"
                                    />
                                </div>
                                <div className="flex items-center justify-between xm-4">
                                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/login">
                                        Log In
                                    </Link>
                                    <button
                                        className="bg-hred hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                        disabled={ isSubmitting }
                                    >
                                        Register
                                    </button>
                                </div>
                            </Form>
                        ) }
                    </Formik>
                </div>
                <img src={ bottom } alt="bottom" className="bottom absolute bottom-0 mx-auto w-2/3 z-0" />

            </div >

            <img src={ top } alt="top" className="top absolute top-0 right-0  h-screen z-0" />


        </div >

    );
};

export default RegisterPage;
