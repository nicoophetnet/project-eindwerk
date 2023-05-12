export default function PassengerForm({ index, data, setData, errors }) {
    // const setFirstName = (firstname) => {
    //     console.log(firstname);
    //     console.log(data.passengers);
    //     setData((data.passengers[index].firstname = firstname));
    // };
    // const passengers = data.passengers;
    console.log(data);
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

            <div>
                First name:
                <input
                    type="text"
                    onChange={(e) =>
                        setData(
                            (data.passengers[index].firstname = e.target.value)
                        )
                    }
                />
                {errors && <div>{errors[Object.keys(errors)[0]]}</div>}
            </div>

            <div>
                Last name:
                <input
                    type="text"
                    onChange={(e) =>
                        setData(
                            (data.passengers[index].lastname = e.target.value)
                        )
                    }
                />
                {errors[Object.keys(errors)[1]] && (
                    <div>{errors[Object.keys(errors)[1]]}</div>
                )}
            </div>

            <div>
                Phone number:
                <input
                    type="tel"
                    onChange={(e) =>
                        setData(
                            (data.passengers[index].phonenumber =
                                e.target.value)
                        )
                    }
                />
                {errors[Object.keys(errors)[2]] && (
                    <div>{errors[Object.keys(errors)[2]]}</div>
                )}
            </div>

            <div>
                Email:
                <input
                    type="email"
                    onChange={(e) =>
                        setData((data.passengers[index].email = e.target.value))
                    }
                />
                {errors[Object.keys(errors)[3]] && (
                    <div>{errors[Object.keys(errors)[3]]}</div>
                )}
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
        </>
    );
}
