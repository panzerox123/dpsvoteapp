const $ = require('jquery');
const {remote} = require('electron');
const fs = require('fs');

var headboy1,headboy2,headboy3,headgirl1,headgirl2,headgirl3,viceboy1,viceboy2,viceboy3,vicegirl1,vicegirl2,vicegirl3;

fs.readFile('./data/headboy1.vote',"utf8",(err, data) => {
    if (err) throw err;
    headboy1=parseInt(data);
})

fs.readFile('./data/headboy2.vote',"utf8",(err, data) => {
    if (err) throw err;
    headboy2=parseInt(data);
})

fs.readFile('./data/headboy3.vote',"utf8",(err, data) => {
    if (err) throw err;
    headboy3=parseInt(data);
})

fs.readFile('./data/headgirl1.vote',"utf8",(err, data) => {
    if (err) throw err;
    headgirl1=parseInt(data);
})

fs.readFile('./data/headgirl2.vote',"utf8",(err, data) => {
    if (err) throw err;
    headgirl2=parseInt(data);
})

fs.readFile('./data/headgirl3.vote',"utf8",(err, data) => {
    if (err) throw err;
    headgirl3=parseInt(data);
})

fs.readFile('./data/viceboy1.vote',"utf8",(err, data) => {
    if (err) throw err;
    viceboy1=parseInt(data);
})

fs.readFile('./data/viceboy2.vote',"utf8",(err, data) => {
    if (err) throw err;
    viceboy2=parseInt(data);
})

fs.readFile('./data/viceboy3.vote',"utf8",(err, data) => {
    if (err) throw err;
    viceboy3=parseInt(data);
})

fs.readFile('./data/vicegirl1.vote',"utf8",(err, data) => {
    if (err) throw err;
    vicegirl1=parseInt(data);
})

fs.readFile('./data/vicegirl2.vote',"utf8",(err, data) => {
    if (err) throw err;
    vicegirl2=parseInt(data);
})

fs.readFile('./data/vicegirl3.vote',"utf8",(err, data) => {
    if (err) throw err;
    vicegirl3=parseInt(data);
})

$('#nxthb').click(function(){
    var choosehb = $('input[name=hb]:checked').val();
    if(choosehb=="1"){
        headboy1=headboy1+1;
        fs.writeFile('./data/headboy1.vote',headboy1,(err)=>{
            if(err) throw err;
        })
    } else if(choosehb=="2"){
        headboy2=headboy2+1;
        fs.writeFile('./data/headboy2.vote',headboy2,(err)=>{
            if(err) throw err;
        })
    } else if(choosehb=="3"){
        headboy3=headboy3+1;
        fs.writeFile('./data/headboy3.vote',headboy3,(err)=>{
            if(err) throw err;
        })
    }
    window.location.href="./headgirl.html";
})

$('#nxthg').click(function(){
    var choosehb = $('input[name=hg]:checked').val();
    if(choosehb=="1"){
        headgirl1=headgirl1+1;
        fs.writeFile('./data/headgirl1.vote',headgirl1,(err)=>{
            if(err) throw err;
        })
    } else if(choosehb=="2"){
        headgirl2=headgirl2+1;
        fs.writeFile('./data/headgirl2.vote',headgirl2,(err)=>{
            if(err) throw err;
        })
    } else if(choosehb=="3"){
        headgirl3=headgirl3+1;
        fs.writeFile('./data/headgirl3.vote',headgirl3,(err)=>{
            if(err) throw err;
        })
    }
    window.location.href="./viceboy.html";
})

$('#nxtvb').click(function(){
    var choosehb = $('input[name=vb]:checked').val();
    if(choosehb=="1"){
        viceboy1=viceboy1+1;
        fs.writeFile('./data/viceboy1.vote',viceboy1,(err)=>{
            if(err) throw err;
        })
    } else if(choosehb=="2"){
        viceboy2=viceboy2+1;
        fs.writeFile('./data/viceboy2.vote',viceboy2,(err)=>{
            if(err) throw err;
        })
    } else if(choosehb=="3"){
        viceboy3=viceboy3+1;
        fs.writeFile('./data/viceboy3.vote',viceboy3,(err)=>{
            if(err) throw err;
        })
    }
    window.location.href="./vicegirl.html";
})

$('#nxtvg').click(function(){
    var choosehb = $('input[name=vg]:checked').val();
    if(choosehb=="1"){
        vicegirl1=vicegirl1+1;
        fs.writeFile('./data/vicegirl1.vote',vicegirl1,(err)=>{
            if(err) throw err;
        })
    } else if(choosehb=="2"){
        vicegirl2=vicegirl2+1;
        fs.writeFile('./data/vicegirl2.vote',vicegirl2,(err)=>{
            if(err) throw err;
        })
    } else if(choosehb=="3"){
        vicegirl3=vicegirl3+1;
        fs.writeFile('./data/vicegirl3.vote',vicegirl3,(err)=>{
            if(err) throw err;
        })
    }
    window.location.href="./landing_thankyou.html";
})