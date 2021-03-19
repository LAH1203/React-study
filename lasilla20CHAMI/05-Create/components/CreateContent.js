import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
      return (
        <article>
              <h2>Create</h2>
              <form action="/create_process" method="post"
              onSubmit={function (e) {
                e.preventDefault();
                this.props.onSubmit(
                  e.taget.title.value,
                  e.taget.desc.value
                );
              }.bind(this)
              }
              >
                <p><input type="text" name="title" placeholder="title"></input></p>
              <p>
              <textarea name="desc" placeholder="decs"></textarea>
             </p>
             <p>
               <input type="submit"></input>
             </p>
             </form>
        </article>
      );
    }
  }

  export default CreateContent;