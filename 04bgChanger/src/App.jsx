import {useState} from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-screen h-screen duration-200"
    style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">

        <button onClick={()=>setColor("red")}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}>Red
        </button>

        <button onClick={()=>setColor("Blue")}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}>Blue
        </button>

        <button onClick={()=>{setColor("Green")}}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor: "Green"}}>Green
        </button>

        <button onClick={()=>{setColor("Violet")}}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor: "violet"}}>violet
        </button>

        <button onClick={()=>{setColor("purple")}}
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor: "purple"}}>Purple
        </button>

      </div>

      </div>
    </div>
  )
}

export default App
