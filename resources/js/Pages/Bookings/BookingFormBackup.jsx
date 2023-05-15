import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import PassengerForm from "./PassengerFormBackup";

export default function BookingForm({ flight }) {
    const { auth } = usePage().props;

    const [passengerCount, setPassengerCount] = useState(1);

    const passengers = [];

    const { data, setData, post, processing, errors } = useForm({
        flight_id: flight.id,
        user_id: auth.user.id,
        passengers: [
            {
                booking_id: "",
                // title: "",
                firstname: "",
                lastname: "",
                phonenumber: "",
                email: "",
                // luggage: "",
            },
        ],
    });

    for (let index = 0; index < passengerCount; index++) {
        passengers.push(
            <PassengerForm
                index={index}
                key={index}
                data={data}
                setData={setData}
                errors={errors}
            />
        );
    }

    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(`/flights/${flight.id}/book`, data);
    };
    return (
        <div className="flex spcbtwn bttm">
            <div className="pform">
                <form onSubmit={submit}>
                    {passengers}

                    <button type="submit" className="btn-book">
                        Book your flight
                    </button>
                </form>
            </div>
            <div>
                {
                    <button
                        className="btn-book"
                        onClick={() => setPassengerCount(passengerCount + 1)}
                    >
                        Add passenger
                    </button>
                }
            </div>
        </div>
    );
}
