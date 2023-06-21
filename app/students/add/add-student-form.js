import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import InputLabel from "@mui/material/InputLabel"
import TextField from "@mui/material/TextField"
import {useState} from "react"

export default function AddStudentForm({onSubmit, onCancel}) {
  const [formData, setFormData] = useState({
    cedula: "",
    nombre: "",
    codigo_escuela: "",
    direccion: "",
    telefono: "",
    fecha_nacimiento: "",
    estatus: ""
  })

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
        Cédula
        <TextField
          sx={{paddingLeft: "20px", paddingBottom: "20px"}}
          size="small"
          variant="outlined"
          type="text"
          name="cedula"
          value={formData.cedula}
          onChange={handleInputChange}
        />
      </InputLabel>
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
        Código de Escuela
        <TextField
          sx={{paddingLeft: "20px", paddingBottom: "20px"}}
          size="small"
          variant="outlined"
          type="text"
          name="codigo_escuela"
          value={formData.codigo_escuela}
          onChange={handleInputChange}
        />
      </InputLabel>
      <InputLabel>
        Dirección
        <TextField
          sx={{paddingLeft: "20px", paddingBottom: "20px"}}
          size="small"
          variant="outlined"
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleInputChange}
        />
      </InputLabel>
      <InputLabel>
        Teléfono
        <TextField
          sx={{paddingLeft: "20px", paddingBottom: "20px"}}
          size="small"
          variant="outlined"
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
        />
      </InputLabel>
      <InputLabel>
        Fecha de Nacimiento
        <TextField
          sx={{paddingLeft: "20px", paddingBottom: "20px"}}
          size="small"
          variant="outlined"
          type="date"
          name="fecha_nacimiento"
          value={formData.fecha_nacimiento}
          onChange={handleInputChange}
        />
      </InputLabel>
      <InputLabel>
        Estatus
        <TextField
          sx={{paddingLeft: "20px", paddingBottom: "20px"}}
          size="small"
          variant="outlined"
          type="text"
          name="estatus"
          value={formData.estatus}
          onChange={handleInputChange}
        />
      </InputLabel>

      <Button variant="contained" type="button" onClick={handleSubmit}>Agregar</Button>
      <Button variant="contained" type="button" onClick={handleCancel}>Volver</Button>
    </Box>
  )
}