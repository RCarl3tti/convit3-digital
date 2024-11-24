import Convidado from './Convidado';

export default interface Evento {
    id: string;         // uuid
    alias: string;      // Nome/identificador unico do evento Ex. "aniversario-fulano-2025"
    senha: string;      
    nome: string;
    data: Date;
    local: string;
    descricao: string;
    imagem: string;
    imagemBackground: string;
    publicoEsperado: number;
    convidados: Convidado[];
}

