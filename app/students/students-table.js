import {use} from "react"
import {useRouter} from "next/navigation"
import Link from "next/link"
import Button from "@mui/material/Button"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"

async function getStudents() {
  const response = await fetch("http://localhost/students", {cache: "no-store"})
  const body = await response.json()
  return body.items
}

async function deleteStudent(cedula) {
  const response = await fetch(`http://localhost/students/${cedula}`, {
    cache: "no-store",
    method: "DELETE"
  })
  await response.json()
}

export default function StudentsTable() {
  const router = useRouter()
  const students = use(getStudents())
  
  function handleDelete(event, studentCedula) {
    event.stopPropagation()
    use(deleteStudent(studentCedula))
    router.push("/students")
  }

  return (
    <Table size="small" stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Cédula</TableCell>
          <TableCell>Nombre</TableCell>
          <TableCell>Código de Escuela</TableCell>
          <TableCell>Dirección</TableCell>
          <TableCell>Teléfono</TableCell>
          <TableCell>Fecha de Nacimiento</TableCell>
          <TableCell>Estatus</TableCell>
          <TableCell>Acción</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map(student =>
          <TableRow key={student.cedula}>
            <TableCell>{student.id}</TableCell>
            <TableCell>{student.cedula}</TableCell>
            <TableCell>{student.nombre}</TableCell>
            <TableCell>{student.codigo_escuela}</TableCell>
            <TableCell>{student.direccion}</TableCell>
            <TableCell>{student.telefono}</TableCell>
            <TableCell>{student.fecha_nacimiento}</TableCell>
            <TableCell>{student.estatus}</TableCell>
            <TableCell>
              <Link href={`/students/${student.cedula}`}><Button variant="contained">Editar</Button></Link>
              <Button variant="contained" onClick={(event) => handleDelete(event, student.cedula)}>Borrar</Button>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}