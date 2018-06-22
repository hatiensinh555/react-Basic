import React, { Component } from 'react';

class TaskForm extends Component {
	onExit = () =>{
		this.props.isExit();
	}
  render() {
    return (
		<div className="card ">
			<div className="card-header bg-info d-flex justify-content-between">
				<span className="card-title pb-0 mb-0">Them Cong Viec</span>
				<span
					className="fa fa-times-circle"
					onClick={this.onExit}
				></span>
			</div>
			<div className="card-body">
				<form >
					<div className="form-group">
						<label >Ten: </label>
						<input type="text" className="form-control" name="name" />
					</div>
					<div className="form-group">
						<label >Trang Thai: </label>
						
						<select name="status" className="form-control" >
							<option value="1">Kich Hoat</option>
							<option value="2">An</option>
						</select>
						
					</div>
					<div>
						<button type="submit" className="btn btn-success mr-3"><span className="fa fa-plus mr-2"></span>Luu</button>
						<button type="submit" className="btn btn-danger"><span className="fa fa-close mr-2"></span>Huy</button>
					</div>
					
				</form>
				
			</div>
		</div>
    );
  }
}

export default TaskForm;
