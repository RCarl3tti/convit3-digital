/**
 * Processa um convidado validando e atualizando suas informações.
 *
 * @param {Partial<Convidado>} convidado - O objeto do convidado a ser processado. Pode ser um objeto parcial.
 * @returns {Convidado} - O objeto do convidado atualizado com propriedades validadas e ajustadas.
 * @throws {Error} - Lança um erro se o objeto do convidado falhar na validação.
 */
import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";



export default function processarConvidado(convidado: Partial<Convidado>): Convidado {
    const erros = validarConvidado(convidado);

    if (erros.length) {
        throw new Error(erros.join('\n'));
    }

const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0;
const temAcompanhanes = convidado.possuiAcompanhantes && convidado.confirmado && qtdeAcompanhantes > 0;

    const convidadoAtualizado = {
        ...convidado,
        qtdeAcompanhantes:  temAcompanhanes ? qtdeAcompanhantes : 0,
        possuiAcompanhantes: temAcompanhanes,
    };

    return convidadoAtualizado as Convidado;
}