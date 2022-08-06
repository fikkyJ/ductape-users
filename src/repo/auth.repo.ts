import JWT from "jsonwebtoken";
import { users } from "../types/users.type";

export interface IAuthRepo {
    generateModuleAuthJWT(time: string): Promise<string>;
    validateModuleAuthJWT(jwt: string): Promise<unknown>;
    generateUserAuthJWT(user: users, private_key: string, time: string): Promise<string>;
    validateUserAuthJWT(jwt: string, private_key: string): Promise<unknown>;
}

export const AuthRepo: IAuthRepo = {
    async generateModuleAuthJWT(time: string): Promise<string> {
        return JWT.sign({ module: process.env.MODULE }, process.env.ENC_KEY as string, {expiresIn: time})
    },
    async validateModuleAuthJWT(jwt: string): Promise<unknown> {
        try {
            return JWT.verify(jwt, process.env.ENC_KEY as string);
        } catch (e) {
            throw e;
        }
    },

    async generateUserAuthJWT(user: users, private_key: string, time: string): Promise<string> {
        return JWT.sign(user, private_key, {expiresIn: time})
    },

    async validateUserAuthJWT(jwt: string, private_key: string): Promise<unknown> {
        try{
            return JWT.verify(jwt, private_key);
        } catch (e) {
            throw e;
        }
    }
};