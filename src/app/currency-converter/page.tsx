'use client'
import Box from "@mui/material/Box";
import * as React from 'react';
import { Converter } from "../components/converter";
import { Header } from "../components/Header";

const list = [
  { label: 'USD', value: 1 },
  { label: 'INR', value: 83.47 },
  { label: 'EURO', value: 0.92 },
  { label: 'GBP', value: 0.79 },
  { label: 'CAD', value: 1.35 },
  { label: 'JPY', value: 151.74 },
  { label: 'CHF', value: 0.90 },
  { label: 'AUD', value: 1.51 }
];

export default function Page() {

  return (
    < Box>
      <Header heading="Currency Converter"/>

      <Converter list={list} />
    </Box>
  )
}
