import axios from 'axios'

const API_URL = "https://jqjksxvemrjhyyzvroff.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxamtzeHZlbXJqaHl5enZyb2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMTkxODEsImV4cCI6MjA2NDU5NTE4MX0.0ffwVgeaW5jq7T_1MdwXCUwdPeT4we4dd2-EiT9ofko"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}
