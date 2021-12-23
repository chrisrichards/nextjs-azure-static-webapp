import React, { useState, useEffect } from 'react';
import Header from './Header'
import { MediaFiles } from './MediaFiles'
import CreateMediaFile from './CreateMediaFile'
import { getAllMediaFiles, deleteMediaFile } from '../services/MediaFilesService'

function Dashboard() {

  const [mediaFiles, setMediaFiles] = useState([])
  const [numberOfMediaFiles, setNumberOfMediaFiles] = useState([])
  const [isMediaFileEdited, setMediaFileEdited] = useState(false)

  useEffect(() => {
    getAllMediaFiles().then(mediaFiles => {
        console.log(mediaFiles)
        setMediaFiles(mediaFiles)
      });
  }, [numberOfMediaFiles, isMediaFileEdited])

  function delMediaFile(mediaFileId) {
      deleteMediaFile(mediaFileId).then(response => {
        console.log(response)
        setNumberOfMediaFiles(numberOfMediaFiles - 1)
      });
  }

  function mediaFileCreated() {
    setNumberOfMediaFiles(numberOfMediaFiles + 1)
  }

  function mediaFileEdited(res) {
     setMediaFileEdited(res)
  }
    
  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-12">
              <CreateMediaFile mediaFileCreated={mediaFileCreated}></CreateMediaFile>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <MediaFiles mediaFiles={mediaFiles} deleteMediaFile={delMediaFile} mediaFileEdited={mediaFileEdited}></MediaFiles>
      </div>
    </div>
  );
}

export default Dashboard;