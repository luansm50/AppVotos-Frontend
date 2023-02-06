import axios from 'axios'
import {
    toastr
} from 'react-redux-toastr'
import {
    reset as resetForm
} from 'redux-form'
import {
    showTabs,
    selectTab
} from '../../common/tab/tabActions';

const BASEURL = 'http://localhost:8082';

export function getList() {
    const request = axios.get(`${BASEURL}/service/analise-votos`);
    return {
        type: 'ANALISE_FETCHED',
        payload: request
    }
}

export function create(values) {
    console.log(values);

    const anoInicial = parseInt(values.anoInicial);
    const anoFinal = parseInt(values.anoFinal);
    const tiposProposicao = values.tipoProposicao;
    
    if (!tiposProposicao || tiposProposicao.length == 0)
        toastr.error('Erro', "Deve informar pelo menos um tipo de proposição");

    if (!anoInicial)
        toastr.error('Erro', "Ano inicial deve ser enviado");

    if (anoInicial > anoFinal)
        toastr.error('Erro', "Ano inicial não pode ser maior que o ano final");

    const anos = [];
    if (anoFinal)
        for (var i = anoInicial; i <= anoFinal; i++)
            anos.push(i.toString());
    else
        anos.push(anoInicial.toString());

    const payload = {
        anos,
        tiposProposicao: tiposProposicao
    }

    const param = {
        url: `${BASEURL}/service/analise-votos`,
        method: 'POST',
        json: true,
        data: payload
    };
    return dispatch => {
        axios(param)
            .then(resp => {
                toastr.success('Sucesso', "Operação realizada com sucesso")
                dispatch([
                    resetForm("analiseForm"),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e => {
                toastr.error('Erro', e.response.data.message);
            });
    }
}

export function downloadReport(id) {
    const request = axios.get(`${BASEURL}/service/analise-votos/${id}/report`, {responseType: 'blob'});
    return {
        type: 'ANALISE_DOWNLOAD',
        payload: request
    }
}