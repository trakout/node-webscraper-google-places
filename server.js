// deps
var Nightmare = require('nightmare');
var csv       = require('csv');
var q         = require('q');
var config    = require('./config');

// inits
var nightmare = Nightmare({
  show: config.showWindow
});


// utility methods


// scrape
nightmare
  .goto('http://google.com')
  .type('form[action*="/search"] [name=p]', 'github nightmare')
  .click('form[action*="/search"] [type=submit]')
  .wait('#main')
  .evaluate(function () {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
