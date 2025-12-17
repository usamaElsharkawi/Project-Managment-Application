import { Children, createContext, useState } from "react";

export const projectContext = createContext({
  projects: [],
  tasks: [],
  selectedProjectId: undefined,
  addProject: () => {},
  deleteProject: () => {},
  selectProject: () => {},
  startAddProject: () => {},
  cancelAddProject: () => {},
  addTask: () => {},
  deleteTask: () => {},
});

export function ProjectsContextProvider({ children }) {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProject,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleCancleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projecID = Math.random();
      const newProject = {
        ...projectData,
        id: projecID,
      };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [newProject, ...prevState.projects],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
      };
    });
  }

  const ctxValue = {
    projects: projectsState.projects,
    tasks: projectsState.tasks,
    selectedProjectId: projectsState.selectedProject,
    addProject: handleAddProject,
    deleteProject: handleDeleteProject,
    selectProject: handleSelectProject,
    startAddProject:handleStartAddProject,
    cancelAddProject:handleCancleAddProject,
    addTask:handleAddTask ,
    deleteTask: handleDeleteTask,
  };

  return (
    <projectContext.Provider value={ctxValue}>
      {children}
    </projectContext.Provider>
  );
}
