import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";

class AddStudent extends Component {
  state = {
    firstName: "",
    lastName: "",
    title: "",
    nationality: "",
    skills: "",
    aim: "",
    vision: "",
    motivation: "",
    quote: "",
    joinedDate: "",
    src: null
  };

  onChange = e => {
    switch (e.target.name) {
      case "src":
        this.setState({ src: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.src);
    }
  };

  handleAddInput = e => {
    e.preventDefault();
    this.props.handleAddInput(this.state);
  };
  render() {
    return (
      <div className="App-form">
        <form encType="multipart/form-data" method="POST">
          <label for="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.onChange}
          />
          <label for="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.onChange}
          />
          <label for="firstName">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <label for="lastName">Nationality</label>
          <input
            type="text"
            name="nationality"
            id="nationality"
            placeholder="Nationality"
            value={this.state.nationality}
            onChange={this.onChange}
          />
          <label for="firstName">Skills</label>
          <input
            type="text"
            name="skills"
            id="skills"
            placeholder="Skills"
            value={this.state.skills}
            onChange={this.onChange}
          />
          <label for="lastName">Aim</label>
          <input
            type="text"
            name="aim"
            id="aim"
            placeholder="Aim"
            value={this.state.aim}
            onChange={this.onChange}
          />
          <label for="firstName">Vision</label>
          <input
            type="text"
            name="vision"
            id="vision"
            placeholder="Vision"
            value={this.state.vision}
            onChange={this.onChange}
          />
          <label for="lastName">Motivation</label>
          <input
            type="text"
            name="motivation"
            id="motivation"
            placeholder="Motivation"
            value={this.state.motivation}
            onChange={this.onChange}
          />
          <label for="firstName">Favourite Quote</label>
          <input
            type="text"
            name="quote"
            id="quote"
            placeholder="FavouriteQuote"
            value={this.state.quote}
            onChange={this.onChange}
          />
          <label for="lastName">Joined Date</label>
          <input
            type="text"
            name="joinedDate"
            id="joinedDate"
            placeholder="joinedDate"
            value={this.state.joinedDate}
            onChange={this.onChange}
          />
          <label for="image">Upload Image</label>
          <input type="file" name="src" id="src" onChange={this.onChange} />
          <button onClick={this.handleAddInput} className="save-button">
            <NavLink exact to="/">
              Save
            </NavLink>
          </button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
