import React, { useState, useEffect } from 'react';
import Header from './Header'
import { MediaFiles } from './MediaFiles'
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
      <main>
        <MediaFiles mediaFiles={mediaFiles} mediaFileCreated={mediaFileCreated} mediaFileEdited={mediaFileEdited} deleteMediaFile={delMediaFile}></MediaFiles>
      </main>
    </div>
  );
}

export default Dashboard;