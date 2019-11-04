import React from 'react';
import { render, fireEvent, act } from '@testing-library/react'
import NombreCliente from '../../componentes/Mesero/NombreCliente';

test('El input debería estar vacio al principio', (done) => {
    const setName = (value) => {
        expect(value).toBe('nombre cliente');
        done();
    }

    const { getByTestId } = render(<NombreCliente setName={setName} name="valor inicial"/>)
    
    let inputNombrecliente = getByTestId("inputNombreCliente");
    expect(inputNombrecliente.value).toBe('valor inicial');

    act(() => {
        fireEvent.change(inputNombrecliente, { target: { value: 'nombre cliente' } });
    })
})