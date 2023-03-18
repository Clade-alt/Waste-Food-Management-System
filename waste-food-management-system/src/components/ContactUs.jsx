import React, { useState } from 'react'

const ContactUs = () => {


    const [msg, setMsg] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Handle Inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setMsg({ ...msg, [name]: value });
    }

    // Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Objecet Destructuring
        // Store Object data into variables
        const { name, email, message } = msg;
        try {
            const res = await fetch('/message', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, message
                })
            })

            console.log(res.status)
            if (res.status === 400 || !res) {
                window.alert("Message Not Sent. Try Again")
            } else {
                window.alert("Message Sent");
                setMsg({
                    name: "",
                    email: "",
                    message: ""
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <section id="contactus">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">Clear Out Your <b>Questions</b></h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/contactus1.png" alt="ContactUs" className="w-75" />
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Your Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="John Smith" name="name" value={msg.name} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="email" placeholder="name@example.com" name="email" value={msg.email} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="message" class="form-label">Your Message</label>
                                        <textarea class="form-control" id="message" rows="5" name="message" value={msg.message} onChange={handleChange} ></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-warning rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs;