'use client'
import Box from "@mui/material/Box";
import * as React from 'react';
import { Converter } from "../components/converter";
import { Header } from "../components/Header";

const list = [
    { label: 'Celsius', value: 1 },
    { label: 'Fahrenheit', value: 33.80 },
    { label: 'Kelvin', value: 274.15 },
    { label: 'Rankine', value: 493.47 },
];

export default function Page() {
    return (
        <Box>
            <Header heading="Temperature Converter"/>
            
            <Converter list={list} />
        </Box>
    )
}