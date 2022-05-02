import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import routeEnum from "./routes/enum"


export default function msProxy(props) {

  const navigate = useNavigate()
  const auth = useSelector((store) => store.auth)

  useEffect(() => {
    const authDeserializer = JSON.parse(auth)
    if (!authDeserializer || !authDeserializer.signInUserSession) {
      navigate(routeEnum.LOGIN)
    }
  }, [])



  return (
  <div>
    {props.children}
  </div>
  )
}