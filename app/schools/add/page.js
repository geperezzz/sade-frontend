"use client"

import {use} from "react"
import {useRouter} from "next/navigation"
import Typography from "@mui/material/Typography"
import AddSchoolForm from "./add-school-form.js"

async function addSchool(studentData) {
  const response = await fetch(`http://localhost/schools`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(studentData)
  })
  await response.json()
}

export default function AddSchoolPage() {
  const router = useRouter()
  
  function handleSubmit(formData) {
    use(addSchool(formData))
    router.push("/schools")
  }
  
  function handleCancel() {
    router.push("/schools")
  }
  
  return (
  <>
    <Typography variant="h4" gutterBottom align="center">Escuelas</Typography>
    <AddSchoolForm onSubmit={handleSubmit} onCancel={handleCancel} />
  </>
  )
}