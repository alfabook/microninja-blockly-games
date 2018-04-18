// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.soy.
 */

goog.provide('Pond.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Pond.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div id="topbar" class="back-arrow"></div><div style="display: none"><span id="Pond_scanTooltip">Buscar inimigos. Especifique uma dire\u00E7\u00E3o(0-360). \\nRetorna a distancia do inimigo mais pr\u00F3ximo \\nnaquela dire\u00E7\u00E3o. Retorna infinito se nenhum \\ninimigo for encontrado. </span><span id="Pond_cannonTooltip">Disparar o canh\u00E3o. Especificar uma dire\u00E7\u00E3o \\n(0-360) e um intervalo (0-70). </span><span id="Pond_swimTooltip">Nadar para a frente. Especificar uma dire\u00E7\u00E3o \\n(0-360). </span><span id="Pond_stopTooltip">Parar de nadar. O jogador vai abrandar at\u00E9 \\nparar. </span><span id="Pond_healthTooltip">Retorna a condi\u00E7\u00E3o atual do jogador (0 esta \\nmorto, 100 esta saud\u00E1vel). </span><span id="Pond_speedTooltip">Retorna a velocidade atual do jogador (0 esta \\nparado, 100 \u00E9 a velocidade m\u00E1xima). </span><span id="Pond_locXTooltip">Retorna a coordenada X do jogador (0 \u00E9 a margem \\nesquerda, 100 \u00E9 a margem direita). </span><span id="Pond_locYTooltip">Retorna a coordenada Y do jogador (0 \u00E9 a margem \\ninferior, 100 \u00E9 a margem superior). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Mostrar a documenta\u00E7\u00E3o de idioma.">Documenta\u00E7\u00E3o</button></td><td><button id="runButton" class="primary" title="Executar o programa que escreveste."><img src="common/1x1.gif" class="run icon21"> Executar o programa</button><button id="resetButton" class="primary" style="display: none" title="Parar o programa e reiniciar o n\u00EDvel."><img src="common/1x1.gif" class="stop icon21"> Reiniciar</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
