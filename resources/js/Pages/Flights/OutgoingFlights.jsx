import React, { useState, useEffect } from "react";
import Flight from "./Flight";

function OutgoingFlights() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch("/flights")
            .then((response) => response.json())
            .then((data) => setFlights(data));
    }, []);

    return (
        <div>
            <h2>Outgoing flights</h2>
            <table>
                <thead>
                    <tr>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Airline</th>
                        <th>Date</th>
                        <th>Seats</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight) => {
                        if (flight.departure_location == "Eindhoven")
                            return <Flight key={flight.id} flight={flight} />;
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default OutgoingFlights;
