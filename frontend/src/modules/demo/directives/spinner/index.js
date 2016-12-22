module.exports = () => ({
  restrict: 'A',
  link: ($scope, element, atrributes) => {
    element.addClass('spinner');
  }
});