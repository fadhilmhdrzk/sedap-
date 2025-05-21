import ErrorPage from '../components/ErrorPage';
import img403 from '../assets/bas.png'; 

export default function Error403() {
  return (
    <ErrorPage
      code="403"
      message="Bad Request – Permintaan tidak bisa diproses."
      image={img403}
    />
  );
}