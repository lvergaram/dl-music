import { nanoid } from 'nanoid'
import {pool} from '../DATABASE/connection.js'

const findAll = async () => {
    console.log("consultando....")
    const query = "SELECT * FROM STUDENTS;"
    const {rows:response} = await pool.query(query)
    return response
}


const findByRut = async (rut) => {
    const query = {
        text:`
            SELECT * FROM STUDENTS 
            WHERE RUT = $1;
        `,
        values:[rut]
    }
    const {rows:response} = await pool.query(query)
    return response[0]
}

const create = async (nombre, rut, curso, nivel) => {
    const id = nanoid()
    const query = {
        text:`
            INSERT INTO STUDENTS (ID, NOMBRE, RUT, CURSO, NIVEL) 
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `,
        values:[id, nombre, rut, curso, nivel]
    }
    const {rows:response} = await pool.query(query)
    return response[0]
}

const update = async (id,nombre, rut, curso, nivel) => {
    console.log("quering....")
    const query = {
        text:`
            UPDATE STUDENTS
            SET
                NOMBRE = $2,
                RUT = $3,
                CURSO = $4,
                NIVEL = $5
            WHERE ID = $1
            RETURNING *;
        `,
        values:[id, nombre, rut, curso, nivel]
    }
    const {rows:response} = await pool.query(query)
    return response[0]
}

const remove = async (id) => {
    const query = {
        text:`
            DELETE FROM STUDENTS 
            WHERE ID = $1
            RETURNING *;
        `,
        values:[id]
    }
    const {rows:response} = await pool.query(query)
    return response[0]
}

export const Student = {
    findAll,
    findByRut,
    create,
    update,
    remove
}