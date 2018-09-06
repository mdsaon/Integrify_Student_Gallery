import React, { Component } from 'react';
import{
	BrowserRouter as Router,
	Route,
	NavLink,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';

class StudentList extends Component {
  render() {
    //const {students} = this.state
    let students= this.props.students.map((student, _id) =>
                                         <li key={_id} className="students-display">
                                          <NavLink exact to={`/StudentDetails/${student._id}`}>
																					<img src={student.src} alt="Images" className="studnet-img"/>
																					</NavLink>
                                          <b>First Name:</b> {student.firstName} <br />
                                          <b>Last Name:</b> {student.lastName} <br />
                                          <b>Title:</b> {student.title} <br />
                                         </li>);
    return (
      <div className="App-main">
          {students}
      </div>
    );
  }
}

export default StudentList;
