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
		<div style={{width: '100%', height: '80%', display: 'flex', flexDirection: 'column'}}>
			<div style={{width: '100%', height: '100%' , display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<IconButton disabled={store.page === 0} onClick={previousPage}>
					<KeyboardArrowLeftIcon fontSize='large'/>
				</IconButton>
				<BookContainer closed={(store.page === 0 && 'start') || (store.page === store.total && 'end')}>
					<Side paginated />
					<Side>
						<Page front={4} back={5} bg='blue'/>
						<Page front={2} back={3} bg='green'/>
						<Page front={0} back={1} bg='grey'/>
					</Side>
				</BookContainer>
				<IconButton disabled={store.page === store.total} onClick={nextPage}>
					<KeyboardArrowRightIcon fontSize='large' />
				</IconButton>
			</div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<div style={{boxShadow: '0px 117px 110px -93px rgba(0,0,0,0.75)', transition: 'max-width 0.4s ease 0.4s', width: '100%', maxWidth: ((store.page === 0 && 'start') || (store.page === store.total && 'end')) ? '33%' : '71%'}}>sauhshua</div>
			</div>
		</div>
	)
}


const BookContainer = styled.div`
	display: flex;
	position: relative;
	height: 100%;
	width: 70%;
	transform: ${({closed}) => `translateX(${closed ? (closed === 'start' ? '-24%' : '24%') : '0'})`};
	transition: transform 0.5s ease 0.4s;
`

const Side = styled.div`
	flex: 1;
	perspective: 1500px;
	perspective-origin: calc(50% + 50px) 50%;
	transition: box-shadow ease 0.2s;
`

export default Book