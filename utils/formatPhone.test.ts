import formatPhone from './formatPhone';
import regexTel from './phone';


describe('FormatPhone', () => {
    it('formata celular com 11 dígitos', () => {
        expect(formatPhone('11912345678')).toBe('(11) 91234-5678');
    });

    it('ignora letras e símbolos', () => {
        expect(formatPhone('11a9b1234-5678')).toBe('(11) 91234-5678')
    });

    it('o número formatado passa na validação', () => {
        expect(regexTel.test(formatPhone('11912345678'))).toBe(true);
    });

    it('campo vazio continua vazio', () => {
        expect(formatPhone('')).toBe('');
    });
});