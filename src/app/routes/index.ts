import express from 'express';
import { AcademicRoutes } from '../modules/academicSemester/academicSemester.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: "/academic-semester",
    route: AcademicRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
