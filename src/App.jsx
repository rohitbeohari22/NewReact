import Cybrom from "./Cybrom";
const student={
    "rolln":1212,
     "name":"raj",
     "city":"bhopal,"
}

const App=()=>{
    return(
        <>
        <h1> welcome to cybrom </h1>
        <Cybrom rolln={student.rolln} name={student.name} city={student.city} />
        </>
    )
}

export default App;

// const App=()=>{
//     const name=["ram","shayam","raj","rohit"];
//     const ans=name.map((key)=>{
//         return(
//             <>
//             <h1>{key}</h1>
//             </>
//         )
//     })

//     return(
//         <>
//         <h1>welcome to cybrom Bhopal</h1>
//         {ans}
//         </>
//     )
// }

// export default App;



// const age=[24,36,35,55,66]
// const myage = age.map((key)=>{

//     return(
//         <>
//         <h1>{key*2}</h1>
        
//         </>
//     )

// })

// const App=()=>{
//     return(
//         <>
//         <h1> welcome to cybrom</h1>
//         {myage}
//         </>
//     )
// }

// export default App;



// const city=["bhopal","indor","rewa","ujjain"]
// const mycity=city.map((key)=>{
//     return(
//         <option>{key}</option>
//     )
// })

// const App=()=>{
//     return(
//         <>
//         <h1>weolcomt to cybrom </h1>
//         <select>{mycity}</select>
//         </>
//     )
// }
// export default App;

// const Subject=["php","oracle","java","asp"];
// const mysub=Subject.map((key)=>{
//     return(
//         <>
//         <li>{key}</li>
//         </>
//     )
// })

// const App=()=>{
//     return(
//         <>
//         <h1>Welcome to cybrom</h1>
//         <ul>{mysub}</ul>
//         </>
//     )
// }
// export default App;






