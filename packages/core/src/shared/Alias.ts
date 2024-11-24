export default class Alias {
    static format(valor: string): string {            
        return valor.replace(/ /g, '-').toLowerCase() // 'Reunião da Família Oliveira' -> 'reuniao-da-familia-oliveira'
    }
}