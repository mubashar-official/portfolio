import React from 'react';
import "./projects.css";
import ProjectCard from './project-card';
import { ProjectData } from '../../data/projects';
function Projects() {
    const data = ProjectData;

    return (
        <div className="project">
            <label className="section-title">Projects</label>
            <div>
            {data.map((item)=>{
                return(
                    <ProjectCard project={item} />
                )
            })}
            </div>
        </div>
    )
}

export default Projects
