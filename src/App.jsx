import { useState } from "react";
import NewPorject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectsSidebar";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleCancleAddProject(){
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
        projects: [...prevState.projects, newProject],
      };
    });
  }


  let content;

  if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected handleAddNewProject={handleStartAddProject} />;
  }
  if (projectsState.selectedProject === null) {
    content = <NewPorject onAdd={handleAddProject} onCancel={handleCancleAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar projects={projectsState.projects} handleAddNewProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
