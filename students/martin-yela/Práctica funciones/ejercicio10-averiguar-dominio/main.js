const URL = prompt('Introduce una url: ');

if (URL.includes('github.com')) {
    document.write('<h1>Si pertenece a github<h1>');
}else {
    document.write('<h1>No pertenece a github<h1>');
}