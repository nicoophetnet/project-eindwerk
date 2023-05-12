import IngoingFlights from "./Flights/IngoingFlights";
import OutgoingFlights from "./Flights/OutgoingFlights";

export default function Index() {
    return (
        <div>
            <IngoingFlights />
            <OutgoingFlights />
        </div>
    );
}
