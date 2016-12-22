module.exports = () => ({
  restrict: 'E',
  template: require('./template.html'),
  controller: ['$scope', $scope => {
    navigator.getUserMedia({video: true}, hookup, error);

    function hookup(stream) {
      $scope.$apply(() => $scope.src = URL.createObjectURL(stream));
    }

    function error(e) {
      console.log('selfie error!', e);
    }
  }]
});