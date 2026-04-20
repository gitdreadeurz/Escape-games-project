import {connection} from "../config/db.js"

//CREATE
export async function createOptionModel(libelle,prix){
    const create = "INSERT into options (libelle, prix) values (?,?)"
    const [result]= await connection.query(create, [libelle,prix])
    return result
}
//READ 
export async function listOptionModel(){
    const list = "SELECT * FROM option"
    const [result] = await connection.query(list)
    return result
}
export async function optionByIdModel(id){
    const optionById = "SELECT * FROM option WHERE option_id = ?"
    const [result] = await connection.query(optionById, [id])
    return result
}
//UPDATE
export async function updateOptionModel(libelle,prix,id){
    const update = "UPDATE option SET libelle = ?, prix = ? WHERE option_id = ?"
    const [result] = await connection.query(update, [libelle,prix,id])
    return result
}
//DELETE
export async function deleteOptionModel(id){
    const del = "DELETE FROM option WHERE option_id = ?"
    const [result] = await connection.query(del, [id])
    return result
}