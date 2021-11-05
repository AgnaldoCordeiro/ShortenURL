import { Request, Response } from 'express'
import shortid from 'shortid'
import { config } from '@config/Constants'

export class URLController{
   async shorten(req: Request, res: Response): Promise<void>{
    // ver se a url se ja nao existe
    // criar o hash para a url
    const { originURL } = req.body
    const hash = shortid.generate()
    const shortURL = `${config.API_URL}/${hash}`
    // salvar a url no banco
    // retornar a url salva
    res.json({originURL, hash, shortURL})
  }
}