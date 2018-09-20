for (let j = 0; j < current.keywords.length; j++) {
    let span = document.createElement('span');
    span.textContent += current.keywords[j].value + ' ';
    para.appendChild(span);
  }

  if (current.multimedia.length > 0) {
    img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
    img.alt = current.headline.main;
  }

  clearfix.setAttribute('class', 'clearfix');

  article.appendChild(heading);
  heading.appendChild(link);
  article.appendChild(img);
  article.appendChild(para);
  article.appendChild(clearfix);
  section.appendChild(article);



if (articles.length === 10) {
nav.style.display = 'block';
} else {
nav.style.display = 'none';
}


function nextPage(e) {
// console.log('Next button clicked');
pageNumber++;
fetchResults(e);
console.log('Page Number:', pageNumber);
}

function previousPage(e) {
// console.log('Previous button clicked');
if (pageNumber > 0) {
pageNumber--;
fetchResults(e);
} else {
return;
}
fetchResults(e);
console.log('Page:', pageNumber);
}