import React from 'react'
import StoreProvider from './Context/Store'
import Book from './Book'

const ContextConection = () => {
	return (
		<StoreProvider>
			<Book />
		</StoreProvider>
	)
}

export default ContextConection