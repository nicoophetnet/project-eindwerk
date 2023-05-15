import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { usePage, useForm, router } from "@inertiajs/react";

const ShowBooking = ({ booking }) => {
    const { flight, passengers } = booking;
    const { auth } = usePage().props;
    const { delete: destroy } = useForm();

    const submit = (e, booking_id) => {
        e.preventDefault();
        const user_id = auth.user.id;
        // console.log(user_id);
        router.delete(
            `/users/${user_id}/bookings/${booking_id}`,
            user_id,
            booking_id
        );
        location.reload();
    };

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
                <form onSubmit={(e) => submit(e, booking.id)}>
                    {" "}
                    <button type="submit" className="btn-book">
                        Cancel this flight
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ShowBooking;
