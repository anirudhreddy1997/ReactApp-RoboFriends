import React ,{Component} from 'react';
import CardList from '../components/cardlist';
/*import { robots } from './robots';
*/import SearchBox from '../components/searchbox';
import './App.css';
import Scroll from '../components/scroll';

class App extends Component{
	constructor(){
		super();
		this.state={
			robots:[],
			searchField:''
		}
	}

	onSearchChange=(event)=>{
		this.setState({searchField:event.target.value});
		
		
	}
	componentDidMount(){
		
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
		.then(users=>this.setState({robots:users}));
		
	
	}
	render(){
		const filteredRobots = this.state.robots.filter(robot=>{
				return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
			}
		)

		if(!this.state.robots.length){
			return (<h1 className='tc'>Loading</h1>);
		}else{
			return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
				
			</div>
		);
		}
		

	}
	
}
export default App;