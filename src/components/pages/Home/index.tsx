// External libraries
import React from 'react'

// Components
import Sidebar from '../../common/Sidebar'

// Styled
import {
	Container,
	Content
} from './styles'

const Home: React.FC = () => {
	return (
		<Container>
			<Content>
				<h2>Next.js Structure</h2>
				<h5>A real-time chart by Quindinzão.</h5>
			</Content>
			<Sidebar home={true} />
		</Container>
	)
}

export default Home
