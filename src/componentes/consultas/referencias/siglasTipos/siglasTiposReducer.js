const INITIAL_STATE = { dados: [] }

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SIGLAS_TIPOS_DADOS_FETCHED':
            console.log(action.payload.data)
            return { ...state, dados: action.payload.data.dados }
        default: 
            return state;
    }
}