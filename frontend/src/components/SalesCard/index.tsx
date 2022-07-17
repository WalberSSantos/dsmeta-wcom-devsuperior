import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from "../NotificationButton";


import './style.css';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

const [minDate, setMinDate] = useState(min);
const [maxDate, sertMaxDate] = useState(max);

useEffect(() => {
    axios.get("http://localhost:8080/sales")
    .then(response => {
        console.log(response.data);
    })
}, []);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-titulos">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => sertMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="dsmetas-sales-table">
                    <thead>
                        <tr>
                            <th className="visibilidade-992-component">ID </th>
                            <th className="visibilidade-576-component">Data</th>
                            <th>Venderdor</th>
                            <th className="visibilidade-992-component">Visitas</th>
                            <th className="visibilidade-992-component">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="visibilidade-992-component">#341</td>
                            <td className="visibilidade-576-component">10/07/2022</td>
                            <td>Anakin</td>
                            <td className="visibilidade-992-component">15</td>
                            <td className="visibilidade-992-component">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="visibilidade-992-component">#341</td>
                            <td className="visibilidade-576-component">11/07/2022</td>
                            <td>Anakin</td>
                            <td className="visibilidade-992-component">15</td>
                            <td className="visibilidade-992-component">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="visibilidade-992-component">#341</td>
                            <td className="visibilidade-576-component"> 12/07/2022</td>
                            <td>Anakin</td>
                            <td className="visibilidade-992-component">15</td>
                            <td className="visibilidade-992-component">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default SalesCard;