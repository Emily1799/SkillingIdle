var soundWood = new Audio("music/ChoppingWood2.mp3");
soundWood.volume = .56;
var soundPickaxe = new Audio("music/Pickaxe.mp3");
soundPickaxe.volume = .56;
var backgroundSound = new Audio("music/Background.mp3");
backgroundSound.loop = true;
backgroundSound.volume = .58;
backgroundSound.play();

soundWood.loop = true;
var totalGold = 0;

//levels and experience
var woodcuttingLevel = 1;
var totalWoodcuttingExp = 0;
var nextWoodcuttingLevel = 83;
var remainingWoodcutLevelExp = 83;

var miningLevel = 1;
var totalMiningExp = 0;
var nextMiningLevel = 83;
var remainingMiningLevelExp = 83;

var fishingLevel = 1;
var totalFishingExp = 0;
var nextFishingLevel = 83;
var remainingFishingLevelExp = 83;

var craftingLevel = 1;
var totalCraftingExp = 0;
var nextCraftingLevel = 83;
var remainingCraftingLevelExp = 83;

var smithingLevel = 1;
var totalSmithingExp = 0;
var nextSmithingLevel = 83;
var remainingSmithingLevelExp = 83;

var tier = ["Bronze", "Iron", "Steel", "Mithril", "Adamant", "Rune"];
var jewlery = ["Sapphire", "Emerald", "Ruby", "Diamond", "Dragonstone", "Onyx", "Zenyte"];
var trinkets = ["Ring", "Necklace", "Amulet", "Bracelet"];

//Woodcut
var totalLogs = [0, 0, 0, 0, 0, 0];

var treeXP = [25, 37.5, 67.5, 90, 175, 250];

var prestige = 0;

var logVals = [1, 15, 35, 80, 400, 1250];

var logDelayOffset = [9900,10000, 13000, 16000, 21000, 24000];
var logDifficulty = [125, 220, 225, 450, 675, 875];

var isLoggerHired = [false, false, false, false, false, false];
var loggerVals = [1000, 15000, 40000, 160000, 450000, 800000];
var numLoggers = [0, 0, 0, 0, 0, 0];
var loggerCostIncrease = [100, 1000, 5000, 10000, 20000, 50000];

var loggerAbility = [.85, .95, 1.1, 1.2, 1.4, 1.45];
var loggerDelay = [17960, 19850, 23000, 30000, 36000, 44000];
var loggerTime = [725, 800, 1000, 1150, 1550, 2400];
var loggerWoodcutMul = [16, 16, 16, 15, 13, 11]



//Mining
var totalOre = [0, 0, 0, 0, 0, 0 , 0];
var totalGems = [0, 0, 0, 0, 0, 0, 0];
var oreXP = [17.5, 17.5, 35, 50, 65, 95, 150];

var sapphire = 0;
var emerald = 0;
var ruby = 0;
var diamond = 0;
var dragonstone = 0;
var onyx = 0;
var zenyte = 0;

var oreVals = [1, 1, 20, 100, 550, 1450, 12000];
var oreDelay;

var isMinerHired = [false, false, false, false, false, false, false];
var oreMinerCost = [1500, 1500, 50000, 100000, 250000, 500000, 1000000];
var minerCostIncrease = [100, 100, 10000, 20000, 50000, 100000, 100000];
var numOreMiners = [0, 0, 0, 0, 0, 0, 0];

var mineRandOffset = [.09, .09, .15, .25, .5, .75, .9];
var oreDelayOffset = [9400, 9400, 12250, 14250, 18250, 22500, 38000];
var oreDifficulty = [625, 750, 900, 1100, 1600, 2100];

var minerAbility = [.98, .98, 1.3, 1.5, 1.65, 1.8, 2.3];
var minerDelay = [15000, 15000, 16500, 18500, 20500, 31000];
var minerMul = [8, 8, 6, 5, 3, 2, 1];
var minerTime = [525, 525, 650, 850, 1000, 1100, 1600];

//Fishing
var totalShrimp = 0;
var totalTrout = 0;
var totalSalmon = 0;
var totalTuna = 0;
var totalLobster = 0;
var totalSwordfish = 0;
var totalShark = 0;

var shrimp = 10;
var trout = 25;
var salmon = 40;
var tuna = 50;
var lobster = 90;
var swordfish = 120;
var shark = 250;

var shrimpVal = 1;
var troutVal = 10;
var salmonVal = 20;
var tunaVal = 70;
var lobsterVal = 120;
var swordfishVal = 280;
var sharkVal = 500;

var shrimpDelay;
var troutDelay;
var salmonDelay;
var tunaDelay;
var lobsterDelay;
var swordfishDelay;
var sharkDelay;

var shrimpFishermanVal = 500;
var troutFishermanVal = 15000;
var salmonFishermanVal = 60000;
var tunaFishermanVal = 95000;
var lobsterFishermanVal = 225000;
var swordfishFishermanVal = 600000;
var sharkFishermanVal = 1000000;

var shrimpFishermanHired = false;
var troutFishermanHired = false;
var salmonFishermanHired = false;
var tunaFishermanHired = false;
var lobsterFishermanHired = false;
var swordfishFishermanHired = false;
var sharkFishermanHired = false;

var numShrimpFisherman = 0;
var numTroutFisherman = 0;
var numSalmonFisherman = 0;
var numTunaFisherman = 0;
var numLobsterFisherman = 0;
var numSwordfishFisherman = 0;
var numSharkFisherman = 0;

//Crafting
var stick = 1;
var woodenAxe = 0;
var bronzeAxe = 0;
var ironAxe = 0;
var steelAxe = 0;
var mithrilAxe = 0;
var adamantAxe = 0;
var runeAxe = 0;

var woodenPickaxe = 0;
var bronzePickaxe = 0;
var ironPickaxe = 0;
var steelPickaxe = 0;
var mithrilPickaxe = 0;
var adamantPickaxe = 0;
var runePickaxe = 0;

var woodenSword = 0;
var bronzeSword = 0;
var ironSword = 0;
var steelSword = 0;
var mithrilSword = 0;
var adamantSword = 0;
var runeSword = 0;

var woodenHelmet = 0;
var bronzeHelmet = 0;
var ironHelmet = 0;
var steelHelmet = 0;
var mithrilHelmet = 0;
var adamantHelmet = 0;
var runeHelmet = 0;

var woodenChestplate = 0;
var bronzeChestplate = 0;
var ironChestplate = 0;
var steelChestplate = 0;
var mithrilChestplate = 0;
var adamantChestplate = 0;
var runeChestplate = 0;

var woodenPlatelegs = 0;
var bronzePlatelegs = 0;
var ironPlatelegs = 0;
var steelPlatelegs = 0;
var mithrilPlatelegs = 0;
var adamantPlatelegs = 0;
var runePlatelegs = 0;

var sapphireAmulet = 0;
var emeraldAmulet = 0;
var rubyAmulet = 0;
var diamondAmulet = 0;
var dragonstoneAmulet = 0;
var onyxAmulet = 0;
var zenyteAmulet = 0;

//Smithing
var totalBars = [0, 0, 0, 0, 0, 0];
var barVals = [15, 150, 400, 1350, 3500, 11500];

//Combat
var hpLevel = 10;
var totalHpExp = 1184;
var nextHpLevel = 211 + totalHpExp;
var remainingHpLevelExp = 211;

var attackLevel = 1;
var totalAttackExp = 0;
var nextAttackLevel = 83;
var remainingAttackLevelExp = 83;

var defenseLevel = 1;
var totalDefenseExp = 0;
var nextDefenseLevel = 83;
var remainingDefenseLevelExp = 83;

var strengthLevel = 1;
var totalStrengthExp = 0;
var nextStrengthLevel = 83;
var remainingStrengthLevelExp = 83;

var magicLevel = 1;
var totalMagicExp = 0;
var nextMagicLevel = 83;
var remainingMagicLevelExp = 83;

var combatLevel = 3;
var combinedCombatLevels = 14;
var health = 10;
var defensePower = 1;
var attackPower = 1;
var magicPower = 1;
var accuracy = 1;
var speed = 1;

var enemy = 0;
var enemyHp = 5;
var fightExp;
var attackStyle = 0;
var hit = 0;

var wizardOrbX = new Array(5);
var wizardOrbY = new Array(5);
var wizardBalls = new Array(5);
var wizardBallsX = new Array(5);
var wizardBallsY = new Array(5);
var darkMageInterval;
var canvas, canvasContext;
var mouseX, mouseY;
var done = false;
var shieldThickness = 10;
var shieldWidth = 100;
var shieldHeight = 100;
var shieldX = 400;
var shieldY = 400;

var demonicRing = 0;
var draconicVisage = 0;

var moving = false;
var roll;

var count = 0;
var placeImIn = 1;

var combatArea = "none";
var fishingArea = "none";
var miningArea = "none";
var craftingArea = "none";
var woodcuttingArea = "block";

var logIndex;

function disableButton(buttonID) {
	document.getElementById(buttonID).style.backgroundColor = 'red';
	document.getElementById(buttonID).disabled = true;
	
}
//this is important! Don't fuck with it. Fucking with it will break all the code.
//returns an array of element ids for that tree tier. Allows reduction of code duplication
function getWoodcutButtonIDs(treeIndex) {
	if(treeIndex == 0) {
		return["treeButton", "loggerButton", "sellLogButton", "logs"];
	}
	else if (treeIndex == 1) {
		return["oakButton", "oakLoggerButton", "sellOakButton", "oak"];
	}
	else if (treeIndex == 2) {
		return["willowButton", "willowLoggerButton", "sellWillowButton","willow"];
	}
	else if (treeIndex == 3){
		return["mapleButton", "mapleLoggerButton", "sellMapleButton", "maple"];
	}
	else if (treeIndex == 4) {
		return["yewButton", "yewLoggerButton", "sellYewButton", "yew"];
	}
	else if(treeIndex == 5) {
		return["magicButton", "magicLoggerButton", "sellMagicButton", "magicTree"];
	}
	else {
		console.log("Failure. Check call of getWoodcutButtonIDs. treeIndex =" + treeIndex);
	}
}

function getMineButtonIDs(oreIndex) {
	if(oreIndex == 0) {
		return ["copperButton", "copperMinerButton", "sellCopperButton", "copper"];
	}
	else if(oreIndex == 1) {
		return ["tinButton", "tinMinerButton", "sellTinButton", "tin"];
	}
	else if(oreIndex == 2) {
		return ["ironButton", "ironMinerButton", "sellIronButton", "iron"];
	}
	else if(oreIndex == 3) {
		return ["coalButton", "coalMinerButton", "sellCoalButton", "coal"];
	}
	else if (oreIndex == 4) {
		return ["mithrilButton", "mithrilMinerButton", "sellMithrilButton", "mithril"];
	}
	else if (oreIndex == 5) {
		return ["adamantButton", "adamantMinerButton", "sellAdamantiteButton", "adamant"];
	}
	else if (oreIndex == 6) {
		return ["runeButton", "runeMinerButton", "sellRuniteButton", "rune"];
	}
	else {
		console.log("Failure. Check call of getMineButtonIDs. oreIndex =" + oreIndex);
	}
}

function getFurnaceButtonIDs(smeltIndex){
	if(smeltIndex == 0) {
		return ["bronzeBarButton", "sellBronzeBarButton", "bronzeBar"];
	}
	else if(smeltIndex == 1) {
		return ["ironBarButton", "sellIronBarButton", "ironBar"];
	}
	else if(smeltIndex == 2) {
		return ["steelBarButton", "sellSteelBarButton", "steelBar"];
	}
	else if(smeltIndex == 3) {
		return ["mithrilBarButton", "sellMithrilBarButton", "mithrilBar"];
	}
	else if (smeltIndex == 4) {
		return ["adamantBarButton", "sellAdamantBarButton", "adamantBar"];
	}
	else if (smeltIndex == 5) {
		return ["runeBarButton", "sellRuneBarButton", "runeBar"];
	}
	else {
		console.log("Failure. Check call of getFurnaceButtonIDs. smeltIndex =" + smeltIndex);
	}
}

function updateMousePos(event){
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = event.clientX - rect.left - root.scrollLeft;
	mouseY = event.clientY - rect.top - root.scrollTop;
	
	shieldX = mouseX - shieldWidth/2;
	shieldY = mouseY - shieldHeight/2;
}

function start(){
	canvas = document.getElementById('gameCanvas');
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	canvasContext = canvas.getContext('2d');
	canvas.addEventListener('mousemove', updateMousePos);
	for(var i = 0; i < 5; i++){
		wizardBalls[i] = false;
		wizardOrbX[i] = 6;
		wizardOrbY[i] = 6;
	}
	updatePrice();
	document.getElementById("Woodcutting").style.display = "block";
	document.getElementById("Mining").style.display = "none";
	document.getElementById("Fishing").style.display = "none";
	document.getElementById("Combat").style.display = "none";
	document.getElementById("Bosses").style.display = "none";
	document.getElementById("Smelting").style.display = "none";
	document.getElementById("death").style.display = "none";
	document.getElementById("golden").innerHTML = "Gold: " + totalGold.toLocaleString();
	document.getElementById("golden2").innerHTML = "Gold: " + totalGold.toLocaleString();
	document.getElementById("golden3").innerHTML = "Gold: " + totalGold.toLocaleString();
	document.getElementById("golden4").innerHTML = "Gold: " + totalGold.toLocaleString();
	document.getElementById("woodcutExp").innerHTML = '&nbsp&nbsp' + "Woodcutting Level: " + woodcuttingLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalWoodcuttingExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingWoodcutLevelExp.toLocaleString();
	document.getElementById("miningExp").innerHTML = '&nbsp&nbsp' + "Mining Level: " + miningLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalMiningExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingMiningLevelExp.toLocaleString();
	document.getElementById("smithingExp").innerHTML = '&nbsp&nbsp' + "Smithing Level: " + smithingLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalSmithingExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingSmithingLevelExp.toLocaleString();
	document.getElementById("fishingExp").innerHTML = '&nbsp&nbsp' + "Fishing Level: " + fishingLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalFishingExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingFishingLevelExp.toLocaleString();
	document.getElementById("combatExp").innerHTML = '&nbsp&nbsp' + "Combat Level: " + combatLevel + '\xa0\xa0\xa0' + "Hitpoints Level: " + hpLevel + '\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalHpExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingHpLevelExp.toLocaleString();
	document.getElementById("craftingExp").innerHTML = '&nbsp&nbsp' + "Crafting Level: " + craftingLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalCraftingExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingCraftingLevelExp.toLocaleString();
	updateCombat();
}

