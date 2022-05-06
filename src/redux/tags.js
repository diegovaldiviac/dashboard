import { mergeMap, map } from "rxjs/operators"
import { ofType } from "redux-observable"
import { from } from "rxjs"
import { API } from "aws-amplify"

const ACTIONS = {
  GET_TAGS: "GET/TAGS",
  GET_TAGS_RESPONSE: "GET/TAGS/RESPONSES"
  //DELETE_TAG: "DELETE/TAG",
}

const APIInitialState = {
  tags: [],
}


export default function tagsReducer(state = APIInitialState, action) {
  switch(action.type) {
  case ACTIONS.GET_TAGS_RESPONSE:
    return {
      ...state,
      tags: action.payload
    }
  default:
    return state
  }
}

export function getTags() {
  return {
    type: ACTIONS.GET_TAGS,
  }
}

export function getTagsEpic(action$) {
  return action$.pipe(
    ofType(ACTIONS.GET_TAGS),
    mergeMap(() =>
      from(API.get("msApi", "/tags"))
        .pipe(map(response => getTagsResponse(response)))
    )
  )
}

function getTagsResponse(payload) {
  return {
    type: ACTIONS.GET_TAGS_RESPONSE,
    payload
  }
}
