import React from 'react'
import AddMediaFileModal from './AddMediaFileModal'
import EditMediaFileModal from './EditMediaFileModal'
import { CloudDownload, Trash } from "heroicons-react";

export const MediaFiles = ({ mediaFiles, mediaFileCreated, mediaFileEdited, deleteMediaFile }) => {
    console.log('mediaFiles length:::', mediaFiles)
    if (mediaFiles.length === 0) return null

    const MediaFileRow = (mediaFile, index) => {

        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{mediaFile.id}</td>
                <td>{mediaFile.fileName}</td>
                <td>{mediaFile.sourceUrl}</td>
                <td>{mediaFile.description}</td>
                <td>{mediaFile.status}</td>
                <td>
                    <a href={mediaFile.url} className="btn btn-sm right"><CloudDownload size={20} /></a>
                    <EditMediaFileModal mediaFile={mediaFile} mediaFileEdited={mediaFileEdited} />
                    <button type="button" onClick={(e) => deleteMediaFile(mediaFile.id)} className="btn btn-sm right"><Trash size={20} /></button>
                </td>
            </tr>
        )
    }

    const medaiFilesTable = mediaFiles.map((mediaFile, index) => MediaFileRow(mediaFile, index))

    return (
        <div className="container py-3">
            <div className="d-flex w-100 mb-2">
                <h2 className="flex-grow-1">Media Files</h2>
                <AddMediaFileModal mediaFileCreated={mediaFileCreated} />
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">FileName</th>
                        <th scope="col">Source Url</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {medaiFilesTable}
                </tbody>
            </table>
        </div>
    )
}