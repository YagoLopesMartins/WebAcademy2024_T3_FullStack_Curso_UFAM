"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function index(req, res) {
    // try {
    //   //  res.json(pro)
    // }
}
;
async function create(req, res) {
    if (req.method === 'GET') {
        res.render('produto/create');
    }
    else {
        //   const produto = req.body as CreateProdutoDto;
        res.redirect('/produto');
    }
}
;
async function read(req, res) {
    const { id } = req.params;
    res.end(id);
}
;
async function update(req, res) { }
;
async function remove(req, res) { }
;
exports.default = { index, read, create, update, remove };
