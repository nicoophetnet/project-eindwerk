import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function BookNowForm({ flight }) {
    const { auth } = usePage().props;

    const [booking, setBooking] = useState({
        flight_id: flight.id,
        user_id: auth.user.id,
        passengers: [{ firstname: auth.user.name, email: auth.user.email }],
    });

    const { data, setData, post, processing, errors } = useForm({
        flight_id: flight.id,
        user_id: auth.user.id,
    });

    function submit(e) {
        e.preventDefault();
        post("/booking");
    }

    return (
        <td>
            <form onSubmit={submit}>
                <input type="submit" value="Book now" />
            </form>
        </td>
    );
}
