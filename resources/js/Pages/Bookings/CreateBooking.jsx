import BookingForm from "./BookingForm";

export default function CreateBooking({ flight }) {
    return (
        <div className="booking">
            <h1>Book a Flight</h1>

            <h2>Flight Details</h2>
            <p className="booking-info">
                Departure: {flight.departure_location} | Arrival:{" "}
                {flight.arrival_location} | Airline: {flight.airline} | Date:{" "}
                {flight.date}
            </p>

            <BookingForm flight={flight} />
        </div>
    );
}
