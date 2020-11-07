import React from 'react';

class Project extends React.Component {
    render() {
        return (
            <a class="project-link" href={this.props.link} target="_blank" rel="noreferrer">
                <div className="project-container">
                    <img class="project-image" alt={this.props.title} src={this.props.image}></img>
                    <div className="project-title">{this.props.title}</div>
                    <hr></hr>
                    <div className="project-labels-container">
                        {this.props.labels.map((text) => {
                            return (
                                <a className="project-label">{text}</a>
                            )
                        })}
                    </div>
                    <div class="project-description">{this.props.description}</div>
                </div>
            </a>


        )
    }
}

export default Project;