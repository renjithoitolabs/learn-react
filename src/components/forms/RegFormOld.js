import React from "react";
import './formStyle.scss';
import { useFormik } from 'formik';

const initialValues = {
    name: "Yash",
    email: "yash@renjith.com",
    channel: "rider"
}
const onSubmit = (formData) => {
    console.log('Submit Data', formData);
}
const validate = (values) => {
    let errors = {}

    if (!values.name) {
        errors.name = 'Name is Required'
    }
    if (!values.email) {
        errors.email = 'Email is Required'
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
        errors.email = 'Invalid email is not allowed'
    }
    if (!values.channel) {
        errors.channel = 'Channel is Required'
    }

    return errors;
}

const RegFormOld = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });
    console.log('Formik Errors', formik.errors);
    console.log('Formik touched', formik.touched);
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                {formik.touched.name && formik.errors.name && <div className="form-text text-danger">{formik.errors.name}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.email && <div className="form-text text-danger">{formik.errors.email}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="channel" className="form-label">Channel</label>
                <input type="text" className="form-control" id="channel" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel} />
                {formik.touched.channel && formik.errors.channel && <div className="form-text text-danger">{formik.errors.channel}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default RegFormOld;