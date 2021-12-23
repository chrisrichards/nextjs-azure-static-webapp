import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { updateMediaFile } from '../services/MediaFilesService'

export default function EditMediaFileModal({mediaFile, mediaFileEdited}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        updateMediaFile(mediaFile.id, data).then(response => {
            mediaFileEdited(response);
            setShow(false);
        });
    };
  
    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Media File</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="form-group col-md-3">
                  <label for="taskId">Id</label>
                  <input type="text" className="form-control" defaultValue={mediaFile.id} ref={register} name="id" id="id" disabled />
                </div>

            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label for="task">FileName</label>
                    <input type="text" className="form-control" defaultValue={mediaFile.fileName} ref={register} name="filename" id="filename" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label for="task">Description</label>
                    <input type="text" className="form-control" defaultValue={mediaFile.description} ref={register} name="description" id="description" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label for="task">Source Url</label>
                    <input type="text" className="form-control" defaultValue={mediaFile.sourceUrl} ref={register} name="sourceUrl" id="source-url" />
                </div>
            </div>
            <div className="btncenter">
              <input type="submit" className="btn btn-danger" />
            </div>
            </form>
          </Modal.Body>
          
        </Modal>
      </>
    );
}