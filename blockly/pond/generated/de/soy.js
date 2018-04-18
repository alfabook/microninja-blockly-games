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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div id="topbar" class="back-arrow"></div><div style="display: none"><span id="Pond_scanTooltip">Sucht nach Feinden. Gib eine Richtung an \\n(0\u2013360). Gibt die Entfernung zum n\u00E4chsten \\nFeind in dieser Richtung zur\u00FCck. \\nGibt \u201EUnendlichkeit\u201C zur\u00FCck, falls kein \\nFeind gefunden wurde. </span><span id="Pond_cannonTooltip">Feuert die Kanone. Gib eine Richtung (0\u2013360) und \\neinen Bereich (0\u201370) an. </span><span id="Pond_swimTooltip">Schwimme vorw\u00E4rts. Gib eine Richtung an (0\u2013360). </span><span id="Pond_stopTooltip">H\u00F6rt auf zu schwimmen. Der Spieler wird sich bis \\nzum Stopp verlangsamen. </span><span id="Pond_healthTooltip">Gibt die aktuelle Gesundheit des Spielers zur\u00FCck \\n(0 ist tot, 100 ist gesund). </span><span id="Pond_speedTooltip">Gibt die aktuelle Geschwindigkeit des Spielers \\nzur\u00FCck (0 ist angehalten, 100 ist volle \\nGeschwindigkeit). </span><span id="Pond_locXTooltip">Gibt die X-Koordinate des Spielers zur\u00FCck (0 ist \\ndie linke, 100 die rechte Kante). </span><span id="Pond_locYTooltip">Gibt die Y-Koordinate des Spielers zur\u00FCck (0 ist \\ndie untere, 100 die obere Kante). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Zeigt die Sprachdokumentation an.">Dokumentation</button></td><td><button id="runButton" class="primary" title="Das geschriebene Programm ausf\u00FChren."><img src="common/1x1.gif" class="run icon21"> Programm ausf\u00FChren</button><button id="resetButton" class="primary" style="display: none" title="Stoppt das Programm und setzt das Level zur\u00FCck."><img src="common/1x1.gif" class="stop icon21"> Zur\u00FCcksetzen</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
