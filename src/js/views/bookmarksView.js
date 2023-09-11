import { async } from 'regenerator-runtime';
import icons from 'url:../../img/icons.svg'; //importing this as packaging the application will change the path names
import PreviewView from './previewView.js';

class BookmarksView extends PreviewView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Add some!';
  _successMessage = 'Success!';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new BookmarksView();
