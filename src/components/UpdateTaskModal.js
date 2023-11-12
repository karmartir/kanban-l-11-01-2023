import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from "react-redux";

function UpdateTaskModal({statuses, priorities, updateTask, task}) {
    const [modal, setModal] = useState(false);
    const initialState = {id: task.id, name: task.name, description: task.description, status: task.status, priority: task.priority}
    const [updatedTask, setUpdatedTask] = useState(initialState)

    const toggle = () => setModal(!modal);

    //I'm added this part to avoid input update by empty strings!!! Task will remain same in that case.
    const blankCheck = () => {
        if (updatedTask.name !== '') {
            onUpdate()
        }
        toggle()
        setUpdatedTask(initialState)
    }

    const onUpdate = () => {
        updateTask(updatedTask)
        toggle()
    }
    /*  console.log(newTask)*/
    return (
        <div>
            <button
                type='button'
                className='btn btn-info'
                onClick={blankCheck}
            >
                Update
            </button>

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
                                value={updatedTask.name}
                                onChange={(event) => setUpdatedTask({...updatedTask, name: event.target.value})}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                                Status
                            </Label>
                            <Input
                                type="select"
                                value={updatedTask.status}
                                onChange={(event) => setUpdatedTask({...updatedTask, status: event.target.value})}
                            >
                                {statuses.map(el =>
                                    <option key={el.id}>{el.status}</option>)}

                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleSelect">
                                Priority
                            </Label>
                            <Input

                                type="select"
                                value={updatedTask.priority}
                                onChange={e => setUpdatedTask({...updatedTask, priority: +e.target.value})}
                            >
                                {priorities.map((el, index) =>
                                    <option key={index}>{el}</option>)}


                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleText">
                                Description
                            </Label>
                            <Input
                                type="textarea"
                                placeholder={'Enter description here...'}
                                value={updatedTask.description}
                                onChange={e => setUpdatedTask({...updatedTask, description: e.target.value})}
                            />
                        </FormGroup>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="danger"
                        onClick={() => blankCheck()}
                    >
                        Update
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => ({
    statuses: state.boardStatuses,
    priorities: state.priorities
})
const mapDispatchToProps = (dispatch) => ({
    updateTask: (updateTask) => dispatch({type: 'UPDATE_TASK', payload: updateTask})
})
export default connect(mapStateToProps, mapDispatchToProps)(UpdateTaskModal);