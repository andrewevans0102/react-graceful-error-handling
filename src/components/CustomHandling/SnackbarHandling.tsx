import { Alert, Snackbar } from '@mui/material';
import { useState, useRef } from 'react';

const SnackbarHandling = () => {
    const [username, setUsername] = useState('');
    const [showError, setShowError] = useState(false);
    const usernameRef = useRef(null);

    const validateName = (value: string) => {
        try {
            if (value.toUpperCase() === 'JOHN') {
                throw new Error('you typed the name John');
            }
            setShowError(false);
            setUsername(value);
        } catch (error: any) {
            console.log(error);
            setShowError(true);
        }
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowError(false);
    };

    return (
        <div>
            <label>
                {`Input a name that's not John: `}
                <input
                    placeholder={`type "John"`}
                    value={username}
                    onChange={(e) => validateName(e.target.value)}
                    ref={usernameRef}
                />
            </label>
            <p>{`Hi ${username}`}</p>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={showError}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    Typing John is not allowed
                </Alert>
            </Snackbar>
        </div>
    );
};

export default SnackbarHandling;
