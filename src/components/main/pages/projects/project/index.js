import React from "react";


export default class CustomAnimation extends React.Component {
  render() {
    return (
      <div className="project" >
        <div className="project-wrap">
          <div className="project-flex-1">
            <img alt="" src={require(`../../../../../assets/img/portfolio-icons/${this.props.data.image}`)} />
          </div>
          <div className="project-flex-2">
            <h3>{this.props.data.title}</h3>
            <h5 className="portfolio-icon-description">{this.props.data.description}</h5>
            <p className="summary-paragraph">{this.props.data.summary}</p>
            <a className="project-button" href={this.props.data.url} target="_blank">{this.props.data.button}</a>
          </div>
        </div>
      </div>
    )
  }
}

