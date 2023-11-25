import React from 'react';
import './Profile.module.css';

class Profile extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           content: '',
       };
   }

   handleChange = (event) => {
       this.setState({content: event.target.value});
   }

   handleSubmit = (event) => {
       alert('You have submitted: ' + this.state.content);
       event.preventDefault();
   }

   render() {
       return (
           <div className="ThreeThree">
               <h1>Submit your three three:</h1>
               <form onSubmit={this.handleSubmit}>
                   <label>
                       Your Three Three:
                       <input type="text" value={this.state.content} onChange={this.handleChange} />
                   </label>
                   <input type="submit" value="Submit" />
               </form>
               </div>
        );
    }
}

export default Profile;