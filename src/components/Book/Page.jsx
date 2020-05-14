import React, { useContext } from 'react'
import styled from 'styled-components'

import { Store } from './Context/Store'

const Page = ({front, back, page, ...props}) => {
	const [store, dispatch] = useContext(Store)


	//Refactor this :(
	const generateIndex = () => {
		switch(store.move) {
			case 'next':
				//Page on animation translate logic
				if(front + 2 === store.page){
					console.log('(next) front = ', front)
					return 999
				}
				//Generic zindex logic
				if(store.page > front) {
					return front
				}
				return store.total - front
			case 'previous': 
				console.log('front', front)
				if(front === store.page){
					console.log('(previous) front = ', front)
					return 999
				}
				if(store.page > front) {
					return front
				}
				return store.total - front
			default:
				return 'not handled'
		}
	}


	

	return (
		<ContainerPage zIndex={generateIndex} bg={props.bg} isPaginated={store.page > front}>
		</ContainerPage>
	)
}

const ContainerPage = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${({bg = 'light-grey'}) => bg};
	transform-style: preserve-3d;
	transition: transform 1s cubic-bezier(0.250, 0.460, 0.450, 0.940);
	position: absolute;
	z-index: ${({zIndex}) => zIndex};

	${({isPaginated}) => `
		transform: ${isPaginated ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
		transform-origin: left bottom;
	`}
`

export default Page