import React from 'react'
import './project-card.css'

function ProjectCard({project}) {
    return (
        <div className="project-card">
                <div className="project-info">
                    <lable className="project-title">{project.title}</lable>
                    <div className="project-links">
                        {project.demo && ( 
                            <a className="project-link" href={project.demo}>
                                <div className="link-button">
                                    <i className="fi-rr-globe"></i> Demo
                                </div>
                            </a>
                        )}
                        {project.github && ( 
                            <a className="project-link" href={project.github}>
                                <div className="link-button">
                                <i class="devicon-github-original colored"></i> GitHub
                                </div>
                            </a>
                        )}
                    </div>
                    <p>{project.about}</p>
                    <div className="project-tag">
                        {project.tags.map((tag) => {
                           return (<label className="tag">{tag}</label>)
                        })}
                    </div>
                </div>
                <img src={project.image} className="project-photo" />

        </div>
    )
}

export default ProjectCard
