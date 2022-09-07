import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Email(){
    return(
        <div>
            <a href="#" className="email--container">
                <div className="email">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                </div>
                <p>Email</p>
            </a>
        </div>
    )
}