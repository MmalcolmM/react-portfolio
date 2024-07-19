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

    return (
        <div id="contact">
            <h2>Contact Me</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && <p>{errors.name}</p>}
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
                    {errors.email && <p>{errors.mail}</p>}
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></textarea>
                    {errors.message && <p>{errors.message}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
            <section>
                <a href="mailto:Malcolm.franklin.m@gmail.com">Email </a>
                <a href="https://github.com/MmalcolmM">GitHub</a>
                <a href="https://www.linkedin.com/in/mmalcolmm/?trk=public-profile-join-page"></a>
            </section>
        </div>
    );
};

export default Contact;