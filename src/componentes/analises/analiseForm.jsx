import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import labelAndInput from '../../common/form/labelAndInput';
import labelAndSelect from '../../common/form/labelAndSelect';

import { getSiglas } from '../consultas/referencias/siglasTipos/siglasTiposActions';

class AnaliseForm extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getSiglas()
    }

    render() {
        const { handleSubmit } = this.props;
        const dados = [{
            sigla: '----',
            nome: 'Selecione uma ou mais siglas',
            cod: -1
        }].concat(this.props.dados);
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field multiple values={dados} name='tipoProposicao' component={labelAndSelect} label='Tipo proposição' cols='12 4' placeholder='Informe o tipo da proposição'>
                        {dados.filter(dado => dado.sigla != "").map(dado => (
                            <option key={dado.cod} value={dado.sigla}>
                                {dado.sigla} - {dado.nome}
                            </option>
                        ))}
                    </Field>
                    <Field name='anoInicial' component={labelAndInput} type='number' label='Ano Inicial' cols='12 4' placeholder='Informe o ano Inicial' />
                    <Field name='anoFinal' component={labelAndInput} type='number' label='Ano Final' cols='12 4' placeholder='Informe o ano Final' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({ dados: state.siglasTipos.dados });
const mapDispatchToProps = dispatch => bindActionCreators({ getSiglas }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'analiseForm'
})(reduxForm({
    form: 'analiseForm',
    initialValues: {
        multiFields: []
    }
})(AnaliseForm)))