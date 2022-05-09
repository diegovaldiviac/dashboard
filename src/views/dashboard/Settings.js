import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useIntl } from "react-intl"
import { saveLanguage, saveTheme } from "redux/config"
import translationsEnum from "../../translations/enum"
import themesEnum from "../../themes/enum"
import Toggle from "../../components/Toggle"
//mport themesEnum from "../../themes/enum"

export default function Settings() {
  const dispatch = useDispatch()
  const language = useSelector((store) => store.config.language)
  const theme = useSelector((store) => store.config.theme)
  const intl = useIntl()

  const isFrench = (language === translationsEnum.EN_US ? false : true)
  const isDark = (theme === themesEnum.LIGHT ? false : true)

  const handleLanguageToggle = (checked) => {
    // revisar el cambio del hijo, true or false
    console.log("RECIEVING IN THE FATHER CLASS: ")
    console.log(checked)
    if (checked) {
      dispatch(saveLanguage(translationsEnum.FR_FR))
    } else {
      dispatch(saveLanguage(translationsEnum.EN_US))
    }
    //isFrench = checked
  }


  const handleThemeChange = (checked) => {
    if (checked) {
      dispatch(saveTheme(themesEnum.DARK))
    } else {
      dispatch(saveTheme(themesEnum.LIGHT))
    }
  }

  return (
    <div>
      <h2>{intl.formatMessage({id: "views.dashboard.settings.settings"})}</h2>
      <div>
        <Toggle
          checked={isFrench}
          //optionA={intl.formatMessage({id: "views.dashboard.settings.english"})}
          //optionB={intl.formatMessage({id: "views.dashboard.settings.french"})}
          optionA={"English"}
          optionB={"French"}
          handleChange={handleLanguageToggle}
        />
        <Toggle
          checked={isDark}
          //optionA={intl.formatMessage({id: "views.dashboard.settings.english"})}
          //optionB={intl.formatMessage({id: "views.dashboard.settings.french"})}
          optionA={"Light"}
          optionB={"Dark"}
          handleChange={handleThemeChange}
        />
      </div>
    </div>
  )
}