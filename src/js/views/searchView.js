class searchView {
  #parentElement = document.querySelector('.search');

  #clearInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  getQuery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  //Publisher of events (alerts the handler when an event happens)
  addHandlerSearch(hanlder) {
    this.#parentElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      hanlder();
    });
  }
}

export default new searchView();
