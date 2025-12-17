import { useState } from "react";
import NewPorject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

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

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProject
  );
  let content = <SelectedProject project={selectedProject} />;

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
