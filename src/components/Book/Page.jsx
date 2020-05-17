import React, { useContext } from 'react'
import styled from 'styled-components'

import { Store } from './Context/Store'
import { Grid } from '@material-ui/core'

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
			<Content className='front'>
					<Block className="Image-1"></Block>
					<Block className="Image-2"></Block>
					<Block className="Image-3">
						<Block className="Image-31"></Block>
						<Block className="Image-32"></Block>
						<Block className="Image-33"></Block>
						<Block className="Image-34"></Block>
					</Block>
					<Block className="Image-4"></Block>
					<Block className="Image-5"></Block>
					<Block className="Image-6"></Block>
					<Block className="Image-7"></Block>
			</Content>

			<Content className='back' style={{transform: 'rotateY(180deg) translateZ(1px)'}}>
				<Block className="Image-1"></Block>
						<Block className="Image-2"></Block>
						<Block className="Image-3">
							<Block className="Image-31"></Block>
							<Block className="Image-32"></Block>
							<Block className="Image-33"></Block>
							<Block className="Image-34"></Block>
						</Block>
						<Block className="Image-4"></Block>
						<Block className="Image-5"></Block>
						<Block className="Image-6"></Block>
						<Block className="Image-7"></Block>
				</Content>
		</ContainerPage>
	)
}

const ContainerPage = styled.div`
	width: 100%;
	height: 100%;
	background-color: white;
	transform-style: preserve-3d;
	transition: transform 1s cubic-bezier(0.250, 0.460, 0.450, 0.940);
	position: absolute;
	z-index: ${({zIndex}) => zIndex};


	${({isPaginated}) => `
		transform: ${isPaginated ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
		transform-origin: left bottom;
	`}
`

const Content = styled.div`
	height: 100%;
	backface-visibility: hidden;
	position: absolute;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	gap: 5px 5px;
	grid-template-areas: "Image-1 Image-1 Image-1 Image-1 Image-1 Image-1 Image-1 Image-2 Image-2 Image-2 Image-2" "Image-1 Image-1 Image-1 Image-1 Image-1 Image-1 Image-1 Image-2 Image-2 Image-2 Image-2" "Image-1 Image-1 Image-1 Image-1 Image-1 Image-1 Image-1 Image-2 Image-2 Image-2 Image-2" "Image-3 Image-3 Image-3 Image-3 Image-4 Image-4 Image-4 Image-4 Image-4 Image-4 Image-4" "Image-3 Image-3 Image-3 Image-3 Image-4 Image-4 Image-4 Image-4 Image-4 Image-4 Image-4" "Image-3 Image-3 Image-3 Image-3 Image-4 Image-4 Image-4 Image-4 Image-4 Image-4 Image-4" "Image-5 Image-5 Image-5 Image-5 Image-5 Image-5 Image-6 Image-6 Image-6 Image-6 Image-6" "Image-5 Image-5 Image-5 Image-5 Image-5 Image-5 Image-6 Image-6 Image-6 Image-6 Image-6" "Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7" "Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7" "Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7 Image-7";

	.Image-1 { grid-area: Image-1; }

	.Image-2 { grid-area: Image-2; }

	.Image-3 {
		border: none;
		background-color: transparent;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 5px 5px;
		grid-template-areas: "Image-31 Image-32" "Image-33 Image-34";
		grid-area: Image-3;
	}

	.Image-31 { grid-area: Image-31; }

	.Image-32 { grid-area: Image-32; }

	.Image-33 { grid-area: Image-33; }

	.Image-34 { grid-area: Image-34; }

	.Image-4 { grid-area: Image-4; }

	.Image-5 { grid-area: Image-5; }

	.Image-6 { grid-area: Image-6; }

	.Image-7 { grid-area: Image-7; }

	div {
		background-color: grey;
	}

`

const Block = styled.div`
	border: 2px solid black;
`

export default Page