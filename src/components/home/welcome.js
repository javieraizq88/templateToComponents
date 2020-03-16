import React from "react";
import Welcomecard from "./welcomecard";

const Welcome = props =>{ 
    return ( 
        <>
        <h1 className="my-4"> Welcome to Modern Business</h1>

        <div className="row">
            {
                props.info.cardInfo.length > 0 &&
                props.info.cardInfo.map((item, index) => <Welcomecard key={index} data={item} />) 
                // cada elemento le pasa la info a cada welcomecard//
            }
            <Welcomecard /> 
            <Welcomecard /> 
            <Welcomecard /> 
        </div>
        </>
    )
}

export default Welcome;
