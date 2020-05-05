const calculadora = require("./calculos");

describe("calculadora", () =>{
    it('teste exemplo',() =>{
        const numero1 = 57;
        const numero2 = 3;
        expect(57 + 3).toBe(60);
        expect(57 + 3).not.toBe(61);
    });

    describe('Soma', () => {
        it("Retorna 3 quando2 é somado com 1", ()=> {
            const n1=1;
            const n2=2;
            expect(calculadora.soma(n1,n2)).toBe(3);
        });
    });

    describe('Subtração', () => {
        it("Retorna 1 quando 2 é subtraido de 3", ()=> {
            const n1=3;
            const n2=2;
            expect(calculadora.subtracao(n1,n2)).toBe(1);
        });
    });

    describe('Multiplicação', () => {
        it("Retorna 10 quando 2 é mltiplicado por 5", ()=> {
            const n1=2;
            const n2=5;
            expect(calculadora.multiplicacao(n1,n2)).toBe(10);
        });
    });
    
    describe('Divisão', () => {
        it("Retorna 3 quando 15 é dividido por 5", ()=> {
            const n1=15;
            const n2=5;
            expect(calculadora.divisao(n1,n2)).toBe(3);
        });
        it("Retorna 0 quando qualquer numero é dividido por 0", ()=>{
            const n1 = 37;
            const n2 = 0;
            expect(calculadora.divisao(n1,n2)).toBe(0);
        });
    });

});

