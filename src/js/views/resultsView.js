import { async } from 'regenerator-runtime';
import icons from 'url:../../img/icons.svg'; //importing this as packaging the application will change the path names
import PreviewView from './previewView.js';

class ResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try another one!';
  _successMessage = 'Success!';
}

export default new ResultsView();
