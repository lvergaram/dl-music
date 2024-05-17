import pg from 'pg'
import 'dotenv/config'

const {Pool} = pg

export const pool = new Pool({allowExitOnIdle:true})

try {
    const {rows:response} = await pool.query('SELECT NOW()')
    const time = response[0].now
    console.log("Conectado a BBDD a las:",time)
} catch (error) {
    console.log("no se pudo conectar a BBDD", error)
}