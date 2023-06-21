"use client"

import Link from "next/link"
import SchoolsTable from "./schools-table.js"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export default function SchoolsPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom align="center">Escuelas</Typography>
      <Link href="/schools/add"><Button variant="contained">Agregar</Button></Link>
      <SchoolsTable />
    </>
  )
}