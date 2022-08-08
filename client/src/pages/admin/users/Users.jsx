import React from "react";
import "./users.css";
import AdminHeader from "../adminHeader/AdminHeader";
import { IoPeopleSharp } from "react-icons/io5";
import AdminTitle from "../../../components/adminTitle/AdminTitle";

function Users() {
    return (
        <div className="adminPage">
            <div className="adminContainer">
                <AdminHeader />
                <div className="pageContent">
                    <AdminTitle title="Adminok" icon={<IoPeopleSharp />} />
                    <h3 className="adminSubHeader">Regisztrált felhasználók</h3>
                    <table className="adminTable">
                        <thead>
                            <tr>
                                <td>Név</td>
                                <td>Email</td>
                                <td>Jelszóváltoztatás</td>
                                <td>Törlés</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>david</td>
                                <td>david@hosselhoff.com</td>
                                <td>
                                    <button className="passwordBtn">Jelszó</button>
                                </td>
                                <td>
                                    <button className="deleteBtn">Törlés</button>
                                </td>
                            </tr>
                            <tr>
                                <td>david</td>
                                <td>david@hosselhoff.com</td>
                                <td>
                                    <button className="passwordBtn">Jelszó</button>
                                </td>
                                <td>
                                    <button className="deleteBtn">Törlés</button>
                                </td>
                            </tr>
                            <tr>
                                <td>david</td>
                                <td>david@hosselhoff.com</td>
                                <td>
                                    <button className="passwordBtn">Jelszó</button>
                                </td>
                                <td>
                                    <button className="deleteBtn">Törlés</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="regBtn">Regisztráció</button>
                </div>
            </div>
        </div>
    );
}

export default Users;