function update(){
	remainingWoodcutLevelExp = nextWoodcuttingLevel - totalWoodcuttingExp;
	remainingMiningLevelExp = nextMiningLevel - totalMiningExp;
	remainingFishingLevelExp = nextFishingLevel - totalFishingExp;
	remainingAttackLevelExp = nextAttackLevel - totalAttackExp;
	remainingStrengthLevelExp = nextStrengthLevel - totalStrengthExp;
	remainingDefenseLevelExp = nextDefenseLevel - totalDefenseExp;
	remainingHpLevelExp = nextHpLevel - totalHpExp;
	remainingCraftingLevelExp = nextCraftingLevel - totalCraftingExp;
	remainingSmithingLevelExp = nextSmithingLevel - totalSmithingExp;
	levelUp();
	updateWoodcutButtons();
	updateMiningButtons();
	updateSmithingButtons();
	updateFishingButtons();
	updateLogs();
	updateOres();
	updateBars();
	updateFish();
	updateCombat();
	document.getElementById("golden").innerHTML = "Gold: " + totalGold.toLocaleString();
	document.getElementById("golden2").innerHTML = "Gold: " + totalGold.toLocaleString();
	document.getElementById("golden3").innerHTML = "Gold: " + totalGold.toLocaleString();
}

function levelUp(){
	if(totalWoodcuttingExp >= nextWoodcuttingLevel){
		woodcuttingLevel += 1;
		backgroundSound.pause();
		var audio = new Audio("music/Woodcutting.mp3");
		audio.play();
		audio.onended = function(){
			backgroundSound.currentTime = 0;
			if(document.getElementById("settings").innerText == "Disable Sound") backgroundSound.play();
		};
		nextWoodcuttingLevel = Math.floor(woodcuttingLevel + 74.5 * Math.pow(2, woodcuttingLevel/7)) + nextWoodcuttingLevel;
		remainingWoodcutLevelExp = nextWoodcuttingLevel - totalWoodcuttingExp;
	}
	if(totalMiningExp >= nextMiningLevel){
		miningLevel += 1;
		backgroundSound.pause();
		var audio = new Audio("music/Mining.mp3");
		audio.play();
		audio.onended = function(){
			backgroundSound.currentTime = 0;
			if(document.getElementById("settings").innerText == "Disable Sound") backgroundSound.play();
		};
		nextMiningLevel = Math.floor(miningLevel + 74.5 * Math.pow(2, miningLevel/7)) + totalMiningExp;
		remainingMiningLevelExp = nextMiningLevel - totalMiningExp;
	}
	if(totalFishingExp >= nextFishingLevel){
		fishingLevel += 1;
		backgroundSound.pause();
		var audio = new Audio("music/Fishing.mp3");
		audio.play();
		audio.onended = function(){
			backgroundSound.currentTime = 0;
			if(document.getElementById("settings").innerText == "Disable Sound") backgroundSound.play();
		};
		nextFishingLevel = Math.floor(fishingLevel + 74.5 * Math.pow(2, fishingLevel/7)) + totalFishingExp;
		remainingFishingLevelExp = nextFishingLevel - totalFishingExp;
	}
	if(totalAttackExp >= nextAttackLevel){
		attackLevel += 1;
		backgroundSound.pause();
		var audio = new Audio("music/Attack.mp3");
		audio.play();
		audio.onended = function(){
			backgroundSound.currentTime = 0;
			if(document.getElementById("settings").innerText == "Disable Sound") backgroundSound.play();
		};
		combinedCombatLevels += 1;
		nextAttackLevel = Math.floor(attackLevel + 74.5 * Math.pow(2, attackLevel/7)) + totalAttackExp;
		remainingAttackLevelExp = nextAttackLevel - totalAttackExp;
	}
	if(totalStrengthExp >= nextStrengthLevel){
		strengthLevel += 1;
		backgroundSound.pause();
		var audio = new Audio("music/Strength.mp3");
		audio.play();
		audio.onended = function(){
			backgroundSound.currentTime = 0;
			if(document.getElementById("settings").innerText == "Disable Sound") backgroundSound.play();
		};
		combinedCombatLevels += 1;
		nextStrengthLevel = Math.floor(strengthLevel + 74.5 * Math.pow(2, strengthLevel/7)) + totalStrengthExp;
		remainingStrengthLevelExp = nextStrengthLevel - totalStrengthExp;
	}
	if(totalDefenseExp >= nextDefenseLevel){
		defenseLevel += 1;
		backgroundSound.pause();
		var audio = new Audio("music/Defence.mp3");
		audio.play();
		audio.onended = function(){
			backgroundSound.currentTime = 0;
			if(document.getElementById("settings").innerText == "Disable Sound") backgroundSound.play();
		};
		combinedCombatLevels += 1;
		nextDefenseLevel = Math.floor(defenseLevel + 74.5 * Math.pow(2, defenseLevel/7)) + totalDefenseExp;
		remainingDefenseLevelExp = nextDefenseLevel - totalDefenseExp;
	}
	if(totalMagicExp >= nextMagicLevel){
		magicLevel += 1;
		combinedCombatLevels += 1;
		nextMagicLevel = Math.floor(magicLevel + 74.5 * Math.pow(2, magicLevel/7)) + totalMagicExp;
		remainingMagicLevelExp = nextMagicLevel - totalMagicExp;
	}
	if(totalHpExp >= nextHpLevel){
		hpLevel += 1;
		backgroundSound.pause();
		var audio = new Audio("music/Hitpoints.mp3");
		audio.play();
		audio.onended = function(){
			backgroundSound.currentTime = 0;
			if(document.getElementById("settings").innerText == "Disable Sound") backgroundSound.play();
		};
		combinedCombatLevels += 1;
		nextHpLevel = Math.floor(hpLevel + 74.5 * Math.pow(2, hpLevel/7)) + totalHpExp;
		remainingHpLevelExp = nextHpLevel - totalHpExp;
	}
	
	combatLevel = Math.floor(combinedCombatLevels / 3);
	
}

function updateFishingButtons(){
	if(totalShrimp > 0){
		document.getElementById("sellShrimpButton").disabled = false;
	}
	else{
		document.getElementById("sellShrimpButton").disabled = true;
	}
	if(totalTrout > 0){
		document.getElementById("sellTroutButton").disabled = false;
	}
	else{
		document.getElementById("sellTroutButton").disabled = true;
	}
	if(totalSalmon > 0){
		document.getElementById("sellSalmonButton").disabled = false;
	}
	else{
		document.getElementById("sellSalmonButton").disabled = true;
	}
	if(totalTuna > 0){
		document.getElementById("sellTunaButton").disabled = false;
	}
	else{
		document.getElementById("sellTunaButton").disabled = true;
	}
	if(totalLobster > 0){
		document.getElementById("sellLobsterButton").disabled = false;
	}
	else{
		document.getElementById("sellLobsterButton").disabled = true;
	}
	if(totalSwordfish > 0){
		document.getElementById("sellSwordfishButton").disabled = false;
	}
	else{
		document.getElementById("sellSwordfishButton").disabled = true;
	}
	if(totalShark > 0){
		document.getElementById("sellSharkButton").disabled = false;
	}
	else{
		document.getElementById("sellSharkButton").disabled = true;
	}
	if(totalGold >= shrimpFishermanVal && numShrimpFisherman < fishingLevel){
		document.getElementById("shrimpFishermanButton").disabled = false;
	}
	else{
		document.getElementById("shrimpFishermanButton").disabled = true;
	}
	if(totalGold >= troutFishermanVal && numTroutFisherman < (fishingLevel - 15) && fishingLevel >= 15){
		document.getElementById("troutFishermanButton").disabled = false;
	}
	else{
		document.getElementById("troutFishermanButton").disabled = true;
	}
	if(totalGold >= salmonFishermanVal && numSalmonFisherman < (fishingLevel - 20) && fishingLevel >= 20){
		document.getElementById("salmonFishermanButton").disabled = false;
	}
	else{
		document.getElementById("salmonFishermanButton").disabled = true;
	}
	if(totalGold >= tunaFishermanVal && numTunaFisherman < (fishingLevel - 30) && fishingLevel >= 30){
		document.getElementById("tunaFishermanButton").disabled = false;
	}
	else{
		document.getElementById("tunaFishermanButton").disabled = true;
	}
	if(totalGold >= lobsterFishermanVal && numLobsterFisherman < (fishingLevel - 40) && fishingLevel >= 40){
		document.getElementById("lobsterFishermanButton").disabled = false;
	}
	else{
		document.getElementById("lobsterFishermanButton").disabled = true;
	}
	if(totalGold >= swordfishFishermanVal && numSwordfishFisherman < (fishingLevel - 55) && fishingLevel >= 55){
		document.getElementById("swordfishFishermanButton").disabled = false;
	}
	else{
		document.getElementById("swordfishFishermanButton").disabled = true;
	}
	if(totalGold >= sharkFishermanVal && numSharkFisherman < (fishingLevel - 76) && fishingLevel >= 76){
		document.getElementById("sharkFishermanButton").disabled = false;
	}
	else{
		document.getElementById("sharkFishermanButton").disabled = true;
	}
	if(fishingLevel >= 15){
		document.getElementById("troutButton").style.display = "block";
		document.getElementById("trout").style.display = "block";
		if(!troutFishermanHired){
			document.getElementById("troutFishermanButton").style.display = "block";
		}
	}
	if(fishingLevel >= 20){
		document.getElementById("salmonButton").style.display = "block";
		document.getElementById("salmon").style.display = "block";
		if(!salmonFishermanHired){
			document.getElementById("salmonFishermanButton").style.display = "block";
		}
	}
	if(fishingLevel >= 30){
		document.getElementById("tunaButton").style.display = "block";
		document.getElementById("tuna").style.display = "block";
		if(!tunaFishermanHired){
			document.getElementById("tunaFishermanButton").style.display = "block";
		}
	}
	if(fishingLevel >= 40){
		document.getElementById("lobsterButton").style.display = "block";
		document.getElementById("lobster").style.display = "block";
		if(!lobsterFishermanHired){
			document.getElementById("lobsterFishermanButton").style.display = "block";
		}
	}
	if(fishingLevel >= 55){
		document.getElementById("swordfishButton").style.display = "block";
		document.getElementById("swordfish").style.display = "block";
		if(!swordfishFishermanHired){
			document.getElementById("swordfishFishermanButton").style.display = "block";
		}
	}
	if(fishingLevel >= 76){
		document.getElementById("sharkButton").style.display = "block";
		document.getElementById("shark").style.display = "block";
		if(!sharkFishermanHired){
			document.getElementById("sharkFishermanButton").style.display = "block";
		}
	}
}

function updateMiningButtons(){
	var curID = [];
	var levelReq = [0, 0, 15, 30, 55, 70, 85]; //level requirements for each ore
	for(var i = 0; i < 7; i++) {
		curID = getMineButtonIDs(i);
		//enable sell buttons if there are ore-- index 2 is the sell button
		if(totalOre[i] > 0) {
			document.getElementById(curID[2]).disabled = false;
		} 
		else {
			document.getElementById(curID[2]).disabled = true;
		}
		
		//enable purchase miner buttons
		if(canBuyMiner(i, levelReq[i])) { 
			document.getElementById(curID[1]).disabled = false;
		}
		else {
			document.getElementById(curID[1]).disabled = true;
		}
		
		//display buttons based on ming level
		if((i > 0) && (miningLevel > (levelReq[i]))) { // skip first run through
			document.getElementById(curID[0]).style.display = "block";
			document.getElementById(curID[3]).style.display = "block";
			if(!isMinerHired[1]){
				document.getElementById(curID[1]).style.display = "block";
			}
		}
	}
}

function updateSmithingButtons(){
	var curID = [];
	var levelReq = [0, 15, 30, 55, 70, 85]; //level requirements for each bar
	for(var i = 0; i < 6; i++) {
		curID = getFurnaceButtonIDs(i);
		//enable sell buttons if there are ore-- index 1 is the sell button
		if(totalBars[i] > 0) {
			document.getElementById(curID[1]).disabled = false;
		} 
		else {
			document.getElementById(curID[1]).disabled = true;
		}
		
		//display buttons based on smithing level
		if((i > 0) && (smithingLevel > (levelReq[i]))) { // skip first run through
			document.getElementById(curID[0]).style.display = "block";
			document.getElementById(curID[2]).style.display = "block";
		}
	}
}

function canBuyLogger(logIndex, levelRequired) { 
	return ((totalGold >= loggerVals[logIndex]) && (numLoggers[logIndex] < (woodcuttingLevel - levelRequired) )&& (woodcuttingLevel >= levelRequired)) 
}
function canBuyMiner(oreIndex, levelRequired) { 
	return ((totalGold >= oreMinerCost[oreIndex]) && (numOreMiners[oreIndex] < (miningLevel - levelRequired) )&& (miningLevel >= levelRequired)) 
}

