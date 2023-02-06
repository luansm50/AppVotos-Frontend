import { combineReducers } from "redux";
import { reducer as fromReducer} from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr'

import SiglasTiposReducer from '../componentes/consultas/referencias/siglasTipos/siglasTiposReducer'
import TabReducer from '../common/tab/tabReducer';
import AnaliseReducer from '../componentes/analises/analiseReducer'

const rootReducer = combineReducers({
    siglasTipos: SiglasTiposReducer,
    tab: TabReducer,
    analise: AnaliseReducer,
    form: fromReducer,
    toastr: toastrReducer
})

export default rootReducer;