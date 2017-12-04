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

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        // this.state = {openLeft: true, openRight: false};
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);
        //calling RightSideBar Ajax
        HomeActions.blockChainInfo()

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
    componentWillReceiveProps(nextProps) { }
    componentDidUpdate() {}
    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }
    onChange(state) {
        this.setState(state);
    }
    handleToggleLeft() {
        //this.setState({openLeft: !this.state.openLeft});
        HomeActions.openLeft();
    }
    handleToggleRight() {
        HomeActions.openRight();
        //this.setState({openRight: !this.state.openRight});
    }

    render() {
        return (
            <div>
                <AppBar
                    className={classNames({'app-bar':true, 'expanded-left': this.state.openLeft, 'expanded-right': this.state.openRight})}
                    title="LAND DEPARTMENT"
                    onLeftIconButtonTouchTap={this.handleToggleLeft.bind(this)}
                    iconElementRight={<IconButton onClick={this.handleToggleRight.bind(this)}><NavigationMenu /></IconButton>}
                />
                <div className={classNames({'app-content':true, 'expanded-left': this.state.openLeft, 'expanded-right': this.state.openRight})}>
                    <div className="root-row row">
                        <div className="col-xs-12">
                            <div className="location">
                                <CommunicationLocationOn />
                                <div>property address</div>
                                <div>All Towar First 226, Dubai</div>
                            </div>
                        </div>
                        <hr className="dividerou"/>
                    </div>
                    <div className="root-row row paddingou">
                        <div className="col-xs-6 col-sm-6 col-md-3 textou">
                            <div>Property Registration No.</div>
                            <div>980000058000</div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-3 textou">
                            <div>Issue Date</div>
                            <div>April 8, 2009</div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-3 textou">
                            <div>Mortgage Status</div>
                            <div>No Loan</div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-3 textou">
                            <div>Property Type</div>
                            <div>Apartement</div>
                        </div>
                    </div>
                    <div className="root-row row paddingou second">
                        <div className="col-xs-6 col-sm-6 col-md-3">
                            <div className="col-xs-12 textou">
                                <div>Community</div>
                                <div>All Towar First 226, Dubai</div>
                            </div>
                            <div className="col-xs-12 textou">
                                <div>Bulding Name</div>
                                <div>Act One</div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-3">
                            <div className="col-xs-12 textou">
                                <div>Plot Number</div>
                                <div>754</div>
                            </div>
                            <div className="col-xs-12 textou">
                                <div>Property Number</div>
                                <div>1004</div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-3">
                            <div className="col-xs-12 textou">
                                <div>Municipality Number</div>
                                <div>6566506465846</div>
                            </div>
                            <div className="col-xs-12 textou">
                                <div>Bulding Name</div>
                                <div>Act One</div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-3 textou">
                            <image src="images/qrcode.png" />
                        </div>
                    </div>
                    <div className="root-row row paddingou third">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="row">
                                <Subheader>Job History</Subheader>
                                <div className="col-xs-12 list-border">
                                    <List >
                                        <ListItem
                                            leftAvatar={<Avatar src="images/google.svg" />}
                                            primaryText="Apple"
                                            secondaryText={
                                                <p>
                                                <span style={{color: darkBlack}}> <b>2011</b> to <b>2017</b></span>
                                                <br />
                                                Desciption
                                                </p>
                                            }
                                            secondaryTextLines={2}
                                            />
                                            <Divider inset={true} />
                                        <ListItem
                                                leftAvatar={<Avatar src="images/apple.svg" />}
                                                primaryText="Google"
                                                secondaryText={
                                                    <p>
                                                    <span style={{color: darkBlack}}> <b>2011</b> to <b>2017</b></span>
                                                    <br />
                                                    Desciption
                                                    </p>
                                                }
                                                secondaryTextLines={2}
                                            />
                                            <Divider inset={true} />
                                        <ListItem
                                                leftAvatar={<Avatar src="images/google.svg" />}
                                                primaryText="Google"
                                                secondaryText={
                                                    <p>
                                                    <span style={{color: darkBlack}}> <b>2011</b> to <b>2017</b></span>
                                                    <br />
                                                    Desciption
                                                    </p>
                                                }
                                                secondaryTextLines={2}
                                            />
                                            <Divider inset={true} />
                                        <ListItem
                                                leftAvatar={<Avatar src="images/google.svg" />}
                                                primaryText="Google"
                                                secondaryText={
                                                    <p>
                                                    <span style={{color: darkBlack}}> <b>2011</b> to <b>2017</b></span>
                                                    <br />
                                                    Desciption
                                                    </p>
                                                }
                                                secondaryTextLines={2}
                                            />
                                            <Divider inset={true} />
                                    </List>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="row">
                                        <Subheader>Education History</Subheader>
                                <div className="col-xs-12 list-border">
                                                                 <List>
                                        <ListItem
                                            leftAvatar={<Avatar src="images/uni.png" />}
                                            primaryText="Oxford"
                                            secondaryText={
                                                <p>
                                                <span style={{color: darkBlack}}> <b>2011</b> to <b>2017</b></span>
                                                <br />
                                                Desciption
                                                </p>
                                            }
                                            secondaryTextLines={2}
                                            />
                                            <Divider inset={true} />
                                        <ListItem
                                                leftAvatar={<Avatar src="images/uni.png" />}
                                                primaryText="Oxford"
                                                secondaryText={
                                                    <p>
                                                    <span style={{color: darkBlack}}> <b>2011</b> to <b>2017</b></span>
                                                    <br />
                                                    Desciption
                                                    </p>
                                                }
                                                secondaryTextLines={2}
                                            />
                                            <Divider inset={true} />
                                        <ListItem
                                                leftAvatar={<Avatar src="images/uni.png" />}
                                                primaryText="Oxford"
                                                secondaryText={
                                                    <p>
                                                    <span style={{color: darkBlack}}> <b>2011</b> to <b>2017</b></span>
                                                    <br />
                                                    Desciption
                                                    </p>
                                                }
                                                secondaryTextLines={2}
                                            />
                                            <Divider inset={true} />
                                        <ListItem
                                                leftAvatar={<Avatar src="images/uni.png" />}
                                                primaryText="Oxford"
                                                secondaryText={
                                                    <p>
                                                    <span style={{color: darkBlack}}> <b>2011</b> to <b>2017</b></span>
                                                    <br />
                                                    Desciption
                                                    </p>
                                                }
                                                secondaryTextLines={2}
                                            />
                                            <Divider inset={true} />
                                    </List>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classNames({'sidbar-left-header':true, 'expanded-left': !this.state.openLeft})} open={this.state.openLeft}>
                    <div className="sidbar-logo"><img src="images/logo.png" alt=""/></div>
                    <TextField className="sidbar-search-box" hintText="Property Number" />
                </div>
            </div>
        );
    }
}

export default Home