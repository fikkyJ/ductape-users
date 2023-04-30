import mongoose from "mongoose";

export interface users {
    _id?: mongoose.Schema.Types.ObjectId;
    created: Date;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    dp?: string;
    bio?: string;
    otp?: {
        otp_type: otp_types,
        active: boolean
    },
    private_key?: string;
    public_key?: string;
    auth_token?: string;
    active: boolean;
    workspaces?: Array<any>;
    permissions?: Array<string>;
};

export interface genericErrors { code?: number, _original: unknown, details: [{ message: string }] }

export enum otp_types {
    EMAIL = "email",
    GOOGLE_AUTH = "google"
}

export interface otp_login {
    user_id: string;
    token: string;
}

export interface change_password {
    email: string;
    password: string;
    token: string;
}