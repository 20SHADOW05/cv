import { StrictMode, use, useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as resume from './resume.jsx';
import * as options from './options.jsx';
import './index.css';

function App() {
  const [name, setName] = useState('Your Name');
  const [contacts, setContacts] = useState({
    PhoneNumber: '+917544374657',
    email: 'yourname123@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/yourusername/',
    github: 'https://github.com/yourusername',
  });
  const [eduInfo, seteduInfo] = useState(resume.EduInfo);
  const [tsInfo, setTsInfo] = useState({
    languages: ' Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R',
    frameworks:
      ' React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI',
    DevTools:
      ' Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ',
  });
  const [projectInfo, setprojectInfo] = useState(resume.ProjectInfo);
  const [ExpInfo, setExpInfo] = useState(resume.expInfo);

  const updateName = (newName) => {
    setName(newName);
  };

  const updateContacts = (field, newValue) => {
    setContacts({ ...contacts, [field]: newValue });
  };

  const updateEduInfo = (field, index, newValue) => {
    const updated = [...eduInfo]; // copy the array
    updated[index] = {
      ...updated[index], // copy the object at index
      [field]: newValue, // update the specific field
    };
    seteduInfo(updated);
  };

  const updateTsInfo = (field, newValue) => {
    setTsInfo({ ...tsInfo, [field]: newValue });
  };

  const updateProjectInfo = (field, index, newValue, descIndex = null) => {
    const updated = [...projectInfo];
    if (field === 'desc') {
      if (!updated[index].desc) {
        updated[index].desc = [];
      }
      updated[index].desc[descIndex] = newValue;
    } else {
      updated[index] = {
        ...updated[index],
        [field]: newValue,
      };
    }
    setprojectInfo(updated);
  };

  const updateExpInfo = (field, index, newValue, descIndex = null) => {
    const updated = [...ExpInfo];
    if (field === 'desc') {
      if (!updated[index].desc) {
        updated[index].desc = [];
      }
      updated[index].desc[descIndex] = newValue;
    } else {
      updated[index] = {
        ...updated[index],
        [field]: newValue,
      };
    }
    setExpInfo(updated);
  };

  return (
    <>
      <div className="options">
        <options.NameInput
          name={name}
          contacts={contacts}
          nameHandler={updateName}
          contactHandler={updateContacts}
        />
        <options.EduInput eduInfo={eduInfo} handlerFunction={updateEduInfo} />
        <options.TsInput tsInfo={tsInfo} handlerFunction={updateTsInfo} />
        <options.ProjectInput
          projectInfo={projectInfo}
          handlerFunction={updateProjectInfo}
        />
        <options.ExpInput expInfo={ExpInfo} handlerFunction={updateExpInfo} />
      </div>

      <div className="template">
        <div className="resume">
          <resume.Name name={name} />
          <resume.Contacts
            PhoneNumber={contacts.PhoneNumber}
            email={contacts.email}
            linkedIn={contacts.linkedIn}
            github={contacts.github}
          />
          <resume.Edu EduInfo={eduInfo} />
          <resume.Technical
            languages={tsInfo.languages}
            frameWorks={tsInfo.frameworks}
            DevTools={tsInfo.DevTools}
          />
          <resume.Project ProjectInfo={projectInfo} />
          <resume.Experience expInfo={ExpInfo} />
        </div>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
