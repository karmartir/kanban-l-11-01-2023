import React from 'react';
import Card from "./Card";
import {connect} from "react-redux";

const Column = ({status, tasks}) => {
    return (

        <div className="col">
            <h3>{status.status}</h3>
            {tasks.filter((task) =>
                task.status.toLowerCase() === status.status.toLowerCase()).map((task) =>
                    <Card
                        key={task.id}
                        task={task}
                    />)}
        </div>

    );
};
const mapStateToProps = (state) => ({
    tasks: state.tasks

})
export default connect(mapStateToProps) (Column);