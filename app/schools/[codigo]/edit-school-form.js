import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import InputLabel from "@mui/material/InputLabel"
import TextField from "@mui/material/TextField"
import {useState} from "react"

export default function EditSchoolForm({placeholders, onSubmit, onCancel}) {
  const [formData, setFormData] = useState(placeholders)

  function handleInputChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.stopPropagation()
    onSubmit(formData)
  }

  function handleCancel(event) {
    event.stopPropagation()
    onCancel()
  }

  return (
    <Box>
      <InputLabel>
        Nombre
        <TextField
          sx={{paddingLeft: "20px", paddingBottom: "20px"}}
          size="small"
          variant="outlined"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
      </InputLabel>
      <InputLabel>
        Fecha de Creación
        <TextField
          sx={{paddingLeft: "20px", paddingBottom: "20px"}}
          size="small"
          variant="outlined"
          type="date"
          name="fecha_creacion"
          value={formData.codigo_escuela}
          onChange={handleInputChange}
        />
      </InputLabel>

      <Button variant="contained" type="button" onClick={handleSubmit}>Guardar</Button>
      <Button variant="contained" type="button" onClick={handleCancel}>Volver</Button>
    </Box>
  )
}