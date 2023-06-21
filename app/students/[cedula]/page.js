"use client"

import {use} from "react"
import {useRouter} from "next/navigation"
import Typography from "@mui/material/Typography"
import EditStudentForm from "./edit-student-form.js"

async function editStudent(cedula, newStudentData) {
  const response = await fetch(`http://localhost/students/${cedula}`, {
    cache: "no-store",
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newStudentData)
  })
  await response.json()
}

async function getStudent(cedula) {
  const response = await fetch(`http://localhost/students/${cedula}`)
  const body = await response.json()
  return {
    nombre: body.item.nombre,
    codigo_escuela: body.item.codigo_escuela,
    direccion: body.item.direccion,
    telefono: body.item.telefono,
    fecha_nacimiento: body.item.fecha_nacimiento,
    estatus: body.item.estatus
  }
}

export default function EditStudentPage({params}) {
  const router = useRouter()
  
  function handleSubmit(formData) {
    use(editStudent(params.cedula, formData))
    router.push("/students")
  }

  function handleCancel() {
    router.push("/students")
  }

  return (
    <>
      <Typography variant="h4" gutterBottom align="center">Estudiantes</Typography>
      <EditStudentForm placeholders={use(getStudent(params.cedula))} onSubmit={handleSubmit} onCancel={handleCancel} />
    </>
  )
}