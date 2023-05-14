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
        <div className="auth">
            <h1>Register</h1>

            <form onSubmit={submit}>
                <div className="flex column">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div className="flex column">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && (
                        <div className="error">{errors.email}</div>
                    )}
                </div>
                <div className="flex column">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    {errors.password && (
                        <div className="error">{errors.password}</div>
                    )}
                </div>
                {data.password.length > 7 && (
                    <div className="flex column">
                        <label htmlFor="confirm">Password confirmation</label>
                        <input
                            type="password"
                            id="confirm"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                        {errors.password_confirmation && (
                            <div className="error">
                                {errors.password_confirmation}
                            </div>
                        )}
                    </div>
                )}

                <div>
                    <input
                        disabled={!isValid}
                        type="submit"
                        value="Register"
                        className="btn-auth"
                    />
                </div>
            </form>
        </div>
    );
}
