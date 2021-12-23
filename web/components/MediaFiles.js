import React from 'react'
import EditMediaFileModal from './EditMediaFileModal'

export const MediaFiles = ({mediaFiles, deleteMediaFile, mediaFileEdited}) => {
    console.log('mediaFiles length:::', mediaFiles)
    if (mediaFiles.length === 0) return null

    const MediaFileRow = (mediaFile,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{mediaFile.id}</td>
                  <td>{mediaFile.fileName}</td>
                  <td>{mediaFile.description}</td>
                  <td>{mediaFile.sourceUrl}</td>
                  <td>{mediaFile.url}</td>
                  <td>{mediaFile.status}</td>
                  <td>
                    <div className="row">
                        <div className="col-md-6">
                            {mediaFile.status}
                        </div>
                        <div className="col-md-3">
                            <EditMediaFileModal mediaFile={mediaFile} mediaFileEdited={mediaFileEdited}/>
                        </div>
                        <div className="col-md-3">
                            <button type="button" onClick={(e) => deleteMediaFile(mediaFile.id)} className="btn btn-danger right">Delete</button>
                        </div>
                    </div>
                  </td>
              </tr>
          )
    }

    const medaiFilesTable = mediaFiles.map((mediaFile,index) => MediaFileRow(mediaFile,index))

    return(
        <div className="container">
            <h2>Media Files</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>FileName</th>
                    <th>Description</th>
                    <th>Source Url</th>
                    <th>Url</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {medaiFilesTable}
                </tbody>
            </table>
        </div>
    )
}