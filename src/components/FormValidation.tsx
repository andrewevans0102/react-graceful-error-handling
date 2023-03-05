import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

const FormValidation = () => {
    const [formInput, setFormInput] = useState('');
    const [fieldError, setFieldError] = useState(false);

    const handleFormInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        e: React.FormEvent<HTMLInputElement>
    ) => {
        setFormInput(e.currentTarget.value);
    };

    useEffect(() => {
        if (formInput !== '') {
            if (formInput === 'Hello World') {
                setFieldError(false);
            } else {
                setFieldError(true);
            }
        }
    }, [formInput]);

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    error={fieldError}
                    id="standard-error-helper-text"
                    label="Input Field"
                    helperText={
                        fieldError ? 'correct entry is "Hello World"' : ''
                    }
                    variant="standard"
                    value={formInput}
                    onChange={handleFormInputChange}
                />
            </div>
        </Box>
    );
};

export default FormValidation;
