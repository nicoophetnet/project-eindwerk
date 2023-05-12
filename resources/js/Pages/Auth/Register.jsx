import { useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/register");
    }

    const isValid =
        data.name.length > 0 &&
        data.email.length > 0 &&
        data.password.length > 7 &&
        data.password_confirmation.length > 7;

    return (
        <>
            <h1>Register</h1>

            <form onSubmit={submit}>
                <div>
                    Name:{" "}
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && <div>{errors.name}</div>}
                </div>
                <div>
                    Email:{" "}
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div>
                    Password:{" "}
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>
                {data.password.length > 7 && (
                    <div>
                        Password confirmation:{" "}
                        <input
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                        {errors.password_confirmation && (
                            <div>{errors.password_confirmation}</div>
                        )}
                    </div>
                )}

                <div>
                    <input disabled={!isValid} type="submit" value="Register" />
                </div>
            </form>
        </>
    );
}
