import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const IndexBooking = ({ bookings }) => {
    return (
        <div>
            <h1>Your Bookings</h1>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        <InertiaLink href={`/bookings/${booking.id}`}>
                            Booking #{booking.id}
                        </InertiaLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IndexBooking;
