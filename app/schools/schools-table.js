import {use} from "react"
import {useRouter} from "next/navigation"
import Link from "next/link"
import Button from "@mui/material/Button"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"

async function getSchools() {
  const response = await fetch("http://localhost/schools", {cache: "no-store"})
  const body = await response.json()
  return body.items
}

async function deleteSchool(codigo) {
  const response = await fetch(`http://localhost/schools/${codigo}`, {
    cache: "no-store",
    method: "DELETE"
  })
  await response.json()
}

export default function SchoolsTable() {
  const router = useRouter()
  const schools = use(getSchools())
  
  function handleDelete(event, schoolCodigo) {
    event.stopPropagation()
    use(deleteSchool(schoolCodigo))
    router.push("/students")
  }

  return (
    <Table size="small" stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Código</TableCell>
          <TableCell>Nombre</TableCell>
          <TableCell>Fecha de Creación</TableCell>
          <TableCell>Acción</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {schools.map(school =>
          <TableRow key={school.codigo}>
            <TableCell>{school.codigo}</TableCell>
            <TableCell>{school.nombre}</TableCell>
            <TableCell>{school.fecha_creacion}</TableCell>
            <TableCell>
              <Link href={`/schools/${school.codigo}`}><Button variant="contained">Editar</Button></Link>
              <Button variant="contained" onClick={(event) => handleDelete(event, school.codigo)}>Borrar</Button>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}