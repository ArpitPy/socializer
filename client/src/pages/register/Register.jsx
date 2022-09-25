import "./register.css";

function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Socializer</h3>
                    <span className="loginDesc">Meet new people and make new friends online!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Confirm password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">
                            Login Instead
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register