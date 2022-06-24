import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.get('/me', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello world this is Ekin');
});

export default router;
