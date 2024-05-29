import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addAuthorForm = (authorObj = {}) => {
  clearDom();
  const domString = `
    <form id="${authorObj.firebaseKey ? `update-author--${authorObj.firebaseKey}` : 'submit-author'}" class="mb-4">
      <div class="form-group">
        <label for="image">First Name</label>
        <input type="text" class="form-control" id="first_name" placeholder="First Name" value="${authorObj.first_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Last Name</label>
        <input type="text" class="form-control" id="last_name" placeholder="Last Name" value="${authorObj.last_name || ''}"required>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" value="${authorObj.email || ''}" required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite" ${authorObj.favorite ? 'checked' : ''}>
        <label class="form-check-label" for="favorite">Favorite?</label>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Author</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addAuthorForm;
