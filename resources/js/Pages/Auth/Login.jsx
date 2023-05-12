import { useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/login");
    }

    const isValid = data.email.length > 0 && data.password.length > 7;

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={submit}>
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

                <div>
                    <input disabled={!isValid} type="submit" value="Login" />
                </div>
            </form>
        </>
    );
}
