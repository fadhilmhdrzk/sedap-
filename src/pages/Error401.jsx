import ErrorPage from '../components/ErrorPage';
import img401 from '../assets/bas.png'; 

export default function Error401() {
  return (
    <ErrorPage
      code="401"
      message="Bad Request – Permintaan tidak bisa diproses."
      image={img401}
    />
  );
}