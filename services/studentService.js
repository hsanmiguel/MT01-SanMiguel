const Student = require('../models/studentModel');

class StudentService {
    async createStudent({ name, email, age, collegeProgram, studentIdNumber }) {
        try {
            const student = new Student({
                name,
                email,
                age,
                collegeProgram,
                studentIdNumber
            });
            return await student.save();
        } catch (error) {
            throw error;
        }
    }

    async getAllStudents() {
        try {
            return await Student.find();
        } catch (error) {
            throw error;
        }
    }

    async getStudentById(id) {
        try {
            const student = await Student.findById(id);
            if (!student) {
                throw new Error('Student not found');
            }
            return student;
        } catch (error) {
            throw error;
        }
    }

    async updateStudent(id, { name, email, age, collegeProgram, studentIdNumber }) {
        try {
            const student = await Student.findByIdAndUpdate(
                id, 
                { name, email, age, collegeProgram, studentIdNumber },
                { new: true }
            );
            if (!student) {
                throw new Error('Student not found');
            }
            return student;
        } catch (error) {
            throw error;
        }
    }

    async deleteStudent(id) {
        try {
            const student = await Student.findByIdAndDelete(id);
            if (!student) {
                throw new Error('Student not found');
            }
            return student;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new StudentService();