import React from 'react';
import { useFormik } from 'formik';

const YoutubeForm = () => {

    const initialValues =  {
        name: '',
        email: '',
        channel: '',
    }

    // Getting the input values of Form
    const onSubmit =  values => {
        console.log('Fomik Data', values)
    }
    
    //Building Validaiton for our form
    const validate = values =>{

        let errors = {}

        if(!values.name){
            errors.name = "Name is Required...!"
        }
        
        if(!values.email){
            errors.email = "Email is Required...!"
        } else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.email)){
            errors.email = "Invalid Email Formtatt...!!!"
        }
        
        if(!values.channel){
            errors.channel = "Channel is Required ... !!"
        }
        return errors;
    }


    // The useFormic hook which accept an object with properties for getting state, handle submit, & validation as:
    const formik = useFormik({
        initialValues : initialValues,
        onSubmit : onSubmit,
        validate : validate,
    })


    console.log('Form Errors' + formik.errors);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                <label htmlFor="name">Name</label>
                {formik.errors.name ? <div className='error'>{formik.errors.name}</div>: null}  
                <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />
                </div>

                <div className="form-control">
                <label htmlFor="email">E-mail</label>
                {formik.errors.email ? <div className='error'>{formik.errors.email}</div>: null}  
                <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
                </div>

                <div className="form-control">
                <label htmlFor="channel">Channel</label>
                {formik.errors.channel ? <div className='error'>{formik.errors.channel}</div>: null}  
                <input type="text" name="channel" id="channel" onChange={formik.handleChange} value={formik.values.channel} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default YoutubeForm;