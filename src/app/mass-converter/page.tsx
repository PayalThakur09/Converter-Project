'use client'
import Box from "@mui/material/Box";
import * as React from 'react';
import { Converter } from "../components/converter";
import { Header } from "../components/Header";
const list = [
    { label: 'kilogram(kg)', value: 1 },
    { label: 'grams(g)', value: 1000 },
    { label: 'hectograms(hg)', value: 10 },
    { label: 'miligrams(mg)', value: 1000000 },
    { label: 'pounds(US & UK)(lbs)', value: 2.20 },
];

export default function Page() {

    return (
        <Box>
            <Header heading="Mass Converter"/>

            <Converter list={list} />
        </Box>
    )
}