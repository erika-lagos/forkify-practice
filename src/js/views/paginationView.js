import { async } from 'regenerator-runtime';
import icons from 'url:../../img/icons.svg'; //importing this as packaging the application will change the path names
import View from './view.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _errorMessage = 'Ooops! My pages are not working 💩';
  _successMessage = 'Success!';

  addHandlerClick(handler) {
    // We will add the handler to the parent and use event delegation:
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) {
        return;
      }
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // console.log(`Pages: ${numPages}`);
    const page = this._data.page;
    const prevBtn = `
        <button data-goto="${
          page - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
        </button>`;
    const nextBtn = `
        <button data-goto="${
          page + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${page + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
        </button>`;

    // We are at page 1, and the are other pages
    if (page === 1 && numPages > 1) {
      return nextBtn;
    }

    // We are on the last page
    if (page === numPages && numPages > 1) {
      return prevBtn;
    }
    // We are in a middle page
    if (page < numPages) {
      return `${prevBtn}${nextBtn}`;
    }
    // We are at page 1 and therea are no more pages
    if (numPages === 1) {
      return '';
    }
  }
}

export default new PaginationView();
