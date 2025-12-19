import dotenv from "dotenv";
dotenv.config();

export function genrateUrl(id : string){
    return `${process.env.CLIENT_URL}/order/${id}`
}