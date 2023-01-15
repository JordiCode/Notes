//import {createElement} from 'react';
import '../../styles/molecules/NoteBook.css'


function NoteBook(props) {
    return (
        <article className='NoteBook'>
            {props.children}
        </article>
    )
}

export {NoteBook};