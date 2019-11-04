import React from 'react';
import { render } from '@testing-library/react'
import BotonOpciones from '../../componentes/BotonOpciones';

test('', () => {
    const { getByTestId } = render(<BotonOpciones/>) 
    expect(getByTestId()).toBe();
})