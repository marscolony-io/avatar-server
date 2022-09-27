import express from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import './loader';
import { getAttributes } from './loader';
import './name-xp-service';
import { idAllowed } from './last-id-service';
import { network, Network } from './env';

const paths: Record<Network, string> = {
  harmony: '/home/avatars/mainnet/',
  fuji: '/home/avatars/testnet/',
  polygon: '/home/avatars/polygon/'
}

const _path = paths[network];

const isTestNetwork = network === 'fuji';

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
  res.json({ minted: isTestNetwork || idAllowed(tokenNumber) });
});

app.get('/:token.jpg', (req: express.Request, res: express.Response) => {
  const { token } = req.params;
  const tokenNumber = parseInt(token);
  if (!isTestNetwork && !idAllowed(tokenNumber)) {
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

app.get('/tokens', (req: express.Request, res: express.Response) => {
  const { id } = req.query;
  const ids = String(id).split(',');
  res.send(
    ids.map((id) => {
      if (
        Number.isNaN(parseInt(id))
        || parseInt(id) < 1
        || parseInt(id) > 21000
      ) {
        return undefined;
      } else {
        return {
          id,
          data: getAttributes(parseInt(id))
        }
      }
    }).filter(val => val) // rm undefineds
  );
});

// metadata
app.get('/:token', (req: express.Request, res: express.Response) => {
  const { token } = req.params;
  const tokenNumber = parseInt(token);
  if (!isTestNetwork && !idAllowed(tokenNumber)) {
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
