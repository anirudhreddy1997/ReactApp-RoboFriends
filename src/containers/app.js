import React ,{Component} from 'react';
import CardList from '../components/cardlist';
/*import { robots } from './robots';
*/import SearchBox from '../components/searchbox';
import './App.css';
import Scroll from '../components/scroll';
import { setSearchField } from '../components/actions';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
	
	return {
		searchField:state.searchField
	}
}
const mapDispatchToProps =(dispatch) =>{
	
	return {
		onSearchChange: (event)=>{
			
			dispatch(setSearchField(event.target.value))
		}
		}
}
class App extends Component{
	constructor(){
		super();
		this.state={
			robots:[],
		
		}
	}

	
	componentDidMount(){
		
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
		.then(users=>this.setState({robots:users}));
		
	
	}
	render(){
		const filteredRobots = this.state.robots.filter(robot=>{
				return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
			}
		)

		if(!this.state.robots.length){
			return (<h1 className='tc'>Loading</h1>);
		}else{
			return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.props.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
				
			</div>
		);
		}
		

	}
	
}
export default connect(mapStateToProps, mapDispatchToProps)(App);