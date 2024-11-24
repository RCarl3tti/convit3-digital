export default class Senha {
    /**
     * Gera uma senha aleatória com o comprimento especificado.
     * A senha conterá uma mistura de letras minúsculas, letras maiúsculas, números e caracteres especiais.
     *
     * @param {number} [tamanho=8] - O comprimento da senha a ser gerada. O padrão é 8 se não especificado.
     * @returns {string} - A senha gerada.
     */
    static nova(tamanho: number = 8): string {
        const minusculas = 'abcdefghijklmnopqrstuvwxyz';
        const maiusculas = minusculas.toUpperCase();
        const numeros = '0123456789';
        const especiais = '!@#$%&*';

        const grupos = [minusculas, maiusculas, numeros, especiais];
        const senha = [];

        for (let i = 0; i < tamanho; i++) {
            const grupo = grupos[Math.floor(Math.random() * grupos.length)]; 
            senha.push(grupo[Math.floor(Math.random() * grupo.length)]);
        }

        return senha.join('');
    }
}

