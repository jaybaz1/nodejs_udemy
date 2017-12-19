console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Get a note', title);
};

var removeNote = (title) => {
    console.log('Remove a note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
