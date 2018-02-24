$(document).ready(function () {
  //  $('.button-collapse').sideNav();

  $('#first_name').keyup(function () {
    const searchParameter = $(this).val();
    console.log(searchParameter);
    const searchType = 'artist';

    $.ajax({
      url: `https://api.spotify.com/v1/search`,
      datatype: 'json',
      type: 'GET',
      headers: { // data se convierte en una cadena que se adjunta a la url de la petición GET
        'Authorization': 'Bearer BQCzAuaqMeGurmfv0oJZSzzke1LOICgJFq7sSbvuo2cKr9URibOYC5sekqc_wpM5jDzPG1NG9ohSZpTkntHUQQG3ZQnkfA8pOonuULFbBA0X5EEQrNhJ1ChXJP3v05pzRpBa6xnWg0ZlmAA'
      },
      async: true,
      cache: true,
      data: {

        q: searchParameter,
        type: searchType,
        market: 'us',

      },
    })
    .done(function(response) {
      console.log(response);

    })
    .fail(function(error) {
      console.log('error al cargar api');
    })
    
    
   
  

  });
  
  
});
