import React, { useState, useEffect } from "react";
import IngoingFlights from "./Flights/IngoingFlights";
import OutgoingFlights from "./Flights/OutgoingFlights";
import ShowBooking from "./Bookings/ShowBooking";
import { usePage } from "@inertiajs/react";

export default function Index() {
    const { auth } = usePage().props;
    const [loading, setLoading] = useState(false);
    const [bookings, setBookings] = useState([]);

    let incomingBooking = null;
    let outgoingBooking = null;

    if (auth.logged_in) {
        useEffect(() => {
            fetch(`/users/${auth.user.id}/bookings`)
                .then((response) => response.json())
                .then((bookingData) => setBookings(bookingData));
        }, []);
    }

    if (bookings.length) {
        incomingBooking = bookings.find(
            (booking) => booking.flight.arrival_location == "Eindhoven"
        );
        outgoingBooking = bookings.find(
            (booking) => booking.flight.departure_location == "Eindhoven"
        );
    }

    return (
        <>
            <h1>
                Book your flights for the 2024 European Senior Championships
            </h1>
            <br />

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="overview">
                    <div>
                        {incomingBooking ? (
                            <ShowBooking booking={incomingBooking} />
                        ) : (
                            <div className="flights">
                                <IngoingFlights />
                            </div>
                        )}
                    </div>
                    <div>
                        {outgoingBooking ? (
                            <ShowBooking booking={outgoingBooking} />
                        ) : (
                            <div className="flights">
                                <OutgoingFlights />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
