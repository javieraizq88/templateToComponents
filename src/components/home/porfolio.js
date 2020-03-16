import React from "react";
import Porfoliocard from "./porfoliocard";

const Porfolio = props => {
    return (
        <>
            <h2>{props.portfolio.title}</h2>
            <div className="row">
                {
                !!props.portfolio.portafInfo &&
                props.portfolio.portafInfo.map((elem, i) =>//manda la imagen segun la posicion en la q esta// 
                    {
                        return (
                            <Porfoliocard
                            pImagen={elem.pImagen}
                            pTitulo={elem.pTitulo}
                            pDescrip={elem.pDescrip}
                            />
                            )
                        }
                    )
                }
            </div>
        </>
    )
}

export default Porfolio;