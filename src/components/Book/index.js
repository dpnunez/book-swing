import React from 'react'
import StoreProvider from './Context/Store'
import Book from './Book.jsx'

const ContextConection = () => {
	return (
		<StoreProvider>
			<Book />
		</StoreProvider>
	)
}

export default ContextConection