import { Student } from "../models/students.model.js"

//  /
export const getAllStudents = async(req,res) => {
  try {
    const response = await Student.findAll()
    res.json(response)
  } catch (error) {
    console.log(error)
  }  
} 

export const getStudent = async(req,res) => {
  try {
    const {rut} = req.params
    const response = await Student.findByRut(rut)
    response.length?
        res.json(response):
        res.status(400).send("no existe el rut")
  } catch (error) {
    console.log(error)
  }  
} 




export const createStudent = async(req,res) => {
  try {
    const {nombre, rut, curso, nivel} = req.body
    const response = await Student.create(nombre, rut, curso, nivel)
      res.json(response)
  } catch (error) {
    console.log(error)
  }  
} 

export const updateStudent = async(req,res) => {
  try {
    const {id} = req.params
    const {nombre, rut, curso, nivel} = req.body
    const response = await Student.update(id,nombre, rut, curso, nivel)
    res.json(response)
  } catch (error) {
    console.log(error)
  }  
} 

export const deleteStudent = async(req,res) => {
  try {
    const {id} = req.params
    const response = await Student.remove(id)
    res.json(response)
  } catch (error) {
    console.log(error)
  }  
} 