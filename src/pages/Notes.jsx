import { useState, useEffect } from "react";
import { notesAPI } from "../Services/NotesApi";
import AlertBox from "../components/AlertBox";
import GenericTable from "../components/GenericTable";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";
import { AiFillDelete } from "react-icons/ai";

export default function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [notes, setNotes] = useState([]);

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      setError("Gagal memuat catatan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dataForm.title.trim() || !dataForm.content.trim()) {
      setError("Judul dan isi catatan tidak boleh kosong!");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.createNote(dataForm);

      setSuccess("Catatan berhasil ditambahkan!");
      setDataForm({ title: "", content: "", status: "" });

      await loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);

      setSuccess("Catatan berhasil dihapus!");
      await loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#ffff] p-6 rounded-lg">
      <div className="max-w-2xl">
        {/* Judul */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
        </div>

        {/* Alert */}
        {error && <AlertBox type="error">{error}</AlertBox>}
        {success && <AlertBox type="success">{success}</AlertBox>}

        {/* Form Tambah Catatan */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Tambah Catatan Baru
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={dataForm.title}
              placeholder="Judul catatan"
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
              focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            />

            <textarea
              name="content"
              value={dataForm.content}
              placeholder="Isi catatan"
              onChange={handleChange}
              required
              rows="2"
              disabled={loading}
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
              focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
            />

            <input
              type="text"
              name="status"
              value={dataForm.status}
              placeholder="Status catatan (misal: penting, biasa)"
              onChange={handleChange}
              disabled={loading}
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
              focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold
              rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500
              focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200 shadow-lg"
            >
              {loading ? "Mohon Tunggu..." : "Tambah Catatan"}
            </button>
          </form>
        </div>

        {/* Daftar Catatan */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
          <div className="px-6 py-4 ">
            <h3 className="text-lg font-semibold">
              Daftar Catatan ({notes.length})
            </h3>
          </div>

          {loading && <LoadingSpinner text="Memuat catatan..." />}

          {!loading && notes.length === 0 && !error && (
            <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
          )}

          {!loading && notes.length === 0 && error && (
            <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
          )}

          {!loading && notes.length > 0 && !error && (
            <GenericTable
              columns={["#", "Judul", "Isi Catatan", "Status", "Aksi"]}
              data={notes}
              renderRow={(note, index) => (
                <tr key={note.id || index}>
                  <td className="px-6 py-4 font-medium text-gray-700">{index + 1}.</td>
                  <td className="px-6 py-4 font-semibold text-emerald-600">{note.title}</td>
                  <td className="px-6 py-4 max-w-xs truncate text-gray-600">{note.content}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{note.status || "-"}</td>
                  <td className="px-6 py-4">
                    <button
                      title="Hapus catatan"
                      onClick={() => handleDelete(note.id)}
                      disabled={loading}
                      className="cursor-pointer"
                    >
                      <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                    </button>
                  </td>
                </tr>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
}
