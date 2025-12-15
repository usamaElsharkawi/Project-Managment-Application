import NewPorject from "./assets/components/NewProject";
import ProjectSidebar from "./assets/components/ProjectsSidebar";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8" >
      <ProjectSidebar/>
      <NewPorject/>
    </main>
  );
}

export default App;
