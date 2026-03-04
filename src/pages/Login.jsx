import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Login ({ onLogin }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (username, password) => {
    const foundUser = users.find(
        (u) => u.user === username && u.password === password
    );

    if (foundUser) {
        setCurrentUser(foundUser);
        return true;
    }

    return false;
    };

    return foundUser ? true : false;
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <input type="text" placeholder="Username" 
                onChange={
                    (event) => setUsername(event.target.value)
                }
                />
            </div>
            <div>
                <input type="password" placeholder="Password"
                onChange={
                    (event) => setPassword(event.target.value)
                }
                />
            </div>
            <Button text="Iniciar sesión"
            action={handleLogin}
            />
        </div>
    )
}

export default Login;