import ErrorPage from '../components/ErrorPage';
import img400 from '../assets/bas.png'; 

export default function Error400() {
  return (
    <ErrorPage
      code="400"
      message="Bad Request – Permintaan tidak bisa diproses."
      image={img400}
    />
  );
}