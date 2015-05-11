# Introdução #

Esta página destina-se a descrever como preparar o ambiente de desenvolvimento deste projeto além de documentar os softwares e plug-ins necessários.

# Pré-requisitos #

.SO: Mac OS X ou Windows

.VCS: Subversion

.Game engine: Unity 3D 3.2 - http://unity3d.com/unity/download/

# Configurando o ambiente #

Versionamento nativo de projetos Unity só é suportado na versão Pro. Mas tentei subir os arquivos que acho essenciais. Testem e reportem o resultado ;)

Após instalar seu cliente SVN, faça o checkout do projeto:

_svn checkout https://pacman-3d.googlecode.com/svn/trunk/ pacman-3d --username seu@email.com_

Note que dentro do diretório _Library_ existem 3 diretórios que foram inseridos no ignore do SVN. São arquivos de cache, que provavelmente não farão falta (espero).

Para cada commit, adota-se o costume de atualizar a index da página do projeto para melhor controle de quando foi feito, evitando conflitos e perda de binários em sua workspace.