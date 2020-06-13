import React, {useState} from 'react';
import { Login } from '../../services/api';
import './styles.css';

export default function Admin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await Login(username, password);

        if (!res.success) return setError(res.error);

        window.location.replace('/');
    };

    return (
        <div className={"middle admin"}>
            <form onSubmit={handleSubmit}>
                <h1 className={'title'}>ՆՈՐ ՋՈՒՂԱ</h1>
                <input placeholder={'username'} className={"input"} onChange={e => setUsername(e.target.value)} value={username} />
                <input type={'password'} placeholder={'password'} className={"input"} onChange={e => setPassword(e.target.value)} value={password} />
                <input type={'submit'} value={'LOG IN'} />
                <p className={'error'}>{error}</p>
            </form>
        </div>
    );
}
