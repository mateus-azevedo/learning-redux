import React from "react";

import { connect } from "react-redux";
// connect utiliza o conceito hocs (High Order Components), mas é um pattern do
// react para compartilhar uma informação para algum component

const Sidebar = ({ modules }) => (
  <aside>
    {modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson) => (
            <li key={lesson.id}>{lesson.title}</li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

export default connect((state) => ({ modules: state }))(Sidebar);
