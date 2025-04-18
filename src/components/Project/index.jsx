import React from "react";

const Project = ({ project }) => {
    return (
        <div className="grid grid-cols-[40%_60%] gap-8 w-full h-full">
            <div className="flex flex-col w-full h-full gap-12">
                <h3>{project.name}</h3>
                {project.description.map((desc, index) => {
                    return (
                        <p key={index} className="text-gray-300">{desc}</p>
                    )
                })}
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
                {project.images.map((image, index) => (
                    <img key={project.name + index} src={image} alt={`${project.name} ${index}`} className="w-full h-auto rounded-md shadow-[-8px_8px_0px_0px_#485DD8]" />
                ))}
            </div>
        </div>
    )
};

export { Project };