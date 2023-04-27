import React from "react"
import { Link } from "react-router-dom"

import "./BackButton.css"

const BackButton = () => {
    return (
        <>
            <Link to="/"  className="backButton">
             
                    <i className="fa fa-arrow-left"></i>
           
            </Link>

        </>

    )
}

export default BackButton