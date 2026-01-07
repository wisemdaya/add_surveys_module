import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

const dataDir = path.resolve(process.cwd(), 'data');
const outFile = path.join(dataDir, 'responses.jsonl');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

app.post('/api/save-response', (req, res) => {
  const payload = req.body || {};
  const entry = {
    receivedAt: new Date().toISOString(),
    payload,
  };

  const line = JSON.stringify(entry) + '\n';
  fs.appendFile(outFile, line, (err) => {
    if (err) {
      console.error('Failed to save response', err);
      return res.status(500).json({ ok: false, error: 'failed to save' });
    }
    return res.json({ ok: true });
  });
});

app.get('/api/responses', (req, res) => {
  if (!fs.existsSync(outFile)) return res.json([]);
  const lines = fs.readFileSync(outFile, 'utf8').trim().split('\n').filter(Boolean);
  const data = lines.map((l) => {
    try { return JSON.parse(l); } catch { return null; }
  }).filter(Boolean);
  res.json(data);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`);
});
