import Button from "./Button";
export default function ProjectSidebar() {
  return (
    <aside className=" px-8 py-16 rounded-r-xl bg-stone-900 text-stone-50 w-1/3 md:w-72 ">
      <h1 className=" mb-8 uppercase font-bold md:text-xl text-stone-200 ">
        Your Projects
      </h1>
      <div>
        <Button>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
