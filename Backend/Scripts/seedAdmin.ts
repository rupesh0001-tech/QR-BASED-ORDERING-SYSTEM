import dotenv from 'dotenv'
dotenv.config()
import User from "../models/user"
import bcrypt from 'bcrypt'
import connectDB from '../db/db'


connectDB();


const seedAdmin = async () => {
    const plain : string | undefined  = process.env.ADMIN_PASS;
    if(!plain){
        return 
    }
    const email = process.env.ADMIN_EMAIL;
    if(!email){
        return
    }
    const hashPass = await bcrypt.hash( plain, 10 );
    const admin = await User.create({
        name : 'admin',
        email : email,
        password : hashPass, 
        role : 'admin',
    })
    console.log('Admin init Successs now go and Login' + admin)

}

seedAdmin();