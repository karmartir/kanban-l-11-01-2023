import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'reactstrap';
import {connect} from "react-redux";

function DeleteModal({task, deleteTask}) {
    const [modal, setModal] = useState(false);
    const [deleteChecking, setDeleteChecking] = useState('')

    const toggle = () => {
        setModal(!modal)
        setDeleteChecking('')
    };
    const onDelete = () => {
        if (task.name.toLowerCase() === deleteChecking.toLowerCase()) {
            deleteTask(task.id)
            setDeleteChecking('')
            toggle()
        } else {
            alert('Please write the correct task name!')
            setDeleteChecking('')
        }

    }
    /* console.log(deleteChecking, task.name)*/

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Delete
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}> <span style={{color: "red"}}>Are you sure you want to delete task? </span>
                    <br/>If so, please place task name in input (Case sensitivity disabled for your
                    convenience)</ModalHeader>
                <ModalBody>
                    <h2>{task.name.toUpperCase()}</h2>
                </ModalBody>
                <Form style={{margin: '20px'}}>
                    <input
                        type="text"
                        placeholder='Enter task name here!'
                        value={deleteChecking}
                        onChange={e => setDeleteChecking(e.target.value)}
                    />
                </Form>
                <ModalFooter>

                    <Button
                        color="danger"
                        onClick={() => onDelete()}
                    >
                        Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (taskId) => dispatch({type: 'DELETE_TASK', payload: taskId})
})
export default connect(null, mapDispatchToProps)(DeleteModal);