import express from 'express';

import ListCourseController from '../../app/Controllers/CourseApi/ListCourseController.js';
import GetCourseController from '../../app/Controllers/CourseApi/GetCourseController.js';
import CreateCourseController from '../../app/Controllers/CourseApi/CreateCourseController.js';
import UpdateCourseController from '../../app/Controllers/CourseApi/UpdateCourseController.js';
import DeleteCourseController from '../../app/Controllers/CourseApi/DeleteCourseController.js';

const router = express.Router();

// AGORA SEM /courses
router.get('/', ListCourseController.handle);
router.get('/:id', GetCourseController.handle);
router.post('/', CreateCourseController.handle);
router.put('/:id', UpdateCourseController.handle);
router.delete('/:id', DeleteCourseController.handle);

export default router;