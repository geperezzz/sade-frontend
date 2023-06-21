"use client"

import {use} from "react"
import {useRouter} from "next/navigation"
import Typography from "@mui/material/Typography"
import EditSchoolForm from "./edit-school-form.js"

async function editSchool(codigo, newSchoolData) {
  const response = await fetch(`http://localhost/schools/${codigo}`, {
    cache: "no-store",
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newSchoolData)
  })
  await response.json()
}

async function getSchool(codigo) {
  const response = await fetch(`http://localhost/schools/${codigo}`)
  const body = await response.json()
  return {
    nombre: body.item.nombre,
    fecha_creacion: body.item.fecha_creacion
  }
}

export default function EditSchoolPage({params}) {
  const router = useRouter()
  
  function handleSubmit(formData) {
    use(editSchool(params.codigo, formData))
    router.push("/schools")
  }

  function handleCancel() {
    router.push("/schools")
  }

  return (
    <>
      <Typography variant="h4" gutterBottom align="center">Escuelas</Typography>
      <EditSchoolForm placeholders={use(getSchool(params.codigo))} onSubmit={handleSubmit} onCancel={handleCancel} />
    </>
  )
}