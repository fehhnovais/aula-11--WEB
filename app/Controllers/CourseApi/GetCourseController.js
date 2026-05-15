import CourseModel from '../../Models/CourseModel.js';

export default {
  async handle(req, res) {
    try {
      const courses = await CourseModel.findAll();
      return res.json(courses);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar cursos' });
    }
  }
};