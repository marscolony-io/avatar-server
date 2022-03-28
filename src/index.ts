import express from 'express';
import cors from 'cors';
import './loader';
import { getAttributes } from './loader';

const app = express();
app.use(cors());
app.use((req: express.Request, res: express.Response, next: Function) => {
  if (!req.url.endsWith('.png')) {
    console.log('ACCESS LOG', req.url);
  }
  next();
});

// metadata
app.get('/:token', (req: express.Request, res: express.Response) => {
  const { token } = req.params;
  const tokenNumber = parseInt(token);
  if (
    Number.isNaN(tokenNumber)
    || tokenNumber < 1
    || tokenNumber > 21000
  ) {
    res.status(404).end();
    return;
  }
  // TODO проверка, что заминтили уже
  res.json(getAttributes(tokenNumber));
});

app.use((req: express.Request, res: express.Response, next: Function) => {
  res.status(404).end();
});

app.listen(parseInt(process.env.PORT ?? '8000'), '127.0.0.1', () => {
  console.log('server started', process.env.PORT ?? '8000');
});
