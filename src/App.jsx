import Student from "./Student";
import Cybrom from "./Cybrom";


const mystd=Student.map((key)=><Cybrom rnm={key.rolln} nm={key.name} ct={key.city} fs={key.fees}/>)

const App=()=>{
    return(
        <>
         <h1>this is cybrom Student</h1>
        <table align="center" border="1" width="600">
       
        <tr>
            
            <th>Rolln:</th>
            <th> Name: </th>
            <th>City:</th>
            <th>Fees:</th>
        </tr>
        {mystd}
        </table>
        </>
    )
}
export default App;