function updateWoodcutButtons(){
	var curID = [];
	for(var i = 0; i < 6; i++) {
		curID = getWoodcutButtonIDs(i);
		//enable sell buttons if there are logs -- index 2 is the sell button
		if(totalLogs[i] > 0) {
			document.getElementById(curID[2]).disabled = false;
		} 
		else {
			document.getElementById(curID[2]).disabled = true;
		}
		
		//enable purchase logger buttons
		if(canBuyLogger(i, i*15)) { //i*15 happens to be level required for each tier.
			document.getElementById(curID[1]).disabled = false;
		}
		else {
			document.getElementById(curID[1]).disabled = true;
		}
		
		//display buttons based on woodcutting level
		if((i > 0) && (woodcuttingLevel > (i*15))) { // skip first run through
			document.getElementById(curID[0]).style.display = "block";
			document.getElementById(curID[3]).style.display = "block";
			if(!isLoggerHired[1]){
				document.getElementById(curID[1]).style.display = "block";
			}
		}
	}

}

function updateLogs(){
	var curID = [];
	for(var i = 0; i < 6; i++){
		curID = getWoodcutButtonIDs(i);
		document.getElementById(curID[3]).innerHTML = curID[3]+ " :" + totalLogs[i].toString();
	}
	//updates current xp as well
	document.getElementById("woodcutExp").innerHTML = "Woodcutting Level: " + woodcuttingLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalWoodcuttingExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingWoodcutLevelExp.toLocaleString();
}

function updateOres(){
	var curID = [];
	for(var i = 0; i < 7; i++){
		curID = getMineButtonIDs(i);
		document.getElementById(curID[3]).innerHTML = curID[3]+ " :" + totalOre[i].toString();
	}
	document.getElementById("miningExp").innerHTML = "Mining Level: " + miningLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalMiningExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingMiningLevelExp.toLocaleString();
}

function updateBars(){
	var curID = [];
	for(var i = 0; i < 6; i++){
		curID = getFurnaceButtonIDs(i);
		document.getElementById(curID[2]).innerHTML = curID[2]+ " :" + totalBars[i].toString();
	}
	document.getElementById("smithingExp").innerHTML = "Smithing Level: " + smithingLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalSmithingExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingSmithingLevelExp.toLocaleString();
}

function updateFish(){
	document.getElementById("shrimp").innerHTML = "Shrimp: " + totalShrimp;
	document.getElementById("trout").innerHTML = "Trout: " + totalTrout;
	document.getElementById("salmon").innerHTML = "Salmon: " + totalSalmon;
	document.getElementById("tuna").innerHTML = "Tuna: " + totalTuna;
	document.getElementById("lobster").innerHTML = "Lobster: " + totalLobster;
	document.getElementById("swordfish").innerHTML = "Swordfish: " + totalSwordfish;
	document.getElementById("shark").innerHTML = "Shark: " + totalShark;
	document.getElementById("fishingExp").innerHTML = "Fishing Level: " + fishingLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalFishingExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingFishingLevelExp.toLocaleString();
}

function updateCombat(){
	document.getElementById("health").innerHTML = '\xa0\xa0\xa0\xa0\xa0\xa0' + "Your Health: " + health;
	document.getElementById("attack").innerHTML = "Attack Power: " + attackPower;
	document.getElementById("defense").innerHTML = "Defensive Power: " + defensePower;
	document.getElementById("magic").innerHTML = "Magic Power: " + magicPower;
	document.getElementById("accuracy").innerHTML = "Accuracy: " + accuracy;
	document.getElementById("speed").innerHTML = "Speed: " + speed;
	document.getElementById("enemyHp").innerHTML = "Enemy Health: " + enemyHp;
	document.getElementById("attackExp").innerHTML = "Attack Level: " + attackLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalAttackExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingAttackLevelExp.toLocaleString();
	document.getElementById("defenseExp").innerHTML = "Defense Level: " + defenseLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalDefenseExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingDefenseLevelExp.toLocaleString();
	document.getElementById("strengthExp").innerHTML = "Strength Level: " + strengthLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalStrengthExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingStrengthLevelExp.toLocaleString();
	document.getElementById("magicExp").innerHTML = "Magic Level: " + magicLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalMagicExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingMagicLevelExp.toLocaleString();
	document.getElementById("combatExp").innerHTML = '&nbsp&nbsp' + "Combat Level: " + combatLevel + '\xa0\xa0\xa0' + "Hitpoints Level: " + hpLevel + '\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalHpExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingHpLevelExp.toLocaleString();
}

function pauseTreeSound(){
	if(document.getElementById("treeButton").style.backgroundColor == 'red' || document.getElementById("oakButton").style.backgroundColor == 'red' || document.getElementById("willowButton").style.backgroundColor == 'red' || document.getElementById("mapleButton").style.backgroundColor == 'red' || document.getElementById("yewButton").style.backgroundColor == 'red' || document.getElementById("magicButton").style.backgroundColor == 'red'){
	
	}
	else{
		soundWood.pause()
		soundWood.currentTime = 0;
	}
}

function pausePickaxeSound(){
	if(document.getElementById("copperButton").style.backgroundColor == 'red' || document.getElementById("tinButton").style.backgroundColor == 'red' || document.getElementById("ironButton").style.backgroundColor == 'red' || document.getElementById("mithrilButton").style.backgroundColor == 'red' || document.getElementById("adamantButton").style.backgroundColor == 'red' || document.getElementById("runeButton").style.backgroundColor == 'red'){
	
	}
	else{
		soundPickaxe.pause()
		soundPickaxe.currentTime = 0;
	}
}

//Woodcutting
function getLogs(treeIndex) {
	if(!moving) {
		if(soundWood.paused){
				soundWood.play();
		}
		var ids = getWoodcutButtonIDs(treeIndex);
		document.getElementById(ids[0]).style.backgroundColor = 'red';
		document.getElementById(ids[0]).disabled = true;
		var logDelay = ((Math.random() + .2) * (logDelayOffset[treeIndex] - (woodcuttingLevel * 75))) + (logDifficulty[treeIndex] - woodcuttingLevel);
		setTimeout(function(){
			totalLogs[treeIndex] += 1;
			totalWoodcuttingExp += treeXP[treeIndex];
			update();
			document.getElementById(ids[0]).disabled = false;
			document.getElementById(ids[0]).style.backgroundColor = 'green';
			pauseTreeSound();
		}, logDelay);
	}
}

function hireLogger(treeIndex){
	totalGold -= loggerVals[treeIndex];
	numLoggers[treeIndex] += 1;
	loggerVals[treeIndex] = Math.floor(loggerVals[treeIndex] * 1.1) + loggerCostIncrease[treeIndex];
	updatePrice();
	update();
	if(!isLoggerHired[treeIndex]){
		isLoggerHired[treeIndex] = true;
		continuousLogs(treeIndex);
	}
}

function continuousLogs(treeIndex){
	logDelay = ((Math.random() + loggerAbility[treeIndex]) * (loggerDelay[treeIndex] - (woodcuttingLevel * loggerWoodcutMul[treeIndex]))) + (loggerTime[treeIndex] - woodcuttingLevel);
	setTimeout(function(){
		totalLogs[treeIndex] = totalLogs[treeIndex] + (Math.ceil(Math.random() * Math.ceil(1 * (numLoggers[treeIndex] / 3))));
		update();
		setInterval(continuousLogs(treeIndex), 100);
	}, (logDelay - (numLoggers[treeIndex] * 270)));
}
function sellLog(treeIndex){
	if(totalLogs[treeIndex] > 0){
		totalLogs[treeIndex]-= 1;
		totalGold += logVals[treeIndex];
		update();
	}
}


//Mining
function getOre(oreIndex) {
	if(!moving) {
		if(soundPickaxe.paused){
				soundPickaxe.play();
		}
		var ids = getMineButtonIDs(oreIndex);
		document.getElementById(ids[0]).style.backgroundColor = 'red';
		document.getElementById(ids[0]).disabled = true;
		var oreDelay = ((Math.random() + mineRandOffset[oreIndex]) * (oreDelayOffset[oreIndex] - (miningLevel * 75))) + (oreDifficulty[oreIndex] - miningLevel);
		setTimeout(function(){
			totalOre[oreIndex] += 1;
			totalMiningExp += oreXP[oreIndex];
			update();
			document.getElementById(ids[0]).disabled = false;
			document.getElementById(ids[0]).style.backgroundColor = 'cyan';
			pausePickaxeSound();
		}, oreDelay);
	}
}

function sellOre(oreIndex){
	if(totalOre[oreIndex] > 0){
		totalOre[oreIndex]-= 1;
		totalGold += oreVals[oreIndex];
		update();
	}
}

function hireMiner(oreIndex){
	totalGold -= oreMinerCost[oreIndex];
	numOreMiners[oreIndex] += 1;
	oreMinerCost[oreIndex] = Math.floor(oreMinerCost[oreIndex] * 1.1) + minerCostIncrease[oreIndex];
	updatePrice();
	update();
	if(!isMinerHired[oreIndex]){
		isMinerHired[oreIndex] = true;
		continuousOre(oreIndex);
	}
} 

function continuousOre(oreIndex){
	oreDelay = ((Math.random() + minerAbility[oreIndex]) * (minerDelay[oreIndex] - (miningLevel * minerMul[oreIndex]))) + (minerTime[oreIndex] - miningLevel);
	setTimeout(function(){
		totalOre[oreIndex] = totalOre[oreIndex] + Math.ceil(1 * (numOreMiners[oreIndex] / 3));
		update();
		setInterval(continuousOre(oreIndex), 100);
	}, (oreDelay - (numOreMiners[oreIndex] * 260)));
}


//Fishing
function getShrimp(){
	if(!moving){
		document.getElementById("shrimpButton").style.backgroundColor = 'red';
		document.getElementById("shrimpButton").disabled = true;
		shrimpDelay = ((Math.random() + .15) * (8150 - (fishingLevel * 80))) + (650 - fishingLevel);
		setTimeout(function(){
			totalShrimp += 1;
			totalFishingExp += shrimp;
			update();
			document.getElementById("shrimpButton").disabled = false;
			document.getElementById("shrimpButton").style.backgroundColor = 'white';
		}, shrimpDelay);
	}
}

function getTrout(){
	if(!moving){
		document.getElementById("troutButton").style.backgroundColor = 'red';
		document.getElementById("troutButton").disabled = true;
		troutDelay = ((Math.random() + .2) * (9000 - (fishingLevel * 80))) + (750 - fishingLevel);
		setTimeout(function(){
			totalTrout += 1;
			totalFishingExp += trout;
			update();
			document.getElementById("troutButton").disabled = false;
			document.getElementById("troutButton").style.backgroundColor = 'white';
		}, troutDelay);
	}
}

function getSalmon(){
	if(!moving){
		document.getElementById("salmonButton").style.backgroundColor = 'red';
		document.getElementById("salmonButton").disabled = true;
		salmonDelay = ((Math.random() + .25) * (9600 - (fishingLevel * 80))) + (950 - fishingLevel);
		setTimeout(function(){
			totalSalmon += 1;
			totalFishingExp += salmon;
			update();
			document.getElementById("salmonButton").disabled = false;
			document.getElementById("salmonButton").style.backgroundColor = 'white';
		}, salmonDelay);
	}
}

function getTuna(){
	if(!moving){
		document.getElementById("tunaButton").style.backgroundColor = 'red';
		document.getElementById("tunaButton").disabled = true;
		tunaDelay = ((Math.random() + .25) * (11000 - (fishingLevel * 81))) + (1050 - fishingLevel);
		setTimeout(function(){
			totalTuna += 1;
			totalFishingExp += tuna;
			update();
			document.getElementById("tunaButton").disabled = false;
			document.getElementById("tunaButton").style.backgroundColor = 'white';
		}, tunaDelay);
	}
}

function getLobster(){
	if(!moving){
		document.getElementById("lobsterButton").style.backgroundColor = 'red';
		document.getElementById("lobsterButton").disabled = true;
		lobsterDelay = ((Math.random() + .3) * (11500 - (fishingLevel * 80))) + (1100 - fishingLevel);
		setTimeout(function(){
			totalLobster += 1;
			totalFishingExp += lobster;
			update();
			document.getElementById("lobsterButton").disabled = false;
			document.getElementById("lobsterButton").style.backgroundColor = 'white';
		}, lobsterDelay);
	}
}

function getSwordfish(){
	if(!moving){
		document.getElementById("swordfishButton").style.backgroundColor = 'red';
		document.getElementById("swordfishButton").disabled = true;
		swordfishDelay = ((Math.random() + .45) * (14000 - (fishingLevel * 78))) + (1200 - fishingLevel);
		setTimeout(function(){
			totalSwordfish += 1;
			totalFishingExp += swordfish;
			update();
			document.getElementById("swordfishButton").disabled = false;
			document.getElementById("swordfishButton").style.backgroundColor = 'white';
		}, swordfishDelay);
	}
}

function getShark(){
	if(!moving){
		document.getElementById("sharkButton").style.backgroundColor = 'red';
		document.getElementById("sharkButton").disabled = true;
		sharkDelay = ((Math.random() + .8) * (24000 - (fishingLevel * 30))) + (1350 - fishingLevel);
		setTimeout(function(){
			totalShark+= 1;
			totalFishingExp += shark;
			update();
			document.getElementById("sharkButton").disabled = false;
			document.getElementById("sharkButton").style.backgroundColor = 'white';
		}, sharkDelay);
	}
}

function sellShrimp(){
	if(totalShrimp > 0){
		totalShrimp -= 1;
		totalGold += shrimpVal;
		update();
	}
}

