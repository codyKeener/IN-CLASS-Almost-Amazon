import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${obj.first_name} ${obj.last_name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${obj.email}</h6>
          <p class="card-text bold">${obj.favorite ? '<span class="badge badge-info sale-badge"><i class="fa fa-star" aria-hidden="true"></i> Favorite</span>' : ''}</p>
          <hr>
          <i class="fas fa-edit btn btn-info" id="update-author--${obj.firebaseKey}"></i>
          <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.firebaseKey}"></i>
        </div>
      </div>
    </div>
    <hr>
    <h5 class="card-title">Books</h5>
    <div class="d-flex flex-wrap">
`;
  const authorBooks = obj.books;

  let bookString = '';

  authorBooks.forEach((item) => {
    bookString += `
      <div class="card" style="margin-right: 10px; margin-bottom: 5px; margin-top: 5px;">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
            <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });

  bookString += '</div></div>';

  const fullString = domString + bookString;
  renderToDOM('#view', fullString);
};

export default viewAuthor;
