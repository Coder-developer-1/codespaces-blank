const Mera = ({name1, name2}) => {
    return(
          <div className="h-[500px] w-full">
           <div className="flex align-center justify-center">
             <div className="bg-yellow-300 p-3 h-[400px] w-full">
                <h1> Hello {name1} </h1>
             </div>
             <div className="bg-green-300 p-3 h-[400px] w-full">
             <h1><h1> wadakam {name2} </h1></h1>
             </div>
           </div>
           </div>
    )
}

export default Mera;