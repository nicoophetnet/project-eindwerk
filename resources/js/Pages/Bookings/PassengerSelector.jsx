export default function PassengerSelector({ seats }) {
    const passengers = Array(seats).fill(null);

    return (
        <select>
            {passengers.map((passenger, index) => (
                <option key={index}>{index + 1}</option>
            ))}
        </select>
    );
}
