import React from 'react';


const Academic = (props) =>{

    const {
        name, profession, avatar
    } = props;

    return (
        <>
        <div className="Academic-title">
        Academic-title
        </div>
        <div className="Academic-items">
            <div className="Academic-item">Academic-item</div>
            <div className="Academic-item">Academic-item</div>
            <div className="Academic-item">Academic-item</div>
        </div>
        </>
    );
};

export default Academic;