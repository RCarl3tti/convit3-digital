import Convidado from '../model/Convidado';

export default function validarEvento(convidado: Partial<Convidado>): string[] {
    const erros: string[] = [];
    
    if(!convidado.nome) {
        erros.push('Nome é obrigatório');
    }

    if (!convidado.email) {
        erros.push('Email é obrigatório');
    }

    

    
    return erros;
}