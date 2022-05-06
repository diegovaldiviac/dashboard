import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { Switch, FormControlLabel, Typography, Stack } from "@mui/material"

export default function Settings() {

  const dispatch = useDispatch()

  return (
    <div>
      <h2>Settings</h2>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>ENGLISH</Typography>
        <FormControlLabel control={<Switch />} />
        <Typography>FRENCH</Typography>
      </Stack>
    </div>
  )
}