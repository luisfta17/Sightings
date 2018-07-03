const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newSighting = {
    species: evt.target.species.value,
    location: evt.target.location.value,
    date: evt.target.date.value
  }
  PubSub.publish('SightingView:sighting-submitted', newSighting);
  evt.target.reset();
}

module.exports = SightingFormView;
