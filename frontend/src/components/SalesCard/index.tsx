import NotificationButton from "../NotificationButton"

import './style.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-titulos">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
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

export default SalesCard