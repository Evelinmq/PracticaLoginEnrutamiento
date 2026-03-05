import { useState, useContext } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Login ({ onLogin }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        
        const success = login(username, password);

        if (success) {
            navigate('/dashboard');
        } else {
            alert('Credenciales incorrectas');
        }
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
    );

}

export default Login;