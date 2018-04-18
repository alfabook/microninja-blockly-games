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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div id="topbar" class="back-arrow"></div><div style="display: none"><span id="Pond_scanTooltip">Cerca i nemici. Specifica una direzione (0-360). \\nRestituisce la distanza dal nemico pi\u00F9 vicino in \\nquella direzione. Restituisce Infinito se non \\ntrova nessun nemico. </span><span id="Pond_cannonTooltip">Spara il cannone. Specifica una direzione \\n(0-360) e una gittata (0-70). </span><span id="Pond_swimTooltip">Nuotare in avanti. Specifica una direzione \\n(0-360). </span><span id="Pond_stopTooltip">Smettere di nuotare. Il giocatore rallenter\u00E0 \\nsino a fermarsi. </span><span id="Pond_healthTooltip">Restituisce la salute attuale del giocatore (0 \u00E8 \\nmorto, 100 \u00E8 sano). </span><span id="Pond_speedTooltip">Restituisce la velocit\u00E0 attuale del giocatore (0 \\n\u00E8 fermo, 100 \u00E8 alla velocit\u00E0 massima). </span><span id="Pond_locXTooltip">Restituisce la coordinata X del giocatore (0 \u00E8 \\nil bordo sinistro, 100 \u00E8 il bordo destro). </span><span id="Pond_locYTooltip">Restituisce la coordinata Y del giocatore (0 \u00E8 \\nil bordo inferiore, 100 \u00E8 il bordo superiore). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Mostra la documentazione in lingua.">Documentazione</button></td><td><button id="runButton" class="primary" title="Esegui il programma che hai scritto."><img src="common/1x1.gif" class="run icon21"> Esegui programma</button><button id="resetButton" class="primary" style="display: none" title="Interrompi il programma e ripristina il livello."><img src="common/1x1.gif" class="stop icon21"> Reimposta</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
