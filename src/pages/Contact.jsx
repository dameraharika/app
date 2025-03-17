import { useState } from "react";
import axios from "axios";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/contact", form);
            setStatus(res.data.message);
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setStatus("Error sending message.");
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded">
            <h2 className="text-2xl font-bold mb-5 text-center">Contact Me</h2>
            {status && <p className="text-green-600">{status}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" name="name" value={form.name} onChange={handleChange} 
                    placeholder="Your Name" required className="w-full p-2 border rounded"
                />
                <input 
                    type="email" name="email" value={form.email} onChange={handleChange} 
                    placeholder="Your Email" required className="w-full p-2 border rounded"
                />
                <textarea 
                    name="message" value={form.message} onChange={handleChange} 
                    placeholder="Your Message" required className="w-full p-2 border rounded"
                />
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
