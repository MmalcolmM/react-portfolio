import React, { useState } from "react";
import '../assets/css/style.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = '';
        if (!value) {
            error = `${name} is required`;
        } else if (name === 'email' && !validateEmail(value)) {
            error = 'Invalid email address';
        }
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};
        Object.keys(form).forEach((key) => {
            if (!form[key]) {
                validationErrors[key] = `${key} is required`;
            } else if (key === 'email' && !validateEmail(form[key])) {
                validationErrors[key] = 'Invalid email address';
            }
        });
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Submit the form
            console.log('Form submitted:', form);
        }
    };

    return (
        <div id="contact" className="form-container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
            <section>
                <a href="https://www.linkedin.com/in/mmalcolmm/?trk=public-profile-join-page"></a>
            </section>
        </div>
    );
};

export default Contact;
