import { useState } from 'react';
import arrow from './assets/down-arrow.png';

export function NameInput({ name, contacts, nameHandler, contactHandler }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ margin: '16px 0' }}>
      <div className={`NCdetails ${isExpanded ? 'expanded' : ''}`}>
        <h3 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          Name and Contact Information
        </h3>
        <img
          onClick={toggleSection}
          style={{ width: '27px', height: '25px' }}
          className={`arrow-icon ${isExpanded ? 'rotated' : ''}`}
          src={arrow}
          alt="arrow"
        />
      </div>

      {isExpanded && (
        <div className="expanding-section">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => nameHandler(e.target.value)}
            placeholder="Enter your name"
          />

          <div>
            <label>Phone Number</label>
            <input
              value={contacts.PhoneNumber}
              type="tel"
              pattern="^[0-9+\-]+$"
              maxLength={20}
              onChange={(e) => contactHandler('PhoneNumber', e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              value={contacts.email}
              type="email"
              onChange={(e) => contactHandler('email', e.target.value)}
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label>LinkedIn</label>
            <input
              value={contacts.linkedIn}
              type="url"
              onChange={(e) => contactHandler('linkedIn', e.target.value)}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>
          <div>
            <label>GitHub</label>
            <input
              value={contacts.github}
              type="url"
              onChange={(e) => contactHandler('github', e.target.value)}
              placeholder="https://github.com/yourusername"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function EduInput({ eduInfo, handlerFunction }) {
  const values = ['i.', 'ii.'];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ margin: '16px 0' }}>
      <div className={`Edudetails ${isExpanded ? 'expanded' : ''}`}>
        <h3 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          Education details
        </h3>
        <img
          onClick={toggleSection}
          style={{ width: '27px', height: '25px' }}
          className={`arrow-icon ${isExpanded ? 'rotated' : ''}`}
          src={arrow}
          alt="arrow"
        />
      </div>

      {isExpanded && (
        <div className="expanding-section edu" style={{ display: 'flex' }}>
          {values.map((value, index) => (
            <div key={index} style={{ width: '50%' }}>
              <label>{value} school/college</label>
              <input
                type="text"
                value={eduInfo[index].scName}
                onChange={(e) =>
                  handlerFunction('scName', index, e.target.value)
                }
                placeholder="Enter your school/college"
              />

              <div>
                <label>{value} degree</label>
                <input
                  value={eduInfo[index].degree}
                  type="text"
                  onChange={(e) =>
                    handlerFunction('degree', index, e.target.value)
                  }
                  placeholder="Enter your degree"
                />
              </div>
              <div>
                <label>{value} location</label>
                <input
                  value={eduInfo[index].location}
                  type="text"
                  onChange={(e) =>
                    handlerFunction('location', index, e.target.value)
                  }
                />
              </div>
              <div>
                <label>{value} Start date - End date</label>
                <div>
                  <input
                    value={eduInfo[index].start}
                    type="date"
                    onChange={(e) =>
                      handlerFunction('start', index, e.target.value)
                    }
                  />
                  <input
                    value={eduInfo[index].end}
                    type="date"
                    onChange={(e) =>
                      handlerFunction('end', index, e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function TsInput({ tsInfo, handlerFunction }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ margin: '16px 0' }}>
      <div className={`tsdetails ${isExpanded ? 'expanded' : ''}`}>
        <h3 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          Technical skills
        </h3>
        <img
          onClick={toggleSection}
          style={{ width: '27px', height: '25px' }}
          className={`arrow-icon ${isExpanded ? 'rotated' : ''}`}
          src={arrow}
          alt="arrow"
        />
      </div>

      {isExpanded && (
        <div className="expanding-section">
          <label>Languages</label>
          <input
            type="text"
            value={tsInfo.languages}
            onChange={(e) => handlerFunction('languages', e.target.value)}
          />

          <label>Frameworks</label>
          <input
            value={tsInfo.frameworks}
            type="text"
            onChange={(e) => handlerFunction('frameworks', e.target.value)}
          />

          <label>Developer Tools</label>
          <input
            value={tsInfo.DevTools}
            type="text"
            onChange={(e) => handlerFunction('DevTools', e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export function ProjectInput({ projectInfo, handlerFunction }) {
  const values = ['i.', 'ii.', 'iii.'];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ margin: '16px 0' }}>
      <div className={`projectDetails ${isExpanded ? 'expanded' : ''}`}>
        <h3 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          Project details
        </h3>
        <img
          onClick={toggleSection}
          style={{ width: '27px', height: '25px' }}
          className={`arrow-icon ${isExpanded ? 'rotated' : ''}`}
          src={arrow}
          alt="arrow"
        />
      </div>

      {isExpanded && (
        <div className="expanding-section">
          {values.map((value, index) => (
            <div
              key={index}
              style={{
                margin: '16px 0 48px 0',
                borderBottom: '3px solid #ccc',
              }}
            >
              <div className="proj" style={{ display: 'flex' }}>
                <div style={{ width: '50%' }}>
                  <label>{value} Project Name</label>
                  <input
                    type="text"
                    value={projectInfo[index].name}
                    onChange={(e) =>
                      handlerFunction('name', index, e.target.value)
                    }
                    placeholder="Enter the project name"
                  />
                </div>

                <div style={{ width: '50%' }}>
                  <label>{value} Technologies used</label>
                  <input
                    value={projectInfo[index].technologies_used}
                    type="text"
                    onChange={(e) =>
                      handlerFunction(
                        'technologies_used',
                        index,
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
              <div className="proj">
                <label>{value} description</label>
                <input
                  value={projectInfo[index].desc[0]}
                  type="text"
                  onChange={(e) =>
                    handlerFunction('desc', index, e.target.value, 0)
                  }
                />
                <input
                  value={projectInfo[index].desc[1]}
                  type="text"
                  onChange={(e) =>
                    handlerFunction('desc', index, e.target.value, 1)
                  }
                />
                <input
                  value={projectInfo[index].desc[2]}
                  type="text"
                  onChange={(e) =>
                    handlerFunction('desc', index, e.target.value, 2)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ExpInput({ expInfo, handlerFunction }) {
  const values = ['i.', 'ii.'];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ margin: '16px 0' }}>
      <div className={`expDetails ${isExpanded ? 'expanded' : ''}`}>
        <h3 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          Experience Information
        </h3>
        <img
          onClick={toggleSection}
          style={{ width: '27px', height: '25px' }}
          className={`arrow-icon ${isExpanded ? 'rotated' : ''}`}
          src={arrow}
          alt="arrow"
        />
      </div>

      {isExpanded && (
        <div className="expanding-section">
          {values.map((value, index) => (
            <div
              key={index}
              style={{
                margin: '16px 0 48px 0',
                borderBottom: '3px solid #ccc',
              }}
            >
              <div className="proj" style={{ display: 'flex' }}>
                <div style={{ width: '50%' }}>
                  <label>{value} Name</label>
                  <input
                    type="text"
                    value={expInfo[index].name}
                    onChange={(e) =>
                      handlerFunction('name', index, e.target.value)
                    }
                    placeholder="Company/hackathon name"
                  />
                </div>

                <div style={{ width: '50%' }}>
                  <label>{value} type</label>
                  <input
                    value={expInfo[index].type}
                    type="text"
                    onChange={(e) =>
                      handlerFunction('type', index, e.target.value)
                    }
                    placeholder="Internship / hackathon"
                  />
                </div>
              </div>
              <div className="proj">
                <label>{value} description</label>
                <input
                  value={expInfo[index].desc[0]}
                  type="text"
                  onChange={(e) =>
                    handlerFunction('desc', index, e.target.value, 0)
                  }
                />
                <input
                  value={expInfo[index].desc[1]}
                  type="text"
                  onChange={(e) =>
                    handlerFunction('desc', index, e.target.value, 1)
                  }
                />
                <input
                  value={expInfo[index].desc[2]}
                  type="text"
                  onChange={(e) =>
                    handlerFunction('desc', index, e.target.value, 2)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