function sellTrout(){
	if(totalTrout > 0){
		totalTrout -= 1;
		totalGold += troutVal;
		update();
	}
}

function sellSalmon(){
	if(totalSalmon > 0){
		totalSalmon -= 1;
		totalGold += salmonVal;
		update();
	}
}

function sellTuna(){
	if(totalTuna > 0){
		totalTuna -= 1;
		totalGold += tunaVal;
		update();
	}
}

function sellLobster(){
	if(totalLobster > 0){
		totalLobster -= 1;
		totalGold += lobsterVal;
		update();
	}
}

function sellSwordfish(){
	if(totalSwordfish > 0){
		totalSwordfish -= 1;
		totalGold += swordfishVal;
		update();
	}
}

function sellShark(){
	if(totalShark > 0){
		totalShark -= 1;
		totalGold += sharkVal;
		update();
	}
}

function hireShrimpFisherman(){
	totalGold -= shrimpFishermanVal;
	numShrimpFisherman += 1;
	shrimpFishermanVal = Math.floor(shrimpFishermanVal * 1.10) + 100;
	updatePrice();
	update();
	if(!shrimpFishermanHired){	
		shrimpFishermanHired = true;
		continuousShrimp();
	}
}

function hireTroutFisherman(){
	totalGold -= troutFishermanVal;
	numTroutFisherman += 1;
	troutFishermanVal = Math.floor(troutFishermanVal * 1.10) + 200;
	updatePrice();
	update();
	if(!troutFishermanHired){	
		troutFishermanHired = true;
		continuousTrout();
	}
}

function hireSalmonFisherman(){
	totalGold -= salmonFishermanVal;
	numSalmonFisherman += 1;
	salmonFishermanVal = Math.floor(salmonFishermanVal * 1.10) + 500;
	updatePrice();
	update();
	if(!salmonFishermanHired){	
		salmonFishermanHired = true;
		continuousSalmon();
	}
}

function hireTunaFisherman(){
	totalGold -= tunaFishermanVal;
	numTunaFisherman += 1;
	tunaFishermanVal = Math.floor(tunaFishermanVal * 1.10) + 1000;
	updatePrice();
	update();
	if(!tunaFishermanHired){	
		tunaFishermanHired = true;
		continuousTuna();
	}
}

function hireLobsterFisherman(){
	totalGold -= lobsterFishermanVal;
	numLobsterFisherman += 1;
	lobsterFishermanVal = Math.floor(lobsterFishermanVal * 1.10) + 10000;
	updatePrice();
	update();
	if(!lobsterFishermanHired){	
		lobsterFishermanHired = true;
		continuousLobster();
	}
}

function hireSwordfishFisherman(){
	totalGold -= swordfishFishermanVal;
	numSwordfishFisherman += 1;
	swordfishFishermanVal = Math.floor(swordfishFishermanVal * 1.10) + 25000;
	updatePrice();
	update();
	if(!swordfishFishermanHired){	
		swordfishFishermanHired = true;
		continuousSwordfish();
	}
}

function hireSharkFisherman(){
	totalGold -= sharkFishermanVal;
	numSharkFisherman += 1;
	sharkFishermanVal = Math.floor(sharkFishermanVal * 1.10) + 100000;
	updatePrice();
	update();
	if(!sharkFishermanHired){	
		sharkFishermanHired = true;
		continuousShark();
	}
}

function continuousShrimp(){
	shrimpDelay = ((Math.random() + .95) * (12000 - (fishingLevel * 20))) + (725 - fishingLevel);
	setTimeout(function(){
		totalShrimp += Math.ceil(1 * (numShrimpFisherman/3));
		update();
		setInterval(continuousShrimp(), 100);
	}, (shrimpDelay - (numShrimpFisherman * 260)));
}

function continuousTrout(){
	troutDelay = ((Math.random() + .98) * (13000 - (fishingLevel * 18))) + (825 - fishingLevel);
	setTimeout(function(){
		totalTrout += Math.ceil(1 * (numTroutFisherman/3));
		update();
		setInterval(continuousTrout(), 100);
	}, (troutDelay - (numTroutFisherman * 260)));
}

function continuousSalmon(){
	salmonDelay = ((Math.random() + 1.0) * (13500 - (fishingLevel * 15))) + (925 - fishingLevel);
	setTimeout(function(){
		totalSalmon += Math.ceil(1 * (numSalmonFisherman/3));
		update();
		setInterval(continuousSalmon(), 100);
	}, (salmonDelay - (numSalmonFisherman * 260)));
}

function continuousTuna(){
	tunaDelay = ((Math.random() + 1.02) * (14500 - (fishingLevel * 12))) + (1025 - fishingLevel);
	setTimeout(function(){
		totalTuna += Math.ceil(1 * (numTunaFisherman/3));
		update();
		setInterval(continuousTuna(), 100);
	}, (tunaDelay - (numTunaFisherman * 260)));
}

function continuousLobster(){
	lobsterDelay = ((Math.random() + 1.08) * (16000 - (fishingLevel * 10))) + (1150 - fishingLevel);
	setTimeout(function(){
		totalLobster += Math.ceil(1 * (numLobsterFisherman/3));
		update();
		setInterval(continuousLobster(), 100);
	}, (lobsterDelay - (numLobsterFisherman * 260)));
}

function continuousSwordfish(){
	swordfishDelay = ((Math.random() + 1.1) * (18000 - (fishingLevel * 8))) + (1200 - fishingLevel);
	setTimeout(function(){
		totalSwordfish += Math.ceil(1 * (numSwordfishFisherman/3));
		update();
		setInterval(continuousSwordfish(), 100);
	}, (swordfishDelay - (numSwordfishFisherman * 260)));
}

function continuousShark(){
	sharkDelay = ((Math.random() + 1.4) * (22000 - (fishingLevel * 4))) + (2250 - fishingLevel);
	setTimeout(function(){
		totalShark += Math.ceil(1 * (numSharkFisherman/3));
		update();
		setInterval(continuousShark(), 100);
	}, (sharkDelay - (numSharkFisherman * 260)));
}

function disableEnemyButtons(){
	document.getElementById("goblinButton").disabled = true;
	document.getElementById("skeletonButton").disabled = true;
	document.getElementById("giantButton").disabled = true;
	document.getElementById("ghostButton").disabled = true;
	document.getElementById("demonButton").disabled = true;
	document.getElementById("hellhoundButton").disabled = true;
	document.getElementById("dragonButton").disabled = true;
}

function enableEnemyButtons(){
	document.getElementById("goblinButton").disabled = false;
	document.getElementById("skeletonButton").disabled = false;
	document.getElementById("giantButton").disabled = false;
	document.getElementById("ghostButton").disabled = false;
	document.getElementById("demonButton").disabled = false;
	document.getElementById("hellhoundButton").disabled = false;
	document.getElementById("dragonButton").disabled = false;
}

function disableCombatButtons(){
	document.getElementById("attackButton").disabled = true;
	document.getElementById("strengthButton").disabled = true;
	document.getElementById("defenseButton").disabled = true;
	document.getElementById("magicButton").disabled = true;
	document.getElementById("itemButton").disabled = true;
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "black";
}

function enableCombatButtons(){
	document.getElementById("strengthButton").disabled = false;
	document.getElementById("defenseButton").disabled = false;
	document.getElementById("attackButton").disabled = false;
	document.getElementById("magicAttackButton").disabled = false;
	document.getElementById("itemButton").disabled = false;
	document.getElementById("ocean").disabled = false;
	document.getElementById("mines").disabled = false;
	document.getElementById("forest").disabled = false;
}

function darkMageEncounter(){
	if(done){
		darkMageLoot();
		canvas.style.display = "none";
		document.getElementById("Bosses").style.display = "block";
		document.getElementById("bottom").style.display = "block";
		enemyHp = 1;
		done = false;
		clearInterval(darkMageInterval);
	}
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
	for(var i = 0; i < 5; i++){
		if(!wizardBalls[i]){
			wizardBallsX[i] = Math.random() * canvas.width;
			wizardBallsY[i] = Math.random() * canvas.height;
			wizardBalls[i] = true;
		}
		else{
			wizardBallsX[i] += wizardOrbX[i];
			wizardBallsY[i] += wizardOrbY[i];
		}
		if(wizardBallsX[i] <= 0 || wizardBallsX[i] >= canvas.width) wizardOrbX[i] *= -1;
		if(wizardBallsY[i] <= 0 || wizardBallsY[i] >= canvas.height) wizardOrbY[i] *= -1;
		canvasContext.fillStyle = 'red';
		canvasContext.beginPath();
		canvasContext.arc(wizardBallsX[i], wizardBallsY[i], 10, 0, Math.PI*2, true);
		canvasContext.fill();
		canvasContext.fillStyle = 'white';
		canvasContext.fillRect(shieldX, canvas.height/2, shieldWidth, shieldThickness);
		
		//if we hit the shield
		var shieldTop = canvas.height/2;
		var shieldBottom = shieldTop + shieldThickness;
		var shieldLeft = shieldX;
		var shieldRight = shieldLeft + shieldWidth;
		
		if( wizardBallsY[i] > shieldTop && 
			wizardBallsY[i] < shieldBottom && 
			wizardBallsX[i] > shieldLeft && 
			wizardBallsX[i] < shieldRight ){
		
			wizardBalls[i] = false;
			wizardOrbX[i] = 6;
			wizardOrbY[i] = 6;
			enemyHp--;
		}
		
	}
	
	if(enemyHp <= 0) done = true;
}


//Combat
function fightGoblin(){
	document.getElementById("goblinButton").style.backgroundColor = "green";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "black";
	document.getElementById("combatText").innerHTML = "You encounter a Goblin";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 5";
	enableCombatButtons();
	disableEnemyButtons();
	getEnemy();
}

function fightSkeleton(){
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "green";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "black";
	document.getElementById("combatText").innerHTML = "You encounter a Skeleton";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 15";
	enableCombatButtons();
	disableEnemyButtons();
	getEnemy();
}

function fightGiant(){
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "green";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "black";
	document.getElementById("combatText").innerHTML = "You encounter a Giant";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 25";
	enableCombatButtons();
	disableEnemyButtons();
	getEnemy();
}

function fightGhost(){
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "green";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "black";
	document.getElementById("combatText").innerHTML = "You encounter a Ghost";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 30";
	enableCombatButtons();
	disableEnemyButtons();
	getEnemy();
}

function fightDemon(){
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "green";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "black";
	document.getElementById("combatText").innerHTML = "You encounter a Demon";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 50";
	enableCombatButtons();
	disableEnemyButtons();
	getEnemy();
}

function fightHellhound(){
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "green";
	document.getElementById("dragonButton").style.backgroundColor = "black";
	document.getElementById("combatText").innerHTML = "You encounter a Hellhound";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 80";
	enableCombatButtons();
	disableEnemyButtons();
	getEnemy();
}

function fightDragon(){
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "green";
	document.getElementById("combatText").innerHTML = "You encounter a Dragon";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 120";
	disableEnemyButtons();
	getEnemy();
}

function fightDarkMage(){
	enemyHp = 5;
	document.getElementById("Bosses").style.display = "none";
	document.getElementById("bottom").style.display = "none";
	var framesPerSecond = 30;
	canvas.style.display = "block";
	darkMageInterval = setInterval(darkMageEncounter, 1000/framesPerSecond);
}

function darkMageLoot(){
	roll = (Math.random() * 100);
		if(roll < 2){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 2 && roll < 10){
			totalGold += 2500;
			document.getElementById("combatText").innerHTML = "You loot 2500 gold pieces";
		}
		else if(roll >= 10 && roll < 12){
			zenyteAmulet += 1;
			document.getElementById("combatText").innerHTML = "You loot a zenyte amulet";
		}
		else if(roll >= 12 && roll < 20){
			dragonstone += 1;
			document.getElementById("combatText").innerHTML = "You loot a dragonstone";
		}
		else if(roll >= 20 && roll < 30){
			diamond += 1;
			document.getElementById("combatText").innerHTML = "You loot a diamond";
		}
		else if(roll >= 30 && roll < 45){
			ruby += 1;
			document.getElementById("combatText").innerHTML = "You loot a ruby";
		}
		else if(roll >= 45 && roll < 70){
			emerald += 1;
			document.getElementById("combatText").innerHTML = "You loot an emerald";
		}
		else{
			sapphire += 1;
			document.getElementById("combatText").innerHTML = "You loot a sapphire";
		}
	update();
}

function goblinLoot(){
	if(enemyHp <= 0){
		roll = (Math.random() * 75);
		if(roll < 25){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 25 && roll < 50){
			totalGold += 25;
			document.getElementById("combatText").innerHTML = "You loot 25 gold pieces";
		}
		else if(roll >= 50 && roll < 60){
			woodenAxe += 1;
			document.getElementById("combatText").innerHTML = "You loot a wooden axe";
		}
		else if(roll >= 60 && roll < 70){
			woodenPickaxe += 1;
			document.getElementById("combatText").innerHTML = "You loot a wooden pickaxe";
		}
		else if(roll >= 70 && roll <= 75){
			woodenSword += 1;
			document.getElementById("combatText").innerHTML = "You loot a wooden sword";
		}
	}
	update();
}

function skeletonLoot(){
	if(enemyHp <= 0){
		roll = (Math.random() * 80);
		if(roll < 30){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 30 && roll < 60){
			totalGold += 35;
			document.getElementById("combatText").innerHTML = "You loot 35 gold pieces";
		}
		else if(roll >= 60 && roll < 70){
			woodenPlatelegs += 1;
			document.getElementById("combatText").innerHTML = "You loot wooden platelegs";
		}
		else if(roll >= 70 && roll < 80){
			woodenPlatebody += 1;
			document.getElementById("combatText").innerHTML = "You loot a wooden platebody";
		}
	}
	update();
}

