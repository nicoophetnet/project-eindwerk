import { Link, usePage } from "@inertiajs/react";

export default function Flight({ flight }) {
    const { auth } = usePage().props;

    return (
        <tr>
            <td>{flight.departure_location}</td>
            <td>{flight.arrival_location}</td>
            <td>{flight.airline}</td>
            <td>{flight.date}</td>
            {auth.logged_in == true && (
                <td>
                    <Link href={`/flights/${flight.id}/book`}>Book now</Link>
                </td>
            )}
        </tr>
    );
}
