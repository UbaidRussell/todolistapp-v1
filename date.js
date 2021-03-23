//jshint esversion:6

exports.getDate = function(){
    //new date decleration variable
    const today = new Date();
    //Javascript object
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    };
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function(){
  //new date decleration variable
  const today = new Date();
  //Javascript object
  const options = {
    weekday: 'long',
  };
  //Date variable
    return today.toLocaleDateString("en-US", options);

}
console.log(module.exports);
