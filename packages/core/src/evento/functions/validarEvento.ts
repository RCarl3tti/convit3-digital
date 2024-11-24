import Evento from '../model/Evento';

/**
 * Valida o objeto de evento fornecido e retorna um array de mensagens de erro se algum campo obrigatório estiver ausente ou inválido.
 *
 * @param evento - Um objeto parcial do tipo `Evento` contendo os detalhes do evento a serem validados.
 * @returns Um array de strings contendo mensagens de erro para cada campo inválido ou ausente.
 *
 * Os seguintes campos são validados:
 * - `alias`: Deve estar presente.
 * - `nome`: Deve estar presente.
 * - `descricao`: Deve estar presente.
 * - `publicoEsperado`: Deve estar presente e ser maior ou igual a 1.
 */
export default function validarEvento(evento: Partial<Evento>): string[] {
    const erros: string[] = [];
    
    if(!evento.alias) {
        erros.push('Alias é obrigatório');
    }

    if (!evento.nome) {
        erros.push('Nome é obrigatório');
    }
    
    if (!evento.descricao) {
        erros.push('Descrição é obrigatória');
    }

    if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
        erros.push('Público esperado é obrigatório');
    }

    if (!evento.imagem) {
        erros.push('Imagem é obrigatória');
    }

    if (!evento.imagemBackground) {
        erros.push('Imagem de fundo é obrigatória');
    }

    
    return erros;
}