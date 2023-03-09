import { useState } from 'react';

export function useUsername() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);

    const validateName = (value: string) => {
        try {
            if (value.toUpperCase() === 'JOHN') {
                throw new Error('you typed the name John');
            }
            setError(null);
            setUsername(value);
        } catch (error: any) {
            console.log(error);
            setError(error);
        }
    };

    return {
        username,
        error,
        validateName,
    };
}
