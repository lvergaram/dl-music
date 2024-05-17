import { Router } from "express";
import {
    getStudent,
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent
    } 
from '../controllers/students.controller.js'

const router=Router()

router.get("/", getAllStudents )
router.get("/:rut",  getStudent )
router.post("/", createStudent )
router.put("/:id", updateStudent )
router.delete("/:id", deleteStudent )

export default router