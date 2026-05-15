import CourseModel from '../../Models/CourseModel.js';

export default {
  async handle(req, res) {
    try {
      const { id } = req.params;

      const course = await CourseModel.findByPk(id);

      if (!course) {
        return res.status(404).json({ error: 'Curso não encontrado' });
      }

      await course.destroy();

      return res.json({ message: 'Curso deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar curso' });
    }
  }
};