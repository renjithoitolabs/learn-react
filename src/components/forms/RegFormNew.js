import React from "react";
import './formStyle.scss';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TextError from "../textError/TextError";

const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: {
        facebook: "",
        twitter: ""
    },
    phoneNumbers: ["", ""],
    phNumbers: ['']
}
const onSubmit = (formData) => {
    console.log('Submit Data', formData);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required!'),
    email: Yup.string().email('Invalid email is not allowed!').required('Email is Required!'),
    channel: Yup.string().required('Channel is Required!'),
    comments: Yup.string().required('Add alteast 1 comment'),
    address: Yup.string().required('Address is Required!')
})

const RegFormNew = () => {

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        // validateOnChange={false}
        // validateOnBlur={false}
        >
            <Form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <Field type="text" className="form-control" id="name" name="name" />
                    <ErrorMessage name="name" component={TextError} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <Field type="email" className="form-control" id="email" name="email" />
                    <ErrorMessage name="email">
                        {(errorMsg) => <div className="text-danger">{errorMsg}</div>}
                    </ErrorMessage>
                </div>
                <div className="mb-3">
                    <label htmlFor="channel" className="form-label">Channel</label>
                    <Field type="text" className="form-control" id="channel" name="channel" />
                    <ErrorMessage name="channel" component={TextError} />
                </div>
                <div className="mb-3">
                    <label htmlFor="comments" className="form-label">Comments</label>
                    <Field as='textarea' className="form-control" id="comments" name="comments" />
                    <ErrorMessage name="comments" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <FastField name="address">
                        {(props) => {
                            console.log('Fast Render');
                            const { field, form, meta } = props;
                            return (
                                <div>
                                    <input type="text" className="form-control" id="address" {...field} />
                                    {meta.touched && meta.error && <div className="text-danger">{meta.error}</div>}
                                </div>
                            );

                        }}
                    </FastField>
                </div>
                <div className="mb-3">
                    <label htmlFor="facebook" className="form-label">Facebook Profile</label>
                    <Field type="text" className="form-control" id="facebook" name='social.facebook' />
                    <ErrorMessage name="facebook" />
                </div>
                <div className="mb-3">
                    <label htmlFor="twitter" className="form-label">Twitter Profile</label>
                    <Field type="text" className="form-control" id="twitter" name='social.twitter' />
                    <ErrorMessage name="twitter" />
                </div>
                <div className="mb-3">
                    <label htmlFor="primaryPh" className="form-label">Primary Phone Number</label>
                    <Field type="text" className="form-control" id="primaryPh" name='phoneNumbers[0]' />
                    <ErrorMessage name="primaryPh" />
                </div>
                <div className="mb-3">
                    <label htmlFor="secondaryPh" className="form-label">Secondary Phone Number</label>
                    <Field type="text" className="form-control" id="secondaryPh" name='phoneNumbers[1]' />
                    <ErrorMessage name="secondaryPh" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phNumbers" className="form-label">Add/Delete Phone Numbers</label>
                    <FieldArray name="phNumbers">
                        {(fieldArrayProps) => {
                            const { form, push, remove } = fieldArrayProps;
                            const { values } = form;
                            const { phNumbers } = values;

                            return (
                                <div>
                                    {phNumbers.map((phNumber, index) => {
                                        return (
                                            <div className="d-flex mb-2" key={index}>
                                                <Field className="form-control" name={`phNumbers[${index}]`} />
                                                {index > 0 && <button onClick={() => remove(index)} type="button" className="btn btn-outline-danger ms-1">-</button>}
                                                <button onClick={() => push('')} type="button" className="btn btn-outline-success ms-1">+</button>
                                            </div>
                                        );

                                    })}
                                </div>);
                        }}
                    </FieldArray>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </Formik>
    );
}

export default RegFormNew;