function giantLoot(){
	if(enemyHp <= 0){
		roll = (Math.random() * 81);
		if(roll < 10){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 10 && roll < 50){
			totalGold += 50;
			document.getElementById("combatText").innerHTML = "You loot 50 gold pieces";
		}
		else if(roll >= 50 && roll < 60){
			ironSword += 1;
			document.getElementById("combatText").innerHTML = "You loot an iron sword";
		}
		else if(roll >= 60 && roll < 70){
			ironHarpoon += 1;
			document.getElementById("combatText").innerHTML = "You loot an iron harpoon";
		}
		else if(roll >= 70 && roll < 80){
			ironHelmet += 1;
			document.getElementById("combatText").innerHTML = "You loot an iron helmet";
		}
		else if(roll > 80 && roll < 81){
			sapphire += 1;
			document.getElementById("combatText").innerHTML = "You loot a sapphire";
		}
	}
	update();
}

function ghostLoot(){
	if(enemyHp <= 0){
		roll = (Math.random() * 71);
		if(roll < 40){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 40 && roll < 60){
			totalGold += 70;
			document.getElementById("combatText").innerHTML = "You loot 70 gold pieces";
		}
		else if(roll >= 60 && roll < 65){
			steelPickaxe += 1;
			document.getElementById("combatText").innerHTML = "You loot a steel pickaxe";
		}
		else if(roll >= 65 && roll < 70){
			steelAxe += 1;
			document.getElementById("combatText").innerHTML = "You loot a steel axe";
		}
		else if(roll >= 70 && roll < 71){
			emerald += 1;
			document.getElementById("combatText").innerHTML = "You loot an emerald";
		}
	}
	update();
}

function demonLoot(){
	if(enemyHp <= 0){
		roll = (Math.random() * 251);
		if(roll < 20){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 20 && roll < 50){
			totalGold += 150;
			document.getElementById("combatText").innerHTML = "You loot 150 gold pieces";
		}
		else if(roll >= 60 && roll < 70){
			ruby += 1;
			document.getElementById("combatText").innerHTML = "You loot a ruby";
		}
		else if(roll >= 70 && roll < 80){
			totalLogs[5] += 1;
			document.getElementById("combatText").innerHTML = "You loot a magic log";
		}
		else if(roll >= 80 && roll < 100){
			totalMithril += 1;
			document.getElementById("combatText").innerHTML = "You loot a mithril ore";
		}
		else if(roll >= 100 && roll < 110){
			totalLogs[4] += 3;
			document.getElementById("combatText").innerHTML = "You loot 3 yew logs";
		}
		else if(roll >= 110 && roll < 130){
			totalCoal += 10;
			document.getElementById("combatText").innerHTML = "You loot 10 coal";
		}
		else if(roll >= 130 && roll < 140){
			sapphireAmulet += 1;
			document.getElementById("combatText").innerHTML = "You loot a sapphire amulet";
		}
		else if(roll >= 140 && roll < 145){
			runeOre += 1;
			document.getElementById("combatText").innerHTML = "You loot a rune ore";
		}
		else if(roll >= 145 && roll < 150){
			diamond += 1;
			document.getElementById("combatText").innerHTML = "You loot a diamond";
		}
		else if(roll >= 150 && roll < 200){
			totalLogs[1] += 15;
			document.getElementById("combatText").innerHTML = "You loot 15 oak logs";
		}
		else if(roll >= 200 && roll < 220){
			totalLobster += 1;
			document.getElementById("combatText").innerHTML = "You loot a lobster";
		}
		else if(roll >= 220 && roll < 221){
			demonicRing += 1;
			document.getElementById("combatText").innerHTML = "You loot a demonic ring";
		}
	}
	update();
}

function hellhoundLoot(){
	if(enemyHp <= 0){
		roll = Math.random() * 256;
		if(roll < 256){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
	}
	update();
}

function dragonLoot(){
	if(enemyHp <= 0){
		roll = Math.random() * 256
		if(roll < 20){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 20 && roll < 255){
			totalGold += 1500;
			document.getElementById("combatText").innerHTML = "You loot 1500 gold";
		}
		else if(roll >= 255 && roll < 256){
			draconicVisage += 1;
			document.getElementById("combatText").innerHTML = "You loot a draconic visage";
		}
	}
	update();
}

function setAttack(){
	attackStyle = 0;
}

function setStrength(){
	attackStyle = 1;
}

function setDefense(){
	attackStyle = 2;
}

function attackEnemy(){
	if(enemy == 0){
		if(Math.random() * accuracy >= .15){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Goblin for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.floor((Math.random() * 2) - (defensePower * .065 + defenseLevel * .15));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Goblin hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Goblin missed";
		}
		goblinLoot();
	}
	else if(enemy == 1){
		if(Math.random() * accuracy >= .2){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Skeleton for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.floor((Math.random() * 9) - (defensePower * .055 + defenseLevel * .09));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Skeleton hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Skeleton missed";
		}
		skeletonLoot();
	}
	else if(enemy == 2){
		if(Math.random() * accuracy >= 8){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Giant for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.floor((Math.random() * 14) - (defensePower * .05 + defenseLevel * .09));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Giant hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Giant missed";
		}
		giantLoot();
	}
	else if(enemy == 3){
		if(Math.random() * accuracy >= 15){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Ghost for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.floor((Math.random() * 18) - (defensePower * .045 + defenseLevel * .09));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Ghost hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Ghost missed";
		}
		ghostLoot();
	}
	else if(enemy == 4){
		if(Math.random() * accuracy >= 24){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Demon for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.ceil((Math.random() * 22) - (defensePower * .04 + defenseLevel * .085));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Demon hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Demon missed";
		}
		demonLoot();
	}
	else if(enemy == 5){
		if(Math.random() * accuracy >= 30){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Hellhound for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.ceil((Math.random() * 25) - (defensePower * .04 + defenseLevel * .085));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Hellhound hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Hellhound missed";
		}
		hellhoundLoot();
	}
	else if(enemy == 6){
		if(Math.random() * accuracy >= 35){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Dragon for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.ceil((Math.random() * 35) - (defensePower * .035 + defenseLevel * .08));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Dragon hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Dragon missed";
		}
		dragonLoot();
	}
	
	if(enemy < 7){
		if(attackStyle == 0){
			totalAttackExp += fightExp;
			remainingAttackLevelExp -= fightExp;
		}
		else if(attackStyle == 1){
			totalStrengthExp += fightExp;
			remainingStrengthLevelExp -= fightExp;
		}
		else if(attackStyle == 2){
			totalDefenseExp += fightExp;
			remainingDefenseLevelExp -= fightExp;
		}
		
		totalHpExp += Math.floor(fightExp / 3);
		remainingHpLevelExp -= Math.floor(fightExp / 3);
	}
	
	if(health <= 0){
		health = hpLevel;
		enemyHp = "No enemy";
		update();
		document.getElementById("death").style.display = "block";
		getLoss();
		document.body.style.backgroundColor = "black";
		setTimeout(travelForest, 20000);
		document.getElementById("Combat").style.display = "none";
		document.getElementById("bottom").style.display = "none";
		document.getElementById("enemyText").innerHTML = "\xa0"
		disableCombatButtons();
		enableEnemyButtons();
		document.getElementById("combatText").innerHTML = "You died...";
		enemy = 7;
	}
	
	if(enemyHp <= 0){
		enemy = 7;
		enemyHp = "dead";
		document.getElementById("enemyText").innerHTML = "You killed an enemy!";
		disableCombatButtons();
		enableEnemyButtons();
	}
	
	update();
}

function getLoss(){
	document.getElementById("loss").innerHTML = "You lost: " + totalLogs[0] + " Logs<br>" + "You lost: " +  totalLogs[1] + " Oak Logs<br>" + "You lost: " +  totalLogs[2] + " Willow Logs<br>" + "You lost: " +  totalLogs[3] + " Maple Logs<br>" + "You lost: " +  totalLogs[4] + " Yew Logs<br>" + "You lost: " + totalLogs[5] + " Magic Logs<br>" + "You lost: " + totalOre[0] + " Copper Ores<br>" + "You lost: " + totalOre[1] + " Tin Ores<br>" + "You lost: " + totalOre[2] + " Iron Ores<br>" + "You lost: " + totalOre[3] + " Coal<br>" + "You lost: " + totalOre[4] + " Mithril Ores<br>" + "You lost: " + totalOre[5] + " Adamantite Ores<br>" + "You lost: " + totalOre[6] + " Runite Ores<br>" + "You lost: " + totalShrimp + " Shrimp<br>" + "You lost: " + totalTrout + " Trout<br>" + "You lost: " + totalSalmon + " Salmon<br>" + "You lost: " + totalTuna + " Tuna<br>" + "You lost: " + totalLobster + " Lobsters<br>" + "You lost: " + totalSwordfish + " Swordfish<br>" + "You lost: " + totalShark + " Sharks<br>" + "You lost: All your equipment";
	
	for (var i = 0; i > totalOre.length; i++) {
		totalOre[i] = 0;
		if(i < 7) {
			totalLogs[i] = 0;
		}
	}
	
	totalShrimp = 0;
	totalTrout = 0;
	totalSalmon = 0;
	totalTuna = 0;
	totalLobster = 0;
	totalSwordfish = 0;
	totalShark = 0;
	
	stick = 1;
	woodenAxe = 0;
	bronzeAxe = 0;
	ironAxe = 0;
	steelAxe = 0;
	mithrilAxe = 0;
	adamantAxe = 0;
	runeAxe = 0;

	woodenPickaxe = 0;
	bronzePickaxe = 0;
	ironPickaxe = 0;
	steelPickaxe = 0;
	mithrilPickaxe = 0;
	adamantPickaxe = 0;
	runePickaxe = 0;

	woodenSword = 0;
	bronzeSword = 0;
	ironSword = 0;
	steelSword = 0;
	mithrilSword = 0;
	adamantSword = 0;
	runeSword = 0;

	woodenHelmet = 0;
	bronzeHelmet = 0;
	ironHelmet = 0;
	steelHelmet = 0;
	mithrilHelmet = 0;
	adamantHelmet = 0;
	runeHelmet = 0;

	woodenChestplate = 0;
	bronzeChestplate = 0;
	ironChestplate = 0;
	steelChestplate = 0;
	mithrilChestplate = 0;
	adamantChestplate = 0;
	runeChestplate = 0;

	woodenPlatelegs = 0;
	bronzePlatelegs = 0;
	ironPlatelegs = 0;
	steelPlatelegs = 0;
	mithrilPlatelegs = 0;
	adamantPlatelegs = 0;
	runePlatelegs = 0;

	sapphireAmulet = 0;
	emeraldAmulet = 0;
	rubyAmulet = 0;
	diamondAmulet = 0;
	dragonstoneAmulet = 0;
	onyxAmulet = 0;
	zenyteAmulet = 0;

	woodenHarpoon = 0;
	bronzeHarpoon = 0;
	ironHarpoon = 0;
	steelHarpoon = 0;
	mithrilHarpoon = 0;
	adamantHarpoon = 0;
	runeHarpoon = 0;
	
	draconicVisage = 0;
	demonicRing = 0;
	
	update();
}

function getEnemy(){
	if(document.getElementById("goblinButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Goblin!";
		enemyHp = 5;
		enemy = 0;
	}
	else if(document.getElementById("skeletonButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Skeleton!";
		enemyHp = 15;
		enemy = 1;
	}
	else if(document.getElementById("giantButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Giant!";
		enemyHp = 25;
		enemy = 2;
	}
	else if(document.getElementById("ghostButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Ghost!";
		enemyHp = 30;
		enemy = 3;
	}
	else if(document.getElementById("demonButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Demon!";
		enemyHp = 50;
		enemy = 4;
	}
	else if(document.getElementById("hellhoundButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Hellhound!";
		enemyHp = 80;
		enemy = 5;
	}
	else if(document.getElementById("dragonButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Dragon!";
		enemyHp = 120;
		enemy = 6;
	}
	
	update();
}


//Crafting
function smithAxe(obj){
	disableAxeButtons();
	if(obj.id == "BronzeAxe"){
		if(totalLogs[0] >= 1 && totalBars[0] >= 1 && totalGold >= 25) {
			bronzeAxe += 1;
			totalLogs[0] -= 1;
			totalBars[0] -= 1;
			totalGold -= 25;
			totalSmithingExp += 12;
			document.getElementById("AxeText").innerHTML = "You successfully smithed a Bronze Axe";
		}
		else{
			document.getElementById("AxeText").innerHTML = "You need 1 log, 1 bronze bar, and 25 gold to smith the Bronze Axe";
		}
	}
	else if(obj.id == "IronAxe"){
		if(totalLogs[1] >= 1 && totalBars[1] >= 1 && totalGold >= 100){
			ironAxe += 1;
			totalLogs[1] -= 1;
			totalBars[2] -= 1;
			totalGold -= 100;
			totalSmithingExp += 25;
			document.getElementById("AxeText").innerHTML = "You successfully smithed a Bronze Axe";
		}
		else{
			document.getElementById("AxeText").innerHTML = "You need 1 oak log, 1 iron bar, and 100 gold to smith the Iron Axe";
		}
	}
	else if(obj.id == "SteelAxe"){
		if(totalLogs[2] >= 1 && totalBars[2] >= 1 && totalGold >= 250) steelAxe += 1;
		else{
			document.getElementById("AxeText").innerHTML = "You need 1 willow log, 1 steel bar, and 250 gold to smith the Steel Axe";
		}
	}
	else if(obj.id == "MithrilAxe"){
		if(totalLogs[3] >= 1 && totalBars[3] >= 1 && totalGold >= 1000) mithrilAxe += 1;
		else{
			document.getElementById("AxeText").innerHTML = "You need 1 maple log, 1 mithril bar, and 1000 gold to smith the Mithril Axe";
		}
	}
	else if(obj.id == "AdamantAxe"){
		if(totalLogs[4] >= 1 && totalBars[4] >= 1 && totalGold >= 2500) adamantAxe += 1;
		else{
			document.getElementById("AxeText").innerHTML = "You need 1 yew log, 1 adamant bar, and 2500 gold to smith the Adamant Axe";
		}
	}
	else if(obj.id == "RuneAxe"){
		if(totalLogs[5] >= 1 && totalBars[5] >= 1 && totalGold >= 35000) runeAxe += 1;
		else{
			document.getElementById("AxeText").innerHTML = "You need 1 magic log, 1 rune bar, and 35000 gold to smith the Rune Axe";
		}
	}
	setTimeout(function(){CraftText("AxeText")}, 5000);
}

function smithPickaxe(obj){
	disablePickaxeButtons();
	//TODO If statements
	if(obj.id == "BronzePickaxe"){
		if(totalLogs[0] >= 1 && totalBars[0] >= 2 && totalGold >= 15) bronzePickaxe += 1;
		else{
			document.getElementById("PickaxeText").innerHTML = "You need 1 log, 2 bronze bars, and 15 gold to smith the Bronze Pickaxe";
			setTimeout(function(){CraftText("PickaxeText")}, 5000);
		}
	}
	else if(obj.id == "IronPickaxe"){
		if(totalLogs[1] >= 1 && totalBars[1] >= 2 && totalGold >= 75) ironPickaxe += 1;
		else{
			document.getElementById("PickaxeText").innerHTML = "You need 1 oak log, 2 iron bars, and 75 gold to smith the Iron Pickaxe";
			setTimeout(function(){CraftText("PickaxeText")}, 5000);
		}
	}
	else if(obj.id == "SteelPickaxe"){
		if(totalLogs[2] >= 1 && totalBars[2] >= 2 && totalGold >= 150) steelPickaxe += 1;
		else{
			document.getElementById("PickaxeText").innerHTML = "You need 1 willow log, 2 steel bars, and 150 gold to smith the Steel Pickaxe";
			setTimeout(function(){CraftText("PickaxeText")}, 5000);
		}
	}
	else if(obj.id == "MithrilPickaxe"){
		if(totalLogs[3] >= 1 && totalBars[3] >= 2 && totalGold >= 750) mithrilPickaxe += 1;
		else{
			document.getElementById("PickaxeText").innerHTML = "You need 1 maple log, 2 mithril bars, and 750 gold to smith the Mithril Pickaxe";
			setTimeout(function(){CraftText("PickaxeText")}, 5000);
		}
	}
	else if(obj.id == "AdamantPickaxe"){
		if(totalLogs[4] >= 1 && totalBars[4] >= 2 && totalGold >= 1500) adamantPickaxe += 1;
		else{
			document.getElementById("PickaxeText").innerHTML = "You need 1 yew log, 2 adamant bars, and 1500 gold to smith the Adamant Pickaxe";
			setTimeout(function(){CraftText("PickaxeText")}, 5000);
		}
	}
	else if(obj.id == "RunePickaxe"){
		if(totalLogs[5] >= 1 && totalBars[5] >= 2 && totalGold >= 32000) runePickaxe += 1;
		else{
			document.getElementById("PickaxeText").innerHTML = "You need 1 magic log, 2 rune bars, and 32000 gold to smith the Rune Pickaxe";
			setTimeout(function(){CraftText("PickaxeText")}, 5000);
		}
	}
}

function craftFishingRod(obj){
	disableFishingRodButtons();
	
}

function craftSword(obj){
	disableSwordButtons();
	
}

function craftScimitar(obj){
	
	disableScimitarButtons();
}

function craftTwoHanded(obj){
	
	disableTwoHandedButtons();
}

function craftHelmet(obj){
	
	disableHelmetButtons();
}

function craftPlatebody(obj){
	
	disablePlatebodyButtons();
}

function craftPlateleg(obj){
	
	disablePlatelegButtons();
}

function craftSapphireJewlery(obj){
	
	disableSapphireJewleryButtons();
}

function craftEmeraldJewlery(obj){
	
	disableEmeraldJewleryButtons();
}

function craftRubyJewlery(obj){
	
	disableRubyJewleryButtons();
}

function craftDiamondJewlery(obj){
	
	disableDiamondJewleryButtons();
}

function craftDragonstoneJewlery(obj){
	
	disableDragonstoneJewleryButtons();
}

function craftOnyxJewlery(obj){
	
	disableOnyxJewleryButtons();
}

function craftZenyteJewlery(obj){
	
	disableZenyteJewleryButtons();
}

function disableAxeButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Axe";
		console.log(val);
		document.getElementById(val).disabled = true;
	}
}

function enableAxeButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Axe";
		document.getElementById(val).disabled = false;
	}
}

function disablePickaxeButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Pickaxe";
		document.getElementById(val).disabled = true;
	}
}

function enablePickaxeButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Pickaxe";
		document.getElementById(val).disabled = false;
	}
}

