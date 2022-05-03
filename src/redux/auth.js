const ACTIONS = {
  SAVE: "AUTH/SAVE"
}

const initialUserState = null

//Reducer
export default function authReducer(state = initialUserState, action) {
  switch(action.type) {
  case ACTIONS.SAVE:
    return action.payload
  default:
    return state
  }
}

//Action Creator
export function saveAuth(data) {
  return {
    type: ACTIONS.SAVE,
    payload: JSON.stringify(data)
  }
}
