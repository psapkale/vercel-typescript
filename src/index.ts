import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());

// Default
app.get('/', (req: Request, res: Response) => {
   res.status(201).json({ message: 'Welcome to' });
});

const PORT = 5000;

app.listen(PORT, (): void => console.log(`Server is running on ${PORT}`));
