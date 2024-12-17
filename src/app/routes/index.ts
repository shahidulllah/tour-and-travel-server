import { Router } from 'express';
import app from '../../app';

const router = Router();

const moduleRoutes = [
    {
      path: '/user',
      route: app
    }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;
