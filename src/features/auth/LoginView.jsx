import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../app/AuthContext';

export default function LoginView() {
    const [workEmail, setWorkEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(true);
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(){
        setError(null);
        const res = await fetch("api/agents/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({workEmail, password})
        });
        if (!res.ok) { setError('Login failed - check your credentials.'); return; }
        const data = await res.json();
        login(data.token, remember);
        navigate('/');
    }

    return (
        <div className="login-card">
            <h1>Lordship</h1>
            <input type="email" value={workEmail} onChange={e => setWorkEmail(e.target.value)}
                placeholder='Email' autoComplete="username" />

            <input type="password" value={password} onChange={e => setPassword(e.target.value)} 
            placeholder="Password" autoComplete="current-password" 
            onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
            <label>
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
            </label>
            {error && <p className="login-error">{error}</p>}
            <button onClick={handleSubmit}>Sign in</button>
        </div>
    );
}