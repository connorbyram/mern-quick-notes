import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";

export default function NewNotePage({ addNote }) {
  return (
    <NewNoteForm addNote={addNote}/>
  );
}