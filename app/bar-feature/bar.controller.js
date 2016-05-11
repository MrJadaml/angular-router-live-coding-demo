(function() {
  angular
    .module('adamApp')
    .controller('Bar', Bar)

    function Bar() {
      let vm = this;
      this.stuffs = 'Baaarrr Stuffs';
    }
})();
