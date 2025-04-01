import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { TCar, TCarData } from './CarList';

type TEditCarProps = {
    currentCar: TCarData;
    updateCar: (car: TCar, url: string) => void;
}

export default function EditCar( {currentCar, updateCar} : TEditCarProps) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: currentCar.brand,
        model: currentCar.model,
        color: currentCar.color,
        fuel: currentCar.fuel,
        modelYear: String(currentCar.modelYear),
        price: String(currentCar.price)
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
            <Button onClick={handleClickOpen}>
                Edit car
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            updateCar({
                                ...car,
                                modelYear: Number(car.modelYear),
                                price : Number(car.price)
                            }, currentCar._links.self.href)
                            handleClose();
                        },
                    },
                }}
            >
                <DialogTitle>Edit car</DialogTitle>
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
                    <Button type="submit">Update</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}