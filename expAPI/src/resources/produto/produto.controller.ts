import { Request, Response} from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { 
    createProduto,
    checkNomeIsAvailableCreate,
    checkNomeIsAvailableUpdate,
    listProdutos,
    readProduto,
    updateProduto,
    deleteProduto,
 } from './produto.service';
 import { CreateProdutoDto, UpdateProdutoDto } from "./produto.types";

const index = async (req: Request, res: Response) => {

    const skip = req.query.skip ? parseInt(req.query.skip.toString()) : undefined;
    const take = req.query.take ? parseInt(req.query.take.toString()) : undefined;

    try {
        const produtos = await listProdutos(skip, take);
        res.status(StatusCodes.OK).json(produtos);
        // res.status(200).send({ msg: "Olá Mundo"});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
   
} 
const create = async (req: Request, res: Response) => {
   
    const produto = req.body as CreateProdutoDto;
    
    try {
        if (await checkNomeIsAvailableCreate(produto.nome)) {
            const newProduto = await createProduto(produto);
            res.status(StatusCodes.CREATED).json(newProduto);
        }else{
            res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
        }
        
    } catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}
const read = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const produto = await readProduto(id);
        if(!produto)
            return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
        res.status(StatusCodes.OK).json(produto);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}
const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const produto = req.body as UpdateProdutoDto;

    try {
        if ( await checkNomeIsAvailableUpdate(produto.nome, id)){
            const updatedProduto = await updateProduto(id, produto);
            res.status(StatusCodes.NO_CONTENT).json();
        }else{
            res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}
const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedProduto = await deleteProduto(id);
        res.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

export default { index, create, read, update, remove};




