import React, { useState } from 'react';
import NotificacaoContext from '../../contexts/NotificacaoContext';

export default function Notificacao( { children } ) {
    const [msg, setNotificacao] = useState('');

    return (
        <NotificacaoContext.Provider value={ setNotificacao }>
            { children }
            {
                msg && 
                <div className="notificacaoMsg" onAnimationEnd={ () => setNotificacao('') }>
                    { msg }
                </div>
            }
        </NotificacaoContext.Provider>
    )
}
