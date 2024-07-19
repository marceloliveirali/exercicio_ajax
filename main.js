$(window.document).ready(function() {
    const nameElement = $('#name');
    const usernameElement = $('#username');
    const avatarElement = window.document.querySelector('#avatar');
    const reposElement = $('#repos');
    const followersElement = window.document.querySelector('#followers');
    const followingElemnt = window.document.querySelector('#following');
    const linkElement = window.document.querySelector('#link');
    const endPoint = 'https://api.github.com/users/marceloliveirali';

    fetch(endPoint)
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.html(json.name);
            usernameElement.html(json.login);
            avatarElement.src = json.avatar_url;
            reposElement.html(json.public_repos);
            followersElement.innerHTML = json.followers;
            followingElemnt.innerHTML = json.following;
            linkElement.href = json.html_url;
        })
        .catch(function(erro) {
            alert("Desculpe, ocorreu um erro.");
        });
})