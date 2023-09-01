var redirection = document.createElement('meta');
redirection.httpEquiv = 'refresh';
redirection.content = '0;url=' + redirectionAdress;

var head = document.head || document.getElementsByTagName('head')[0];
head.appendChild(redirection);