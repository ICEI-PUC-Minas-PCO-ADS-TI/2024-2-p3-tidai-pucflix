# Plano de Testes de Software

## Pré-requisitos
- [Especificação do projeto](02-Especificacao.md)
- [Projeto de interface](04-Projeto-interface.md)

---

### CT-001 – Cadastrar perfil

**Requisito associado:**  
RF-001 - O sistema deve permitir o cadastro do usuário.

**Objetivo do teste:**  
Verificar se o usuário consegue se cadastrar na aplicação.

**Passos:**  
1. Acessar o navegador.  
2. Informar o endereço do site.  
3. Clicar em "Assine Aqui".  
4. Preencher os campos obrigatórios (e-mail, nome, senha, confirmação de senha).  
6. Clicar em "Registrar".

**Critério de êxito:**  
- O cadastro foi realizado com sucesso.

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima

---

### CT-002 – Efetuar login

**Requisito associado:**  
RF-002 - O sistema deve permitir o login do usuário.

**Objetivo do teste:**  
Verificar se o usuário consegue realizar login.

**Passos:**  
1. Acessar o navegador.  
2. Informar o endereço do site.  
3. Clicar no botão "Assine Aqui". 
4. Clicar no botão "Já possui um cadastro, entre aqui"
5. Preencher o campo de e-mail.  
6. Preencher o campo de senha.  
7. Clicar em "Login".

**Critério de êxito:**  
- O login foi realizado com sucesso.

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima

---

### CT-003 – Acessar biblioteca de filmes

**Requisito associado:**  
RF-003 - O sistema deve possuir uma biblioteca de filmes disponível para o usuário assistir.

**Objetivo do teste:**  
Verificar se o usuário consegue acessar a biblioteca de filmes.

**Passos:**  
1. Acessar o navegador.  
2. Informar o endereço do site.  
3. Realizar login.  
4. Navegar até a seção de biblioteca de filmes.

**Critério de êxito:**  
- A biblioteca de filmes é exibida corretamente.

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima

---

### CT-004 – Alterar perfil

**Requisito associado:**  
RF-004 - O sistema deve permitir que o usuário altere de perfil a qualquer momento.

**Objetivo do teste:**  
Verificar se o usuário consegue alterar seu perfil.

**Passos:**  
1. Acessar o navegador.  
2. Informar o endereço do site.  
3. Realizar login.  
4. Navegar até a seção de gestão de perfis.  
5. Selecionar o perfil no qual o usuário deseje entrar.

**Critério de êxito:**  
- O Usuário deverá conseguir alterar o perfil utilizado.

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima

---

### CT-005 – Filtrar conteúdos

**Requisito associado:**  
RF-005 - O sistema deve permitir a filtragem de conteúdos que o usuário está procurando.

**Objetivo do teste:**  
Verificar se o usuário consegue filtrar conteúdos.

**Passos:**  
1. Acessar o navegador.  
2. Informar o endereço do site.  
3. Realizar login.  
4. Navegar até a biblioteca de filmes.  
5. Navegar até a página de genêros.
6. Selecioanr um genêro qualquer.

**Critério de êxito:**  
- Os conteúdos filtrados são exibidos corretamente.

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima

---

### CT-006 – Adicionar filmes à lista de favoritos

**Requisito associado:**  
RF-007 - O sistema deve permitir que o usuário adicione filmes à lista de favoritos.

**Objetivo do teste:**  
Verificar se o usuário consegue adicionar filmes à lista de favoritos.

**Passos:**  
1. Acessar o navegador.  
2. Informar o endereço do site.  
3. Realizar login.  
4. Navegar até a biblioteca de filmes.  
5. Selecionar um filme e clicar no ícone de "Adicionar aos favoritos".

**Critério de êxito:**  
- O filme é adicionado à lista de favoritos.

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima

---

### CT-007 – Realizar Busca de Filmes por meio de nome

**Requisito associado:**  
RF-007 -  O Sistema deve permitir a busca de filmes por meio de nome.

**Objetivo do teste:**  
Verificar se o usuário consegue realizar a busca do filme que deseja

