'use client'
import Box from "@mui/material/Box";
import * as React from 'react';
import { Converter } from "../components/converter";
import { Header } from "../components/Header";

const list = [
    { label: 'kilometers/hous(km/h)', value: 1 },
    { label: 'meters/second(m/s)', value: 0.277 },
    { label: 'miles/hour(mph)', value: 0.621 },
    { label: 'yards/hour', value: 1093.611 },
    { label: 'feet/hour', value: 3280.833 },
];

export default function Page() {

    return (
        <Box>
            <Header heading="Speed Converter"/>
            
            <Converter list={list} />
        </Box>
    )
}