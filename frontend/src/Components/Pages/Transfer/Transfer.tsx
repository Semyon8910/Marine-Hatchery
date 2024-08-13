import { Select } from "@mui/material";
import "./Transfer.css";
import { SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import { Pool } from "../../model/pool";
import { useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

function Transfer(): JSX.Element {
    class Greenhouse {
        Tables_in_fishfarm:string;

        constructor(Tables_in_fishfarm:string) {
            this.Tables_in_fishfarm = Tables_in_fishfarm;
        }
    }
    const [greenhouses, setGreenhouses] = useState<Greenhouse[]>([]);
    const [pools, setPools] = useState<Pool[]>([]);
    let GH = "het";
    const from = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Pool>(); 

    const ghSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        GH = event.target.value;
        axios.get(`http://localhost:8080/api/${GH}`)
        .then (response => response.data)
        .then (data => setPools(data));
        return GH;
    }
    
    const addFish: SubmitHandler<Pool> = (data) => {
        axios.post("http://localhost:8080/api/addFish", {
            newGH: from.GH,
            newPoolID: from.pool,
            newFish: data.fish,
            newAverage: data.average,
            newAmount: data.amount,
        })
        .then(response => response.status)
        .catch((err)=>console.log(err));
    };

    useEffect(() => {
        axios.get("http://localhost:8080/api/GH")
        .then (response => response.data)
        .then (data=>setGreenhouses(data));
    },[]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/${GH}`)
        .then (response => response.data)
        .then (data => setPools(data));
    },[]);

    return (
        <div className="Transfer">
            from {from.GH} {from.pool}<br/>
            to<br/>
            <select onChange={ghSelectHandler}>
                {greenhouses.map(item=><option value={item.Tables_in_fishfarm}>{item.Tables_in_fishfarm}</option>)}
            </select>
			<select>
                {pools.map(item=><option value={item.poolID}>{item.poolID}</option>)}
            </select><br/><br/>
            <input type="number" placeholder="average" name="average"/>
            <hr/>
            <h3>add fish to pool</h3>
            <form onSubmit={handleSubmit(addFish)}>
            <input type="text" placeholder="fish type" 
            {...register("fish",{required:true, min:1, max:3})}/>
            <input type="number" placeholder="amount"
            {...register("amount",{required:true})}/>
            <input type="number" step="any" placeholder="average" 
            {...register("average",{required:true})}/>
            <input type="submit" value="add" name="add"/>
            </form>
            <hr/>
            <h3>Average calc</h3>
            <div className="averageCalc">
                <div>
                    <h4>average 1</h4>
                    <input type="number" placeholder="weight"/><br/>
                    <input type="number" placeholder="number"/>
                </div>
                <div>
                    <h4>average 2</h4>
                    <input type="number" placeholder="weight"/><br/>
                    <input type="number" placeholder="number"/>
                </div>
            </div>
        </div>
    );
}

export default Transfer;
