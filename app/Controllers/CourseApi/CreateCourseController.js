import CourseModel from '../../Models/CourseModel.js';

export default {
  async handle(req, res) {
    try {
      const data = req.body;

      const course = await CourseModel.create(data);

      return res.status(201).json(course);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar curso' });
    }
  }
};