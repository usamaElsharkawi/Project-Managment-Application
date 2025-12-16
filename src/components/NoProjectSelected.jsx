import Button from "./Button";
import noProjectimage from '../assets/no-projects.png'

export default function NoProjectSelected() {
  return (
    <div className="w-2/3 text-center mt-24">
      <img
        src={noProjectimage}
        alt="No selected project list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p className="mt-8">
        <Button>Create new project</Button>
      </p>
    </div>
  );
}
