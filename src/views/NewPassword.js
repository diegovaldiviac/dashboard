import React from "react"
import { Auth } from "aws-amplify"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useIntl } from "react-intl"
import routesEnum from "routes/enum"
import ChangeSecretForm from "components/ChangeSecretForm"
import Container from "@mui/material/Container"

export default function NewPassword() {

  const auth = useSelector((store) => store.auth)
  const navigate = useNavigate()
  const intl = useIntl()

  const handleSubmit = async (newPassword) => {
    const authObj = JSON.parse(auth)
    await Auth.completeNewPassword(authObj, newPassword)
    navigate(routesEnum.LOGIN)
  }

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <ChangeSecretForm
        onSubmit={handleSubmit}
        secretTitle={intl.formatMessage({ id: 'views.newPassword.newPassword'})}
        submitText={intl.formatMessage({ id: 'views.newPassword.save'})}
      ></ChangeSecretForm>
    </Container>
  )
}