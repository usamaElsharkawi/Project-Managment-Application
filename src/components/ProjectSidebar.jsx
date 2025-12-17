import Button from "./Button";
export default function ProjectSidebar({
  handleAddNewProject,
  projects,
  onSelectProject,
  selectedProjectId
}) {
  return (
    <aside className=" px-8 py-16 rounded-r-xl bg-stone-900 text-stone-50 w-1/3 md:w-72 ">
      <h1 className=" mb-8 uppercase font-bold md:text-xl text-stone-200 ">
        Your Projects
      </h1>
      <div>
        <Button onClick={handleAddNewProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssCalssses = "w-full text-left rounded-sm px-2 py-1 my-1 hover:text-stone-200 hover:bg-stone-800";
          if(project.id===selectedProjectId){
            cssCalssses += " bg-stone-800 text-stone-200"
          }else{
            cssCalssses+=" text-stone-400"
          }
          return (
            <li key={project.id}>
              <button onClick={()=> onSelectProject(project.id)} className={cssCalssses}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
