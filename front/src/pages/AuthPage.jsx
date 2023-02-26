import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import top from '../assets/top.png'
import bottom from '../assets/bottom.png'


const LoginPage = () => {
    return (
        <div className="z-0 w-full bg-darkBg">
            <div className="relative container z-10 mx-auto px-4">
                <div className="relative z-10 flex justify-center items-center h-screen">
                    <Formik
                        initialValues={ { email: '', password: '' } }
                        validationSchema={ Yup.object({
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
                                <div className="flex items-center justify-between">
                                    <Link className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-blue-red-800" to="/register">
                                        Register
                                    </Link>
                                    <button
                                        className="bg-hblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                        disabled={ isSubmitting }
                                    >
                                        Sign In
                                    </button>

                                </div>
                            </Form>
                        ) }
                    </Formik>
                </div>
                <img src={ bottom } alt="bottom" className="bottom absolute bottom-0 mx-auto w-2/3 z-0" />

            </div>
            <img src={ top } alt="top" className="top absolute top-0 right-0  h-screen z-0" />

        </div>

    );
};

export default LoginPage;
