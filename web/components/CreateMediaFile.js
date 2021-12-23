import React from 'react'
import { useForm } from "react-hook-form";
import { createMediaFile } from '../services/MediaFilesService'

export default function CreateMediaFile(props) {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        createMediaFile(data).then(response => {
            props.mediaFileCreated();
            e.target.reset();
        });
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>New Media File</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="filename">FileName</label>
                            <input type="text" className="form-control" name="filename" id="filename" ref={register} placeholder="Enter a filename" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="description">Description</label>
                            <input type="text" className="form-control" name="description" id="description" ref={register} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="sourceUri">Source Url</label>
                            <input type="text" className="form-control" name="sourceUrl" id="sourceUrl" ref={register} />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
                </div>
            </div>
        </div>
    )
}