$(document).foundation();

var app = {
  init: function() {
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
