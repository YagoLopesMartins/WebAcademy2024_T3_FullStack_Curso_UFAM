import { Prof } from './helpersTypes';
import { Tech } from './helpersTypes';
export function listProfs(profs: Prof[]) {
    const list = profs.map((p)=>`<li>${p.nome}-${p.sala}</li>`);
    return `<ul>${list.join('')}</ul>`;
}

export function listTechs(techs: Tech[]) {
    const listFilter = techs.filter(power => power.poweredByNodejs);
    const list = listFilter.map((t)=>`<li>${t.name}-${t.type}</li>`);
    return `<ul>${list.join('')}</ul>`;
}