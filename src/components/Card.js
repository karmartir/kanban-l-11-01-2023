import React from 'react';

const Card = (props) => {
    const task = props.task
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{task.name}</h5>
                <p className="card-text">{task.description} </p>
            </div>
            <ul className="list-group list-group-flush">
               <div style={{display: 'flex', justifyContent:'center'}}>

                <button type='button' className='btn btn-success'> ↑</button>
                <li className="list-group-item">priority: {task.priority}</li>
                <button type='button' className='btn btn-success'> ↓</button>

               </div>
                <li className="list-group-item">status: {task.status}</li>
            </ul>
            <div className="card-body" style={{display: 'flex'}}>
                <button type='button' className='btn btn-success'> ←</button>
                <button type='button' className='btn btn-danger'> Delete</button>
                <button type='button' className='btn btn-success'> →</button>
                <button type='button' className='btn btn-info'> Info</button>
            </div>
        </div>
    );
};
export default Card;