export default function PassengerForm({ index, data, setData, errors }) {
    // const setFirstName = (firstname) => {
    //     console.log(firstname);
    //     console.log(data.passengers);
    //     setData((data.passengers[index].firstname = firstname));
    // };
    // const passengers = data.passengers;
    // console.log(errors);
    return (
        <>
            {/* <div>
                Title:
                <select
                    name="title"
                    id="title"
                    value={data.passengers[index].title}
                    onChange={(e) =>
                        setData((data.passengers[index].title = e.target.value))
                    }
                >
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                </select>
                {errors.title && <div>{errors.title}</div>}
            </div> */}
            <h3>Passenger {index + 1}</h3>
            <div className="flex column">
                <label htmlFor="firstname">First name</label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={data.passengers[index].firstname}
                    onChange={(e) =>
                        setData(`passengers.${index}.firstname`, e.target.value)
                    }
                />
            </div>

            <div className="flex column">
                <label htmlFor="lastname">Last name</label>
                <input
                    type="text"
                    id="lastname"
                    onChange={(e) =>
                        setData(
                            (data.passengers[index].lastname = e.target.value)
                        )
                    }
                />
            </div>

            <div className="flex column">
                <label htmlFor="phonenumber">Phone number</label>
                <input
                    type="tel"
                    id="phonenumber"
                    onChange={(e) =>
                        setData(
                            (data.passengers[index].phonenumber =
                                e.target.value)
                        )
                    }
                />
            </div>

            <div className="flex column">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    onChange={(e) =>
                        setData((data.passengers[index].email = e.target.value))
                    }
                />
            </div>

            {/* <div>
                Luggage:
                <input
                    type="checkbox"
                    onChange={(e) =>
                        setData(
                            (data.passengers[index].luggage = e.target.value)
                        )
                    }
                />
            </div> */}

            <div>
                {errors[Object.keys(errors)[0]] && (
                    <div className="error">
                        {errors[Object.keys(errors)[0]]}
                    </div>
                )}
                {errors[Object.keys(errors)[1]] && (
                    <div className="error">
                        {errors[Object.keys(errors)[1]]}
                    </div>
                )}
                {errors[Object.keys(errors)[2]] && (
                    <div className="error">
                        {errors[Object.keys(errors)[2]]}
                    </div>
                )}
                {errors[Object.keys(errors)[3]] && (
                    <div className="error">
                        {errors[Object.keys(errors)[3]]}
                    </div>
                )}
            </div>
        </>
    );
}
