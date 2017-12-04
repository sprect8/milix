import alt from '../alt';

class HomeActions {
    constructor() {
        this.generateActions(
            'openLeft',
            'openRight',
            'getblockChainInfoAjaxSuccess',
            'getblockChainInfoAjaxFail',
        );
    }
    blockChainInfo() {
      $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: 'http://api.etherscan.io/api?module=account&action=txlist&address=0xd26114cd6EE289AccF82350c8d8487fedB8A0C07&startblock=0&endblock=99999999&sort=asc&apikey=8W7VDWSUHEHGJ9A348M15K4JDETXD3FS25', 
      }).done((data) => {
        this.actions.getblockChainInfoAjaxSuccess(data.result);
      }).fail((jqXhr) => {
        this.actions.getblockChainInfoAjaxFail(jqXhr.responseJSON.message);
      });
    }

}

export default alt.createActions(HomeActions);