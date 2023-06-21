"use client"

import Link from "next/link"
import StudentsTable from "./students-table.js"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export default function StudentsPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom align="center">Estudiantes</Typography>
      <Link href="/students/add"><Button variant="contained">Agregar</Button></Link>
      <StudentsTable />
    </>
  )
}