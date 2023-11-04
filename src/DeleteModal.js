import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from "react-redux";

function DeleteModal({task, deleteTask}) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const onDelete = () => {
        deleteTask(task.id)
        toggle()
    }
    
    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Delete
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Are you sure you want to delete task?</ModalHeader>
                <ModalBody>
                    <h2>{task.name.toUpperCase()}</h2>
                </ModalBody>
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