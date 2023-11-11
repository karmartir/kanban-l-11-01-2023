import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from "react-redux";

function CreateModalWindow({statuses, priorities, createTask}) {
    const [modal, setModal] = useState(false);
    const initialState = {name: '', description: '', status: statuses[0].status, priority: priorities[0]}
    const [newTask, setNewTask] = useState(initialState)

    const toggle = () => setModal(!modal);

    const blankCheck = () => {
        if (newTask.name !== '') {
            onCreate()
        }
        toggle()
        setNewTask(initialState)
    }
    const onCreate = () => {
        createTask({...newTask, id: Date.now()})
    }
    /*  console.log(newTask)*/
    return (
        <div>
            <Button color="danger" onClick={blankCheck}>
                Create new task
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create new task</ModalHeader>
                <ModalBody>

                    <Form>
                        <FormGroup>
                            <Label for="examplePassword">
                                Task name
                            </Label>
                            <Input
                                placeholder="Enter task name here..."
                                value={newTask.name}
                                onChange={(event) => setNewTask({...newTask, name: event.target.value})}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                                Status
                            </Label>
                            <Input
                                type="select"
                                value={newTask.status}
                                onChange={(event) => setNewTask({...newTask, status: event.target.value})}
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
                                value={newTask.priority}
                                onChange={e => setNewTask({...newTask, priority: +e.target.value})}
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
                                value={newTask.description}
                                onChange={e => setNewTask({...newTask, description: e.target.value})}
                            />
                        </FormGroup>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="danger"
                        onClick={() => blankCheck()}
                    >
                        Create
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
    createTask: (newTask) => dispatch({type: 'CREATE_TASK', payload: newTask})
})
export default connect(mapStateToProps, mapDispatchToProps)(CreateModalWindow);