import Input from "./Input"
export default function NewPorject(){
    return <div>
        <menu>
            <button>Cancel</button>
            <button>Save</button>
        </menu>
        <div>
            <Input label='title'/>
            <Input label='description' textArea />
            <Input label='due date'/>
        </div>
    </div>
}