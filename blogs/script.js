document.addEventListener('DOMContentLoaded', () => {
    const linksContainer = document.createElement('div');

    const backToBlogsLink = document.createElement('a');
    backToBlogsLink.href = './index.html'; 
    backToBlogsLink.textContent = 'back to blogs'; 

    const backToHomeLink = document.createElement('a');
    backToHomeLink.href = '../index.html';
    backToHomeLink.textContent = 'back to home';

    linksContainer.appendChild(backToBlogsLink);
    linksContainer.appendChild(document.createElement('br'));
    linksContainer.appendChild(backToHomeLink);

    const body = document.querySelector('body');
    body.insertBefore(linksContainer, body.firstChild);
});
