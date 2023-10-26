import React, { Component } from 'react';
import autoBindReact from 'auto-bind/react';
import Swal from 'sweetalert2';
import { getInitialData } from '../utils/index';

import AppInput from './AppInput';
import AppList from './AppList';
import AppEmpty from './AppEmpty';

class AppBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    autoBindReact(this);
  }

  onAddHandler = ({ title, body }) => {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date(),
          archived: false,
        },
      ],
    }));
  };

  onDeleteHandler = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your note has been deleted.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      } else {
        Swal.fire({
          title: 'Cancelled!',
          text: 'Your note is safe :)',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });
  };

  onArchiveHandler = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, archive it!',
    }).then((result) => {
      if (result.value) {
        const notes = this.state.notes.map((note) => {
          if (note.id === id) {
            return { ...note, archived: true };
          }
          return note;
        });
        this.setState({ notes });
        Swal.fire({
          title: 'Archived!',
          text: 'Your note has been archived.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      } else {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your note is safe :)',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });
  };

  onUnarchiveHandler = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, unarchive it!',
    }).then((result) => {
      if (result.value) {
        const notes = this.state.notes.map((note) => {
          if (note.id === id) {
            return { ...note, archived: false };
          }
          return note;
        });
        this.setState({ notes });
        Swal.fire({
          title: 'Unarchived!',
          text: 'Your note has been unarchived.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      } else {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your note is safe :)',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });
  };

  render() {
    const { notes } = this.state;
    const { keyword } = this.props;

    const activeNotes = notes.filter((note) => !note.archived);
    const archivedNotes = notes.filter((note) => note.archived);

    return (
      <div className="noshen-app__body">
        <AppInput onAdd={this.onAddHandler} />

        <h2>Active Notes</h2>
        {activeNotes.length ? (
          <AppList
            notes={activeNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            keyword={keyword}
          />
        ) : (
          <AppEmpty />
        )}

        <h2>Archive Notes</h2>
        {archivedNotes.length ? (
          <AppList
            notes={archivedNotes}
            onDelete={this.onDeleteHandler}
            onUnarchive={this.onUnarchiveHandler}
            keyword={keyword}
          />
        ) : (
          <AppEmpty />
        )}
      </div>
    );
  }
}

export default AppBody;
