import React from "react";

const Welcomecard = props =>{ 
    console.log(props.data)

    // cada card tiene un titulo, una descripcion, un label y un URL//
    return ( 
        <>
            <div className="col-lg-4 mb-4">
                <div className="card h-100">  
                    <h4 className="card-header">Card Title</h4>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    </div>
                    <div className="card-footer">
                        <a href="/#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcomecard;
