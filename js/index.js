$(document).foundation();

var app = {
  init: function() {
    $('.ja').css({ "display": "none" });
    this.setupEventHandlers();
  },

  setupEventHandlers: function() {
    $('#toggle').click(this.toggleLanguage);
  },

  toggleLanguage: function() {
    $('.en, .ja').toggle();
  }
}

app.init();
