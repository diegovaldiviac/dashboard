import React from "react"
import { Auth } from "aws-amplify"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useIntl } from "react-intl"
import { saveAuth } from "redux/auth"
import routesEnum from "routes/enum"
import AuthForm from "components/AuthForm"
import Container from "@mui/material/Container"

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const intl = useIntl()

  const handleSubmit = async (email, password) => {
    const auth = await Auth.signIn(email, password)
    dispatch(saveAuth(auth))
    const navigationURI = auth.challengeName === "NEW_PASSWORD_REQUIRED" ? routesEnum.NEW_PASSWORD: routesEnum.DASHBOARD
    navigate(navigationURI)
  }

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AuthForm
        onSubmit={handleSubmit}
        textTitle={intl.formatMessage({id: "views.login.email"})}
        secretTitle={intl.formatMessage({id: "views.login.password"})}
        submitText={intl.formatMessage({id: "views.login.login"})}
      >
      </AuthForm>
    </Container>
  )
}
