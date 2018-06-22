import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks : [],
			isDisplayForm : false
		}
	}

	componentWillMount(){
		if(localStorage && localStorage.getItem('tasks')){
			var tasks = JSON.parse(localStorage.getItem('tasks'));
			this.setState({
				tasks : tasks
			})
		}
	}

	onGenerateData = () =>{
		var tasksDefault = [
			{id : 1, name : "hoc", status : true},
			{id : 2, name : "ngu", status : true},
			{id : 3, name : "game", status : false}
		];
		localStorage.setItem('tasks', JSON.stringify(tasksDefault));
	}

	onChangeDisplayForm = () =>{
		this.setState({
			isDisplayForm : !this.state.isDisplayForm
		})
	}

	onExit= () => {
		this.setState({
			isDisplayForm : false
		})
	}

  render() {
	  const { tasks, isDisplayForm } = this.state; //var task = this.state.tasks;
	  const elmTaskForm = isDisplayForm ? <TaskForm isExit={this.onExit} /> : '';
	  console.log(this.state.isDisplayForm)
    	return (
			<div className="container">
				<div className="text-center my-4">
					<h1>Quan Ly Cong Viec</h1>
				</div>

				<div className="row">
					<div className="col-4">
						{elmTaskForm}
					</div>

					<div className={isDisplayForm ? 'col-8 d-flex flex-wrap' :'col-12 d-flex flex-wrap'}>
						<div className="col-12 ">
							<button type="button" className="btn btn-success" onClick={this.onChangeDisplayForm}>
								<span className="fa fa-plus mr-2"></span>Them Cong Viec
							</button>
							<button type="button" className="btn btn-info ml-3"
								onClick = {this.onGenerateData}
							>Generate Data
							</button>
						</div>
					<Control />
					<TaskList tasks={tasks}/>
				</div>
			</div>
		</div>
    );
  }
}

export default App;
