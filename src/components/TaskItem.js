import React, { Component } from 'react';

class TaskList extends Component {
  render() {
	  var {task} = this.props;
    return (
		<tr>
			<td>{ task.id }</td>
			<td>{ task.name }</td>
			<td className=" text-center">
				<span className={ task.status ? 'badge badge-success' : 'badge badge-warning' } 
			>{ task.status ?'Hoan Thanh' : 'Chua Hoan Thanh' }</span></td>
			
			<td className="text-center">
				<button
					type="button"
					className="btn btn-warning mr-1">
					<span className="fa fa-pencil mr-1"></span>Sửa
				</button>
				
				<button
					type="button" className="btn btn-danger">
					<span className="fa fa-trash mr-1"></span>Xóa
				</button>
			</td>
		</tr>
    );
  }
}

export default TaskList;
