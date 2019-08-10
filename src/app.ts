import express, {
    Application,
    Request,
    Response
} from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response) => {
    console.log(add(5, 5));
    res.send('Hello');
});

app.listen(5000, () => console.log('Server running'));