
import React, { Component } from "react";
import "./header.css"

export class Header extends Component {
    //the render function will return of component UI

    public render(): JSX.Element {
        return (
            <div className="header">
                <h1 className="jumbotron text-center">Hi</h1>
            </div>
        );

    }
}