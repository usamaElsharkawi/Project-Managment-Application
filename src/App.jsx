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

  let content;

  if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected handleAddNewProject={handleStartAddProject} />;
  }
  if (projectsState.selectedProject === null) {
    content = <NewPorject />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar handleAddNewProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
