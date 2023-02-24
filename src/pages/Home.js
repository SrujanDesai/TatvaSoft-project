import React , {Component} from 'react'
import Title from '../component/Title'

class Home extends Component{

   constructor(props) {
     super(props)
   
     this.state = {
        Title: 'This is a State',
        Description: 'States are widly used in react'
     }
   }  

   render(){
      return <div>
      <h1>Class Comnponent</h1>
      <Title name='Virat' Title={this.state.Title} Description={this.state.Description}/>
      <Title name='Gill'/>
      <Title name='Rohit'/>
        </div>
   }
};

export default Home