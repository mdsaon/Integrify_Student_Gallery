import React, { Component } from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import StudentDetails from "./components/StudentDetails";
import "./App.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";

class App extends Component {
  state = {
    students: []
  };
  componentDidMount() {
    axios.get("/api/students").then(res => {
      this.setState({ students: res.data });
      console.log(this.state.students);
    });
  }
  handleAddInput = data => {
    const fields = new FormData();
    fields.append("firstName", data.firstName);
    fields.append("lastName", data.lastName);
    fields.append("title", data.title);
    fields.append("nationality", data.nationality);
    fields.append("skills", data.skills);
    fields.append("aim", data.aim);
    fields.append("vision", data.vision);
    fields.append("motivation", data.motivation);
    fields.append("quote", data.quote);
    fields.append("joinedDate", data.joinedDate);
    fields.append("src", data.src);
    axios
      .post("/api/students", fields, {
        "content-type": "multipart/form-data"
      })
      .then(res =>
        this.setState({ students: [...this.state.students, res.data] })
      );
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div className="Container">
            <h1 className="App-title">Integrify Students Gallery</h1>
            <div className="App-header">
              <div className="App-menu">
                <NavLink NavLink exact to="/" className="AddStudent">
                  Home
                </NavLink>
                <NavLink NavLink exact to="/AddStudent" className="AddStudent">
                  Add New Student
                </NavLink>
              </div>
            </div>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return <StudentList students={this.state.students} />;
                }}
              />
              <Route
                exact
                path="/AddStudent"
                render={() => {
                  return <AddStudent handleAddInput={this.handleAddInput} />;
                }}
              />
              <Route
                exact
                path="/StudentDetails/:_id"
                render={props => {
                  return (
                    <StudentDetails {...props} students={this.state.students} />
                  );
                }}
              />
            </Switch>
            <div className="App-footer">DevelopedBy@2018_Saidur_Rahman</div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
