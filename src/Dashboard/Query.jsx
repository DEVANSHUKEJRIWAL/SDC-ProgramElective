import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function BasicModalDialog() {
    const [open, setOpen] = React.useState(false);
    const [allocated, setAllocated] = React.useState('');
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [name, setName] = React.useState('');
    const [registrationNumber, setRegistrationNumber] = React.useState('');
    const [applyingForChange, setApplyingForChange] = React.useState('');
    const [reason, setReason] = React.useState('');

    const handleChange = (event) => {
        setAllocated(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleRegistrationNumberChange = (event) => {
        setRegistrationNumber(event.target.value);
    };

    const handleApplyingForChangeChange = (event) => {
        setApplyingForChange(event.target.value);
    };

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = () => {
        const queryData = {
            name,
            registrationNumber,
            allocated,
            applyingForChange,
            reason
        };
        // Process the queryData as needed (e.g., send it to a server)
        console.log(queryData);
        // Close the modal
        setOpen(false);
        // Show the snackbar
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <React.Fragment>
            <Button
                variant="outlined"
                color="neutral"
                startDecorator={<Add />}
                onClick={() => setOpen(true)}
            >
                New project
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>New Query</DialogTitle>
                    <DialogContent>Type your query for Program Elective</DialogContent>
                    <form onSubmit={(event) => { event.preventDefault(); handleSubmit(); }}>
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input autoFocus required value={name} onChange={handleNameChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Registration Number</FormLabel>
                                <Input required value={registrationNumber} onChange={handleRegistrationNumberChange} />
                            </FormControl>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Allocated</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={allocated}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Applying for a change</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={applyingForChange}
                                        label="Age"
                                        onChange={handleApplyingForChangeChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: 120 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField required id="outlined-basic" label="Reason" variant="outlined" value={reason} onChange={handleReasonChange} />
                            </Box>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Query is submitted
                </MuiAlert>
            </Snackbar>
        </React.Fragment>
    );
}
