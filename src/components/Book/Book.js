import React, { useContext, useCallback } from 'react'
import styled from 'styled-components'

import Page from './Page'

import { Store } from './Context/Store'

const Book = () => {
	const [store, dispatch] = useContext(Store)

	const nextPage = useCallback(
		() => {
			dispatch({type: 'SET_PAGE', payload: store.page + 2})
			dispatch({type: 'SET_MOVE', payload: 'next'})
		},
		[dispatch, store.page],
	)

	const previousPage = useCallback(
		() => {
			dispatch({type: 'SET_PAGE', payload: store.page - 2})
			dispatch({type: 'SET_MOVE', payload: 'previous'})
		},
		[dispatch, store.page],
	)

	return (
		<React.Fragment>
			<button onClick={previousPage}>previous</button>
			<BookContainer closed={store.page === 0 || store.page === store.total}>
				<Side paginated />
				<Side>
					<Page front={4} back={5} bg='blue'/>
					<Page front={2} back={3} bg='green'/>
					<Page front={0} back={1} bg='grey'/>
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
	transform: ${({closed}) => `translateX(${closed ? '-20%' : '0'})`};
	transition: transform 0.5s ease 0.4s
`

const Side = styled.div`
	flex: 1;
	perspective: 1500px;
	perspective-origin: calc(50% + 50px) 50%;
`

export default Book