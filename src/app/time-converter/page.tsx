'use client'
import Box from "@mui/material/Box";
import * as React from 'react';
import { Converter } from "../components/converter";
import { Header } from "../components/Header";

const list = [
    { label: 'years(y)', value: 1 },
    { label: 'months', value: 12 },
    { label: 'days', value: 365 },
    { label: 'hours(h)', value: 8660 },
    { label: 'minutes(min)', value: 525600 },
    { label: 'seconds', value: 31536000 },
];

export default function Page() {

    return (
        <Box>
            <Header heading="Time Converter"/>
            
            <Converter list={list} />
        </Box>
    )
}