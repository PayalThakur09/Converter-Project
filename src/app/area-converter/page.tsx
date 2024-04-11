'use client'
import Box from "@mui/material/Box";
import { Converter } from "../components/converter";
import { Header } from "../components/Header";

const list = [
    { label: 'square meters', value: 1 },
    { label: 'square inches', value: 1550 },
    { label: 'ares', value: 0.01 },
    { label: 'hectares', value: 0.000100 },
    { label: 'roods', value: 0.00098 },
];

export default function Page() {

    return (
        <Box >
            <Header heading="Area Converter"/>
            
            <Converter list={list} />
        </Box>
    )
}

