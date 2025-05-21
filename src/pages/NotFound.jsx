import ErrorPage from "../components/ErrorPage";
import img404 from '../assets/bas.png'; 

export default function NotFound(){
    return(
        <ErrorPage
              code="404"
              message="Bad Request – Permintaan tidak bisa diproses."
              image={img404}
            />
    )
} 