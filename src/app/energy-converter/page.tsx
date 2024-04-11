'use client'
import { Box } from "@mui/material";
import * as React from 'react';
import { Converter } from "../components/converter";
import { Header } from "../components/Header";

const list = [
    { label: 'jules(J)', value: 1 },
    { label: 'calories', value: 0.238 },
    { label: 'newton meters)', value: 1 },
];

export default function Page() {

    return (
        < Box sx={{ flexGrow: 1 }}>
            <Header heading="Energy Converter"/>

            <Converter list={list} />
        </Box>
    )
}