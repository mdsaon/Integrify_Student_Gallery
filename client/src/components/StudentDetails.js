import React, { Component } from "react";
import StudentList from "./StudentList";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";

class StudentDetails extends Component {
  render() {
    const studnetId = this.props.match.params._id;
    const newObjct = this.props.students.filter(
      (student, i) => student._id === studnetId
    );
    return (
      <div>
        {newObjct.map(student => (
          <ul key={student._id} className="student-details-section">
            <div className="student-img-details">
              <li>
                <img
                  src={"/" + student.src}
                  alt="Images"
                  className="studnet-img-details"
                />
              </li>
            </div>
            <div className="student-img-details-info">
              <li>
                <b>First Name: {student.firstName}</b> <br />
                <b>
                  Last Name:
                  {student.lastName}
                </b>
                <br />
                <b>Title: {student.title}</b>
                <br />
                <b>
                  Nationality:
                  {student.nationality}
                </b>
                <br />
                <b>Skills: {student.skills}</b>
                <br />
                <b>
                  Vision:
                  {student.vision}
                </b>
                <br />
                <b>Motivation: {student.motivation}</b>
                <br />
                <b>
                  Quote:
                  {student.quote}
                </b>
                <br />
              </li>
            </div>
          </ul>
        ))}
      </div>
    );
  }
}

export default StudentDetails;
