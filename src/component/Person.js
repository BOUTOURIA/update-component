import React ,{component} from "react";
import Counter from "./Counter";

class Person extends React.Component {
    state = {
      Person: {
        fullName: "BOUTOURIA Anis",
        bio: "GO MY CODE's Student",
        imgSrc: './image1.png' ,
        profession: "Manager"
      },
      show: true
    };
  
    handleShowPerson = () => {
      this.setState({
        ...this.state,
        show: !this.state.show
      });
    };
  
    render() {
      return (
        <div>
          {this.state.show && (
            <>
              <h1>{this.state.Person.fullName}</h1>
              <h1>{this.state.Person.bio}</h1>
              <img src={this.state.Person.imgSrc} alt="mySuperImage"></img>
              <h1>{this.state.Person.profession}</h1>
              <br></br>
             
              <Counter/>
            </>
          )}
  
          <button onClick={this.handleShowPerson}>click to Show/Hide</button>
        </div>
      );
    }
  }
  export default Person;