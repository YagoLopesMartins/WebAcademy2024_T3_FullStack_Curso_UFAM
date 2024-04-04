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
router.get('/hb4', (req, res) => {
  const technologies = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
   ];
    res.render('hb/hb4', {
      technologies,
      layout: false,
    });
});
export default router;