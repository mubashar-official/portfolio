import React from 'react';
import "./projects.css";
import ProjectCard from './project-card';
import { ProjectData } from '../../data/projects';
import Separator from '../../common/separator';
function Projects() {
    const data = ProjectData;

    return (
        <div className="project">
            <Separator />
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
