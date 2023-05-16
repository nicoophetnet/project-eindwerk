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
    const [seats, setSeats] = useState(flight.seats - 1);
    const [formErrors, setFormErrors] = useState([]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const passengers = [...formData.passengers];
        passengers[index] = { ...passengers[index], [name]: value };
        setFormData({ ...formData, passengers });

        const newFormErrors = validateForm();
        setFormErrors(newFormErrors);
    };

    const handleAddPassenger = () => {
        setSeats(seats - 1);
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
        const newFormErrors = validateForm();
        if (newFormErrors.length === 0) {
            router.post(`/flights/${flight.id}/book`, formData);
        } else {
            setFormErrors(newFormErrors);
        }
    };

    const validateForm = () => {
        const newFormErrors = [];
        formData.passengers.forEach((passenger) => {
            if (!passenger.firstname) {
                newFormErrors.push("First name is required.");
            }

            if (!passenger.lastname) {
                newFormErrors.push("Last name is required.");
            }

            if (!passenger.phonenumber) {
                newFormErrors.push("Phone number is required.");
            }

            if (!passenger.email) {
                newFormErrors.push("Email address is required.");
            }
        });
        return newFormErrors;
    };

    const passengers = formData.passengers.map((passenger, index) => (
        <PassengerForm
            key={index}
            index={index}
            passenger={passenger}
            handleInputChange={handleInputChange}
            errors={formErrors[index] || []}
        />
    ));

    return (
        <div className="flex spcbtwn bttm">
            <div className="pform">
                <form onSubmit={handleSubmit}>
                    {passengers}

                    <div>
                        {formErrors.length > 0 &&
                            formErrors.map((error, index) => (
                                <div key={index} className="error">
                                    {error}
                                </div>
                            ))}
                    </div>

                    <button type="submit" className="btn-book">
                        Book your flight
                    </button>
                </form>
            </div>
            <div>
                {seats > 0 ? (
                    <button className="btn-book" onClick={handleAddPassenger}>
                        Add passenger
                    </button>
                ) : (
                    <button className="btn-booked">No seats available</button>
                )}
            </div>
        </div>
    );
}
