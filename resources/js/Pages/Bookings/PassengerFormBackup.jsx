export default function PassengerForm({
    index,
    passenger,
    handleInputChange,
    errors,
}) {
    return (
        <>
            <h3>Passenger {index + 1}</h3>
            <div className="flex column">
                <label htmlFor={`firstname-${index}`}>First name</label>
                <input
                    type="text"
                    id={`firstname-${index}`}
                    name="firstname"
                    value={passenger.firstname}
                    onChange={(e) => handleInputChange(e, index)}
                />
            </div>

            <div className="flex column">
                <label htmlFor={`lastname-${index}`}>Last name</label>
                <input
                    type="text"
                    id={`lastname-${index}`}
                    name="lastname"
                    value={passenger.lastname}
                    onChange={(e) => handleInputChange(e, index)}
                />
            </div>

            <div className="flex column">
                <label htmlFor={`phonenumber-${index}`}>Phone number</label>
                <input
                    type="tel"
                    id={`phonenumber-${index}`}
                    name="phonenumber"
                    value={passenger.phonenumber}
                    onChange={(e) => handleInputChange(e, index)}
                />
            </div>

            <div className="flex column">
                <label htmlFor={`email-${index}`}>Email address</label>
                <input
                    type="email"
                    id={`email-${index}`}
                    name="email"
                    value={passenger.email}
                    onChange={(e) => handleInputChange(e, index)}
                />
            </div>

            <div>
                {errors.length > 0 && <div className="error">{errors[0]}</div>}
            </div>
        </>
    );
}
