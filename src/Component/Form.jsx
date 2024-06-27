import { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";

function Form() {
    const [isLogin, setIsLogin] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="login-y">
            <div className="loginbox">
                <img
                    className="login-img"
                    src="https://pixlr.com/img/misc/auth.webp"
                    alt="Login illustration"
                />
                <div className="loginmain">
                    {showLogin ? (
                        <Login setIsLogin={setIsLogin} setShowLogin={setShowLogin} />
                    ) : (
                        <Registration setShowLogin={setShowLogin} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Form;