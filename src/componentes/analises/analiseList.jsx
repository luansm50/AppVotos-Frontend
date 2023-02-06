import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getList, downloadReport } from './analiseActions';
import If from '../../common/operator/if'


class AnaliseList extends Component {

    componentWillMount() {
        this.props.getList()
    }
    
    concat(...valores){
        var v = "";
        valores.forEach(val => v = v === ""? val : v + ", " + val);
        return v;
    }

    getStatus(status){
        switch(status){
            case "FINISHED": return "FINALIZADO";
            case "RUNNING": return  "BUSCANDO DADOS";
            case "PENDING": return "EM FILA";
        }
    }

    

    render() {
        const list = this.props.list;
        console.log(list);
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Anos</th>
                            <th>Tipos Proposicao</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map(l => (
                                <tr>
                                    <th>{l.id}</th>
                                    <th>{this.concat(l.anos)}</th>
                                    <th>{this.concat(l.tiposProposicao)}</th>
                                    <th>{this.getStatus(l.status)}</th>
                                    <th>
                                        <If test={l.status === 'FINISHED'}>
                                            <button className='btn btn-warning' onClick={() => this.props.downloadReport(l.id)}>
                                                <i className='fa fa-download'></i>
                                            </button>
                                        </If>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.analise.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, downloadReport }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AnaliseList)