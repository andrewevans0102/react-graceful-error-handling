import { Alert, Snackbar } from '@mui/material';
import { useState, useEffect } from 'react';
import { useUsername } from '../../hooks/useUsername';

const HookHandling = () => {
    const { username, error, validateName } = useUsername();
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (error !== null) {
            setShowError(true);
        }
    }, [error]);

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
                />
            </label>
            <p>{`Hi ${username}`}</p>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={showError}
                autoHideDuration={2000}
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

export default HookHandling;
