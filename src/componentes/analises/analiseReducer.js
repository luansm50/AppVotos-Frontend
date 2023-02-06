const INITIAL_STATE = {
    list: []
}

var fileDownload = require('js-file-download');



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ANALISE_FETCHED":
            return {
                ...state, list: action.payload.data.analises
            }
            case "ANALISE_DOWNLOAD":
                console.log("here", action.payload);
                const link = document.createElement('a');
                const url = URL.createObjectURL(action.payload.data);
                console.log(url);
                link.href = url;
                const filename = action.payload.headers["content-disposition"].split('=')[1];


                link.download = filename;
                link.click();
                return state;
            default:
                return state;
    }
}