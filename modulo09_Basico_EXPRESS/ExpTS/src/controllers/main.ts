import { NextFunction, Request, Response } from 'express';
const index = (req: Request, res: Response, next: NextFunction) => {
//  res.end('Welcome to Web academy!');
 res.render('formulario');
};

const hb1 = (req: Request, res:Response) => {
    res.render('hb1', {
        mensagem: "Olá estou usando handlebars",
        layout: false,
      });
}
const hb2 = (req: Request, res:Response) => {
    res.render('hb2', {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
        layout: false,
      });
}

const hb3 = (req: Request, res:Response) => {
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
}

const hb4 = (req: Request, res:Response) => {
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
}

const hb5 = (req: Request, res: Response) => {
    res.render('main/hb2', {
    nome: 'React',
    tipo: 'library',
    poweredByNode: true,
    layout: false,
    });
};


export default { index, hb1, hb2, hb3, hb4, hb5 };