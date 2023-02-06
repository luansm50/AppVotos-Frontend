import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Tabs from "../../common/tab/tabs";
import Content from '../../common/template/content';
import TabsHeader from "../../common/tab/tabsHeader";
import TabsContent from "../../common/tab/tabsContent";
import ContentHeader from "../../common/template/contentHeader";
import TabHeader from '../../common/tab/tabHeader'
import TabContent from '../../common/tab/tabContent'
import { selectTab, showTabs } from "../../common/tab/tabActions";
import AnaliseList from './analiseList';
import AnaliseForm from './analiseForm';
import { create } from "./analiseActions";


class Analises extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader title='Analises de votos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <AnaliseList></AnaliseList>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <AnaliseForm onSubmit={this.props.create}></AnaliseForm>
                            </TabContent>
                            <TabContent id='tabDelete'><h1>Delete</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispactch => bindActionCreators({ selectTab, showTabs, create }, dispactch);
export default connect(null, mapDispatchToProps)(Analises);