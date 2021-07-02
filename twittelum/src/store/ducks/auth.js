import LoginService from "../../services/LoginService";
import { getAuthToken } from "../../utils";

// Action Types
const ActionTypes = {
    LOGIN: 'auth/LOGIN',
    ERROR_AUTH: 'auth/ERROR'
}

const initialState = {
    token: getAuthToken(),
    error: '',
    status: ''
}

export function authReducer( state = initialState, action = {} )
{
    switch (action.type)
    {
        case ActionTypes.LOGIN:
            return {
                token: action.payload.token,
                error: '',
                status: 'LOGGED_IN'
            }
        
        case ActionTypes.ERROR_AUTH:
            return {
                token: '',
                error: action.payload.error,
                status: ''
            }

        default:
            return state;
    }
}

export const AuthThunkActions = {
    login(usuario, senha) {
        return async function (dispatch) {
            try {
                const token = await LoginService.autenticar(usuario, senha);
                localStorage.setItem('TOKEN', token);
                dispatch({ type: ActionTypes.LOGIN, payload: { token }});
            }
            catch(error) {
                dispatch({ type: ActionTypes.ERROR_AUTH, payload: { error: error.message }});
            }
        }
    }    
}