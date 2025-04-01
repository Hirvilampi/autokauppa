import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { TCar } from './CarList';

type TAddCarProps = {
    addCar: (car: TCar) => void;
}

export default function AddCar( {addCar} : TAddCarProps) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: "",
        model: "",
        color: "",
        fuel: "",
        modelYear: "",
        price: ""
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCar({ ...car, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen} style={{margin: "1em 0"}}>
                Add car
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            addCar({
                                ...car,
                                modelYear: Number(car.modelYear),
                                price : Number(car.price)
                            });
                            handleClose();
                        },
                    },
                }}
            >
                <DialogTitle>Add car</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="brand"
                        name="brand"
                        label="Brand"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        value={car.brand}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="model"
                        name="model"
                        label="Model"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        value={car.model}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="color"
                        name="color"
                        label="Color"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        value={car.color}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="fuel"
                        name="fuel"
                        label="Fuel"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        value={car.fuel}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="modelYear"
                        name="modelYear"
                        label="Year"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        value={car.modelYear}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="price"
                        name="price"
                        label="Price"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        value={car.price}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Add</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}