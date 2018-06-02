const $ = require('jquery');
const {remote} = require('electron');
const fs = require('fs');

var headboy1,headboy2,headboy3,headgirl1,headgirl2,headgirl3,viceboy1,viceboy2,viceboy3,vicegirl1,vicegirl2,vicegirl3;

fs.readFile('./data/headboy1.vote',"utf8",(err, data) => {
    if (err) throw err;
    headboy1=parseInt(data);
    $('#hb1').text(data);
})

fs.readFile('./data/headboy2.vote',"utf8",(err, data) => {
    if (err) throw err;
    headboy2=parseInt(data);
    $('#hb2').text(data);
})

fs.readFile('./data/headboy3.vote',"utf8",(err, data) => {
    if (err) throw err;
    headboy3=parseInt(data);
    $('#hb3').text(data);
})

fs.readFile('./data/headgirl1.vote',"utf8",(err, data) => {
    if (err) throw err;
    headgirl1=parseInt(data);
    $('#hg1').text(data);
})

fs.readFile('./data/headgirl2.vote',"utf8",(err, data) => {
    if (err) throw err;
    headgirl2=parseInt(data);
    $('#hg2').text(data);
})

fs.readFile('./data/headgirl3.vote',"utf8",(err, data) => {
    if (err) throw err;
    headgirl3=parseInt(data);
    $('#hg3').text(data);
})

fs.readFile('./data/viceboy1.vote',"utf8",(err, data) => {
    if (err) throw err;
    viceboy1=parseInt(data);
    $('#vb1').text(data);
})

fs.readFile('./data/viceboy2.vote',"utf8",(err, data) => {
    if (err) throw err;
    viceboy2=parseInt(data);
    $('#vb2').text(data);
})

fs.readFile('./data/viceboy3.vote',"utf8",(err, data) => {
    if (err) throw err;
    viceboy3=parseInt(data);
    $('#vb3').text(data);
})

fs.readFile('./data/vicegirl1.vote',"utf8",(err, data) => {
    if (err) throw err;
    vicegirl1=parseInt(data);
    $('#vg1').text(data);
})

fs.readFile('./data/vicegirl2.vote',"utf8",(err, data) => {
    if (err) throw err;
    vicegirl2=parseInt(data);
    $('#vg2').text(data);
})

fs.readFile('./data/vicegirl3.vote',"utf8",(err, data) => {
    if (err) throw err;
    vicegirl3=parseInt(data);
    $('#vg3').text(data);
})
