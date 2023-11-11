/*
import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from "react-redux";

function UpdateModalWindow({props}) {
    const [modal, setModal] = useState(false);
    const initialState = {name: props.task.name, description: props.task.description, status: props.task.status, priority: props.task.priority}
    const [newTask, setNewTask] = useState(initialState)

    const toggle = () => setModal(!modal);
    const onUpdate = () => {
        props.updateTask()
        toggle()
    }
  /!*  console.log(newTask)*!/
    return (
        <>
            <Button color="danger" onClick={onUpdate}>
                Create new task
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update task</ModalHeader>
                <ModalBody>

                    <Form>
                         <FormGroup>
                            <Label for="examplePassword">
                              Task name
                            </Label>
                            <Input
                                placeholder="Enter task name here..."
                                value={newTask.name}
                                onChange={(event) => setNewTask({...newTask, name: event.target.value}) }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                               Status
                            </Label>
                            <Input
                                type="select"
                                value={newTask.status}
                                onChange={(event) => setNewTask({...newTask, status: event.target.value}) }
                            >
                                {props.statuses.map(el =>
                                    <option key={el.id}>{el.status}</option>)}

                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleSelect">
                               Priority
                            </Label>
                            <Input

                                type="select"
                                value={newTask.priority}
                                onChange={e => setNewTask({...newTask, priority: e.target.value})}
                            >
                                {props.priorities.map((el, index) =>
                                    <option key={index}>{el}</option> )}


                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleText">
                               Description
                            </Label>
                            <Input
                                type="textarea"
                                placeholder={'Enter description here...'}
                                value={newTask.description}
                                onChange={e => setNewTask({...newTask, description: e.target.value})}
                            />
                        </FormGroup>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="danger"
                        onClick={() => onUpdate()}
                    >
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
const mapStateToProps = (state) => ({
    statuses: state.boardStatuses,
    priorities: state.priorities
})
const mapDispatchToProps = (dispatch) => ({
    updateTask: (updateTask) => dispatch({type: 'UPDATE_TASK', payload: updateTask})
})
export default connect(mapStateToProps, mapDispatchToProps)(UpdateModalWindow);
*/

import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from "react-redux";

function UpdateTaskModal(props) {
    const [modal, setModal] = useState(false);

    const initialState = {
        name: props.task.name,
        description: props.task.description,
        status: props.task.status,
        priority: props.task.priority,
        id: props.task.id

    }
    const [updatedTask, setUpdatedTask] = useState(initialState)
    const toggle = () => setModal(!modal);

    const onUpdate = () => {
        props.updateTask(updatedTask)
        toggle()
    }


    return (
        <>
            <button type="button" className="btn btn-info" onClick={toggle}>
                Update
            </button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}> Update task</ModalHeader>
                <ModalBody>

                    <Form>
                        <FormGroup>

                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">
                                Task name
                            </Label>
                            <Input
                                // id="examplePassword"
                                // name="password"
                                placeholder="enter task name..."
                                value={updatedTask.name}
                                onChange={(e) => setUpdatedTask({...updatedTask, name: e.target.value})}
                                // type="password"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                                Status
                            </Label>
                            <Input
                                type="select"
                                value={updatedTask.status}
                                onChange={(e) => setUpdatedTask({...updatedTask, status: e.target.value})}
                            >
                                {props.statuses.map((el) =>
                                    <option key={el.id}>
                                        {el.status}
                                    </option>
                                )}

                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleSelect">
                                Priority
                            </Label>
                            <Input
                                type="select"
                                value={updatedTask.priority}
                                onChange={(e) => setUpdatedTask({...updatedTask, priority: +e.target.value})}
                            >
                                {props.priorities.map((el, index) =>
                                    <option key={index}>
                                        {el}
                                    </option>
                                )}
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleText">
                                Description
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                                value={updatedTask.description}
                                onChange={(e) => setUpdatedTask({...updatedTask, description: e.target.value})}
                            />
                        </FormGroup>


                    </Form>


                </ModalBody>
                <ModalFooter>
                    <Button color="danger"
                            onClick={onUpdate}
                    >
                        Update
                    </Button>{' '}
                    <Button color="success" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}


const mapStateToProps = (state) => ({
    statuses: state.boardStatuses,
    priorities: state.priorities,
})

const mapDispatchToProps = (dispatch) => ({
    updateTask: (updateTask) => dispatch({
        type: 'UPDATE_TASK',
        payload: updateTask
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTaskModal);