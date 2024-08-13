import dal_mysql from "../DAL/dal_mysql";
import { Pool } from "../Models/pool";


const getAllHet = async()=>{
    //SQL statement
    const sql = `
        SELECT * FROM het
    `;
    //execute the sql command
    const pools = await dal_mysql.execute(sql);
    //return the result
    console.log(pools)
    return pools;
}

const getAllTet = async()=>{
    //SQL statement
    const sql = `
        SELECT * FROM tet
    `;
    //execute the sql command
    const pools = await dal_mysql.execute(sql);
    //return the result
    console.log(pools)
    return pools;
}

const getAllYA = async()=>{
    //SQL statement
    const sql = `
        SELECT * FROM YA
    `;
    //execute the sql command
    const pools = await dal_mysql.execute(sql);
    //return the result
    console.log(pools)
    return pools;
}

const getAllYud = async()=>{
    //SQL statement
    const sql = `
        SELECT * FROM yud
    `;
    //execute the sql command
    const pools = await dal_mysql.execute(sql);
    //return the result
    console.log(pools)
    return pools;
}

const getAllGH = async()=>{
    const sql = `
        SHOW tables;
    `;

    const greenHouses = await dal_mysql.execute(sql);
    return greenHouses;
}

const transfer = async(oldGH:string,newGH:string,oldPool:Pool,newPool:Pool)=>{
    const sqlOldPool = `
        UPDATE ${oldGH} SET fish = '${oldPool.fish}', average = '${oldPool.average}', amount = '${oldPool.amount}' WHERE (poolID = '${oldPool.poolID}');
    `;
    const sqlNewPool = `
        UPDATE ${newGH} SET fish = '${newPool.fish}', average = '${newPool.average}', amount = '${newPool.amount}' WHERE (poolID = '${newPool.poolID}');
    `;
    await dal_mysql.execute(sqlOldPool);
    const newTransfer = await dal_mysql.execute(sqlNewPool);
    return newTransfer;
}

const addFishToPool = async(newGH:string, newPool:Pool)=>{
    const sqlNewPool = `
        UPDATE ${newGH} SET fish = '${newPool.fish}', average = '${newPool.average}', amount = '${newPool.amount}' WHERE (poolID = '${newPool.poolID}');
    `;
    const addedFish = await dal_mysql.execute(sqlNewPool);
    return addedFish;
}

// const updateSeverStatus = async(id:number,status:boolean)=>{
//     let datatime = new Date().toJSON().slice(0,19).replace('T', ' ');
//     //SQL statement
//     const sql = `UPDATE servers SET servers.status=${status}, datatime='${datatime}' WHERE id=${id}`;
//     // execute the sql
//     // console.log(sql);
//     await dal_mysql.execute(sql);
//     return;
// }

export {
    getAllHet,
    getAllTet,
    getAllYA,
    getAllYud,
    getAllGH,
    transfer,
    addFishToPool
}