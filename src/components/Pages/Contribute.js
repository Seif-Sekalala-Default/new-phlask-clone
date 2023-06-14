import React from 'react';
import styles from './Pages.module.scss';

const Contribute = () => {
  return (
    <div className={styles.pageText}>
      <h2>Contribute</h2>
      <p>
        The PHLASK team is always looking for ways to welcome new contributors!
        If you have any skills or interest in the following areas, we encourage
        you to reach out and get involved.
      </p>
      <ul>
        <li>Programming</li>
      </ul>

      <h3>Code of Conduct</h3>
      <p>
        The PHLASK App is being developed by a collectively organized group of
        volunteers known as the PHLASK Cooperative. We operate with the
        principles of non-hierarchical, collective self-management in service of
        fulfilling the project’s mission. The PHLASK Cooperative is composed of
        individuals of varying socioeconomic, educational and technical
        backgrounds, and welcomes all individuals to contribute to the project’s
        mission. 
      </p>

      <p>
        Our core operating philosophy, and established norms for
        cooperation, are rooted in transparency, sharing and mentorship. We
        welcome all newcomers to help us uphold these principles and continue
        nurturing the equitable growth and development of all project
        contributors as we work together to create a tool to benefit the public.
      </p>

      <h2>List of Contributors To Date</h2>
      <p>
        Since its inception in/around 2017, various contributors have generously contributed their time, effort, and other resources to the PHLASK project. Contributors have mostly participated under divisions called "circles," based on a halocracy philosophy; i.e., decentralized organizational governance via groups or teams. Below are the four major circles of the PHLASK project.
      </p>
      <ul>
        <li> 
          1--Civic 
          2--Design
          3--App-/Web-Development
          4--Data
        </li>
      </ul>

    </div>
  );
};

export default Contribute;
