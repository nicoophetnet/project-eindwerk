import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import PassengerForm from "./PassengerForm";

export default function BookingForm({ flight }) {
    const { auth } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        flight_id: flight.id,
        user_id: auth.user.id,
        passengers: [],
    });

    const [passengerCount, setPassengerCount] = useState(1);

    const passengers = [];

    for (let index = 0; index < passengerCount; index++) {
        setData(
            data.passengers.push({
                booking_id: "",
                // title: "",
                firstname: "",
                lastname: "",
                phonenumber: "",
                email: "",
                // luggage: "",
            })
        );
        // data.passengers.push({
        //     booking_id: "",
        //     // title: "",
        //     firstname: "",
        //     lastname: "",
        //     phonenumber: "",
        //     email: "",
        //     // luggage: "",
        // });

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
        post(`/flights/${flight.id}/book`);
    };
    return (
        <>
            <form onSubmit={submit}>
                {passengers}

                <button type="submit">Book your flight</button>
            </form>
            {
                <button onClick={() => setPassengerCount(passengerCount + 1)}>
                    Add passenger
                </button>
            }
        </>
    );
}
