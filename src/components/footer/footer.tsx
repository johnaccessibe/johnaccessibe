
import React, { Component } from "react";
import "./footer.css"

export class Footer extends Component {
    //the render function will return of component UI

    public render(): JSX.Element {
        return (
            <div className="footer text-center">
                Copyrights: John Mogi
            </div>
        );

    }
}