
module.exports = function getDate(){
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("hi-IN", options);

}