function disableFishingRodButtons(){
	document.getElementById("Net").disabled = true;
	document.getElementById("FishingRod").disabled = true;
	document.getElementById("FlyFishingRod").disabled = true;
	document.getElementById("BigNet").disabled = true;
	document.getElementById("LobsterPot").disabled = true;
	document.getElementById("Harpoon").disabled = true;
}

function enableFishingRodButtons(){
	document.getElementById("Net").disabled = false;
	document.getElementById("FishingRod").disabled = false;
	document.getElementById("FlyFishingRod").disabled = false;
	document.getElementById("BigNet").disabled = false;
	document.getElementById("LobsterPot").disabled = false;
	document.getElementById("Harpoon").disabled = false;
}

function disableSwordButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Sword";
		document.getElementById(val).disabled = true;
	}
}

function enableSwordButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Sword";
		document.getElementById(val).disabled = false;
	}
}

function disableScimitarButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Scimitar";
		document.getElementById(val).disabled = true;
	}
}

function enableScimitarButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Scimitar";
		document.getElementById(val).disabled = false;
	}
}

function disableTwoHandedButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "TwoHanded";
		document.getElementById(val).disabled = true;
	}
}

function enableTwoHandedButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "TwoHanded";
		document.getElementById(val).disabled = false;
	}
}

function disableHelmetButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Helmet";
		document.getElementById(val).disabled = true;
	}
}

function enableHelmetButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Helmet";
		document.getElementById(val).disabled = false;
	}
}

function disablePlatebodyButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Platebody";
		document.getElementById(val).disabled = true;
	}
}

function enablePlatebodyButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Platebody";
		document.getElementById(val).disabled = false;
	}
}

function disablePlatelegButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Plateleg";
		document.getElementById(val).disabled = true;
	}
}

function enablePlatelegButtons(){
	for(var i = 0; i < tier.length; i++) {
		val = tier[i];
		val += "Plateleg";
		document.getElementById(val).disabled = false;
	}
}

function disableSapphireJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[0];
		val += trinkets[i];
		document.getElementById(val).disabled = true;
	}
}

function enableSapphireJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[0];
		val += trinkets[i];
		document.getElementById(val).disabled = false;
	}
}

function disableEmeraldJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[1];
		val += trinkets[i];
		document.getElementById(val).disabled = true;
	}
}

function enableEmeraldJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[1];
		val += trinkets[i];
		document.getElementById(val).disabled = false;
	}
}

function disableRubyJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[2];
		val += trinkets[i];
		document.getElementById(val).disabled = true;
	}
}

function enableRubyJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[2];
		val += trinkets[i];
		document.getElementById(val).disabled = false;
	}
}

function disableDiamondJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[3];
		val += trinkets[i];
		document.getElementById(val).disabled = true;
	}
}

function enableDiamondJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[3];
		val += trinkets[i];
		document.getElementById(val).disabled = false;
	}
}

function disableDragonstoneJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[4];
		val += trinkets[i];
		document.getElementById(val).disabled = true;
	}
}

function enableDragonstoneJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[4];
		val += trinkets[i];
		document.getElementById(val).disabled = false;
	}
}

function disableOnyxJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[5];
		val += trinkets[i];
		document.getElementById(val).disabled = true;
	}
}

function enableOnyxJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[5];
		val += trinkets[i];
		document.getElementById(val).disabled = false;
	}
}

function disableZenyteJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[6];
		val += trinkets[i];
		document.getElementById(val).disabled = true;
	}
}

function enableZenyteJewleryButtons(){
	for(var i = 0; i < trinkets.length; i++) {
		val = jewlery[6];
		val += trinkets[i];
		document.getElementById(val).disabled = false;
	}
}

function CraftText(id){
	document.getElementById(id).innerHTML = "";
	if(id == "AxeText") enableAxeButtons();
	else if(id == "PickaxeText") enablePickaxeButtons();
	else if(id == "FishingRodText") enableFishingRodButtons();
	else if(id == "SwordText") enableSwordButtons();
	else if(id == "ScimitarText") enableScimitarButtons();
	else if(id == "TwoHandedText") enableTwoHandedButtons();
	else if(id == "HelmetText") enableHelmetButtons();
	else if(id == "PlatebodyText") enablePlatebodyButtons();
	else if(id == "PlatelegText") enablePlatelegButtons();
	else if(id == "SapphireJewleryText") enableSapphireJewleryButtons();
	else if(id == "EmeraldJewleryText") enableEmeraldJewleryButtons();	
	else if(id == "RubyJewleryText") enableRubyJewleryButtons();
	else if(id == "DiamondJewleryText") enableDiamondJewleryButtons();
	else if(id == "DragonstoneJewleryText") enableDragonstoneJewleryButtons();
	else if(id == "OnyxJewleryText") enableOnyxJewleryButtons();
	else if(id == "ZenyteJewleryText") enableZenyteJewleryButtons();
}

//Smithing

function getBar(id){
	if(!moving){
		var ids = getFurnaceButtonIDs(id);
		document.getElementById(ids[0]).style.backgroundColor = 'red';
		document.getElementById(ids[0]).disabled = true;
		var smeltDelay = ((Math.random() + mineRandOffset[id]) * (oreDelayOffset[id] - (smithingLevel * 75))) + (oreDifficulty[id] - miningLevel);
		if(id == 0){
			if(totalOre[0] >= 1 && totalOre[1] >= 1){
				setTimeout(function(){
					document.getElementById(ids[0]).disabled = false;
					document.getElementById(ids[0]).style.backgroundColor = 'grey';
					totalBars[0] += 1;
					totalOre[0] -= 1;
					totalOre[1] -= 1;
					totalSmithingExp += 6;
					update();
				}, smeltDelay);
			}
			else{
				document.getElementById(ids[0]).disabled = false;
				document.getElementById(ids[0]).style.backgroundColor = 'grey';
			}
		}
		else if(id == 1){
			if(totalOre[2] >= 1){
				setTimeout(function(){
					totalBars[1] += 1;
					totalOre[2] -= 1;
					totalSmithingExp += 12;
					update();
				}, smeltDelay);
			}
			else{
				document.getElementById(ids[0]).disabled = false;
				document.getElementById(ids[0]).style.backgroundColor = 'grey';
			}
		}
		else if(id == 2){
			if(totalOre[2] >= 1 && totalOre[3] >= 2){
				setTimeout(function(){
					totalBars[2] += 1;
					totalOre[2] -= 1;
					totalOre[3] -= 2;
					totalSmithingExp += 25;
					update();
				}, smeltDelay);
			}
			else{
				document.getElementById(ids[0]).disabled = false;
				document.getElementById(ids[0]).style.backgroundColor = 'grey';
			}
		}
		else if(id == 3){
			if(totalOre[3] >= 4 && totalOre[4] >= 1){
				setTimeout(function(){
					totalBars[3] += 1;
					totalOre[3] -= 4;
					totalOre[4] -= 1;
					totalSmithingExp += 37;
					update();
				}, smeltDelay);
			}
			else{
				document.getElementById(ids[0]).disabled = false;
				document.getElementById(ids[0]).style.backgroundColor = 'grey';
			}
		}
		else if(id == 4){
			if(totalOre[3] >= 6 && totalOre[5] >= 1){
				setTimeout(function(){
					totalBars[3] += 1;
					totalOre[3] -= 6;
					totalOre[5] -= 1;
					totalSmithingExp += 50;
					update();
				}, smeltDelay);
			}
			else{
				document.getElementById(ids[0]).disabled = false;
				document.getElementById(ids[0]).style.backgroundColor = 'grey';
			}
		}
		else if(id == 5){
			if(totalOre[3] >= 8 && totalOre[6] >= 1){
				setTimeout(function(){
					totalBars[3] += 1;
					totalOre[3] -= 8;
					totalOre[6] -= 1;
					totalSmithingExp += 85;
					update();
				}, smeltDelay);
			}
			else{
				document.getElementById(ids[0]).disabled = false;
				document.getElementById(ids[0]).style.backgroundColor = 'grey';
			}
		}
	}
}

