import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router'
import Waypoint from 'react-waypoint';

class RouteScrollHandler extends Component {
    
  constructor(props, context){
    super(props, context);
    this.state = {
        ready : false
    }

    this.updateRoute = this.updateRoute.bind(this); 
    this.beginningScrollPos = this.beginningScrollPos.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
    console.log(this.props);
    this.beginningScrollPos()
    this.setState({ready : true});
  }

  beginningScrollPos(){
        if(this.props.location.pathname === `/${this.props.route}`){
        this.props.elem.scrollIntoView();
        setTimeout(()=> {
            this.props.elem.scrollIntoView();
        }, 0 ) 
        }
   }


  updateRoute(){
    if(this.props.location.pathname !== `/${this.props.route}`){
        this.context.router.history.push(this.props.route); 
    }
  }

  render() {
    return (
        this.state.ready ? <div>
            <div className="route-trigger-wrapper top">
                <Waypoint onEnter={this.updateRoute}/>
            </div>
            <div className="route-trigger-wrapper bottom">
                <Waypoint onEnter={this.updateRoute}/>
            </div>
        </div> : ''
        
    )
  }
}
  
export default withRouter(RouteScrollHandler);