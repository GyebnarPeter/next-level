import React from "react";
import "./voteAdmin.css";
import AdminHeader from "../adminHeader/AdminHeader";
import { IoBarChart } from "react-icons/io5";
import AdminTitle from "../../../components/adminTitle/AdminTitle";
import { useEffect, useState } from "react";
import axios from "axios";

function VoteAdmin() {
    const [roomOneVotes, setRoomOneVotes] = useState([]);
    const [roomTwoVotes, setRoomTwoVotes] = useState([]);
    const [roomThreeVotes, setRoomThreeVotes] = useState([]);
    const [roomFourVotes, setRoomFourVotes] = useState([]);

    const getVotes = async () => {
        const response = await axios.get(`http://localhost:8000/api/votes`);
        setRoomOneVotes(response.data[0].count);
        setRoomTwoVotes(response.data[1].count);
        setRoomThreeVotes(response.data[2].count);
        setRoomFourVotes(response.data[3].count);
    }
    
    useEffect(() => {
        getVotes();
    }, [])

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
                                    <td>{ roomOneVotes }</td>
                                    <td>{ roomTwoVotes }</td>
                                    <td>{ roomThreeVotes }</td>
                                    <td>{ roomFourVotes }</td>
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
