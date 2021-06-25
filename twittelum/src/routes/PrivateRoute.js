import React from 'react'
import { Redirect } from 'react-router';

export default function PrivateRoute( props ) {
    let isAutenticado = localStorage.getItem('TOKEN') ? true : false;
    const { component: ComponentePrivado, ...propriedades } = props;

    if (isAutenticado) {
        return <ComponentePrivado {...propriedades} />;
    }
    else {
        return <Redirect to="/login" />
    }
}
