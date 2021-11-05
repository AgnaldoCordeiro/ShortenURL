import express, { Request, Response } from 'express'

const app = express();

app.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'hellow' })
  
});

app.listen(5000, () =>  console.log('serve on'));