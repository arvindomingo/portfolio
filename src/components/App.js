import './App.css';
import React from 'react';
import ProjectList from './ProjectList'

class App extends React.Component {
    render() {
        return (
            <div className="ui container portfolio">
                <div className="ui grid">
                    <div className="three wide column section-title">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQEnoi4SWB7X6A/profile-displayphoto-shrink_800_800/0/1517402761307?e=1638403200&v=beta&t=l4s719bJJYA-nNHJM9Hmp93N-y_2OGiJeAqM872vQ1c" alt="profile-photo" className="ui small image" />
                    </div>
                    <div className="nine wide column section-aboutme">
                        <h2 className="ui header fullname">Arvin Domingo</h2>
                        <h4 className="role-title">Lead Software Engineer</h4>
                        <p>Hard-working professional with 9 years of experience focusing on Web
Development. Aiming to leverage my skills to successfully fill the React
Developer role at your company.</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/arvin-domingo/" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://github.com/arvindomingo" target="_blank" rel="noreferrer">Github</a>
                            <a href="https://m.me/arvsdomingo" target="_blank" rel="noreferrer">Facebook Messenger</a>
                        </div>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="three wide column section-title">
                        <h4>PROJECTS</h4>
                    </div>
                    <div className="nine wide column">
                        <ProjectList />
                    </div>
                </div>
            </div>
        );
    }
};

export default App;