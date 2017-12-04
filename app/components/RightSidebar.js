import React from 'react';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';

import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, blue200, pinkA200, darkBlack, lightBlack, transparent} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ImagePanoramaFishEye from 'material-ui/svg-icons/image/panorama-fish-eye';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionAndroid from 'material-ui/svg-icons/action/android';
var classNames = require('classnames');

class RightSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        HomeStore.listen(this.onChange);
        var that = this; 

        function response(){        
            var w = $(window).width();
            if(w < 1366){
                that.setState({openLeft: false});
                that.setState({openRight: false});
            } else {
                that.setState({openLeft: true});
                that.setState({openRight: true});
            }
        }
        $(window).resize(function(){
            response();
        });
        response();
    }
    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }
    onChange(state) {
        this.setState(state);
    }
    render() {
        return (
            <div>
                <Drawer className={classNames({'sidebar-right':true, 'sidebar-right-divt': !this.state.openRight})} open={this.state.openRight} openSecondary={true}>
                    <div>
                        <div className="sidebar-right-header">
                            <FlatButton
                                label="Blockchain Activity"
                                secondary={true}
                                fullWidth={true}
                                icon={<ActionAndroid />}
                                />
                            <List>
                                {
                                    this.state.blockchainInfo.map(function(item, i){
                                        return (
                                            <div>
                                                <Subheader className="list-group-right-first">{moment.unix(item.timeStamp).format("DD MMM YYYY hh:mm a")}</Subheader>
                                                <ListItem  key={"Activity"+i} className="list-item-right-first"
                                                    value={1}
                                                    primaryText="10:07:20"
                                                    secondaryText="Property transfered successfully to akbar gondouli 9879*******"
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </List>
                        </div>
                        <div className="sidebar-right-header">
                            <FlatButton
                                label="Blockchain Explorer"
                                secondary={true}
                                fullWidth={true}
                                icon={<ActionAndroid />}
                                />
                            <List>
                                {
                                    this.state.blockchainInfo.map(function (item, i) {
                                        return (
                                            <div>
                                                <ListItem key={"Explorer"+i} className="list-item-right-second"
                                                    value={1}
                                                    style={{marginBottom:'0.5em'}}
                                                    primaryText={item.transactionIndex}
                                                    secondaryText={item.blockHash}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </List>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default RightSidebar;