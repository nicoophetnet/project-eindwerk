import { Link, usePage } from "@inertiajs/react";

export default function Layout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="main-layout">
            <nav className="main-nav">
                <Link href="/">Logo</Link>
                <Link href="/your-bookings">Your bookings</Link>

                {auth.logged_in ? (
                    <Link href="/logout">Logout</Link>
                ) : (
                    <>
                        <Link href="/register">Register</Link>
                        <Link href="/login">Login</Link>
                    </>
                )}
            </nav>

            {auth.logged_in ? (
                <div>Hi, {auth.user.name}!</div>
            ) : (
                <div>Please log in to book your flights!</div>
            )}

            <div className="main-content">{children}</div>
        </div>
    );
}
