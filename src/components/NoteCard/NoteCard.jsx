export default function NoteCard({note}) {
    return (
        <div>
            <p>{note.text}</p>
            <p>{new Date(note.createdAt).toLocaleString()}</p>
        </div>
    );
}