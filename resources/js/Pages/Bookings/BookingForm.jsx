import { useState } from "react";
import { router } from "@inertiajs/react";
import PassengerForm from "./PassengerForm";

export default function BookingForm({ flight }) {
    const [passengerCount, setPassengerCount] = useState(1);
    const [formData, setFormData] = useState({
        flight_id: flight.id,
        passengers: [
            {
                firstname: "",
                lastname: "",
                phonenumber: "",
                email: "",
            },
        ],
    });
    const [errors, setErrors] = useState([]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const passengers = [...formData.passengers];
        passengers[index] = { ...passengers[index], [name]: value };
        setFormData({ ...formData, passengers });
    };

    const handleAddPassenger = () => {
        setPassengerCount(passengerCount + 1);
        setFormData({
            ...formData,
            passengers: [
                ...formData.passengers,
                {
                    firstname: "",
                    lastname: "",
                    phonenumber: "",
                    email: "",
                },
            ],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        router.post(`/flights/${flight.id}/book`, formData);
    };

    const passengers = formData.passengers.map((passenger, index) => (
        <PassengerForm
            key={index}
            index={index}
            passenger={passenger}
            handleInputChange={handleInputChange}
            errors={errors}
        />
    ));

    return (
        <div className="flex spcbtwn bttm">
            <div className="pform">
                <form onSubmit={handleSubmit}>
                    {passengers}

                    <button type="submit" className="btn-book">
                        Book your flight
                    </button>
                </form>
            </div>
            <div>
                <button className="btn-book" onClick={handleAddPassenger}>
                    Add passenger
                </button>
            </div>
        </div>
    );
}
