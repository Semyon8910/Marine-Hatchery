import express , {NextFunction,Request,Response} from 'express';
import {addFishToPool, getAllGH, getAllHet, getAllTet, getAllYA, getAllYud, transfer} from '../logic/poolLogic'
import { Pool } from '../Models/pool';

const poolsRouter = express.Router();

poolsRouter.get(
    "/het",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{                      
        try{
            const pools = await getAllHet()
            response.status(200).json(pools)
        } catch (err) {
            nextFunction (err);
        }
    }
)

poolsRouter.get(
    "/tet",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{                      
        try{
            const pools = await getAllTet()
            response.status(200).json(pools)
        } catch (err) {
            nextFunction (err);
        }
    }
)

poolsRouter.get(
    "/YA",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{                      
        try{
            const pools = await getAllYA()
            response.status(200).json(pools)
        } catch (err) {
            nextFunction (err);
        }
    }
)

poolsRouter.get(
    "/yud",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{                      
        try{
            const pools = await getAllYud()
            response.status(200).json(pools)
        } catch (err) {
            nextFunction (err);
        }
    }
)

poolsRouter.get(
    "/GH",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{
        try{
            const greenHouses = await getAllGH()
            response.status(200).json(greenHouses)
        } catch (err) {
            nextFunction (err);
        }
    }
)

poolsRouter.post(
    "/transfer",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{ 
        try{
            const oldGH = request.body.oldGH;
            const newGH = request.body.newGH;
            const oldPool = new Pool(request.body.oldPoolID, request.body.oldFish, request.body.oldAverage, request.body.oldAmount);
            const newPool = new Pool(request.body.newPoolID, request.body.newFish, request.body.newAverage, request.body.newAmount);
            const newTransfer = await transfer(oldGH, newGH, oldPool, newPool);
            response.status(201).json(newTransfer);
        } catch (err) {
            nextFunction (err);
        }
    }
)

poolsRouter.post(
    "/addFish",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{
        try{
            const newGH = request.body.newGH;
            const newPool = new Pool(request.body.newPoolID, request.body.newFish, request.body.newAverage, request.body.newAmount);
            const addedFish = await addFishToPool(newGH, newPool);
            response.status(201).json(addedFish);
        } catch (err) {
            nextFunction (err);
        }
    } 
)
// servRouter.post(
//     "/severs/updateStatus",
//     async (request:Request, response:Response, nextFunction:NextFunction)=>{
//         try{
//             const newStatus = request.body.status;
//             const id = request.body.id
//             const updatedStatus = await updateSeverStatus(id, newStatus)
//             response.status(201).json(updatedStatus);
//         } catch (err) {
//             nextFunction (err);
//         }
//     }
// )

export default poolsRouter;
