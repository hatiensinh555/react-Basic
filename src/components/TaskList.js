import React, { Component } from 'react';
import TaskItem from './TaskItem'
class TaskList extends Component {
  render() {
		const {tasks} = this.props;// const tasks = this.props.tasks
		const elmTasks = tasks.map((task,index) => {
			return <TaskItem key={index} task={task}/>
		});
    return (
        <div className="col-12 pr-0">
            <table className="table table-bordered table-hover">
                <thead>
						<tr>
							<th className="text-center">STT</th>
							<th className="text-center">Tên</th>
							<th className="text-center">Trạng Thái</th>
							<th className="text-center">Hành Động</th>
						</tr>
                </thead>
                <tbody>
						<tr>
							<td></td>
							<td>
								<input
									type="text"
									className="form-control"
									name="filterName"
								/>
							</td>
							<td>
								<select
									className="form-control"
									name="filterStatus"
								>
									<option value="">Tất Cả</option>
									<option value="">Ẩn</option>
									<option value="">Kích Hoạt</option>
								</select>
							</td>
							<td></td>
						</tr>
                  { elmTasks }
                </tbody>
            </table>
        </div>
    );
  }
}

export default TaskList;
