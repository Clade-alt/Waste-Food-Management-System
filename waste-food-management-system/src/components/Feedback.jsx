import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Feedback() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchMessages() {
            try {
                const response = await axios.get('/api/messages');
                setMessages(response.data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchMessages();
    }, []);

    return (
        <div className='container my-5 py-4'>
            <div className="row">
                <div className="col-md-5">
                </div>
                <div className="col-12">
                    <h1 className="display-6 text-center mb-4">User Feedback</h1>
                    <hr className="w-25 mx-auto" />
                </div>
            </div>
            <ul>
                <div class="card p-3">
                    <div class="card-body text-center">
                        <p class="card-text lead">
                            {messages.map(message => (
                                <li key={message._id}>
                                    <p><b>Name:</b> {message.name}</p>
                                    <p><b>Email:</b> {message.email}</p>
                                    <p><b>Message:</b> {message.message}</p>
                                    &nbsp;
                                </li>
                            ))}</p>
                    </div>
                </div>

            </ul>
        </div>
    );
}

export default Feedback;