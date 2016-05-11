(function(){
  angular
    .module('adamApp')
    .controller('Baz', Baz)

    function Baz() {
      let vm = this;
      this.stuffs = 'Baaazzzz Stufuffs';
    }
})();
