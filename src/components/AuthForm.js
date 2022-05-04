import React, { useState } from "react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

export default function AuthForm(props) {
  const [textInput, setTextInput] = useState("")
  const [secretInput, setSecretInput] = useState("")

  const onSubmit = async () => {
    props.onSubmit(textInput, secretInput)
  }

  return (
    <Grid container direction="column" spacing={3} height="100%" justifyContent="center" >
      <Grid item>
        <TextField
          id="outlined-text"
          fullWidth
          label={props.textTitle}
          variant="outlined"
          onChange={(event) => setTextInput(event.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-secret"
          type="password"
          fullWidth
          label={props.secretTitle}
          variant="outlined"
          onChange={(event) => setSecretInput(event.target.value)}
        />
      </Grid>
      <Grid container item justifyContent="right">
        <Button variant="contained" onClick={onSubmit}>{props.submitText}</Button>
      </Grid>
    </Grid>
  )
}


