import CourseModel from '../../Models/CourseModel.js';

export default {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const course = await CourseModel.findByPk(id);

      if (!course) {
        return res.status(404).json({ error: 'Curso não encontrado' });
      }

      await course.update(data);

      return res.json(course);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar curso' });
    }
  }
};