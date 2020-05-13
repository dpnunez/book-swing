import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { Store } from './Context/Store'

const Page = ({front, back, page, ...props}) => {
	const [store, dispatch] = useContext(Store)

	return (
		<ContainerPage style={{zIndex: - front + 1}} bg={props.bg} isPaginated={store.page > front}>
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

	${({isPaginated}) => `
		transform: ${isPaginated ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
		transform-origin: left bottom;
	`}
`

export default Page