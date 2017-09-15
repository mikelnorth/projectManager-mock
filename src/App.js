import React, { Component } from 'react';
import './App.css';
import uuid from "uuid"

import Projects from "./components/Projects";
import AddProject from "./components/AddProject";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      projects: [
       
      ]
    }

    this.handleAddProject = this.handleAddProject.bind(this)

  }

  componentWillMount(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecomerce Shoping Cart',
        category: 'Web Development'
      },
    ]})
  }
  

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects:projects
    })
  }

  handleDeleteProject(id){
    let copyProjects = this.state.projects;
    let index = copyProjects.findIndex( x => x.id);
    copyProjects.splice(index, 1)
    this.setState({projects:copyProjects})
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject}/>

        <Projects projects={this.state.projects} 
        onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
