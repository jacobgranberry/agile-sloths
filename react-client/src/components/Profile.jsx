import React from 'react';
import { Icon, Card, Grid, Header, Container, Image, Button } from 'semantic-ui-react';
import data from '../testdata.js';

import Sidebar from './Sidebar.jsx';

var thisUser = data.users['bororourke@gmail.com'];

class Profile extends React.Component {
	constructor() {
		super()
		this.state = {
			placeholder: []
		}
		this.handleBioTabClick = this.handleBioTabClick.bind(this),
		this.handleEventsTabClick = this.handleEventsTabClick.bind(this),
		this.handleFollowersTabClick = this.handleFollowersTabClick.bind(this),
		this.handleRaceTabClick = this.handleRaceTabClick.bind(this)
	}

	handleBioTabClick() {
		// should empty container and render bio element
	}

	handleEventsTabClick() {
		// should empty container and render events list

	}

	handleFollowersTabClick() {
		// should empty container and render followers list
	}

	handleRaceTabClick() {
		// should empty container and render race info element

	}

	render() {
		console.log(data.events)
		return ( 
			<Container style={{paddingLeft: 210}}>
				<Grid container style={{paddingTop: 63}}>
					<Sidebar />

					<Grid.Column width={4}>
						<Card>
							<Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Beto_O%27Rourke%2C_Official_portrait%2C_113th_Congress.jpg/800px-Beto_O%27Rourke%2C_Official_portrait%2C_113th_Congress.jpg'/>
							<Card.Header style={{paddingLeft: 15, paddingRight: 15, fontSize: 20, paddingTop: 10, fontWeight: 800, paddingBottom: 10}}>
								{thisUser.name}
							</Card.Header>
							<Card.Meta style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 10}}>
							location goes here?
							</Card.Meta>
							<Card.Description style={{paddingLeft: 15, paddingRight: 15}}>
								{thisUser.bio}
							</Card.Description>
							<Card.Content extra>
							follower count goes here
							</Card.Content>
						</Card>
					</Grid.Column>

					<Grid.Column width={10}>

						<Grid.Row style={{paddingBottom: 30}}>
							<Button style={{marginRight: 10}} > Events </Button>
							<Button style={{marginRight: 10}} > Election Info </Button>
							<Button style={{marginRight: 10}} > Followers </Button>
						</Grid.Row>

						<Grid.Row>
							<div> Dummy events so this space is not empty: </div>
							{data.events.map(event => (
								<div style={{padding: 5, fontWeight: 700}}> {event.title} by {event.host} at {event.location} </div> 
								))}
						</Grid.Row>

					</Grid.Column>

				</Grid>

			</Container>)

	}
}

export default Profile