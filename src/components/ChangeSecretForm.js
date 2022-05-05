import React, { useState } from "react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

export default function ChangeSecretForm(props) {
  const [newPassword, setNewPassword] = useState("")

  const onSubmit = async () => {
    props.onSubmit(newPassword)
  }

  return (
    <Grid container direction="column" spacing={3} height="100%" justifyContent="center" >
      <Grid item>
        <TextField
          id="outlined-newpassword"
          type="password"
          fullWidth
          label={props.secretTitle}
          variant="outlined"
          onChange={(event) => setNewPassword(event.target.value)}
        />
      </Grid>
      <Grid container item justifyContent="right">
        <Button variant="contained" onClick={onSubmit}>{props.submitText}</Button>
      </Grid>
    </Grid>
  )
}
