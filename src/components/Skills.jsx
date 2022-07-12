import React from 'react';


const Skills = (props) =>{

    const {
        name, profession, avatar
    } = props;

    return (
        <>
        <div className="Skills-title">
        Skills-title
        </div>
        <div className="Skills-items">
            <div className="Skills-item">Skills-item</div>
            <div className="Skills-item">Skills-item</div>
            <div className="Skills-item">Skills-item</div>
        </div>
        </>
    );
};

export default Skills;