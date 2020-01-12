
import React, { Component } from "react";
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
import { Main } from "../main/main";
import { Footer } from "../footer/footer";
export class Layout extends Component {
    //the render function will return of component UI



    public render(): JSX.Element {
        return (
            <div className="layout container-fluid">

                {/* <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container> */}
                <header>

                    <Header />

                </header>
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <main>
                            <Main />
                        </main>
                    </div>
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        );

    }
}