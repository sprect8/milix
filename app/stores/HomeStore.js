import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
    constructor() {
        this.bindActions(HomeActions);
        this.openLeft = true;
        this.openRight = true;
        this.blockchainInfo = [];
    }
    onOpenLeft(){
        this.openLeft = !this.openLeft;
    }
    onOpenRight(){
        this.openRight = !this.openRight;
    }
    
        onGetblockChainInfoAjaxSuccess(data) {
            this.blockchainInfo = data;
            console.log(this.blockchainInfo)
        }
    
        onGetblockChainInfoAjaxFail(data) {
            this.blockchainInfo = data;
        }

}
export default alt.createStore(HomeStore);