
/*


        <p>executar yarn dev no terminal para gerar o bundle.js</p>
        <p>instalar pacote: yarn add webpack webpack-cli -D</p>
        <p>instalar pacote: yarn add babel-loader</p>
        <p>o projeto está utilizando o webpack-dev-server. foi feito um script no package.json</p>
        <p>para executar o projeto continua "yarn dev" para gerar a versão final o comando é "yarn build"</p>
        <p>teste de códigos javascript https://jsfiddle.net/rntLqdb8/2/</p>
*/
/*
await
const minhaPromise = () => new Promise((resolve, reject) =>
    setTimeout(() => { resolve('OK') }, 2000);
});

async function executaPromise()
{
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();

import axios from 'axios';

class Api
{

    static async getUserInfo(username)
    {
        try 
        {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } 
        catch (error) 
        {
            console.console.warn("erro na api");            
        }
        
        
    }
}

Api.getUserInfo('diego3g');

"use strict";

export default async function foo() {
  var s = await bar();
  console.log(s);
}

function bar() {
  return "bar";
}

*/

import api from './api';

class App
{

    constructor()
    {
        this.repositories = [];
        this.formEL = document.getElementById('repo-form');
        this.listaEL = document.getElementById('repo-list');
        this.inputEL = document.querySelector('input[name=repository]');
        this.registerHandlers();
    }

    registerHandlers()
    {
        this.formEL.onsubmit = (event) =>
        {
            this.addRepository(event);
        }
    }

    async addRepository(event)
    {

        this.setLoading(true);        

        event.preventDefault(); // não deixa a página ser recarregada

        const repoInput = this.inputEL.value;

        if (repoInput.length === 0) return;
        console.log(repoInput);

        try
        {

            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: {avatar_url}} = response.data;

            this.repositories.push(
                {
                    name,
                    description,
                    avatar_url,
                    html_url,
                }
            );

            this.inputEL.value = "";

            this.render();
        }
        catch (err)
        {
            alert('O repositório informado não existe');
        }

        this.setLoading(false);

    }

    setLoading(loading)
    {
        if (loading === true)
        {
            let loadingEL = document.createElement('span');
            loadingEL.appendChild(document.createTextNode('Carregando...'));
            loadingEL.setAttribute('id', 'loading');
            this.formEL.appendChild(loadingEL);
        }
        else
        {
            document.getElementById('loading').remove();
        }
    }

    render()
    {
        this.listaEL.innerHTML = "";
        this.repositories.forEach(repo =>
            {
                let imgEL = document.createElement('img');
                imgEL.setAttribute('src',repo.avatar_url);
                let titleEL = document.createElement('strong');
                titleEL.appendChild(document.createTextNode(repo.name));
                let descriptionEL = document.createElement('p');
                descriptionEL.appendChild(document.createTextNode(repo.description));                
                let linkEL = document.createElement('a');
                linkEL.setAttribute('target', '_blank');  
                linkEL.setAttribute('href', repo.html_url);
                linkEL.appendChild(document.createTextNode('Acessar'));        
                
                let listItemEL = document.createElement('li');
                listItemEL.appendChild(imgEL); 
                listItemEL.appendChild(titleEL); 
                listItemEL.appendChild(descriptionEL); 
                listItemEL.appendChild(linkEL); 

                this.listaEL.appendChild(listItemEL);

            });
    }

}

const meuApp = new App();