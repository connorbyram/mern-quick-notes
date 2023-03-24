import NoteCard from "../../components/NoteCard/NoteCard";


export default function NotesPage({ notes }) {

  
  return (
    <>
      <h1>NotesPage</h1>
      {notes.length ? 
        notes.map((note, idx) => {
          return (<NoteCard note={note} />);
        })
       : 
       <p>Not Notes Yet</p>
      }

    </>
  );
}