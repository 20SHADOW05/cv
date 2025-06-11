export function Name({ name }) {
  return <div className="name">{name}</div>;
}

export function Contacts({ PhoneNumber, email, linkedIn, github }) {
  return (
    <div className="contacts">
      <span>{PhoneNumber}</span>
      <span>{email}</span>
      <a href={linkedIn} target="_blank">
        {linkedIn}
      </a>
      <a href={github} target="_blank">
        {github}
      </a>
    </div>
  );
}

export function Edu({ EduInfo }) {
  return (
    <div>
      <div className="title">Education</div>
      {EduInfo.map((info) => (
        <div key={info.scName + info.location} className="EduContent">
          <div>
            <strong>{info.scName}</strong> <br />
            <em>{info.degree}</em>
          </div>
          <div>
            {info.location} <br />
            <em>
              {info.start} <strong>~</strong> {info.end}
            </em>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Technical({ languages, frameWorks, DevTools }) {
  return (
    <div>
      <div className="title">Technical Skills</div>
      <div className="lang">
        <strong>Languages :</strong> {languages} <br />
        <strong>Frameworks :</strong> {frameWorks} <br />
        <strong>Developer Tools :</strong> {DevTools}
      </div>
    </div>
  );
}

export function Project({ ProjectInfo }) {
  return (
    <div>
      <div className="title">Projects</div>
      {ProjectInfo.map((info, index) => (
        <div key={index} className="projects">
          <strong>{info.name}</strong> | <em>{info.technologies_used}</em>
          <ul>
            <li>{info.desc[0]}</li>
            <li>{info.desc[1]}</li>
            <li>{info.desc[2]}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Experience({ expInfo }) {
  return (
    <div>
      <div className="title">Experience</div>
      {expInfo.map((info) => (
        <div>
          <strong>{info.name}</strong> | <em>{info.type}</em>
          <ul>
            <li>{info.desc[0]}</li>
            <li>{info.desc[1]}</li>
            <li>{info.desc[2]}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export let EduInfo = [
  {
    scName: 'Southwestern University',
    degree: 'Bachelor of Arts in Computer Science, Minor in Business',
    start: '2018-08-01',
    end: '2021-05-01',
    location: 'Georgetown, TX',
  },
  {
    scName: 'Blinn College',
    degree: 'Associate’s in Liberal Arts',
    start: '2014-08-01',
    end: '2018-05-01',
    location: 'Bryan, TX',
  },
];

export let ProjectInfo = [
  {
    name: 'Gitlytics',
    technologies_used: 'Python, Flask, React, PostgreSQL, Docker',
    desc: [
      'Developed a full-stack web application using with Flask serving a REST API with React as the frontend.',
      'Implemented GitHub OAuth to get data from user’s repositories.',
      'Visualized GitHub data to show collaboration.',
    ],
  },
  {
    name: 'Paintball',
    technologies_used: 'Spigot API, Java, Maven, TravisCI, Git',
    desc: [
      'Developed a Minecraft server plugin to entertain kids during free time for a previous job.',
      'Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review.',
      'Implemented continuous delivery using TravisCI to build the plugin upon new a release.',
    ],
  },
  {
    name: 'Task Manager App',
    technologies_used: 'React, Firebase, Tailwind CSS',
    desc: [
      'Developed a responsive task manager using React and Tailwind CSS.',
      'Integrated Firebase for real-time database and user authentication.',
      'Deployed the application on Vercel with CI/CD workflow.',
    ],
  },
];

export let expInfo = [
  {
    name: 'Undergraduate Research Assistant',
    type: 'Internship',
    desc: [
      'Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems',
      'Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data',
      'Explored ways to visualize GitHub collaboration in a classroom setting',
    ],
  },
  {
    name: 'Hack the Future 2024',
    type: 'Hackathon',
    desc: [
      'Built a browser-based code editor with real-time collaboration using WebSockets',
      'Implemented syntax highlighting and auto-save using localStorage and Monaco Editor',
      'Won 2nd place among 80+ teams for innovation in developer tools',
    ],
  },
];
