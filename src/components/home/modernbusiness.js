import React from "react";

const Modernbusiness = props => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <h2>{props.mbusiness.mTitle}</h2>
                    <p>{props.mbusiness.descrip}</p>
                    {
                        <ul>
                            <li><strong>{props.mbusiness.mBInfo.lista1}</strong></li>
                            <li>{props.mbusiness.mBInfo.lista2}</li>
                            <li>{props.mbusiness.mBInfo.lista3}</li>
                            <li>{props.mbusiness.mBInfo.lista4}</li>
                            <li>{props.mbusiness.mBInfo.lista5}</li>
                        </ul>
                    }
                    <p>{props.mbusiness.descrip2}</p>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid rounded" 
                    src={props.mbusiness.mImagen}
                    alt="" />
                </div>
            </div>
        </>
    )
}

export default Modernbusiness;