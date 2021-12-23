import React, { useState, useEffect } from 'react';
import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { getPrompt } from '../services/MediaFileService';
import { projects } from '../utils/projectsData';

function Home() {
  const [prompt, setPrompt] = useState([])

  useEffect(() => {
    getPrompt().then(resp => {
        console.log(resp)
        setPrompt(resp.prompt)
      });
  })
  
  return (
    <div className="home">
      <h1>What Can I Deploy to Static Apps?</h1>
      <h2>{prompt}</h2>
      <div className="card-grid">
        {projects.map((project) => {
          const Icon = projectIcons[project.id];
          return <SmallCard key={project.id} Icon={Icon} title={project.name} slug={project.slug} />;
        })}
      </div>
    </div>
  )
}

export default Home;
