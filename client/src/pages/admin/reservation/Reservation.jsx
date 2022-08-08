import React, { useState } from "react";
import "./reservation.css";
import AdminHeader from "../adminHeader/AdminHeader";
import { IoToday } from "react-icons/io5";
import AdminTitle from "../../../components/adminTitle/AdminTitle";
import Calendar from "react-calendar";

function Reservation() {
    const [dateState, setDateState] = useState(new Date());

    const changeDate = async (e) => {
        setDateState(e);
    };

    return (
        <div className="adminPage">
            <div className="adminContainer">
                <AdminHeader />
                <div className="pageContent">
                    <AdminTitle title="Foglalások" icon={<IoToday />} />
                    <Calendar
                        onChange={changeDate}
                        value={dateState}
                        minDate={new Date()}
                        className="adminCalendar"
                    />
                    <h3 className="adminSubHeader">Következő foglalások</h3>
                    <table className="adminTable">
                        <thead>
                            <tr>
                                <td>Név</td>
                                <td>Játék</td>
                                <td>Időpont</td>
                                <td>Módosít</td>
                                <td>Törlés</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>David Hosselhoff</td>
                                <td>A hasonmás</td>
                                <td>2022.12.10 - 16.15.</td>
                                <td>
                                    <button className="modifiesBtn">Módosít</button>
                                </td>
                                <td>
                                    <button className="deleteBtn">Törlés</button>
                                </td>
                            </tr>
                            <tr>
                                <td>David Hosselhoff</td>
                                <td>A hasonmás</td>
                                <td>2022.12.10 - 16.15.</td>
                                <td>
                                    <button className="modifiesBtn">Módosít</button>
                                </td>
                                <td>
                                    <button className="deleteBtn">Törlés</button>
                                </td>
                            </tr>
                            <tr>
                                <td>David Hosselhoff</td>
                                <td>A hasonmás</td>
                                <td>2022.12.10 - 16.15.</td>
                                <td>
                                    <button className="modifiesBtn">Módosít</button>
                                </td>
                                <td>
                                    <button className="deleteBtn">Törlés</button>
                                </td>
                            </tr>
                            <tr>
                                <td>David Hosselhoff</td>
                                <td>A hasonmás</td>
                                <td>2022.12.10 - 16.15.</td>
                                <td>
                                    <button className="modifiesBtn">Módosít</button>
                                </td>
                                <td>
                                    <button className="deleteBtn">Törlés</button>
                                </td>
                            </tr>
                            <tr>
                                <td>David Hosselhoff</td>
                                <td>A hasonmás</td>
                                <td>2022.12.10 - 16.15.</td>
                                <td>
                                    <button className="modifiesBtn">Módosít</button>
                                </td>
                                <td>
                                    <button className="deleteBtn">Törlés</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Reservation;
