import { useState } from "react";
import NewPorject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
function App() {
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

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProject
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks.filter(
        (task) => task.projectId === projectsState.selectedProject
      )}
    />
  );

  if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected handleAddNewProject={handleStartAddProject} />;
  } else if (projectsState.selectedProject === null) {
    content = (
      <NewPorject onAdd={handleAddProject} onCancel={handleCancleAddProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        selectedProjectId={projectsState.selectedProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        handleAddNewProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}

export default App;
