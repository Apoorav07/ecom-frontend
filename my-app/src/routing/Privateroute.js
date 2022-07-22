import { useSelector } from "react-redux";
import { Navigate } from "react-router";


const Privateroute = ({child}) => {
  
  const {token} = useSelector(state=>state.authreducer)

  return token === null ? child : <Navigate to='/' />

   
}
 
export default Privateroute;

