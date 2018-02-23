$(document).ready(function () {
  //  $('.button-collapse').sideNav();

  $('#first_name').keyup(function () {
    const str = $(this).val();
    console.log(str);
  });

});

const code = `AQB1qRTy3xER-N4lApLvS3Wg2EEKA27jFZIt53pN1Pn5q5jYBshyf_VnnQw9OLnissCWy65JchPMMuJQDmpoLZXMAEwEp1t2lURD_AxU1t5nkc5FVeecJ5g7qqtnenxmoTvE7RkQvgGas3nQj84nn42Zrz1a3UCtayJapFYP2-jZ4dlb6xHYsZuno4XYt-hfuw8WOQ`;
var baseUrl = 'https://api.spotify.com/v1';

$.ajax({
  url: `https://api.instagram.com/v1/users/${id}/media/recent`,
  datatype: 'json',
  type: 'GET',
  data: { // data se convierte en una cadena que se adjunta a la url de la petición GET
    access_token: token,
    count: num_photos
  }
})
.done(function(response) {
  console.log(response);
  showInfo(response);
})
.fail(function(error) {
  console.log('error al cargar api');
})


function showInfo(info) {
for (let i = 0; i < info.data.length; i++){
  $('#pictures').append(`<div class="col m4"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="${info.data[i].images.standard_resolution.url}"></div></div></div>`);
}}