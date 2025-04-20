import React from "react";

const TechnologiesChart = () => {
    const skills = [
        { name: 'HTML, JS & CSS', percentage: 90, gradient: ['#3babf6', '#5413bb'] },
        { name: 'React.js', percentage: 75, gradient: ['#3babf6', '#5413bb'] },
        { name: 'JavaScript', percentage: 85, gradient: ['#3babf6', '#5413bb'] },
        { name: 'Node.js', percentage: 60, gradient: ['#3babf6', '#5413bb'] },
      ];
    return (
        <div className="flex flex-col items-center w-full mt-8 gap-8 md:gap-4">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col-reverse md:flex-row items-center gap-2 w-full">
                    <div className="flex w-1/4 justify-between gap-2 text-gray-300">
                        <b className="w-full">{skill.name}</b>
                    </div>
                    <div className="relative h-2 w-full rounded-full overflow-hidden">
                        <div 
                            className="absolute top-0 left-0 h-full rounded-full"
                            style={{
                            width: `${skill.percentage}%`,
                            background: `linear-gradient(to right, ${skill.gradient[0]}, ${skill.gradient[1]})`
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export { TechnologiesChart };