import React from 'react';
import Card from "./Card";
import {connect} from "react-redux";

const Column = ({status, tasks}) => {
    return (

        <div className="col">
            <h3>{status.status}</h3>
            {tasks
                .filter((task) => task.status === status.status)
                .sort((a, b) => a.priority > b.priority ? 1 : -1)
                .map((task) =>
                    <Card
                        key={task.id}
                        task={task}
                        status={status}
                    />)}
        </div>

    );
};
const mapStateToProps = (state) => ({
    tasks: state.tasks

})
export default connect(mapStateToProps) (Column);