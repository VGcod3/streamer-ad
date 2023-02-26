import React, { useState } from 'react';


import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const CommentSchema = Yup.object().shape({
    name: Yup.string().required(),
    comment: Yup.string().min(5, "Min 5 chars").required()
});


const CommentField = () => {
    const [comments, setComments] = useState([]);

    const handleSubmit = (values, { resetForm }) => {
        setComments([...comments, values]);
        resetForm();
    };

    return (
        <div className='py-10 relative z-10 '>
            <h2 className="text-lg font-medium mb-2">Comments:</h2>
            { comments.length
                ?
                comments.slice(0).reverse().map((comment, index) => (
                    <div className="mb-4" key={ index }>
                        <h3 className="text-md font-medium">{ comment.name }</h3>
                        <p className="text-sm">{ comment.comment }</p>
                    </div>

                ))
                :
                'No comments yet' }
            <Formik
                initialValues={ { name: '', comment: '' } }
                validationSchema={ CommentSchema }
                onSubmit={ handleSubmit }
            >
                { ({ errors, touched }) => (
                    <Form className="mt-4">
                        <div className="mb-2">
                            <label htmlFor="name" className="block font-medium text-gray-100">Name:</label>
                            <Field type="text" name="name" className="mt-1 p-1 px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-hblue focus:ring focus:ring-hblue focus:ring-opacity-50" />
                            { errors.name && touched.name ? (
                                <div className="text-red-500 text-sm mt-1">{ errors.name }</div>
                            ) : null }
                        </div>
                        <div className="mb-2">
                            <label htmlFor="comment" className="block font-medium text-gray-100">Comment:</label>
                            <Field as="textarea" name="comment" rows="3" className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hblue focus:ring focus:ring-hblue focus:ring-opacity-50" />
                            { errors.comment && touched.comment ? (
                                <div className="text-red-500 text-sm mt-1">{ errors.comment }</div>
                            ) : null }
                        </div>
                        <button type="submit" className="bg-hblue hover:bg-hblue-dark text-white font-medium py-2 px-4 rounded-md">Submit</button>
                    </Form>
                ) }
            </Formik>
        </div>
    );
};
export default CommentField;