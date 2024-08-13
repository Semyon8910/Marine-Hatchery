import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import "./YA.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pool } from "../../model/pool";
import SinglePool from "../SinglePool/SinglePool";
import { useNavigate, useParams } from "react-router-dom";

function YA(): JSX.Element {
    const [pools, setPools] = useState<Pool[]>([]);
    const GH = window.location.pathname.split('/').pop();
    useEffect(() => {
        axios.get(`http://localhost:8080/api/YA`)
        .then (response => response.data)
        .then(data => setPools(data));
    },[]);
    return (
        <TableContainer component={Paper} style={{ maxHeight: "79vh" }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">pool</TableCell>
                        <TableCell align="center">fish</TableCell>
                        <TableCell align="center">average</TableCell>
                        <TableCell align="center">amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pools.map(item => <SinglePool key={item.poolID} pool={item} GH={GH}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default YA;
