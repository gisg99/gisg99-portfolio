import React from "react";

const Project = ({ project }) => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const nextImage = () => {
        setSelectedImage((prevIndex) => {
            const newIndex = (prevIndex + 1) % project.images.length;
            return newIndex;
        });
    }

    const prevImage = () => {
        setSelectedImage((prevIndex) => {
            const newIndex = (prevIndex - 1 + project.images.length) % project.images.length;
            return newIndex;
        });
    }
    
    return (
        <div className="flex flex-col-reverse md:grid md:grid-cols-[40%_60%] gap-12 w-full h-full p-2 md:p-0">
            <div className="flex flex-col w-full h-full gap-12">
                <h3 className="poppins font-medium">{project.name}</h3>
                {project.description.map((desc, index) => {
                    return (
                        <p key={index} className="text-gray-300">{desc}</p>
                    )
                })}
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
                {project.images.map((image, index) => (
                    <img key={project.name + index} src={image} alt={`${project.name} ${index}`} className="w-full h-auto rounded-md shadow-[-8px_8px_0px_0px_#485DD8] hover:-translate-y-1 duration-300" onClick={() => setSelectedImage(index)}/>
                ))}
            </div>
            {selectedImage !== null && (
                <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-4 p-2 md:p-0 bg-[#000000C7] z-40">
                    <div className="flex flex-1 items-center gap-4 w-full justify-center">
                        <div onClick={prevImage} className="p-8"><img className=" w-4 invert" src="https://cdn-icons-png.flaticon.com/128/5343/5343109.png"/></div>
                        <img src={project.images[selectedImage]} alt={project.name} className="max-h-[calc(95svh-200px)] rounded-md"/>
                        <div onClick={nextImage} className="p-8"><img className=" w-4 invert rotate-180" src="https://cdn-icons-png.flaticon.com/128/5343/5343109.png"/></div>
                    </div>
                    <div className="flex justify-center items-center gap-2 w-full h-auto mt-4">
                        {project.images.map((image, index) => (
                            <div className={`${selectedImage === index ? '-translate-y-1' : ''} w-40 h-24 bg-contain rounded-md hover:-translate-y-1 duration-200`} style={{ backgroundImage: `url('${image}')`}} onClick={() => setSelectedImage(index)}></div>
                        ))}
                    </div>
                    <div onClick={() => setSelectedImage(null)} className="p-8"><img className=" w-4 invert" src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png"/></div>
                </div>
            )}
        </div>
    )
};

export { Project };