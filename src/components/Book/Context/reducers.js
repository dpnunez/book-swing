const SET_PAGE = 'SET_PAGE'
const SET_MOVE = 'SET_MOVE'

export const defaultValues = {
  page: 0,
  total: 6,
  move: 'next'
}

const reducers = (state = defaultValues, action) => {
  switch (action.type) {
    case SET_PAGE:
			return {
				...state,
				page: action.payload
      }
    case SET_MOVE:
      return {
        ...state,
        move: action.payload
      }
    default:
      return state
  }
}

export default reducers
