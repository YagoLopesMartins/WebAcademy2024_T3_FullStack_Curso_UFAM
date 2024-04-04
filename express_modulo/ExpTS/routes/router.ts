import express from "express";
import {Router} from "express";
const router = Router();

router.get('/hb1', (req, res) => {
    res.render('hb1', {
        mensagem: "Olá estou usando handlebars",
        layout: false,
      });
});

router.get('/hb2', (req, res) => {
    res.render('hb2', {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
        layout: false,
      });
});

router.get('/hb3', (req, res) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238},
        { nome: 'Horácio Fernandes', sala: 1233},
        { nome: 'Edleno', sala: 1236},
        { nome: 'Altigran', sala: 1231}
      ];
      res.render('hb3', {
        profes,
        layout: false,
      });
});

export default router;