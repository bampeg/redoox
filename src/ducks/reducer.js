const initialState = {
  greenInput: ''
}

//action types
const INPUT_VALUE = 'INPUT_VALUE'

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_VALUE:
      console.log(state.greenInput)
      return { ...state, greenInput: action.payload }
    default:
      return state
  }
}

//action creators
export function handleInputValue(value) {
  // console.log('you hit handleInputValue')
  return {
    type: INPUT_VALUE,
    payload: value
  }
}