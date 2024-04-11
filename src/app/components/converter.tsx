import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

type ListItemType = {
    label: string
    value: number
}

type Props = {
    list: ListItemType[]
}

export function Converter({list} : Props) {

    const [number, setNumber] = useState(0);
    const [from, setFrom] = React.useState(0);
    const [to, setTo] = React.useState(0);
    const [convertedNumber, setConvertedNumber] = useState(0);

    const handleChange = (event: any) => {
        setNumber(parseFloat(event.target.value));
    }

    const handleChange1 = (event: SelectChangeEvent) => {
        setFrom(parseFloat(event.target.value));
    };

    const handleChange2 = (event: SelectChangeEvent) => {
        setTo(parseFloat(event.target.value));
    };

    React.useEffect(() => {
        if (from && to && number) {
            convertValues()
        }
    }, [from, to, number])

    const convertValues = () => {

        const converted = ((number) / from) * to;
        setConvertedNumber(converted);
    };

    return (
        <>
            <Container maxWidth="lg" style={{ marginTop: 40, justifyContent: 'space-between', display: 'flex' }}>
                <Grid container spacing={2}>

                    <Grid xs={12} sm={6} md={3} marginTop={2}>
                        <TextField
                            type="number"
                            id="outlined-basic"
                            variant="outlined"
                            value={number}
                            label="Number"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid xs={12} sm={6} md={3} marginTop={2}>
                        <FormControl >
                            <InputLabel id="demo-simple-select-label">From</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={from.toString()}
                                label="From"
                                onChange={handleChange1}
                            >
                                <MenuItem value={0}>Select</MenuItem>
                                {
                                    list.map(
                                        (label) => <MenuItem value={label.value}>{label.label}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid xs={12} sm={6} md={3} marginTop={2}>
                        <FormControl >
                            <InputLabel id="demo-simple-select-label">To</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={to.toString()}
                                label="To"
                                onChange={handleChange2}
                            >
                                <MenuItem value={0}>Select</MenuItem>
                                {
                                    list.map(
                                        (label) => <MenuItem value={label.value}>{label.label}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid xs={12} sm={6} md={3} marginTop={2}>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { sm: 'block' } }}>
                            {Math.round(convertedNumber * 100) / 100}
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}