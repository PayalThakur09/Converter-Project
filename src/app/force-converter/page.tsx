'use client'
import Box from "@mui/material/Box";
import * as React from 'react';
import { Converter } from "../components/converter";
import { Header } from "../components/Header";

const list = [
    { label: 'newtons(N)', value: 1 },
    { label: 'pounds(Ibf)', value: 0.224 },
    { label: 'poundals(pdl)', value: 7.233 },
    { label: 'tonnes force', value: 0.000102 },
    { label: 'kips', value: 0.000225 },
];

export default function Page() {

    return (
        < Box sx={{ flexGrow: 1 }}>

            <Header heading=" Force Converter"/>

            <Converter list={list} />
        </Box>
    )
}