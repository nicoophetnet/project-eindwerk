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
        <div className="auth">
            <h1>Login</h1>

            <form onSubmit={submit}>
                <div className="flex column">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div className="flex column">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>

                <div>
                    <input
                        disabled={!isValid}
                        type="submit"
                        value="Login"
                        className="btn-auth"
                    />
                </div>
            </form>
        </div>
    );
}
