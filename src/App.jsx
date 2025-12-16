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

  function handleAddProject(projectData){
    setProjectsState(prevState=>{
      const newProject = {
        ...projectData
      }
      return{
        selectedProject:prevState.selectedProject,
        projects:[...prevState.projects,newProject]
      }
    })
  }

  console.log(projectsState)

  let content;

  if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected handleAddNewProject={handleStartAddProject} />;
  }
  if (projectsState.selectedProject === null) {
    content = <NewPorject onAdd={handleAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar handleAddNewProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
