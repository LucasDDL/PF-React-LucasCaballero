import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function Alert({ open, setOpen, message }) {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={message}
            />
        </div>
    );
}