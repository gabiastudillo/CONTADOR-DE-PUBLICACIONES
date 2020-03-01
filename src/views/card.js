import React, { Component } from 'react';
import DynamicLineChart from "./dynamic charts/Dynamic Line Chart";
import SecondsCounter from '../SecondsCounter';

import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class card extends Component {


    render() {
        let counter = 0;
        setInterval(function () {
            ReactDOM.render(<SecondsCounter seconds={counter} />, document.getElementById('numpub'));
            var aleatorio = Math.round(Math.random() * 10);
            counter += aleatorio;
        },
            2000);

        setInterval(function () {
            ReactDOM.render(<SecondsCounter seconds={counter} />, document.getElementById('numpub1'));
            var aleatorio = Math.round(Math.random() * 10);
            counter += aleatorio;
        },
            2000);
        setInterval(function () {
            ReactDOM.render(<SecondsCounter seconds={counter} />, document.getElementById('numpub2'));
            var aleatorio = Math.round(Math.random() * 10);
            counter += aleatorio;
        },
            2000);

        setInterval(function () {
            ReactDOM.render(<SecondsCounter seconds={counter} />, document.getElementById('numpub3'));
            var aleatorio = Math.round(Math.random() * 10);
            counter += aleatorio;
        },
            2000);
        setInterval(function () {
            ReactDOM.render(<SecondsCounter seconds={counter} />, document.getElementById('numpub4'));
            var aleatorio = Math.round(Math.random() * 10);
            counter += aleatorio;
        },
            2000);

        setInterval(function () {
            ReactDOM.render(<SecondsCounter seconds={counter} />, document.getElementById('numpub5'));
            var aleatorio = Math.round(Math.random() * 10);
            counter += aleatorio;
        },
            2000);

        return (
            <div className="row" >
                <div className="col-4">
                    <div className="card my-3 p-2">
                        <div className="card-body" id="card">
                            <h5 className="card-title text-center">FACEBOOK</h5>
                            <h3 className="card-text text-center font-weight-bold" id="numpub">0</h3>
                            <p className="text-center">publicaciones</p>
                            <button className="btn btn-primary w-100"
                                data-toggle="modal" data-target=".bd-example-modal-lg">Ver gráfico estadístico</button>
                            <DynamicLineChart />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card my-3 p-2">
                        <div className="card-body" id="card">
                            <h5 className="card-title text-center">TWITTER</h5>
                            <h3 className="card-text text-center font-weight-bold" id="numpub1">0</h3>
                            <p className="text-center">publicaciones</p>
                            <button className="btn btn-primary w-100"
                                data-toggle="modal" data-target=".bd-example-modal-lg">Ver gráfico estadístico</button>
                            <DynamicLineChart />
                        </div>
                    </div>

                </div>
                <div className="col-4">
                    <div className="card my-3 p-2">
                        <div className="card-body" id="card">
                            <h5 className="card-title text-center">INSTAGRAM</h5>
                            <h3 className="card-text text-center font-weight-bold" id="numpub2">0</h3>
                            <p className="text-center">publicaciones</p>
                            <button className="btn btn-primary w-100"
                                data-toggle="modal" data-target=".bd-example-modal-lg">Ver gráfico estadístico</button>
                            <DynamicLineChart />
                        </div>
                    </div>

                </div>
                <div className="col-4">
                    <div className="card my-3 p-2">
                        <div className="card-body" id="card">
                            <h5 className="card-title text-center">YOUTUBE</h5>
                            <h3 className="card-text text-center font-weight-bold" id="numpub3">0</h3>
                            <p className="text-center">publicaciones</p>
                            <button className="btn btn-primary w-100"
                                data-toggle="modal" data-target=".bd-example-modal-lg">Ver gráfico estadístico</button>
                            <DynamicLineChart />
                        </div>
                    </div>

                </div>
                <div className="col-4">
                    <div className="card my-3 p-2">
                        <div className="card-body" id="card">
                            <h5 className="card-title text-center">TUMBLR</h5>
                            <h3 className="card-text text-center font-weight-bold" id="numpub4">0</h3>
                            <p className="text-center">publicaciones</p>
                            <button className="btn btn-primary w-100"
                                data-toggle="modal" data-target=".bd-example-modal-lg">Ver gráfico estadístico</button>
                            <DynamicLineChart />
                        </div>
                    </div>

                </div>
                <div className="col-4">
                    <div className="card my-3 p-2">
                        <div className="card-body" id="card">
                            <h5 className="card-title text-center">PINTEREST</h5>
                            <h3 className="card-text text-center font-weight-bold" id="numpub5">0</h3>
                            <p className="text-center">publicaciones</p>
                            <button className="btn btn-primary w-100"
                                data-toggle="modal" data-target=".bd-example-modal-lg">Ver gráfico estadístico</button>
                            <DynamicLineChart />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
