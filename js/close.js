const $ = require('jquery');
const {remote} = require('electron');

var wind = remote.getCurrentWindow();

$('#closeapp').click(function(){
    wind.close();
});
