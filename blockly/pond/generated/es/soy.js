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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div id="topbar" class="back-arrow"></div><div style="display: none"><span id="Pond_scanTooltip">Busca enemigos. Especifica una direcci\u00F3n \\n(0-360). Devuelve la distancia al enemigo \\nm\u00E1s cercano en esa direcci\u00F3n. Devuelve \\ninfinito si no encuentra enemigos. </span><span id="Pond_cannonTooltip">Dispara el ca\u00F1\u00F3n. Especifica una direcci\u00F3n \\n(0-360) y un alcance (0-70). </span><span id="Pond_swimTooltip">Nada hacia adelante. Especifica una direcci\u00F3n \\n(0-360). </span><span id="Pond_stopTooltip">Deja de nadar. El jugador har\u00E1 una parada lenta. </span><span id="Pond_healthTooltip">Devuelve la salud actual del jugador (0 est\u00E1 \\nmuerto, 100 est\u00E1 saludable). </span><span id="Pond_speedTooltip">Devuelve la velocidad actual del jugador (0 est\u00E1 \\ndetenido, 100 es velocidad m\u00E1xima). </span><span id="Pond_locXTooltip">Devuelve la coordenada X del jugador (0 es el \\nborde izquierdo, 100 es el borde derecho). </span><span id="Pond_locYTooltip">Devuelve la coordenada Y del jugador (0 es el \\nborde inferior, 100 es el borde superior). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Mostrar la documentaci\u00F3n del idioma.">Documentaci\u00F3n</button></td><td><button id="runButton" class="primary" title="Ejecutar el programa que escribiste."><img src="common/1x1.gif" class="run icon21"> Ejecutar el programa</button><button id="resetButton" class="primary" style="display: none" title="Detener el programa y restablecer el nivel."><img src="common/1x1.gif" class="stop icon21"> Restablecer</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
