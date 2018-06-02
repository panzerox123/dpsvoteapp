const $ = require('jquery');
const {remote} = require('electron');
const fs = require('fs');

const _pass="a134Gh9";

$('#sub_pass').click(function(){
    var password = $('#pass').val();
    if(password==_pass)
        window.location.href="./resultpage.html";
    else window.location.href="./index.html";
})

$('#res_btn').click(function(){
    var password = $('#pass').val();
    if(password==_pass){
        fs.writeFile('./data/headboy1.vote',0,(err) =>{
            if(err) throw err;
        })
        fs.writeFile('./data/headboy2.vote',0,(err) =>{
            if(err) throw err;
        })
        fs.writeFile('./data/headboy3.vote',0,(err) =>{
            if(err) throw err;
        })
        fs.writeFile('./data/headgirl1.vote',0,(err) =>{
            if(err) throw err;
        })
        fs.writeFile('./data/headgirl2.vote',0,(err) =>{
            if(err) throw err;
        })
        fs.writeFile('./data/headgirl3.vote',0,(err) =>{
            if(err) throw err;
        })
        fs.writeFile('./data/viceboy1.vote',0,(err) =>{
            if(err) throw err;
        })
        fs.writeFile('./data/viceboy2.vote',0,(err) =>{
            if(err) throw err;
        })
        fs.writeFile('./data/viceboy3.vote',0,(err) =>{
            if(err) throw err;
        })
        fs.writeFile('./data/vicegirl1.vote',0,(err) =>{
            if(err) throw err;
        })
        fs.writeFile('./data/vicegirl2.vote',0,(err) =>{
            if(err) throw err;
        })
        fs.writeFile('./data/vicegirl3.vote',0,(err) =>{
            if(err) throw err;
        })
        
        window.location.href="./resultpage.html";
    } 
    else window.location.href="./resultpage.html";
})
