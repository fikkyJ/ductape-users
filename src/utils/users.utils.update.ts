import { PipelineStage } from "mongoose";
import { model } from "../models/users.model";
import { users } from "../types/users.type";
import { handleError } from "../errors/errors";

export const updateUser =async (id: unknown, set: Partial<users>): Promise<boolean> => {
    try{
        const update = await model.findByIdAndUpdate(id, {$set: {...set}});

        if(update) return true;
        return false;
    } catch(e){
        throw handleError(e);
    }
}

export const updateMultipleUsers =async (get: object, set: Partial<users>): Promise<boolean> => {
    try{
        const update = await model.updateMany(get, {$set: {...set}});

        if(update) return true;
        return false;
    } catch(e){
        throw handleError(e);
    }
}