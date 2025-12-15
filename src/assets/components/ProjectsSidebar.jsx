export default function ProjectSidebar() {
  return (
    <aside className=" px-8 py-16 rounded-r-xl bg-stone-900 text-stone-50 w-1/3 md:w-72 ">
      <h1 className=" mb-8 uppercase font-bold md:text-xl text-stone-200 ">
        Your Projects
      </h1>
      <div>
        <button className="bg-stone-700 text-stone-400 px-4 text-xs md:text-base py-2 rounded-xl hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
