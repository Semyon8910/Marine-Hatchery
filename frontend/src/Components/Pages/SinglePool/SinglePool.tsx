import { TableCell, TableRow } from "@mui/material";
import { Pool } from "../../model/pool";
import "./SinglePool.css";
import { useNavigate, useParams } from "react-router-dom";

interface poolProps {
    pool:Pool
    GH: any;
}

function SinglePool(props:poolProps): JSX.Element {
    const navigate = useNavigate();
    const clickHandler = (event: React.MouseEvent<HTMLTableRowElement>) => {
        const GH = props.GH;        
        const pool = props.pool.poolID;
        navigate(`/transfer/${GH}/${pool}`);
    }
    return (
            <TableRow onDoubleClick={clickHandler}>
			    <TableCell align="center">{props.pool.poolID}</TableCell>
                <TableCell align="center">{props.pool.fish}</TableCell>
                <TableCell align="center">{props.pool.average}</TableCell>
                <TableCell align="center">{props.pool.amount}</TableCell>
            </TableRow>
    );
}

export default SinglePool;
