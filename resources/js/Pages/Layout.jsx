import { Link, usePage } from "@inertiajs/react";
import logo from "../../img/logo.png";

export default function Layout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="main-layout">
            <header className="main-header">
                <div className="container">
                    <div className="flex spcbtwn">
                        <Link href="/">
                            <img src={logo} alt="" />
                        </Link>
                        <div>
                            <nav className="main-nav">
                                {auth.logged_in ? (
                                    <>
                                        <Link href="/your-bookings">
                                            <button className="button">
                                                Your bookings
                                            </button>
                                        </Link>
                                        <Link href="/logout">
                                            <button className="button">
                                                Logout
                                            </button>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/register">
                                            <button className="button">
                                                Register
                                            </button>
                                        </Link>
                                        <Link href="/login">
                                            <button className="button">
                                                Login
                                            </button>
                                        </Link>
                                    </>
                                )}
                                {auth.logged_in ? (
                                    <div>Hi, {auth.user.name}!</div>
                                ) : (
                                    <div>
                                        Please log in to book your flights!
                                    </div>
                                )}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div className="main-content">
                <div className="container">{children}</div>
            </div>
        </div>
    );
}
