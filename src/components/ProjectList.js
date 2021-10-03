import './ProjectList.css';
import React from 'react';

const Projects = [
    {
        name: 'CryptoCoin Tracker',
        type: 'React JS',
        description: 'Personal project developed with react redux to get the current price of the Crypto coins that I am currently tracking. The app utilizes Coingecko\s Public API to fetch data about the coin I am tracking (Current market value, price change in 1 hour / 24 hour etc)',
        link: 'https://arvs-cryptocointracker.netlify.com/',
        extras: [
            'React',
            'React Redux',
            'Semantic UI'
        ]
    },
    {
        name: 'Tempus LMS',
        type: 'PHP / Moodle LMS',
        description: "- A customized and extended system based from the Moodle LMS in order to meet the client’s needs <br /> - Custom Themes <br />- Additional Custom Plugins, for example: <br />-- Custom API Endpoints for SAML SSO Login <br />-- Callback APIs after enrolling a user via a third party student management system <br />-- New Course Activity Types like a Custom JW Player, Custom Certificate Activity etc. <br />- Mobile and Desktop Responsive",
        link: 'javascript:void(0)',
        extras: [
            'PHP',
            'Moodle',
            'JQuery',
            'AJAX',
            'Bootstrap',
            'Mustache Template'
        ]
    },
    {
        name: 'Test Youtube APP',
        type: 'React JS',
        description: 'Personal test app developed with react using hooks, this project was made when I was trying to improve more on my knowledge with React',
        link: 'https://arvs-testyoutubeapp.netlify.app/',
        extras: [
            'React',
            'React Redux',
            'Semantic UI'
        ]
    },
    {
        name: 'Recovery Experts',
        type: 'PHP',
        description: 'Website was designed to be able to list and search all the therapists and treatment centers around the United States of America, which are also divided into which type of treatment you are looking for and which area.',
        link: 'javascript:void(0)',
        extras: [
            'PHP',
            'Yii 1.1',
            'JQuery',
            'AJAX',
            'Bootstrap'
        ]
    }
];

class ProjectList extends React.Component {
    renderProjects() {
        return Projects.map((project) => {
            return (
                <div key={project.name} className="item">
                    <div className="content">
                        <a className="header" href={project.link} target="_blank" rel="noreferrer">{project.name}</a>
                        <div className="project-type">
                            {project.type}
                        </div>
                        <div className="description">
                            <p dangerouslySetInnerHTML={{__html: project.description}}></p>
                        </div>
                        <div className="extra">
                            {project.extras.map((extra) => {
                                return <div key={extra} className="ui label">{extra}</div>;
                            })}
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui divided items project-list">
                {this.renderProjects()}
                
            </div>
        );
    }
}

export default ProjectList;