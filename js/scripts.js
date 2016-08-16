$(document).ready(function() {

  $("form").submit(function(element){

    event.preventDefault();

    var number = parseInt($("input#number").val());

    var primes = [];

    for (var i = 2; i < number; i++) {
      primes.push(i);
    }

    alert(primes);
  })







});
