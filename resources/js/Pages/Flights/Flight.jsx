import { Link, usePage } from "@inertiajs/react";

export default function Flight({ flight }) {
    const { auth } = usePage().props;

    return (
        <tr>
            <td>{flight.departure_location}</td>
            <td>{flight.arrival_location}</td>
            <td>{flight.airline}</td>
            <td>{flight.date}</td>
            <td>{flight.seats}</td>
            <td>
                {flight.seats > 0 ? (
                    <Link href={`/flights/${flight.id}/book`}>
                        <button className="btn-book">Book now</button>
                    </Link>
                ) : (
                    "Fully booked"
                )}
            </td>
        </tr>
    );
}
