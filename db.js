import {MongoClient, ObjectId} from 'mongodb'
import dotenv from 'dotenv'
import e from 'cors'

dotenv.config()

export async function connectToDB(){
    const uri = process.env.MONGODB_URI

    const client = new MongoClient(uri)
    try
    {
        await client.connect()
        return client.db('db_ecommerce')
    }
    catch(e)
    {
        console.error(e)
    }
}

export async function getAll(db,resource){
    const date = await db.collection(resource).find().toArrey
    console.log(date)  
    return date
}

export async function getOne(db, resource,id){
    const date= await db.collection(resource).findOne({_id: new ObjectId(id)})
    return date
}

export async function createOne(db,resource, body){
    const date = await db.collection(resource).insertOne(body)
    if(date.acknowledged){
        const result = await get

    }

}

export async function deleteOne(){

}

export async function updateOne(){

}