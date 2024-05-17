const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="foto de perfil do usuário"/>
                            <div class="data"
                                <h1>${user.name ?? 'não possui nome cadastrado 😥'}</h1>
                                <p>${user.bio ?? 'não possui bio cadastrada 😥'}</p>
                                <p>👥 <strong>Seguidores:</strong> ${user.followers ?? '0'}
                                · <strong>Seguindo:</strong> ${user.following ?? '0'}</p>
                            </div>
                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href = "${repo.html_url}"
                                                                 target="_blank">${repo.name}
                                                                 <ul class="repo-icons">
                                                                 <li>🍴${repo.forks} </li>
                                                                 <li>⭐${repo.stargazers_count} </li>
                                                                 <li>👀${repo.watchers}</li>
                                                                 <li>👨‍💻${repo.language}</li>
                                                                 </ul>
                                                                 </a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                           <h2>Repositórios</h2>
                                           <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsItens = ''
        user.events.forEach(evnt => {
            if (Array.isArray(evnt.payload.commits)) {
                eventsItens += `<li><strong>${evnt.repo.name}</strong> - ${evnt.payload.commits[0].message ?? "Sem mensagem"}</li>`;
            }
        });
        this.userProfile.innerHTML += `<h2>Eventos</h2>
                                       <ul class="ul-events">${eventsItens}<ul>`
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado:(</h3>"
    }
}

export { screen }