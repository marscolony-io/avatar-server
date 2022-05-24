import express from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import './loader';
import { getAttributes } from './loader';
import './name-xp-service';
import { idAllowed } from './last-id-service';

const _path = process.env.TESTNET ? '/home/avatars/testnet/' : '/home/avatars/mainnet/';

const app = express();
app.use(cors());
app.use((req: express.Request, res: express.Response, next: Function) => {
  if (!req.url.endsWith('.jpg')) {
    // console.log('ACCESS LOG', req.url);
  }
  next();
});

app.get('/minted/:token', (req: express.Request, res: express.Response) => {
  const { token } = req.params;
  const tokenNumber = parseInt(token);
  res.json({ minted: Boolean(process.env.TESTNET) || idAllowed(tokenNumber) });
});

app.get('/:token.jpg', (req: express.Request, res: express.Response) => {
  const { token } = req.params;
  const tokenNumber = parseInt(token);
  if (!process.env.TESTNET && !idAllowed(tokenNumber)) {
    res.status(404).end();
    return;
  }
  const filePath = path.join(_path, `colony${tokenNumber}.jpg`);
  const s = fs.createReadStream(filePath);
  s.on('open', () => {
    res.set('Content-Type', 'image/jpeg');
    s.pipe(res);
  });
  s.on('error', () => {
    res.set('Content-Type', 'text/plain');
    res.status(404).end('Not found');
  });
});

// metadata
app.get('/:token', (req: express.Request, res: express.Response) => {
  const { token } = req.params;
  const tokenNumber = parseInt(token);
  if (!process.env.TESTNET && !idAllowed(tokenNumber)) {
    res.status(404).end();
    return;
  }
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
