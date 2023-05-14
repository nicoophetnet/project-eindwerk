import IngoingFlights from "./Flights/IngoingFlights";
import OutgoingFlights from "./Flights/OutgoingFlights";

export default function Index() {
    return (
        <>
            <h1>
                Book your flights for the 2024 European Senior Championships
            </h1>
            <br />
            <div className="flights">
                <IngoingFlights />
                <OutgoingFlights />
            </div>
        </>
    );
}
