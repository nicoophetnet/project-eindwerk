import React from "react";

export default function PassengerForm({
    index,
    passenger,
    handleInputChange,
    errors,
}) {
    console.log(errors);
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
                {errors.firstname && (
                    <div className="error">{errors.firstname}</div>
                )}
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
                {errors.lastname && (
                    <div className="error">{errors.lastname}</div>
                )}
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
                {errors.phonenumber && (
                    <div className="error">{errors.phonenumber}</div>
                )}
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
                {errors.email && <div className="error">{errors.email}</div>}
            </div>
        </>
    );
}
