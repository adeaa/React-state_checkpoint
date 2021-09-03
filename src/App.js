import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import Profile from "./Profile";

class App extends Component {
  state = {
    person: {
      fullName: "Arya Stark",
      bio: `The third child and second daughter of Lord Eddard Stark or as I call him Daddyy 🤤.
      I sometimes have many faces but you can't blame me ,I'm a ✨Gemini✨♊.
      I Killed the Night King so yeah.. hmu or I'll put your name on the list.`,
      imgSrc:
        "https://p.kindpng.com/picc/s/604-6048072_arya-stark-clipart-jpg-library-stock-got-arya.png",
      profession: "Assassin",
    },
    show: true,
    timer: 0,
  };



  showAndHide = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    if (!this.state.show) {
      return (
        <div className="container">
          <Button
            name="Show"
            btnclass="btn btn-outline-success btn-lg"
            handleClick={this.showAndHide}
          />
          <span className="btn btn-dark btn-lg">{Math.floor(this.state.timer/60)} min : {this.state.timer%60} sec</span>
        </div>
      );
    }

    return (
      <div className="container">
        <Profile
          fullName={this.state.person.fullName}
          bio={this.state.person.bio}
          imgSrc={this.state.person.imgSrc}
          profession={this.state.person.profession}
        />
        <Button
          name="Hide"
          btnclass="btn btn-outline-danger btn-lg"
          handleClick={this.showAndHide}
        />
        <span className="btn btn-dark btn-lg">{Math.floor(this.state.timer/60)} min : {this.state.timer%60} sec</span>
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }
}

export default App;
