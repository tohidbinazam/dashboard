import { createBrowserRouter } from 'react-router-dom';
import privateRouter from './privateRouter';
import PublicRouter from './publicRouter';

const router = createBrowserRouter([...privateRouter, ...PublicRouter]);

export default router;
