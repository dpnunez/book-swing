const SET_PAGE = 'SET_PAGE'

export const defaultValues = {
  page: 0
}

const reducers = (state = defaultValues, action) => {
  switch (action.type) {
    case 'SET_PAGE':
			return {
				...state,
				page: action.payload
			}
    default:
      return state
  }
}

export default reducers
