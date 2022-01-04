import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { createMediaFile } from '../services/MediaFilesService';
import { Plus } from "heroicons-react";

export default function AddMediaFileModal({ mediaFileCreated }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    createMediaFile(data).then(response => {
      mediaFileCreated();
      setShow(false);
    });
  };

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        <Plus />
        Add Media File
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Media File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="filename" className="form-label">Filename</label>
              <input type="text" className="form-control" name="filename" id="filename" ref={register} placeholder="Enter a filename" />
            </div>
            <div className="mb-3">
              <label htmlFor="sourceUrl" className="form-label">Source Url</label>
              <input type="text" className="form-control" name="sourceUrl" id="source-url" ref={register} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea className="form-control" name="description" id="description" rows="3" ref={register} />
            </div>
            <input type="submit" className="btn btn-primary" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}