function sellBar(id){
	if(totalBars[id] > 0){
		totalBars[id]-= 1;
		totalGold += barVals[id];
		update();
	}
}
//TODO
function save(){
	document.cookie = "totalGoldC=" + totalGold;
	document.cookie = "woodcuttingLevelC=" + woodcuttingLevel;
	document.cookie = "miningLevelC=" + miningLevel;
	document.cookie = "fishingLevelC=" + fishingLevel;
	document.cookie = "attackLevelC=" + attackLevel;
	document.cookie = "strengthLevelC=" + strengthLevel;
	document.cookie = "hpLevelC=" + hpLevel;
	document.cookie = "defenseLevelC=" + defenseLevel;
	document.cookie = "magicLevelC=" + magicLevel;
	document.cookie = "craftingLevelC=" + craftingLevel;
	document.cookie = "remainingWoodcutLevelExpC=" + remainingWoodcutLevelExp;
	document.cookie = "remainingMiningLevelExpC=" + remainingMiningLevelExp;
	document.cookie = "remainingFishingLevelExpC=" + remainingFishingLevelExp;
	document.cookie = "remainingAttackLevelExpC=" + remainingAttackLevelExp;
	document.cookie = "remainingStrengthLevelExpC=" + remainingStrengthLevelExp;
	document.cookie = "remainingDefenseLevelExpC=" + remainingDefenseLevelExp;
	document.cookie = "remainingHpLevelExpC=" + remainingHpLevelExp;
	document.cookie = "remainingMagicLevelExpC=" + remainingMagicLevelExp;
	document.cookie = "remainingCraftingLevelExpC=" + remainingCraftingLevelExp;
	document.cookie = "nextWoodcuttingLevelC=" + nextWoodcuttingLevel; 
	document.cookie = "nextMiningLevelC=" + nextMiningLevel; 
	document.cookie = "nextFishingLevelC=" + nextFishingLevel;
	document.cookie = "nextAttackLevelC=" + nextAttackLevel;
	document.cookie = "nextStrengthLevelC=" + nextStrengthLevel;
	document.cookie = "nextDefenseLevelC=" + nextDefenseLevel;
	document.cookie = "nextHpLevelC=" + nextHpLevel;
	document.cookie = "nextMagicLevelC=" + nextMagicLevel;
	document.cookie = "nextCraftingLevelC=" + nextCraftingLevel;
	document.cookie = "totalWoodcuttingExpC=" + totalWoodcuttingExp; 
	document.cookie = "totalLogsC=" + totalLogs[0]; 
	document.cookie = "totalOakC=" + totalLogs[1]; 
	document.cookie = "totalWillowC=" +  totalLogs[2];
	document.cookie = "totalMapleC=" +  totalLogs[3];
	document.cookie = "totalYewC=" +  totalLogs[4];
	document.cookie = "totalMagicC=" +  totalLogs[5];
	document.cookie = "totalMiningExpC=" + totalMiningExp;
	document.cookie = "totalCopperC=" + totalOre[0];
	document.cookie = "totalTinC=" + totalOre[1];
	document.cookie = "totalIronC=" + totalOre[2];
	document.cookie = "totalCoalC=" + totalOre[3];
	document.cookie = "totalMithrilC=" + totalOre[4]; 
	document.cookie = "totalAdamantiteC=" + totalOre[5]; 
	document.cookie = "totalRuniteC=" + totalOre[6];
	document.cookie = "totalFishingExpC=" + totalFishingExp;
	document.cookie = "totalShrimpC=" + totalShrimp; 
	document.cookie = "totalTroutC=" + totalTrout; 
	document.cookie = "totalSalmonC=" + totalSalmon; 
	document.cookie = "totalTunaC=" + totalTuna; 
	document.cookie = "totalLobsterC=" + totalLobster; 
	document.cookie = "totalSwordfishC=" + totalSwordfish; 
	document.cookie = "totalSharkC=" + totalShark;
	document.cookie = "numLoggersC=" + numLoggers; 
	document.cookie = "numOakLoggersC=" + numOakLoggers; 
	document.cookie = "numWillowLoggersC=" + numWillowLoggers; 
	document.cookie = "numMapleLoggersC=" + numMapleLoggers; 
	document.cookie = "numYewLoggersC=" + numYewLoggers; 
	document.cookie = "numMagicLoggersC=" + numMagicLoggers;
	document.cookie = "numCopperMinersC=" + numCopperMiners; 
	document.cookie = "numTinMinersC=" + numTinMiners; 
	document.cookie = "numIronMinersC=" + numIronMiners; 
	document.cookie = "numCoalMinersC=" + numCoalMiners; 
	document.cookie = "numMithrilMinersC=" + numMithrilMiners; 
	document.cookie = "numAdamantiteMinersC=" + numAdamantiteMiners; 
	document.cookie = "numRuniteMinersC=" + numRuniteMiners;
	document.cookie = "numShrimpFishermanC=" + numShrimpFisherman;
	document.cookie = "numTroutFishermanC=" + numTroutFisherman; 
	document.cookie = "numSalmonFishermanC=" + numSalmonFisherman; 
	document.cookie = "numTunaFishermanC=" + numTunaFisherman; 
	document.cookie = "numLobsterFishermanC=" + numLobsterFisherman; 
	document.cookie = "numSwordfishFishermanC=" + numSwordfishFisherman; 
	document.cookie = "numSharkFishermanC=" + numSharkFisherman; 
	document.cookie = "loggerValC=" + loggerVal; 
	document.cookie = "oakLoggerValC=" + oakLoggerVal; 
	document.cookie = "willowLoggerValC=" + willowLoggerVal; 
	document.cookie = "mapleLoggerValC=" + mapleLoggerVal; 
	document.cookie = "yewLoggerValC=" + yewLoggerVal; 
	document.cookie = "magicLoggerValC=" + magicLoggerVal;
	document.cookie = "copperMinerValC=" + copperMinerVal; 
	document.cookie = "tinMinerValC=" + tinMinerVal; 
	document.cookie = "ironMinerValC=" + ironMinerVal; 
	document.cookie = "coalMinerValC=" + coalMinerVal; 
	document.cookie = "mithrilMinerValC=" + mithrilMinerVal; 
	document.cookie = "adamantMinerValC=" + adamantMinerVal; 
	document.cookie = "runeMinerValC=" + runeMinerVal;
	document.cookie = "shrimpFishermanValC=" + shrimpFishermanVal; 
	document.cookie = "troutFishermanValC=" + troutFishermanVal; 
	document.cookie = "salmonFishermanValC=" + salmonFishermanVal; 
	document.cookie = "tunaFishermanValC=" + tunaFishermanVal; 
	document.cookie = "lobsterFishermanValC=" + lobsterFishermanVal;
	document.cookie = "swordfishFishermanValC=" + swordfishFishermanVal; 
	document.cookie = "sharkFishermanValC=" + sharkFishermanVal;
	document.cookie = "totalCraftingExpC=" + totalCraftingExp;
	document.cookie = "sapphireC=" + sapphire; 
	document.cookie = "emeraldC=" + emerald; 
	document.cookie = "rubyC=" + ruby; 
	document.cookie = "diamondC=" + diamond; 
	document.cookie = "dragonstoneC=" + dragonstone; 
	document.cookie = "onyxC=" + onyx; 
	document.cookie = "zenyteC=" + zenyte;
	document.cookie = "totalAttackExpC=" + totalAttackExp;
	document.cookie = "totalStrengthExpC=" + totalStrengthExp;
	document.cookie = "totalDefenseExpC=" + totalDefenseExp;
	document.cookie = "totalHpExpC=" + totalHpExp;
	document.cookie = "totalMagicExpC=" + totalMagicExp;
}
//TODO
function load(){
	totalGold = parseInt(getCookie("totalGoldC"));
	woodcuttingLevel = parseInt(getCookie("woodcuttingLevelC"));
	miningLevel = parseInt(getCookie("miningLevelC"));
	fishingLevel = parseInt(getCookie("fishingLevelC"));
	attackLevel = parseInt(getCookie("attackLevelC"));
	strengthLevel = parseInt(getCookie("strengthLevelC"));
	defenseLevel = parseInt(getCookie("defenseLevelC"));
	hpLevel = parseInt(getCookie("hpLevelC"));
	magicLevel = parseInt(getCookie("magicLevelC"));
	craftingLevel = parseInt(getCookie("craftingLevelC"));
	remainingWoodcutLevelExp = parseFloat(getCookie("remainingWoodcutLevelExpC"));
	remainingMiningLevelExp = parseFloat(getCookie("remainingMiningLevelExpC"));
	remainingFishingLevelExp = parseFloat(getCookie("remainingFishingLevelExpC"));
	remainingAttackLevelExp = parseFloat(getCookie("remainingAttackLevelExpC"));
	remainingStrengthLevelExp = parseFloat(getCookie("remainingStrengthLevelExpC"));
	remainingDefenseLevelExp = parseFloat(getCookie("remainingDefenseLevelExpC"));
	remainingHpLevelExp = parseFloat(getCookie("remainingHpLevelExpC"));
	remainingMagicLevelExp = parseFloat(getCookie("remainingMagicLevelExpC"));
	remainingCraftingLevelExp = parseFloat(getCookie("remainingCraftingLevelExpC"));
	nextWoodcuttingLevel = parseInt(getCookie("nextWoodcuttingLevelC"));
	nextMiningLevel = parseInt(getCookie("nextMiningLevelC"));
	nextFishingLevel = parseInt(getCookie("nextFishingLevelC"));
	nextAttackLevel = parseInt(getCookie("nextAttackLevelC"));
	nextStrengthLevel = parseInt(getCookie("nextStrengthLevelC"));
	nextDefenseLevel = parseInt(getCookie("nextDefenseLevelC"));
	nextHpLevel = parseInt(getCookie("nextHpLevelC"));
	nextMagicLevel = parseInt(getCookie("nextMagicLevelC"));
	nextCraftingLevel = parseInt(getCookie("nextCraftingLevelC"));
	
	totalWoodcuttingExp = parseFloat(getCookie("totalWoodcuttingExpC"));
	totalLogs[0] = parseInt(getCookie("totalLogsC"));
	totalLogs[1] = parseInt(getCookie("totalOakC"));
	totalLogs[2] = parseInt(getCookie("totalWillowC"));
	totalLogs[3] = parseInt(getCookie("totalMapleC"));
	totalLogs[4] = parseInt(getCookie("totalYewC"));
	totalLogs[5] = parseInt(getCookie("totalMagicC"));
	
	totalMiningExp = parseFloat(getCookie("totalMiningExpC"));
	totalOre[0] = parseInt(getCookie("totalCopperC"));
	totalOre[1] = parseInt(getCookie("totalTinC"));
	totalOre[2] = parseInt(getCookie("totalIronC"));
	totalOre[3] = parseInt(getCookie("totalCoalC"));
	totalOre[4] = parseInt(getCookie("totalMithrilC"));
	totalOre[5] = parseInt(getCookie("totalAdamantiteC"));
	totalOre[6] = parseInt(getCookie("totalRuniteC"));
	
	totalFishingExp = parseFloat(getCookie("totalFishingExpC"));
	totalShrimp = parseInt(getCookie("totalShrimpC"));
	totalTrout = parseInt(getCookie("totalTroutC"));
	totalSalmon = parseInt(getCookie("totalSalmonC"));
	totalTuna = parseInt(getCookie("totalTunaC"));
	totalLobster = parseInt(getCookie("totalLobsterC"));
	totalSwordfish = parseInt(getCookie("totalSwordfishC"));
	totalShark = parseInt(getCookie("totalSharkC"));
	
	totalAttackExp = parseFloat(getCookie("totalAttackExpC"));
	totalStrengthExp = parseFloat(getCookie("totalStrengthExpC"));
	totalDefenseExp = parseFloat(getCookie("totalDefenseExpC"));
	totalHpExp = parseFloat(getCookie("totalHpExpC"));
	totalMagicExp = parseFloat(getCookie("totalMagicExpC"));
	
	totalCraftingExp = parseFloat(getCookie("totalCraftingExpC"));
	
	numLoggers = parseInt(getCookie("numLoggersC"));
	numOakLoggers = parseInt(getCookie("numOakLoggersC"));
	numWillowLoggers = parseInt(getCookie("numWillowLoggersC"));
	numMapleLoggers = parseInt(getCookie("numMapleLoggersC"));
	numYewLoggers = parseInt(getCookie("numYewLoggersC"));
	numMagicLoggers = parseInt(getCookie("numMagicLoggersC"));
	
	numCopperMiners = parseInt(getCookie("numCopperMinersC"));
	numTinMiners = parseInt(getCookie("numTinMinersC"));
	numIronMiners = parseInt(getCookie("numIronMinersC"));
	numCoalMiners = parseInt(getCookie("numCoalMinersC"));
	numMithrilMiners = parseInt(getCookie("numMithrilMinersC"));
	numAdamantiteMiners = parseInt(getCookie("numAdamantiteMinersC"));
	numRuniteMiners = parseInt(getCookie("numRuniteMinersC"));		
	
	numShrimpFisherman = parseInt(getCookie("numShrimpFishermanC"));
	numTroutFisherman = parseInt(getCookie("numTroutFishermanC"));
	numSalmonFisherman = parseInt(getCookie("numSalmonFishermanC"));
	numTunaFisherman = parseInt(getCookie("numTunaFishermanC"));
	numLobsterFisherman = parseInt(getCookie("numLobsterFishermanC"));
	numSwordfishFisherman = parseInt(getCookie("numSwordfishFishermanC"));
	numSharkFisherman = parseInt(getCookie("numSharkFishermanC"));
	
	loggerVal = parseInt(getCookie("loggerValC"));
	oakLoggerVal = parseInt(getCookie("oakLoggerValC"));
	willowLoggerVal = parseInt(getCookie("willowLoggerValC"));
	mapleLoggerVal = parseInt(getCookie("mapleLoggerValC"));
	yewLoggerVal = parseInt(getCookie("yewLoggerValC"));
	magicLoggerVal = parseInt(getCookie("magicLoggerValC"));
	
	copperMinerVal = parseInt(getCookie("copperMinerValC"));
	tinMinerVal = parseInt(getCookie("tinMinerValC"));
	ironMinerVal = parseInt(getCookie("ironMinerValC"));
	coalMinerVal = parseInt(getCookie("coalMinerValC"));
	mithrilMinerVal = parseInt(getCookie("mithrilMinerValC"));
	adamantMinerVal = parseInt(getCookie("adamantMinerValC"));
	runeMinerVal = parseInt(getCookie("runeMinerValC"));
	
	shrimpFishermanVal = parseInt(getCookie("shrimpFishermanValC"));
	troutFishermanVal = parseInt(getCookie("troutFishermanValC"));
	salmonFishermanVal = parseInt(getCookie("salmonFishermanValC"));
	tunaFishermanVal = parseInt(getCookie("tunaFishermanValC"));
	lobsterFishermanVal = parseInt(getCookie("lobsterFishermanValC"));
	swordfishFishermanVal = parseInt(getCookie("swordfishFishermanValC"));
	sharkFishermanVal = parseInt(getCookie("sharkFishermanValC"));
	
	sapphire = parseInt(getCookie("sapphireC"));
	emerald = parseInt(getCookie("emeraldC"));
	ruby = parseInt(getCookie("rubyC"));
	diamond = parseInt(getCookie("diamondC"));
	dragonstone = parseInt(getCookie("dragonstoneC"));
	onyx = parseInt(getCookie("onyxC"));
	zenyte = parseInt(getCookie("zenyteC"));
	
	update();
}

