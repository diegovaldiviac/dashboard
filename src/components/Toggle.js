import React, { useState } from 'react'
import {
  Switch,
  FormControlLabel,
  Typography,
  Stack
} from "@mui/material"

export default function Toggle(props) {
  // TODO: connect toggle state to store config language global state
  const [checked, setChecked] = useState(props.checked)

  const handleChange = (ev) => {
    //console.log("WHAT I AM RECIEVING FROM PROPS: ")
    //console.log(props.checked)
    //console.log("WHAT IS MY STATE PRIOR")
    //console.log(checked)
    setChecked(ev.target.checked)
    //console.log("WHAT I AM GIVING BACK TO FATHER: ")
    //console.log(ev.target.checked)
    props.handleChange(ev.target.checked)
  }

  //
  //{}
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>{props.optionA}</Typography>
      <FormControlLabel control={<Switch checked={checked} onChange={handleChange}/>}/>
      <Typography>{props.optionB}</Typography>
    </Stack>
  )


}