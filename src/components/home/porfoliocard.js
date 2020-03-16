import React from "react";

const Porfoliocard = props => {
    return (
        <>
            <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                    <a href="/#"><img className="card-img-top" src={props.pImagen} alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{props.pTitulo}</a>
                        </h4>
                        <p className="card-text">{props.pDescrip}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Porfoliocard;