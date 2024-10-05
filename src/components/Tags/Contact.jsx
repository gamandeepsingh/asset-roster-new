import React, { useEffect, useState } from 'react'
import client from '../../../sanityClient';

const Contact = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
        tag: "",
    });
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        client.fetch(`*[_type == "assetTag"] | order(categoryTitle asc){
            categoryTitle,
        }`)
            .then((data) => {
                setData(data);
            })
            .catch(console.error);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        try {
            const response = await fetch(`${BACKEND_URL}/send-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Email sent successfully!");
                setSuccess(true);
            } else {
                console.error("Failed to send email.");
                setSuccess(false);
            }
        } catch (error) {
            console.error("Error:", error);
            setSuccess(false);
        } finally {
            setSending(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="w-screen py-10 px-6 bg-gray-100 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 font-dmSans">Contact Us for Tags</h2>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl w-full">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green focus:border-green sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green focus:border-green sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone number
                    </label>
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green focus:border-green sm:text-sm"
                    />
                </div>
                <div className="">
                    <label htmlFor="tag" className="block text-sm font-medium text-gray-700">Choose Asset Tagging by</label>
                    <select
                        name="tag"
                        id="tag"
                        value={formData.tag}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green focus:border-green sm:text-sm overflow-hidden">
                        {data.map((item, index) => (
                            <option key={index} value={item.categoryTitle} className="max-w-screen overflow-hidden">
                                {item.categoryTitle.slice(13).toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green focus:border-green sm:text-sm"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={sending}
                    className={`relative rounded-md md:text-lg text-xs border-2 font-dmSans border-white bg-green px-6 py-3 font-semibold uppercase text-light transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {sending ? "Sending..." : "Submit"}
                    {success && <p className="text-green mt-2 absolute left-0 top-0 whitespace-nowrap -translate-y-[200%]">Your message was sent successfully!</p>}
                </button>
            </form>
        </div>
    )
}

export default Contact