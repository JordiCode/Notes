import React from 'react';
import {Title} from './components/atoms/Title';
import {NoteBook} from './components/molecules/NoteBook'
import {NoteItem} from './components/atoms/NoteItem';
import {Pagination} from './components/molecules/Pagination'
import {PageItem} from './components/atoms/PageItem';
import './styles/organisms/App.css';





function App() {

  const defaultNotes = [{text: ''}, {text: ''}, {text: ''}];
  const [indexNote, setIndexNote] = React.useState(0);
  
  const [notes, setNotes] = React.useState(defaultNotes);

  function autoSaveNote(event) {
    let copyNotes = [...notes];
    copyNotes[indexNote].text = event.target.value;
    setNotes(copyNotes);
  }

  function changeIndexNote(i) {
    setIndexNote(i);
  }

  return (
    <div className="App">
      <Title />
      <NoteBook>
        {<NoteItem notes={notes} autoSaveNote={autoSaveNote} indexNote={indexNote}/>}  
      </NoteBook>
      <Pagination>
        {<PageItem indexNote={indexNote} changeIndexNote={changeIndexNote}/>}
      </Pagination>
    </div>
  );
}

export default App;
