//import {createElement} from 'react';
import '../../styles/atoms/NoteItem.css';



function NoteItem({notes, autoSaveNote, indexNote}) {

    return (
        <textarea className='NoteItem' maxLength='19000' value={notes[indexNote].text} onChange={autoSaveNote} placeholder='empty'/>
    );
}

export {NoteItem};