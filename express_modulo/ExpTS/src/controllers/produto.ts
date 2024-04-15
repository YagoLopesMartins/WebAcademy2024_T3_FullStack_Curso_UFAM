import { Request, Response } from 'express';
import { Produto, CreateProdutoDto, UpdateProdutoDto } from '../types/produto';

async function index (req: Request, res: Response) {
    try{
        const response = await fetch(`${process.env.URL_API}/produtos`);
        // const response = await fetch(`http://localhost:3355/produtos`);
       const produtos: Produto[] = await response.json();
       res.render('produto/index', { produtos });
    }catch(err){
        console.log(err);
    }
};
async function create (req: Request, res: Response) {
    if (req.method === 'GET') {
        res.render('produto/index');
    } else{
        const produto = req.body as CreateProdutoDto;
        try{
            await fetch(`${process.env.URL_API}/produtos`, {
                method: 'POST',
                body: JSON.stringify(produto)
            });
            res.redirect("/produto")
        }catch(err){
            console.log(err);
        }
    }
};
async function read (req: Request, res: Response) {
    const { id } = req.params;
    try {
        const response = await fetch(`${process.env.URL_API}/produtos/${id}`);
        const produto: Produto = await response.json();
        res.render('produto/view', { produto });
    } catch (error) {
        console.log(error);
    }

};
const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (req.method === 'GET') {
        const response = await fetch(`${process.env.URL_API}/produtos/${id}`);
        const produto: Produto = await response.json();
        res.render('produto/update', { produto});
    } else{
        const produtoAtualizado = req.body as UpdateProdutoDto;
        try{
            fetch(`${process.env.URL_API}/produtos/${id}`, {
                method: 'PUT',
                body: JSON.stringify(produtoAtualizado),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                res.redirect("/produto");
            });
        }catch(err){
            console.log(err);
        }
    }
};
const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    try{
        await fetch(`${process.env.URL_API}/produtos/${id}`, {
            method: 'DELETE'
        })
        res.redirect("/produto");
    }catch(err){
        console.log(err);
    }
};

export default { index, read, create, update, remove }