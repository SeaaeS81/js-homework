
//1. Створити промпт при заповненні якого вас перенаправляє на сайт який був введений в промпті.


//2. Створити функцію яка буде показувати на екрані геолокацію та url шлях сайту.

navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var url = window.location.href;
    alert("Your location is: " + latitude + ", " + longitude + "\n" + "The URL is: " + url);
  });
  console.log('-------------------------');





