import React from 'react';


const Interest = (props) =>{

    const {
        name, profession, avatar
    } = props;

    return (
        <>
        <div className="Interest-title">
        Interest-title
        </div>
        <div className="Interest-items">
            <div className="Interest-item">Interest-item</div>
            <div className="Interest-item">Interest-item</div>
            <div className="Interest-item">Interest-item</div>
        </div>
        </>
    );
};

export default Interest;