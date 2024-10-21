function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZlRxUJ5E5m":
        Script1();
        break;
      case "5rYuTdF5OpZ":
        Script2();
        break;
      case "5vyRAI3HO0t":
        Script3();
        break;
      case "6IyN0a2k6nr":
        Script4();
        break;
      case "5gZCTUNWYWL":
        Script5();
        break;
      case "5XIvCKBbmVZ":
        Script6();
        break;
      case "6J1P5TOw31C":
        Script7();
        break;
      case "5aYpMYqx6qy":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('67HPEUgI9Kb');
const duration = 750;
const easing = 'ease-out';
const id = '5pT3tdKJANc';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('67HPEUgI9Kb');
const duration = 750;
const easing = 'ease-out';
const id = '5pT3tdKJANc_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6dCuGrJHzhe');
const duration = 750;
const easing = 'ease-out';
const id = '6rmDZlVYa9Z';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6dCuGrJHzhe');
const duration = 750;
const easing = 'ease-out';
const id = '6rmDZlVYa9Z_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6c4rljR3gjf');
const duration = 750;
const easing = 'ease-out';
const id = '6fAMyMp2mfU';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6c4rljR3gjf');
const duration = 750;
const easing = 'ease-out';
const id = '6fAMyMp2mfU_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6pQbQOEDR5v');
const duration = 750;
const easing = 'ease-out';
const id = '5aaEVfLhsLN';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6pQbQOEDR5v');
const duration = 750;
const easing = 'ease-out';
const id = '5aaEVfLhsLN_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
