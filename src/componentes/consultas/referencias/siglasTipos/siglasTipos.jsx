import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { getSiglas } from "./siglasTiposActions";

import ContentHeader from '../../../../common/template/contentHeader';
import Content from '../../../../common/template/content'
import Row from '../../../../common/layout/row'
import Grid from '../../../../common/layout/grid'

class SiglasTipos extends Component {

    componentWillMount() {
        this.props.getSiglas()
    }

    render() {
        const dados = this.props.dados;
        return (
            <div>
                <ContentHeader title='Siglas' small='Tipos de proposições existentes' />
                <Content>
                    <Row>
                        <Grid cols='4'>
                            <label htmlFor="siglasTipos">Siglas:</label>
                            <select id='siglasTipos'>
                                {dados.filter(dado => dado.sigla != "").map(dado => (
                                    <option key={dado.cod} value={dado.sigla}>
                                        {dado.sigla} - {dado.nome}
                                    </option>
                                ))}
                            </select>
                        </Grid>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ dados: state.siglasTipos.dados });
const mapDispatchToProps = dispatch => bindActionCreators({ getSiglas }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SiglasTipos)