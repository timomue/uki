window.addEventListener('load', function() {
  /* --> Style <-- */
    /* --> Colors <-- */
      var color1 = 'limegreen';
      var color2 = 'gold';
      var color3 = 'tomato';
  /* --> Data <-- */
    /* --> Fretboard <-- */
      var fretboard = [
        ['A-1', 'A#/Bb-1', 'B-1', 'C-2', 'C#/Db-2', 'D-2', 'D#/Eb-2', 'E-2', 'F-2', 'F#/Gb-2', 'G-2', 'G#/Ab-2', 'A-2'],
        ['E-1', 'F-1', 'F#/Gb-1', 'G-1', 'G#/Ab-1', 'A-1', 'A#/Bb-1', 'B-1', 'C-2', 'C#/Db-2', 'D-2', 'D#/Eb-2', 'E-2'],
        ['C-1', 'C#/Db-1', 'D-1', 'D#/Eb-1', 'E-1', 'F-1', 'F#/Gb-1', 'G-1', 'G#/Ab-1', 'A-1', 'A#/Bb-1', 'B-1', 'C-2'],
        ['G-1', 'G#/Ab-1', 'A-1', 'A#/Bb-1', 'B-1', 'C-2', 'C#/Db-2', 'D-2', 'D#/Eb-2', 'E-2', 'F-2', 'F#/Gb-2', 'G-2']
      ];
    /* --> Major Chords <-- */
      var majorChords = [
        ['A', 'C#/Db', 'E'],
        ['A#/Bb', 'D', 'F'],
        ['B', 'D#/Eb', 'F#/Gb'],
        ['C', 'E', 'G'],
        ['C#/Db', 'F', 'G#/Ab'],
        ['D', 'F#/Gb', 'A'],
        ['D#/Eb', 'G', 'A#/Bb'],
        ['E', 'G#/Ab', 'B'],
        ['F', 'A', 'C'],
        ['F#/Gb', 'A#/Bb', 'C#/Db'],
        ['G', 'B', 'D'],
        ['G#/Ab', 'C', 'D#/Eb']
      ];
    /* --> Minor Chords <-- */
      var minorChords = [
        ['A', 'C', 'E'],
        ['A#/Bb', 'C#/Db', 'F'],
        ['B', 'D', 'F#/Gb'],
        ['C', 'D#/Eb', 'G'],
        ['C#/Db', 'E', 'G#/Ab'],
        ['D', 'F', 'A'],
        ['D#/Eb', 'F#/Gb', 'A#/Bb'],
        ['E', 'G', 'B'],
        ['F', 'G#/Ab', 'C'],
        ['F#/Gb', 'A', 'C#/Db'],
        ['G', 'A#/Bb', 'D'],
        ['G#/Ab', 'B', 'D#/Eb']
      ];
    /* --> Standard Chord Setting <-- */
      var chords = majorChords;
  /* --> Setup <-- */
    /* --> Fretboard <-- */
      var fretboardHTML = document.createElement('div');
      fretboardHTML.setAttribute('id', 'fretboard');
    /* --> Numbers <-- */
      var numbersHTML = document.createElement('div');
      numbersHTML.setAttribute('id', 'numbers');
      numbersHTML.style.display = 'flex';
      numbersHTML.style.flexDirection = 'row';
    /* --> Each Fret <-- */
      for (var fret = 0; fret <= 12; fret++) {
        /* --> Number <-- */
          var numberHTML = document.createElement('div');
          numberHTML.setAttribute('class', 'number');
          numberHTML.style.width = '80px';
          numberHTML.style.height = '30px';
          numberHTML.style.display = 'flex';
          numberHTML.style.justifyContent = 'center';
          numberHTML.style.alignItems = 'center';
          numberHTML.innerHTML = fret;
        /* --> Append Number To Numbers <-- */
          numbersHTML.appendChild(numberHTML);
      }
    /* --> Append Numbers To Fretboard <-- */
      fretboardHTML.appendChild(numbersHTML);
    /* --> Each String <-- */
      for (var string = 0; string <= 3; string++) {
        /* --> String <-- */
          var stringHTML = document.createElement('div');
          stringHTML.setAttribute('class', 'string');
          stringHTML.style.display = 'flex';
          stringHTML.style.flexDirection = 'row';
        /* --> Each Fret <-- */
          for (var fret = 0; fret <= 12; fret++) {
            /* --> Fret <-- */
              var fretID = fretboard[string][fret];
              var noteName = fretID.split('-')[0];
              var pitchLevel = fretID.split('-')[1];
              var fretHTML = document.createElement('div');
              fretHTML.setAttribute('class', 'fret noteName-' + noteName + ' pitchLevel-' + pitchLevel);
              fretHTML.style.width = '80px';
              fretHTML.style.height = '80px';
              fretHTML.style.display = 'flex';
              fretHTML.style.justifyContent = 'center';
              fretHTML.style.alignItems = 'center';
              fretHTML.innerHTML = noteName;
            /* --> Append Fret To String <-- */
              stringHTML.appendChild(fretHTML);
          }
        /* --> Append String To Fretboard <-- */
          fretboardHTML.appendChild(stringHTML);
      }
    /* --> App <-- */
      var app = document.getElementById('app');
      app.style.display = 'flex';
      app.style.justifyContent = 'center';
      app.style.alignItems = 'center';
    /* --> Append Fretboard To App <-- */
      app.appendChild(fretboardHTML);
    /* --> Container <-- */
      var container = document.getElementById('fretboard');
    /* --> Major Minor Toggle <-- */
      var majorMinorToggle = document.getElementById('majorMinorToggle');
  /* --> Events <-- */
    /* --> Mouse Over <-- */
      container.addEventListener('mouseover', function(e) {
        /* --> Check If Click-Target Is A Fret <-- */
          if (e.target.className != 'string') {
            /* --> Remember Value Of Affected Note <-- */
              var affectedNote = e.target.innerHTML;
            /* --> Each Chord <-- */
              for (var chordIndex = 0; chordIndex < chords.length; chordIndex++) {
                /* --> Check If Chord Root Note Equals Affected Note <-- */
                  if (chords[chordIndex][0] === affectedNote) {
                    /* --> Extract Notes From Chord <-- */
                      var notes = chords[chordIndex];
                    /* --> Each Note <-- */
                      for (var noteIndex = 0; noteIndex < notes.length; noteIndex++) {
                        /* --> Retrieve All Notes <-- */
                          var allNotes = document.getElementsByClassName('noteName-' + notes[noteIndex]);
                        /* --> Go Through All Notes <-- */
                          for (var allNotesIndex = 0; allNotesIndex < allNotes.length; allNotesIndex++) {
                            /* --> Root Note Style <-- */
                              if (allNotes[allNotesIndex].innerHTML === chords[chordIndex][0]) {
                                allNotes[allNotesIndex].style.border = '3px solid ' + color1;
                              }
                            /* --> Third Note Style <-- */
                              if (allNotes[allNotesIndex].innerHTML === chords[chordIndex][1]) {
                                allNotes[allNotesIndex].style.border = '3px solid ' + color2;
                              }
                            /* --> Fifth Note Style <-- */
                              if (allNotes[allNotesIndex].innerHTML === chords[chordIndex][2]) {
                                allNotes[allNotesIndex].style.border = '3px solid ' + color3;
                              }
                            /* --> All Notes Style <-- */
                              allNotes[allNotesIndex].style.transform = 'scale(1.125)';
      }}}}}});
    /* --> Mouse Out <-- */
      container.addEventListener('mouseout', function(e) {
        /* --> Check If Click-Target Is A Fret <-- */
          if (e.target.className != 'string') {
            /* --> Remember Value Of Affected Note <-- */
              var affectedNote = e.target.innerHTML;
            /* --> Each Chord <-- */
              for (var chordIndex = 0; chordIndex < chords.length; chordIndex++) {
                /* --> Check If Chord Root Note Equals Affected Note <-- */
                  if (chords[chordIndex][0] === affectedNote) {
                    /* --> Extract Notes From Chord <-- */
                      var notes = chords[chordIndex];
                    /* --> Each Note <-- */
                      for (var noteIndex = 0; noteIndex < notes.length; noteIndex++) {
                        /* --> Retrieve All Notes <-- */
                          var allNotes = document.getElementsByClassName('noteName-' + notes[noteIndex]);
                        /* --> Go Through All Notes <-- */
                          for (var allNotesIndex = 0; allNotesIndex < allNotes.length; allNotesIndex++) {
                            /* --> All Notes Style <-- */
                              allNotes[allNotesIndex].style.border = '3px solid #DDD';
                              allNotes[allNotesIndex].style.backgroundColor = 'white';
                              allNotes[allNotesIndex].style.transform = 'scale(1)';
      }}}}}});
    /* --> Major / Minor Toggle Change <-- */
      majorMinorToggle.addEventListener('change', function() {
        /* --> Evaluate Toggle State <-- */
          if (majorMinorToggle.checked) {
            /* --> Set Chords To Minor <-- */
              chords = minorChords;
          } else {
            /* --> Set Chords To Major <-- */
              chords = majorChords;
          }
      });
});