# Especificação do projeto

O presente projeto será desenvolvido utilizando React JS, Node.js, CSS com Tailwind, Firebase, Firestore, além das APIs TheMovieDB e Superflix. O ReactJS é uma biblioteca JavaScript amplamente utilizada para a construção de interfaces de usuário, permitindo o desenvolvimento de aplicações web de forma eficiente com uma abordagem baseada em componentes. No projeto, o ReactJS será utilizado para criar a interface do usuário, possibilitando a construção de componentes reutilizáveis e uma experiência interativa.

Node.js é um ambiente de execução JavaScript do lado do servidor, que permite o desenvolvimento de aplicações escaláveis e de alta performance. No projeto, o Node.js será utilizado para gerenciar o servidor e as requisições, além de facilitar a integração com outras tecnologias e serviços. O Tailwind CSS, um framework CSS utilitário, será empregado para estilizar a aplicação, permitindo que os desenvolvedores criem interfaces responsivas e modernas de forma rápida e eficiente.

Firebase é uma plataforma de desenvolvimento de aplicativos que oferece uma variedade de serviços, incluindo autenticação, hospedagem e armazenamento de dados. No projeto, o Firebase será utilizado para gerenciar a autenticação de usuários e fornecer funcionalidades em tempo real. O Firestore, um banco de dados NoSQL oferecido pelo Firebase, será utilizado como o banco de dados principal, permitindo o armazenamento e a sincronização de dados em tempo real.

Além disso, as APIs TheMovieDB e Superflix serão integradas ao projeto para fornecer informações sobre filmes e séries, enriquecendo a experiência do usuário.

## Histórias de usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.


|EU COMO... `PERSONA`     | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                   |
|-------------------------|------------------------------------|------------------------------------------|
| Assinante da plataformade streaming | Filtrar Filmes/Séries Por Gêneros | Facilitar a Escolha De Filmes Adequadas Ao Meu Gosto |
| Assinante da plataforma de streaming | Adicionar Filmes Aos Meus Favoritos| Acessar Novamente Os Conteúdos Que Eu Gosto Ou Me Interessaram |
| Assinante Que Prefere Os Lançamentos | Ver Uma Lista Com Os Filmes Mais Recentes | Ficar Sempre Atualizado Com As Últimas Novidades |
| Assinante da plataforma de streaming | Navegar Por Uma Biblioteca Ampla De Filmes e Séries| Poder Descobrir Novos Conteúdos Que Me Interessem Facilmente |
| Novo Usuário da Plataforma | Me Registrar e Fazer Login | Acessar o Conteúdo Da Plataforma e Gerenciar Minha Conta. |
| Assinante da plataforma de streaming | Criar Subperfis Para Diferentes Membros Da Minha Família | Cada Um Ter Uma Experiência Personalizada Permitir que possam administrar contas|
| Pai Ou Responsável | Poder Limitar As Opções De Filmes Dos Meus Filhos  | Garantir Que Eles Tenham Acesso Apenas A Conteúdos Apropriados Para a Sua Idade|
| Assinante da plataforma de streaming | Ter Acesso Ao Meu Histórico De Filmes Que Visitei | Poder Reassistir E/Ou Me Lembrar Dos Filmes No Qual Estava Assistindo |
| Assinante da plataforma de streaming  | Assistir Filmes De Qualidade Pela Internet | Poder Aproveitar Meu Lazer Assistindo Conteudos De Qualidadde |


## Requisitos

### Requisitos funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O SISTEMA DEVE PERMITIR O CADASTRO DO USUÁRIO | ALTA | 
|RF-002| O SISTEMA DEVE PERMITIR O LOGIN DO USUÁRIO | ALTA |
|RF-003| O SISTEMA DEVE POSSUIR UMA BIBLIOTECA DE FILMES DISPONÍVEL PARA O USUÁRIO ASSISTIR | ALTA |
|RF-004| O SISTEMA DEVE PERMITIR QUE O USUÁRIO ALTERE DE PERFIL A QUALQUER MOMENTO | ALTA |
|RF-005| O SISTEMA DEVE PERMITIR A FILTRAGEM DE CONTEÚDOS QUE O USUÁRIO ESTÁ PROCURANDO | MÉDIA |
|RF-006| O SISTEMA DEVE POSSUIR UM GERENCIAMENTO DE FILMES FAVORITOS | MÉDIA |
|RF-007| O SISTEMA DEVE PERMITIR A BUSCA DE FILMES POR MEIO DE NOME E DIRETOR | MÉDIA |
|RF-008| O SISTEMA DEVE POSSUIR UMA SEPARAÇÃO DE CONTEÚDO POR GÊNEROS | MÉDIA |
|RF-009| O SISTEMA DEVE POSSUIR UM HISTÓRICO DE FILMES VISUALIZADOS PELO USUÁRIO | MÉDIA |
|RF-010| O SISTEMA DEVE PERMITIR A CRIAÇÃO E EDIÇÃO DE SUB PERFIS | BAIXA |
|RF-011| O SISTEMA DEVE POSSUIR UM MEIO DE CONTROLE PARENTAL | BAIXA |
|RF-012| O SISTEMA DEVE PERMITIR QUE O USUÁRIO ENTRE EM CONTATO COM O SUPORTE | BAIXA |
|RF-013| O SISTEMA DEVE POSSUIR UM MEIO DE DEIXAR EM DESTAQUE OS ÚLTIMOS LANÇAMENTOS | BAIXA |

### Requisitos não funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O SISTEMA DEVE SER RESPONSIVO PARA RODAR EM DISPOSITIVOS MÓVEIS | ALTA | 
|RNF-002| O SISTEMA DEVE POSSUIR E GARANTIR SEGURANÇA DE DADOS |  ALTA |
|RNF-003| O SISTEMA DEVE ARMAZENAR DADOS DE LOGIN DOS USUÁRIOS |  ALTA | 
|RNF-004| O SISTEMA DEVE TER DISPONIBILIDADE A QUALQUER MOMENTO | MÉDIA | 
|RNF-005| O SISTEMA DEVE TER MEIOS DE ACESSIBILIDADE | BAIXA | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID    | Restrição                                             |
|------|-------------------------------------------------------|
|RE-001| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 09/12/2024 |
|RE-002| A equipe não pode subcontratar o desenvolvimento do trabalho. |
|RE-003| A equipe deve realizar reuniões semanais Scrum Master e Product Owner para apresentar o progresso e discutir dificuldades. |
