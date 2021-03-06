import React from "react"
import Login from "../views/Login"
import NewPassword from "../views/NewPassword"
import Dashboard from "../views/dashboard"
import AISamples from "../views/dashboard/AISamples"
import Settings from "../views/dashboard/Settings"
import { Routes, Route } from "react-router-dom"
import routesEnum from "./enum"

export default function AppRoutes () {
  return (
    <Routes>
      <Route path={routesEnum.DASHBOARD} element={<Dashboard/>}>
        <Route index path={routesEnum.DASHBOARD_AI_SAMPLES} element={<AISamples/>}/>
        <Route path={routesEnum.DASHBOARD_SETTINGS} element={<Settings/>} />
      </Route>
      <Route exact path={routesEnum.LOGIN} element={<Login/>}/>
      <Route exact path={routesEnum.NEW_PASSWORD} element={<NewPassword/>}/>
    </Routes>
  )
}