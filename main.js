console.log('hello world')
let compiledHtml = nunjucks.render('main.html', { foo: 'bar' });
document.getElementById('nunjucks-container').insertAdjacentHTML('afterend', compiledHtml);