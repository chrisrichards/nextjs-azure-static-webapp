import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { updateMediaFile } from '../services/MediaFilesService'
import { Pencil } from "heroicons-react";

export default function EditMediaFileModal({ mediaFile, mediaFileEdited }) {
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
      <Button variant="sm" onClick={handleShow}>
        <Pencil size={20} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Media File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">Id</label>
              <input type="text" className="form-control" readOnly name="id" id="id" ref={register} defaultValue={mediaFile.id} />
            </div>
            <div className="mb-3">
              <label htmlFor="filename" className="form-label">Filename</label>
              <input type="text" className="form-control" name="filename" id="filename" ref={register} defaultValue={mediaFile.fileName} />
            </div>
            <div className="mb-3">
              <label htmlFor="sourceUrl" className="form-label">Source Url</label>
              <input type="text" className="form-control" name="sourceUrl" id="source-url" ref={register} defaultValue={mediaFile.sourceUrl} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea className="form-control" name="description" id="description" rows="3" ref={register} defaultValue={mediaFile.description} />
            </div>
            <input type="submit" className="btn btn-primary" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}