**Passos:**  
1. Acessar o navegador.  
2. Informar o endereço do site.  
3. Realizar login.  
4. Navegar até a biblioteca de filmes.  
5. Escreva o nome do filme que deseja na barra de pesquisa.
6. Clique no botão de pesquisar.

**Critério de êxito:**  
- O sistema deve filtrar os conteudos no qual possui as informações descritas.

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima

---

### CT-008 – Separar os conteúdos listados por gêneros

**Requisito associado:**  
RF-008 -  O Sistema deve possuir uma separação de conteúdos por gêneros.

**Objetivo do teste:**  
Verificar se o sistema está separando corretamente seu conteúdo

**Passos:**  
1. Acessar o navegador.  
2. Informar o endereço do site.  
3. Realizar login.  
4. Navegar até a biblioteca de filmes.  
5. Direcione-se até o slider no qual possui o título do gênero buscado.

**Critério de êxito:**  
- O sistema deve possuir seus filmes em catálogos separados por gêneros de forma correta.

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima

---

### CT-009 – Acessar histórico de filmes assistidos

**Requisito associado:**  
RF-008 - O sistema deve permitir ao usuário acessar o histórico de filmes assistidos.

**Objetivo do teste:**  
Verificar se o usuário consegue acessar o histórico de filmes assistidos.

**Passos:**  
1. Acessar o navegador.  
2. Informar o endereço do site.  
3. Realizar login.  
4. Navegar até a seção "Histórico".

**Critério de êxito:**  
- O histórico de filmes assistidos é exibido corretamente.

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima

---

### CT-010 – Gerenciar perfis adicionais

**Requisito associado:**  
RF-010 - O sistema deve permitir a criação e edição de sub perfis

**Objetivo do teste:**  
Verificar se o usuário consegue criar e gerenciar perfis adicionais.

**Passos:**  
1. Acessar o navegador.  
2. Informar o endereço do site.  
3. Realizar login.  
4. Navegar até a seção de perfis.  
5. Criar um novo perfil ou editar um perfil existente.

**Critério de êxito:**  
- O perfil adicional é criado ou editado com sucesso.

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima

---

### CT-011 – Ativar controle parental

**Requisito associado:**  
RF-011 - O sistema deve possuir um meio de controle parental.

**Objetivo do teste:**  
Verificar se o sistema permite ao usuário configurar o controle parental para restringir conteúdos específicos.

**Passos:**  
1. Acessar o navegador.  
2. Informar o endereço do site.  
3. Realizar login.  
4. Navegar até a pagina de gerenciamento de perfil
5. Selecione um perfil específico 
6. Ative o modo de "Kids" 

**Critério de êxito:**  
- O tipo de perfil "kids" é ativado, e os conteúdos restritos não ficam acessíveis.

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima

---

### CT-012 – Contatar suporte

**Requisito associado:**  
RF-012 - O sistema deve permitir que o usuário entre em contato com o suporte.

**Objetivo do teste:**  
Verificar se o usuário consegue acessar a funcionalidade de contato com o suporte e enviar uma mensagem.

**Passos:**  
1. Acessar o navegador.  
2. Informar o endereço do site.  
3. Realizar login.  
4. Navegar até página principal
5. Clique em "Suporte" presente no menu da Navbar  
6. Usuário será redirecionado para encaminhar um email para o suporte.  

**Critério de êxito:**  
- O usuário conseguirá enviar um email para o suporte com êxito

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima

---

### CT-013 – Visualizar últimos lançamentos

**Requisito associado:**  
RF-013 - O sistema deve possuir um meio de deixar em destaque os últimos lançamentos.

**Objetivo do teste:**  
Verificar se os últimos lançamentos de filmes e séries são exibidos corretamente em destaque na página inicial.

**Passos:**  
1. Acessar o navegador.
2. Informar o endereço do site.
3. Navegar até a página inicial.
4. Verificar a seção de "Últimos Lançamentos".

**Critério de êxito:**  
- Os lançamentos mais recentes estão em destaque.

**Responsável pela elaboração do caso de teste:**  
Pedro Henrique Ferraz Lima