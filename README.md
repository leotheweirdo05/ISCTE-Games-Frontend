# Final Project
## Programação para Web e Desenvolvimento de Software para a Nuvem

### Frontend application React + Vite + Bootstrap + NGINX

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/) [![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://react.dev/) [![Vite](https://img.shields.io/badge/Vite-5.0-yellow?logo=vite)](https://vitejs.dev/) [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap)](https://getbootstrap.com/) [![NGINX](https://img.shields.io/badge/NGINX-1.25-green?logo=nginx)](https://nginx.org/) [![Docker](https://img.shields.io/badge/Docker-24.0-blue?logo=docker)](https://www.docker.com/) [![Version](https://img.shields.io/badge/Version-1.0-lightgrey)](https://semver.org/)


1. Clone este repositório em sua máquina usando o seguinte comando:
```bash
git clone git@github.com:leotheweirdo05/ISCTE-Games-Frontend.git
```


2. Entre no repositório clonado
```bash
cd ISCTE-Games-Frontend/
```


3. Crie a network caso não exista
```bash
docker network create --driver bridge dsa-network
```


4. No diretório raiz do projeto, execute o seguinte comando para instalar as dependências:
```bash
docker-compose up -d --build
```


5. A aplicação está ouvindo em:
http://localhost



## Folder struture

```bash
ISCTE-Games-Frontend/
├── docker-compose.yaml
├── Dockerfile
├── package.json
├── vite.config.js
├── README.md
│
├── nginx/
│   └── nginx.conf
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   │   ├── css/
│   │   └── scss/
│   ├── components/
│   │   └── (componentes de navegação e layout)
│   ├── pages/
│   │   ├── (páginas principais)
│   │   ├── gamePreviews/
│   │   ├── games/
│   │   └── leaderboards/
│   └── public/
│       ├── fonts/
│       ├── games/
│       │   └── (ficheiros dos jogos Godot: 2048, Memory, Pinball, Shooter)
│       └── images/
```


## Documentation

[React](https://react.dev/reference/react)

[Vite](https://vite.dev/guide/)

[Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

[Nginx](https://nginx.org/)

[Docker](https://docs.docker.com/)


## Autores

- [@leotheweirdo05](https://www.github.com/leotheweirdo05)
- [@guilherme-catoja](https://www.github.com/guilherme-catoja)
- [@FederEx18](https://github.com/FederEx18)
