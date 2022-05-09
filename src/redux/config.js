import translationsEnum from "../translations/enum"
import themesEnum from "../themes/enum"

const ACTIONS = {
  SAVE_THEME: "THEME/SAVE",
  SAVE_LANGUAGE: "LANGUAGE/SAVE"
}

const initialState = {
  theme: themesEnum.LIGHT,
  language: translationsEnum.EN_US
}

export default function configReducer(state = initialState, action) {
  switch(action.type) {
  case ACTIONS.SAVE_THEME:
    return {
      ...state,
      theme: action.payload
    }
  case ACTIONS.SAVE_LANGUAGE:
    return {
      ...state,
      language: action.payload
    }
  default:
    return state
  }
}

export function saveTheme(data) {
  return {
    type: ACTIONS.SAVE_THEME,
    payload: data
  }
}

export function saveLanguage(data) {
  return {
    type: ACTIONS.SAVE_LANGUAGE,
    payload: data
  }
}
