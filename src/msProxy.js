import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { IntlProvider} from "react-intl"
import routeEnum from "./routes/enum"
import { ThemeProvider, createTheme } from "@mui/material/styles"


export default function msProxy(props) {

  const navigate = useNavigate()
  const auth = useSelector((store) => store.auth)

  useEffect(() => {
    const authDeserializer = JSON.parse(auth)
    if (!authDeserializer || !authDeserializer.signInUserSession) {
      navigate(routeEnum.LOGIN)
    }
  }, [])

  // get config reducer to access theme and language curent state.
  const config = useSelector((store) => store.config)

  const getTheme = (fileName) => {
    const msTheme = require(`themes/${fileName}.json`)
    return createTheme(msTheme)
  }
  const theme = getTheme(config.theme)

  /**
   * Intl provider can not take nested json files
   * recommended flatten function by the format.js documentation:
   * https://formatjs.io/docs/react-intl/upgrade-guide-2x/#flatten-messages-object
   */
  function flattenMessages(nestedMessages, prefix = '') {
    return Object.keys(nestedMessages).reduce((messages, key) => {
      let value = nestedMessages[key]
      let prefixedKey = prefix ? `${prefix}.${key}` : key

      if (typeof value === 'string') {
        messages[prefixedKey] = value
      } else {
        Object.assign(messages, flattenMessages(value, prefixedKey))
      }

      return messages
    }, {})
  }

  const getMessages = (fileName) => {
    return require(`translations/${fileName}.json`)
  }
  let messages = getMessages(config.language)
  messages = flattenMessages(messages)

  return (
    <IntlProvider
      locale={config.language}
      key={config.language}
      messages={messages}
    >
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </IntlProvider>
  )
}
