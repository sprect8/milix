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

class LeftSidebar extends React.Component {
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
    listItemLeft(e){
        var selClas = e.currentTarget.className.split(" ");
        $("#list-item-holder>div").find(".list-item-left").removeClass("selected");
        
        if(selClas[1] === undefined){
            e.currentTarget.className = 'list-item-left selected'
        }else{
            e.currentTarget.className = 'list-item-left'
        }
    }
    render() {
        return (
            <div>
                <Drawer className="sidbar-left md-sidenav" open={this.state.openLeft}>
                    <div>
                        <List id="list-item-holder">
                            <Subheader>Today</Subheader>
                            <ListItem className="list-item-left selected"
                            onClick={this.listItemLeft.bind(this)}
                            value={1}
                            selectedMenuItemStyle={{background: "#ccc"}}
                            leftIcon={<ImagePanoramaFishEye color={blue200} />}
                            primaryText="Property Number"
                            secondaryText={
                                <div>
                                    <div>7860000021</div>
                                    <div><CommunicationLocationOn /> Bukit Jalil, Dubai</div>
                                </div>
                            }
                            secondaryTextLines={2}
                            />
                            <ListItem className="list-item-left"
                            leftIcon={<ImagePanoramaFishEye color={blue200} />}
                            onClick={this.listItemLeft.bind(this)}
                            primaryText="Property Number"
                            secondaryText={
                                <div>
                                    <div>7860000021</div>
                                    <div><CommunicationLocationOn /> Bukit Jalil, Dubai</div>
                                </div>
                            }
                            secondaryTextLines={2}
                            />
                            <ListItem className="list-item-left"
                            leftIcon={<ImagePanoramaFishEye color={blue200} />}
                            onClick={this.listItemLeft.bind(this)}
                            primaryText="Property Number"
                            secondaryText={
                                <div>
                                    <div>7860000021</div>
                                    <div><CommunicationLocationOn /> Bukit Jalil, Dubai</div>
                                </div>
                            }
                            secondaryTextLines={2}
                            />
                            <ListItem className="list-item-left"
                            leftIcon={<ImagePanoramaFishEye color={blue200} />}
                            onClick={this.listItemLeft.bind(this)}
                            primaryText="Property Number"
                            secondaryText={
                                <div>
                                    <div>7860000021</div>
                                    <div><CommunicationLocationOn /> Bukit Jalil, Dubai</div>
                                </div>
                            }
                            secondaryTextLines={2}
                            />
                            <ListItem className="list-item-left"
                            leftIcon={<ImagePanoramaFishEye color={blue200} />}
                            primaryText="Property Number"
                            secondaryText={
                                <div>
                                    <div>7860000021</div>
                                    <div><CommunicationLocationOn /> Bukit Jalil, Dubai</div>
                                </div>
                            }
                            secondaryTextLines={2}
                            />
                            <ListItem className="list-item-left"
                            leftIcon={<ImagePanoramaFishEye color={blue200} />}
                            primaryText="Property Number"
                            secondaryText={
                                <div>
                                    <div>7860000021</div>
                                    <div><CommunicationLocationOn /> Bukit Jalil, Dubai</div>
                                </div>
                            }
                            secondaryTextLines={2}
                            />
                            <ListItem className="list-item-left"
                            leftIcon={<ImagePanoramaFishEye color={blue200} />}
                            primaryText="Property Number"
                            secondaryText={
                                <div>
                                    <div>7860000021</div>
                                    <div><CommunicationLocationOn /> Bukit Jalil, Dubai</div>
                                </div>
                            }
                            secondaryTextLines={2}
                            />
                        </List>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default LeftSidebar;