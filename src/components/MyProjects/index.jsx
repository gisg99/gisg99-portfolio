import React from "react";
import { Project } from "../../components/Project";

const MyProjects = () => {
    const projects = [
        { 
            name: "Clinical Project",
            description: [
                "This clinical trial dissemination project, developed for a leading hospital in Guadalajara, aims to provide patients with easy access to oncology clinical trials. The platform allows patients to view eligibility criteria, save trials to their favorites, and register for those they are interested in. Doctors can also register new trials, evaluate patients, and track their progress.",
                "The app, initially developed in PHP, was later migrated to React.js to improve performance and enhance the user experience. The backend is powered by Node.js and Sequelize, with data stored in a MySQL database. This transition ensures a faster and more efficient system for both patients and healthcare providers.",
            ],
            image: "/img/Clinical1.png",
            images: [
                "/img/Clinical1.png",
                "/img/Clinical2.png",
                "/img/Clinical3.png",
                "/img/Clinical5.png",
            ],
        },
    ];

    return (
        <Project project={projects[0]}/>
    );
}

export { MyProjects };