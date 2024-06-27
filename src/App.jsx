// we will be creating a web portfolio using React and Tailwind CSS.
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
function App() {

  const starttext = useRef();
  const play = useRef();
  useGSAP(()=>{
    gsap.to(starttext.current,{
      
    })
  })

  return (
    <>
      <div className="w-full h-[100vh] bg-[#17181d] flex justify-center items-center">
        <div className=" font-gilroy p-4 overflow-hidden">
          <h1 ref={starttext}className="text-[10vh] text-[#Ffffff]">Portfolio</h1>
        </div>
      </div>

    </>
  )
}

export default App
