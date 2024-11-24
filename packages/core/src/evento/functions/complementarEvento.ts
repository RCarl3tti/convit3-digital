/**
 * Complementa um objeto `Evento` parcial, validando-o e preenchendo as propriedades ausentes.
 *
 * @param eventoParcial - Um objeto `Evento` parcial que pode ter propriedades ausentes.
 * @returns Um objeto `Evento` totalmente preenchido.
 * @throws Lança um erro se a validação de `eventoParcial` falhar.
 */
import Evento from '../model/Evento';
import validarEvento from './validarEvento';
import { Id, Senha } from "../../shared";


export default function complementarEvento(eventoParcial: Partial<Evento>): Evento {
    const erros = validarEvento(eventoParcial);

    if (erros.length > 0) {
        throw new Error(erros.join('\n')); // throw faz com que a execução do código pare e o erro seja lançado
    }

    const evento: Evento = {
        ...eventoParcial,
        id: eventoParcial.id ?? Id.novo(),
        senha: eventoParcial.senha ?? Senha.nova(),
        publicoEsperado: +(eventoParcial.publicoEsperado ?? 1),
    } as Evento;

    return evento;
}

