import { useState, useRef } from 'react';

const DisplayJohn = (props: { username: string }) => {
    if (props.username.toUpperCase() === 'JOHN') {
        throw new Error('you typed the name John');
    }
    return <p>{`Hi ${props.username}`}</p>;
};

const NoHandling = () => {
    const [username, setUsername] = useState('');
    const usernameRef = useRef(null);

    return (
        <div>
            <label>
                {`Input a name that's not John: `}
                <input
                    placeholder={`type "John"`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    ref={usernameRef}
                />
            </label>
            <DisplayJohn username={username} />
        </div>
    );
};

export default NoHandling;
