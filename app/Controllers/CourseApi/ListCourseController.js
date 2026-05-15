import CourseModel from '../../Models/CourseModel.js';

export default {
  async handle(req, res) {
    try {
      const courses = await CourseModel.findAll();
      return res.json(courses);
    } catch (error) {
  console.log(error); // 👈 MOSTRA NO TERMINAL
  return res.status(500).json({ error: error.message });
    }
  }
};