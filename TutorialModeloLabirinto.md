# Introduction #

Este tutorial destina-se a mostrar como foi feito um modelo draft de um labirinto a partir de uma imagem JPEG utilizando a técnica SVG+Extrusion.


# Details #

Para transformar a imagem em SVG:

  * Escolha uma imagem de visão ortogonal do labirinto visto de cima/baixo
  * Abra a imagem com o Inkscape
  * Selecione a imagem e clique em Path/Trace Bitmap...
  * Ajuste as opções disponíveis e verifique o resultado clicando em Update
  * Clique em OK para adicionar o novo objeto vetorizado
  * Selecione e exclua o objeto original (nao vetorizada)
  * Faça os ajustes necessários na imagem original com o Gimp caso não consiga um bom resultado
  * Caso seja necessário faça ajustes finos nos vértices
  * Salve o projeto no formato SVG

Para transformar o SVG em FBX:

  * No Blender, clique em File/Import/Paths/InkScape, selecione o SVG gerado pelo InkScape, clique em Import SVG e finalmente em OK
  * Selecione o objeto criado e faça os ajustes necessários de transformação (rotate, move, scale)
  * Na janela de Botoes ative os paineis de edicao (Panels Editing)
  * No painel 'Curve and Surface' altere o valor do campo Extrude até que fique de acordo com o resultado esperado
  * Clique em File/Export/Autodesk FBX, confirme as opções e clique em Export
  * Confirme onde o arquivo será gravado e clique em Export FBX

Pronto. Agora já é possível importar no Unity o modelo criado através da opção: Assets/Import New Asset...

Boa sorte. Você vai precisar!!

# Programas utilizados #

  * InkScape v0.48 : http://inkscape.org/
  * Blender 3D v2.49b : http://www.blender.org/

# Referências #

  * http://inkscape.org/doc/tracing/tutorial-tracing.html