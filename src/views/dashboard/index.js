import React, { useEffect } from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useIntl } from 'react-intl'
import { Auth } from 'aws-amplify'
import { saveAuth } from 'redux/auth'
import routesEnum from 'routes/enum'
import { Outlet } from "react-router-dom"

export default function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const intl = useIntl()

  const handleLogOut = async () => {
    dispatch(saveAuth(null))
    await Auth.signOut()
    navigate(routesEnum.LOGIN)
  }

  // TODO: HOW TO USE OUTLET TO NAVIGATE WITHIN CHILDS
  useEffect(() => {
    navigate(routesEnum.DASHBOARD_SETTINGS)
  }, [])

  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "right" }}>
          <Button color="inherit" onClick={handleLogOut}>{intl.formatMessage({id: "views.dashboard.signOut"})}</Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  )
}