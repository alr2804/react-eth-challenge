import React from 'react';


const Experience = (props) =>{

    const {
        name, profession, avatar
    } = props;

    return (
        <>
        <div className="Experience-title">
        Experience-title
        </div>
        <div className="Experience-items">
            <div className="Experience-item">Experience-item</div>
            <div className="Experience-item">Experience-item</div>
            <div className="Experience-item">Experience-item</div>
        </div>
        </>
    );
};

export default Experience;