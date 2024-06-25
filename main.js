document.addEventListener('DOMContentLoaded', async () => {
    const url = 'https://api.github.com/users/ramoncastro23923';
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const userName = document.querySelector('#userName');
    const publicRepos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const userLink = document.querySelector('#link');
    const messageError = document.querySelector('#error');

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ocorreu um erro: ${response.status}`);
        }
        const json = await response.json();
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        userName.innerText = `@${json.login}`;
        publicRepos.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        userLink.href = json.html_url;
    } catch (error) {
        if (error.message.includes('400')) {
            messageError.innerText = 'Requisição inválida';
        } else if (error.message.includes('500')) {
            messageError.innerText = 'Erro interno';
        } else {
            messageError.innerText = 'Ocorreu um erro, tente novamente mais tarde';
        }
    }
});
