import { useContext } from "react";
import { projectContext } from "./store/projects-context";
import NewPorject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
function App() {
  const ctx = useContext(projectContext);

  let content = <SelectedProject />;

  if (ctx.selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else if (ctx.selectedProjectId === null) {
    content = <NewPorject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      {content}
    </main>
  );
}

export default App;
