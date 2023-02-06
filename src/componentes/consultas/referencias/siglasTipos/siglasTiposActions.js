import axios from 'axios';

const BASE_URL = 'http://localhost:8082'

export function getSiglas() {
    const request = axios.get(`${BASE_URL}/referencias/proposicoes/siglaTipo`);
    console.log(request);
    return {
        type: 'SIGLAS_TIPOS_DADOS_FETCHED',
        payload: request
    }
}