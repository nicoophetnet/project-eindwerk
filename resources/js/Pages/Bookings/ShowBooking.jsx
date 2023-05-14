import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const ShowBooking = ({ booking }) => {
    const { flight, passengers } = booking;

    return (
        <div className="booking show">
            <h1>Booking #{booking.id}</h1>
            <div>
                <h2>Flight Information</h2>
                <p>Flight ID: {flight.id}</p>
                <p>Departure Airport: {flight.departure_location}</p>
                <p>Arrival Airport: {flight.arrival_location}</p>
                <p>Departure Time: {flight.depature_hour}</p>
                <p>Arrival Time: {flight.arrival_hour}</p>
            </div>

            <div>
                <h2>Passenger Information</h2>
                {passengers.map((passenger, index) => (
                    <div key={index}>
                        <h3>Passenger {index + 1}</h3>
                        <p>
                            Name: {passenger.first_name} {passenger.last_name}
                        </p>
                        <p>Phone Number: {passenger.phone_number}</p>
                        <p>Email: {passenger.email}</p>
                    </div>
                ))}
            </div>

            <div>
                <InertiaLink href="/">
                    <button className="btn-book">Back to Home</button>
                </InertiaLink>{" "}
                <InertiaLink href="/your-bookings">
                    <button className="btn-book">Your bookings</button>
                </InertiaLink>
            </div>
        </div>
    );
};

export default ShowBooking;
