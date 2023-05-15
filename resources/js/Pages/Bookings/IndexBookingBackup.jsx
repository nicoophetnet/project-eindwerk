import React from "react";
import { usePage } from "@inertiajs/react";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";

const IndexBooking = ({ bookings }) => {
    const { auth } = usePage().props;
    const { delete: destroy } = useForm();

    const submit = (e, booking_id) => {
        e.preventDefault();
        const user_id = auth.user.id;
        console.log(user_id);
        destroy(
            `/users/${user_id}/bookings/${booking_id}`,
            user_id,
            booking_id
        );
    };

    return (
        <div>
            <h1>Your Bookings</h1>
            <div className="bookings-index">
                <div>
                    <h2>Incoming flights</h2>
                    {bookings.map((booking) => {
                        if (booking.flight.arrival_location == "Eindhoven")
                            return (
                                <div key={booking.id}>
                                    <div className="bookings">
                                        <div>
                                            <h3>Flight Information</h3>
                                            Booking:{" "}
                                            <InertiaLink
                                                href={`/users/${booking.user_id}/bookings/${booking.id}`}
                                            >
                                                #{booking.id}
                                            </InertiaLink>
                                            <p>
                                                Flight ID: {booking.flight.id}
                                            </p>
                                            <p>
                                                Departure Airport:{" "}
                                                {
                                                    booking.flight
                                                        .departure_location
                                                }
                                            </p>
                                            <p>
                                                Arrival Airport:{" "}
                                                {
                                                    booking.flight
                                                        .arrival_location
                                                }
                                            </p>
                                            <p>
                                                Departure Time:{" "}
                                                {booking.flight.depature_hour}
                                            </p>
                                            <p>
                                                Arrival Time:{" "}
                                                {booking.flight.arrival_hour}
                                            </p>
                                        </div>
                                        <div>
                                            <form
                                                onSubmit={(e) =>
                                                    submit(e, booking.id)
                                                }
                                            >
                                                {" "}
                                                <button
                                                    type="submit"
                                                    className="btn-book"
                                                >
                                                    Cancel this flight
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            );
                    })}
                </div>
                <div>
                    <h2>Outgoing flights</h2>

                    {bookings.map((booking) => {
                        if (booking.flight.departure_location == "Eindhoven")
                            return (
                                <div key={booking.id}>
                                    <div className="bookings">
                                        <div>
                                            <h3>Flight Information</h3>
                                            Booking:{" "}
                                            <InertiaLink
                                                href={`/users/${booking.user_id}/bookings/${booking.id}`}
                                            >
                                                #{booking.id}
                                            </InertiaLink>
                                            <p>
                                                Flight ID: {booking.flight.id}
                                            </p>
                                            <p>
                                                Departure Airport:{" "}
                                                {
                                                    booking.flight
                                                        .departure_location
                                                }
                                            </p>
                                            <p>
                                                Arrival Airport:{" "}
                                                {
                                                    booking.flight
                                                        .arrival_location
                                                }
                                            </p>
                                            <p>
                                                Departure Time:{" "}
                                                {booking.flight.depature_hour}
                                            </p>
                                            <p>
                                                Arrival Time:{" "}
                                                {booking.flight.arrival_hour}
                                            </p>
                                        </div>
                                        <div>
                                            <button className="btn-book">
                                                Cancel this flight
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                    })}
                </div>
            </div>
        </div>
    );
};

export default IndexBooking;
