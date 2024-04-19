import { Request, Response} from "express";
import { createProduto } from './produto.service';

const index = async (req: Request, res: Response) => {
    res.status(200).send({ msg: "Olá Mundo"});
}
const create = async (req: Request, res: Response) => {
    const produto = req.body as CreateProdutoDto;
    try {
        if (await checkNomeIsAvailable(produto.nome)) {
            const newProduto = await createProduto(produto);
            res.status(StatusCodes.CREATED).json(newProduto);
        }else{
            res.status(StatusCodes.CONFLIT).json(ReasonPhrases.CONFLICT);
        }
        
    } catch (err) {
        res.status(500).json(err);
    }
}
const read = async (req: Request, res: Response) => {}
const update = async (req: Request, res: Response) => {}
const remove = async (req: Request, res: Response) => {}

export default { index, create, read, update, remove};




