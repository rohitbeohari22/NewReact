import Collage from "../Collage";
import Student from "./Student";
     

const mystd=Student.map((key)=><Collage rnm={key.rolln} nm={key.name}
 fs={key.fees} city={key.city} />);

const App=()=>{
return(
    <>
    <h1>cybrom</h1>

    <table border="1">
    <tr>
    <th>rolln:</th>
    <th>name:</th>
    <th>fees:</th>
    <th>city:</th>
    </tr>
    {mystd}
    </table>
    </>
    
    
)
}
export default App;