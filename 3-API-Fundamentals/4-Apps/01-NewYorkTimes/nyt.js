const baseURL = 'htt[s://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = '1da469080194439f99af805fef7cfb43'; //2
let url; //3

//SEARCH FORM
const searchTem = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');
