import React from 'react';
import {connect} from "react-redux";
import DeleteModal from "../DeleteModal";

const Card = (props) => {
    const {task, changePriority, priorities, moveTask, statuses} = props
 /*   console.log(statuses[statuses.length-1].status)*/

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{task.name}</h5>
                <p className="card-text">{task.description} </p>
            </div>
            <ul className="list-group list-group-flush">
               <div style={{display: 'flex', justifyContent:'center'}}>

                <button
                    onClick={() => changePriority(task.id, 'up')}
                    type='button' className='btn btn-success'
                    disabled={task.priority=== priorities[priorities.length-1]}
                >
                    ↑
                </button>

                <li className="list-group-item">priority: {task.priority}</li>
                <button
                    onClick={() => changePriority(task.id, 'down')}
                    type='button'
                    className='btn btn-success'
                    disabled={task.priority===priorities[0]}
                >
                    ↓
                </button>

               </div>
                <li className="list-group-item">status: {task.status}</li>
            </ul>
            <div className="card-body" style={{display: 'flex', justifyContent: 'center'}}>

                <button onClick={() => moveTask('left', task.status, task.id)}
                        type='button' className='btn btn-success'
                        disabled={statuses[0].status === task.status}
                >
                    ←
                </button>

                 <button type='button' className='btn btn-info'> Update </button>

               <DeleteModal task={task}/>



                <button onClick={() => moveTask('right', task.status, task.id)}
                        type='button' className='btn btn-success'
                        disabled={statuses[statuses.length -1].status === task.status}>
                    →
                </button>


            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    priorities: state.priorities,
    statuses: state.boardStatuses
})

const mapDispatchToProps = (dispatch) => ({
    changePriority: (taskId, direction) => dispatch({type: 'CHANGE_PRIORITY', payload: {id: taskId, direction}}),
    moveTask: (direction, taskStatus, taskId) => dispatch({type: 'MOVE_TASK', payload: {status:taskStatus, direction, id: taskId}})
})
export default connect(mapStateToProps, mapDispatchToProps) (Card);