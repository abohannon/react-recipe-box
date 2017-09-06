/* global $ */
import React from 'react';
import PropTypes from 'prop-types';

class RecipeModalInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      imageUrl: '',
      directions: '',
      ingredients: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal = () => {
    $('#modal').modal('close');
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit() {
    if (this.state.title.length !== 0) {
      const newRecipe = {
        ...this.state,
      };
      this.props.addRecipe(newRecipe);
      this.setState({ title: '', imageUrl: '', directions: '', ingredients: '' });
    }
  }

  render() {
    return (
      <div id="modal" className="modal bottom-sheet">
        <div className="modal-content">
          <i className="material-icons icon" role="button" tabIndex="0" onClick={this.closeModal}>close</i>
          <h4>Add Recipe</h4>
          <div className="row">
            <form id="recipe-form" className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
                  <label htmlFor="title">Recipe Title</label>
                </div>

                <div className="input-field col s12">
                  <input name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.handleChange} />
                  <label htmlFor="recipe-image">Image URL</label>
                  <p style={{ textAlign: 'right' }}>Don&apos;t have one? Go
                    <a href="http://www.freefoodphotos.com/imagelibrary/" target="_blank" rel="noopener noreferrer"> here </a>
                  for high quality food photos.</p>
                </div>

                <div className="input-field col s12">
                  <textarea name="directions" className="materialize-textarea" value={this.state.directions} onChange={this.handleChange} />
                  <label htmlFor="textarea1">Directions</label>
                </div>

                <div className="input-field col s12">
                  <textarea name="ingredients" className="materialize-textarea" value={this.state.ingredients} onChange={this.handleChange} />
                  <label htmlFor="textarea2">Ingredients (comma separated)</label>
                </div>

              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.handleSubmit}>Save Recipe</a>
        </div>
      </div>

    );
  }
}

RecipeModalInput.propTypes = {
  addRecipe: PropTypes.func.isRequired,
};

export default RecipeModalInput;
