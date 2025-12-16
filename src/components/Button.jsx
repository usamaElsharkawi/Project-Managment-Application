export default function Button({children,...props}){
    return<button {...props} className="bg-stone-700 text-stone-400 px-4 text-xs md:text-base py-2 rounded-xl hover:bg-stone-600 hover:text-stone-100">
          {children}
        </button>
}