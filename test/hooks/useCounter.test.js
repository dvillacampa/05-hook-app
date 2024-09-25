
import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => { 

    test('Debe de retornar los valores por defecto', () => {

        const { result } = renderHook ( () => useCounter() ); 
        const { counter } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ));
 
    });

});