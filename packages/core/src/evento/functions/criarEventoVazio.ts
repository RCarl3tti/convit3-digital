import { Id } from "../../shared";
import Evento from "../model/Evento";

/**
 * Cria um novo objeto de evento vazio com valores padrão.
 *
 * @returns {Partial<Evento>} Um objeto de evento parcial com valores padrão.
 */
export default function criarEventoVazio(): Partial<Evento> {
    return {
        id: Id.novo(),
        nome: "",
        descricao: "",
        data: new Date(),
        local: "",
        publicoEsperado: 1,
        imagem: "",
        imagemBackground: "",
    }
}