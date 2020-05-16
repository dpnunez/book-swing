import React, { useContext, useCallback } from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

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
		<>
				<IconButton disabled={store.page === 0} onClick={previousPage}>
					<KeyboardArrowLeftIcon fontSize='large'/>
				</IconButton>
				<BookContainer closed={(store.page === 0 && 'start') || (store.page === store.total && 'end')}>
					<Side paginated closed={store.page === 0} />
					<Side closed={store.page === store.total}>
						<Page front={4} back={5} bg='blue'/>
						<Page front={2} back={3} bg='green'/>
						<Page front={0} back={1} bg='grey'/>
					</Side>
				</BookContainer>
				<IconButton disabled={store.page === store.total} onClick={nextPage}>
					<KeyboardArrowRightIcon fontSize='large' />
				</IconButton>
		</>
	)
}


const BookContainer = styled.div`
	display: flex;
	position: relative;
	height: 80%;
	width: 70%;
	transform: ${({closed}) => `translateX(${closed ? (closed === 'start' ? '-24%' : '24%') : '0'})`};
	transition: transform 0.5s ease 0.4s;
`

const Side = styled.div`
	box-shadow: ${({closed}) => `0 10px 20px rgba(0,0,0, ${closed ? '0' : '0.19'}), 0 6px 6px rgba(0,0,0, ${closed ? '0' : '0.23'})`};
	flex: 1;
	perspective: 1500px;
	perspective-origin: calc(50% + 50px) 50%;
	${({closed}) => closed ? '' : 'transition: box-shadow ease 0.4s 0.5s'};
`

export default Book