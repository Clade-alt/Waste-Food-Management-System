import React, { useState } from 'react'

const FoodDS = () => {


    const [donation, setDonation] = useState({
        fooddetails: "",
        price: "",
        location: "",
        contact: ""
    });

    // Handle Inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setDonation({ ...donation, [name]: value });
    }

    // Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Objecet Destructuring
        // Store Object data into variables
        const { fooddetails, price, location, contact } = donation;
        try {
            const res = await fetch('/donations', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fooddetails, price, location, contact
                })
            })

            console.log(res.status)
            if (res.status === 400 || !res) {
                window.alert("Donation Request Not Sent. Try Again")
            } else {
                window.alert("Donation Request Sent");
                setDonation({
                    fooddetails: "",
                    price: "",
                    location: "",
                    contact: ""
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <section id="foodds">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4">Food Donating <b>or</b> Selling</h1>
                            <h3 className="fs-5 text-center mb-0">Co-operate with us to make a better future</h3>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6">
                            <img src="/assets/foodds.png" alt="FoodDS" className="w-100" />
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <div class="mb-3">
                                        <label for="fooddetails" class="form-label">Food Details</label>
                                        <input type="text" class="form-control" id="fooddetails" name="fooddetails" placeholder='Type of Food, Quality' value={donation.fooddetails} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <div class="mb-3">
                                            <label for="price" class="form-label">Estimated Price</label>
                                            <input type="text" class="form-control" id="price" name="price" value={donation.price} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div class="mb-3">
                                            <label for="location" class="form-label">Location For Pick up</label>
                                            <input type="text" class="form-control" id="location" name="location" value={donation.location} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div class="mb-3">
                                            <label for="contact" class="form-label">Contact Number</label>
                                            <input type="text" class="form-control" id="contact" name="contact" value={donation.contact} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-warning rounded-pill px-4">Send Request <i className="fa fa-paper-plane ms-2"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FoodDS;