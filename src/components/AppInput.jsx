import React, { Component } from 'react';
import Swal from 'sweetalert2';

class AppInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      inputLength: 0,
    };
    this.maxLength = 50;
  }

  onTitleChangeEventHandler = (event) => {
    const inputValue = event.target.value.slice(0, this.maxLength);
    this.setState({
      title: inputValue,
      inputLength: inputValue.length,
    });
  };

  onContentChangeEventHandler = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    const { title, body } = this.state;

    if (title.length && body.length) {
      this.props.onAdd(this.state);
      Swal.fire({
        title: 'Success!',
        text: 'Note created!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    } else {
      Swal.fire({
        title: 'Oops...',
        text: 'Title and Content are required!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };

  render() {
    return (
      <div className="noshen-input">
        <h2>Add Note</h2>
        <form
          className="contact-input"
          onSubmit={this.onSubmitEventHandler}
        >
          <p className="noshen-input__title__char-limit">
            Sisa karakter:
            {' '}
            {this.state.inputLength ? this.maxLength - this.state.inputLength : this.maxLength}
          </p>
          <input
            className="noshen-input__title"
            type="text"
            placeholder="Title.."
            // required
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="noshen-input__body"
            type="text"
            placeholder="Content.."
            // required
            spellCheck="false"
            defaultValue={this.state.body}
            onChange={this.onContentChangeEventHandler}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default AppInput;
