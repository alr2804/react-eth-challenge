import React from 'react';

const Languages = (props) =>{

    const {
        name, profession, avatar
    } = props;

    return (
        <>
        <div className="Languages-title">
        Languages-title
        </div>
        <div className="Languages-items">
            <div className="Languages-item">Languages-item</div>
            <div className="Languages-item">Languages-item</div>
            <div className="Languages-item">Languages-item</div>
        </div>
        </>
    );
};

export default Languages;