function getCookie(cname){
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++){
		var c = ca[i];
		while(c.charAt(0) == ' '){
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0){
			return c.substring(name.length, c.length);
		}
	}
	return "";
}


function travelMines(){
	document.getElementById("Woodcutting").style.display = "none";
	document.getElementById("Mining").style.display = "block";
	document.getElementById("Fishing").style.display = "none";
	document.getElementById("Combat").style.display = "none";
	document.getElementById("Crafting").style.display = "none";
	document.getElementById("Bosses").style.display = "none";
	document.getElementById("Smelting").style.display = "none";
	document.getElementById("mines").style.display = "none";
	document.getElementById("forest").style.display = "block";
	document.getElementById("ocean").style.display = "block";
	document.getElementById("dungeon").style.display = "block";
	document.getElementById("craft").style.display = "block";
	document.getElementById("epic").style.display = "block";
	document.getElementById("furnace").style.display = "block";
	document.getElementById("bottom").style.display = "block";
	document.body.style.backgroundColor = "#999999";
}

function travelForest(){
	document.getElementById("Woodcutting").style.display = "block";
	document.getElementById("Mining").style.display = "none";
	document.getElementById("Fishing").style.display = "none";
	document.getElementById("Combat").style.display = "none";
	document.getElementById("Crafting").style.display = "none";
	document.getElementById("Bosses").style.display = "none";
	document.getElementById("Smelting").style.display = "none";
	document.getElementById("mines").style.display = "block";
	document.getElementById("forest").style.display = "none";
	document.getElementById("ocean").style.display = "block";
	document.getElementById("dungeon").style.display = "block";
	document.getElementById("death").style.display = "none";
	document.getElementById("craft").style.display = "block";
	document.getElementById("epic").style.display = "block";
	document.getElementById("furnace").style.display = "block";
	document.getElementById("bottom").style.display = "block";
	document.body.style.backgroundColor = "#D2B26F";
}

function travelOcean(){
	document.getElementById("Woodcutting").style.display = "none";
	document.getElementById("Mining").style.display = "none";
	document.getElementById("Fishing").style.display = "block";
	document.getElementById("Combat").style.display = "none";
	document.getElementById("Crafting").style.display = "none";
	document.getElementById("Bosses").style.display = "none";
	document.getElementById("Smelting").style.display = "none";
	document.getElementById("mines").style.display = "block";
	document.getElementById("forest").style.display = "block";
	document.getElementById("ocean").style.display = "none";
	document.getElementById("dungeon").style.display = "block";
	document.getElementById("craft").style.display = "block";
	document.getElementById("epic").style.display = "block";
	document.getElementById("furnace").style.display = "block";
	document.getElementById("bottom").style.display = "block";
	document.body.style.backgroundColor = "cyan";
}

function travelDungeon(){
	document.getElementById("Woodcutting").style.display = "none";
	document.getElementById("Mining").style.display = "none";
	document.getElementById("Fishing").style.display = "none";
	document.getElementById("Combat").style.display = "block";
	document.getElementById("Crafting").style.display = "none";
	document.getElementById("Bosses").style.display = "none";
	document.getElementById("Smelting").style.display = "none";
	document.getElementById("mines").style.display = "block";
	document.getElementById("forest").style.display = "block";
	document.getElementById("ocean").style.display = "block";
	document.getElementById("dungeon").style.display = "none";
	document.getElementById("craft").style.display = "block";
	document.getElementById("epic").style.display = "block";
	document.getElementById("furnace").style.display = "block";
	document.getElementById("bottom").style.display = "block";
	document.body.style.backgroundColor = "#D20010";
}

function travelCraft(){
	document.getElementById("Woodcutting").style.display = "none";
	document.getElementById("Mining").style.display = "none";
	document.getElementById("Fishing").style.display = "none";
	document.getElementById("Combat").style.display = "none";
	document.getElementById("Crafting").style.display = "block";
	document.getElementById("Bosses").style.display = "none";
	document.getElementById("Smelting").style.display = "none";
	document.getElementById("mines").style.display = "block";
	document.getElementById("forest").style.display = "block";
	document.getElementById("ocean").style.display = "block";
	document.getElementById("dungeon").style.display = "block";
	document.getElementById("craft").style.display = "none";
	document.getElementById("epic").style.display = "block";
	document.getElementById("furnace").style.display = "block";
	document.getElementById("bottom").style.display = "block";
	document.body.style.backgroundColor = "#DA9F4F";
}

function travelEpic(){
	document.getElementById("Woodcutting").style.display = "none";
	document.getElementById("Mining").style.display = "none";
	document.getElementById("Fishing").style.display = "none";
	document.getElementById("Combat").style.display = "none";
	document.getElementById("Crafting").style.display = "none";
	document.getElementById("Bosses").style.display = "block";
	document.getElementById("Smelting").style.display = "none";
	document.getElementById("mines").style.display = "block";
	document.getElementById("forest").style.display = "block";
	document.getElementById("ocean").style.display = "block";
	document.getElementById("dungeon").style.display = "block";
	document.getElementById("craft").style.display = "block";
	document.getElementById("epic").style.display = "none";
	document.getElementById("furnace").style.display = "block";
	document.getElementById("bottom").style.display = "block";
	document.body.style.backgroundColor = "white";
}

function travelFurnace(){
	document.getElementById("Woodcutting").style.display = "none";
	document.getElementById("Mining").style.display = "none";
	document.getElementById("Fishing").style.display = "none";
	document.getElementById("Combat").style.display = "none";
	document.getElementById("Crafting").style.display = "none";
	document.getElementById("Bosses").style.display = "none";
	document.getElementById("Smelting").style.display = "block";
	document.getElementById("mines").style.display = "block";
	document.getElementById("forest").style.display = "block";
	document.getElementById("ocean").style.display = "block";
	document.getElementById("dungeon").style.display = "block";
	document.getElementById("craft").style.display = "block";
	document.getElementById("epic").style.display = "block";
	document.getElementById("furnace").style.display = "none";
	document.getElementById("bottom").style.display = "block";
	document.body.style.backgroundColor = "orange";
}

function travelCook(){

	document.body.style.backgroundColor = "DF9FFF";
}

function reenableButtons(){
	document.getElementById("treeButton").disable = false;
	document.getElementById("oakButton").disable = false;
	document.getElementById("willowButton").disable = false;
	document.getElementById("mapleButton").disable = false;
	document.getElementById("yewButton").disable = false;
	document.getElementById("magicButton").disable = false;
	document.getElementById("copperButton").disable = false;
	document.getElementById("tinButton").disable = false;
	document.getElementById("ironButton").disable = false;
	document.getElementById("coalButton").disable = false;
	document.getElementById("mithrilButton").disable = false;
	document.getElementById("adamantButton").disable = false;
	document.getElementById("runeButton").disable = false;
}

function move() {
	count += 1;
	moving = true;
	if(count == 1){
	  var elem = document.getElementById("myBar");   
	  var time = 5;
	  barWidth = 0;
	  var id = setInterval(frame, 1000);
	  function frame() {
		if (time <= 0) {
		  count = 0;
		  barWidth = 0;
		  time = 5;
		  elem.style.width = barWidth + '%';
		  document.getElementById("label").innerHTML = time * 1 + 's';
		  moving = false;
		  reenableButtons();
		  clearInterval(id);
		} else {
		  time--; 
		  barWidth += 100/5;
		  elem.style.width = barWidth + '%'; 
		  document.getElementById("label").innerHTML = time * 1  + 's';
		}
	  }
	}
}

function loadLevelChart(){
	if(!moving){
		woodcuttingArea = document.getElementById("Woodcutting").style.display;
		miningArea = document.getElementById("Mining").style.display;
		fishingArea = document.getElementById("Fishing").style.display;
		combatArea = document.getElementById("Combat").style.display;
		craftingArea = document.getElementById("Crafting").style.display;
		if(woodcuttingArea == "block"){
			placeImIn = 1;
		}
		else if(miningArea == "block"){
			placeImIn = 2;
		}
		else if(fishingArea == "block"){
			placeImIn = 3;
		}
		else if(combatArea == "block"){
			placeImIn = 4;
		}
		else if(craftingArea == "block"){
			placeImIn = 5;
		}
		document.getElementById("Woodcutting").style.display = "none";
		document.getElementById("Mining").style.display = "none";
		document.getElementById("Fishing").style.display = "none";
		document.getElementById("Combat").style.display = "none";
		document.getElementById("Crafting").style.display = "none";
		document.getElementById("mines").style.display = "none";
		document.getElementById("forest").style.display = "none";
		document.getElementById("ocean").style.display = "none";
		document.getElementById("dungeon").style.display = "none";
		document.getElementById("bottom").style.display = "none";
		document.getElementById("skillChart").style.display = "block";
		document.getElementById("skillChart2").style.display = "block";
	}
}

function backToGame(){
	document.getElementById("skillChart").style.display = "none";
	document.getElementById("skillChart2").style.display = "none";
	document.getElementById("bottom").style.display = "block";
	if(placeImIn == 1){
		document.getElementById("Woodcutting").style.display = "block";
		document.getElementById("mines").style.display = "block";
		document.getElementById("ocean").style.display = "block";
		document.getElementById("dungeon").style.display = "block";
		document.getElementById("craft").style.display = "block";
		document.body.style.backgroundColor = "#D2B26F";
	}
	else if(placeImIn == 2){
		document.getElementById("Mining").style.display = "block";
		document.getElementById("forest").style.display = "block";
		document.getElementById("ocean").style.display = "block";
		document.getElementById("dungeon").style.display = "block";
		document.getElementById("craft").style.display = "block";
		document.body.style.backgroundColor = "#999999";
	}
	else if(placeImIn == 3){
		document.getElementById("Fishing").style.display = "block";
		document.getElementById("forest").style.display = "block";
		document.getElementById("mines").style.display = "block";
		document.getElementById("dungeon").style.display = "block";
		document.getElementById("craft").style.display = "block";
		document.body.style.backgroundColor = "cyan";
	}
	else if(placeImIn == 4){
		document.getElementById("Combat").style.display = "block";
		document.getElementById("forest").style.display = "block";
		document.getElementById("mines").style.display = "block";
		document.getElementById("ocean").style.display = "block";
		document.getElementById("craft").style.display = "block";
		document.body.style.backgroundColor = "#D20010";
	}
	else if(placeImIn == 5){
		document.getElementById("Crafting").style.display = "block";
		document.getElementById("forest").style.display = "block";
		document.getElementById("mines").style.display = "block";
		document.getElementById("ocean").style.display = "block";
		document.getElementById("dungeon").style.display = "block";
		document.body.style.backgroundColor = "#DA9F4F";
	}
}

function updatePrice(){
	document.getElementById("shrimpFishermanButton").innerText = "Hire Shrimp Fisherman: " + shrimpFishermanVal.toLocaleString();
	document.getElementById("troutFishermanButton").innerText = "Hire Trout Fisherman: " + troutFishermanVal.toLocaleString();
	document.getElementById("salmonFishermanButton").innerText = "Hire Salmon Fisherman: " + salmonFishermanVal.toLocaleString();
	document.getElementById("tunaFishermanButton").innerText = "Hire Tuna Fisherman: " + tunaFishermanVal.toLocaleString();
	document.getElementById("lobsterFishermanButton").innerText = "Hire Lobster Fisherman: " + lobsterFishermanVal.toLocaleString();
	document.getElementById("swordfishFishermanButton").innerText = "Hire Swordfish Fisherman: " + swordfishFishermanVal.toLocaleString();
	document.getElementById("sharkFishermanButton").innerText = "Hire Shark Fisherman: " + sharkFishermanVal.toLocaleString();
	//update miner price 
	var curMineID = [];
	for(var i = 0; i < 7; i++) {
		curMineID = getMineButtonIDs(i);
		document.getElementById(curMineID[1]).innerText = "Hire " + curMineID[3] + " Miner: " + oreMinerCost[i].toString();
	}
	//update logger price
	var curWoodcutID = [];
	for(var i = 0; i < 6; i++) {
		curWoodcutID = getWoodcutButtonIDs(i);
		document.getElementById(curWoodcutID[1]).innerText = "Hire " + curWoodcutID[3] + " Logger: " + loggerVals[i].toString();
	}
	
}

function changeSound(){
	if(backgroundSound.paused){
		document.getElementById("settings").innerText = "Disable Sound";
		backgroundSound.play();
	}
	else{
		document.getElementById("settings").innerText = "Enable Sound";
		backgroundSound.pause();
	}
}
