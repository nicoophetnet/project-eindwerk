import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const ShowBooking = ({ booking }) => {
    const { flight, passengers } = booking;

    return (
        <div>
            <h1>Booking #{booking.id}</h1>

            <h2>Flight Information</h2>
            <p>Flight ID: {flight.id}</p>
            <p>Departure Airport: {flight.departure_airport}</p>
            <p>Arrival Airport: {flight.arrival_airport}</p>
            <p>Departure Time: {flight.departure_time}</p>
            <p>Arrival Time: {flight.arrival_time}</p>

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

            <p>
                <InertiaLink href="/">Back to Home</InertiaLink>
            </p>
        </div>
    );
};

export default ShowBooking;
