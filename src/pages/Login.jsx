import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../AuthContext"; 
import Button from "../components/Button"; 
import Input from "../components/Input";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);

    const handleLoginAction = (e) => {
        if (e) e.preventDefault(); 
        const success = login(username, password);

        if (success) {
            navigate('/dashboard');
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div className="login-card" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                
                <form onSubmit={handleLoginAction}>
                    <Input 
                        label="Nombre de Usuario"
                        type="text" 
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />

                    <Input 
                        label="Contraseña"
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <Button 
                            type="primary" 
                            text="Iniciar sesión"
                            action={handleLoginAction}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;