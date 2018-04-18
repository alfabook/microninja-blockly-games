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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div id="topbar" class="back-arrow"></div><div style="display: none"><span id="Pond_scanTooltip">Rechercher des ennemis. Sp\u00E9cifier une direction \\n(0-360). Renvoie la distance \u00E0 l\u2019ennemi le plus \\nproche dans cette direction. Renvoie Infini si \\naucun ennemi n\u2019a \u00E9t\u00E9 trouv\u00E9. </span><span id="Pond_cannonTooltip">Tirer au canon. Sp\u00E9cifier une direction (0-360) \\net une port\u00E9e (0-70). </span><span id="Pond_swimTooltip">Nager. Sp\u00E9cifier une direction (0-360). </span><span id="Pond_stopTooltip">Arr\u00EAter de nager. Le joueur ralentira pour \\narr\u00EAter. </span><span id="Pond_healthTooltip">Renvoie la sant\u00E9 actuelle du joueur (0 est mort, \\n100 est en pleine forme). </span><span id="Pond_speedTooltip">Renvoie la vitesse actuelle du joueur (0 est \u00E0 \\nl\u2019arr\u00EAt, 100 est \u00E0 pleine vitesse). </span><span id="Pond_locXTooltip">Renvoie la coordonn\u00E9e X du joueur (0 est le bord \\ngauche, 100 le bord droit). </span><span id="Pond_locYTooltip">Renvoie la coordonn\u00E9e Y du joueur (0 est le bas, \\n100 est le haut). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Affiche la documentation sur la langue.">Documentation</button></td><td><button id="runButton" class="primary" title="Lancer le programme que vous avez \u00E9crit."><img src="common/1x1.gif" class="run icon21"> Ex\u00E9cuter le programme</button><button id="resetButton" class="primary" style="display: none" title="Arr\u00EAter le programme et r\u00E9initialiser le niveau."><img src="common/1x1.gif" class="stop icon21"> R\u00E9initialiser</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
