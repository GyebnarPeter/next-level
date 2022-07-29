import React from "react";
import "./voteAdmin.css";
import AdminHeader from "../adminHeader/AdminHeader";
import { IoBarChart } from "react-icons/io5";
import AdminTitle from "../../../components/adminTitle/AdminTitle";

function VoteAdmin() {
    return (
        <div className="adminPage">
            <div className="adminContainer">
                <AdminHeader />
                <div className="pageContent">
                    <AdminTitle title="Szavazás" icon={<IoBarChart />} />
                    <div className="voteStat">
                        <h3 className="adminSubHeader">Szavazás állása</h3>
                        <table className="adminTable">
                            <thead>
                                <tr>
                                    <td>Quizroom</td>
                                    <td>Titkoszt</td>
                                    <td>Bigboard Games</td>
                                    <td>Logicrace</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12</td>
                                    <td>24</td>
                                    <td>56</td>
                                    <td>37</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3 className="adminSubHeader">Szavazó email címek</h3>
                        <table className="adminTable">
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>nextlevel@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>#2</td>
                                    <td>nextlevel@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>#3</td>
                                    <td>nextlevel@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>#4</td>
                                    <td>nextlevel@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>#5</td>
                                    <td>nextlevel@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>#6</td>
                                    <td>nextlevel@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VoteAdmin;
