import React, { useContext, useCallback } from 'react'
import styled from 'styled-components'

import Page from './Page'

import { Store } from './Context/Store'

const Book = () => {
	const [store, dispatch] = useContext(Store)

	const nextPage = useCallback(
		() => {
			dispatch({type: 'SET_PAGE', payload: store.page + 2})
		},
		[dispatch, store.page],
	)

	const previousPage = useCallback(
		() => {
			dispatch({type: 'SET_PAGE', payload: store.page - 2})
		},
		[dispatch, store.page],
	)

	console.log(store)
	return (
		<React.Fragment>
			<button onClick={previousPage}>previous</button>
			<BookContainer>
				<Side paginated />
				<Side>
					<Page front={4} back={5} page={store.page} bg='blue'/>
					<Page front={2} back={3} page={store.page} bg='green'/>
					<Page front={0} back={1} page={store.page} bg='grey'/>
				</Side>
			</BookContainer>
			<button onClick={nextPage}>next</button>
		</React.Fragment>
	)
}


const BookContainer = styled.div`
	display: flex;
	position: relative;
	height: 80%;
	width: 70%;

	border: 2px solid grey;
`

const Side = styled.div`
	flex: 1;
	border: 2px solid red;
	perspective: 1500px;
	perspective-origin: calc(50% + 50px) 50%;
`

export default Book