"use client"

import {use} from "react"
import {useRouter} from "next/navigation"
import AddStudentForm from "./add-student-form.js"
import Typography from "@mui/material/Typography"

async function addStudent(studentData) {
  let response = await fetch(`http://localhost/students`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(studentData)
  })
  await response.json()
}

export default function AddStudentPage() {
  let router = useRouter()
  
  function handleSubmit(formData) {
    use(addStudent(formData))
    router.push("/students")
  }
  
  function handleCancel() {
    router.push("/students")
  }
  
  return (
    <>
      <Typography variant="h4" gutterBottom align="center">Estudiantes</Typography>
      <AddStudentForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </>
  )
}