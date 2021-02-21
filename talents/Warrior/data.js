var i = 0;
var t = 0;

var className = "Warrior Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Arms"; i++;
tree[i] = "Fury"; i++;
tree[i] = "Protection"; i++;

i = 0;

talent[i] = [0, "Improved Heroic Strike", 3, 1, 1]; i++;
talent[i] = [0, "Deflection", 5, 2, 1]; i++;
talent[i] = [0, "Improved Rend", 2, 3, 1]; i++;
talent[i] = [0, "Improved Charge", 2, 1, 2]; i++; 
talent[i] = [0, "Iron Will", 3, 2, 2]; i++;
talent[i] = [0, "Tactical Mastery", 3, 3, 2]; i++;
talent[i] = [0, "Improved Overpower", 2, 1, 3]; i++;
talent[i] = [0, "Anger Management", 1, 2, 3]; i++;
talent[i] = [0, "Impale", 2, 3, 3]; i++;
talent[i] = [0, "Deep Wounds", 3, 4, 3, [getTalentID("Impale"),2]]; i++;
talent[i] = [0, "Two-Handed Weapon Specialization", 3, 2, 4]; i++;
talent[i] = [0, "Taste for Blood", 3, 3, 4]; i++;
talent[i] = [0, "Poleaxe Specialization", 5, 1, 5]; i++; 
talent[i] = [0, "Sweeping Strikes", 1, 2, 5]; i++;
talent[i] = [0, "Mace Specialization", 5, 3, 5]; i++;
talent[i] = [0, "Sword Specialization", 5, 4, 5]; i++;
talent[i] = [0, "Weapon Mastery", 2, 1, 6]; i++;
talent[i] = [0, "Improved Hamstring", 3, 3, 6]; i++;
talent[i] = [0, "Trauma", 2, 4, 6]; i++;
talent[i] = [0, "Second Wind", 2, 1, 7]; i++;
talent[i] = [0, "Mortal Strike", 1, 2, 7, [getTalentID("Sweeping Strikes"),1]]; i++;
talent[i] = [0, "Strength of Arms", 2, 3, 7]; i++;
talent[i] = [0, "Improved Slam", 2, 4, 7]; i++;
talent[i] = [0, "Juggernaut", 1, 1, 8]; i++;
talent[i] = [0, "Improved Mortal Strike", 3, 2, 8, [getTalentID("Mortal Strike"),1]]; i++;
talent[i] = [0, "Unrelenting Assault", 2, 3, 8]; i++;
talent[i] = [0, "Sudden Death", 3, 1, 9]; i++;
talent[i] = [0, "Endless Rage", 1, 2, 9]; i++;
talent[i] = [0, "Blood Frenzy", 2, 3, 9]; i++;
talent[i] = [0, "Wrecking Crew", 5, 2, 10]; i++;
talent[i] = [0, "Bladestorm", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

//fury talents
talent[i] = [1, "Armored to the Teeth", 3, 1, 1]; i++;
talent[i] = [1, "Booming Voice", 2, 2, 1]; i++;
talent[i] = [1, "Cruelty", 5, 3, 1]; i++;
talent[i] = [1, "Improved Demoralizing Shout", 5, 2, 2]; i++;
talent[i] = [1, "Unbridled Wrath", 5, 3, 2]; i++;
talent[i] = [1, "Improved Cleave", 3, 1, 3]; i++;
talent[i] = [1, "Piercing Howl", 1, 2, 3]; i++;
talent[i] = [1, "Blood Craze", 3, 3, 3]; i++;
talent[i] = [1, "Commanding Presence", 5, 4, 3]; i++;
talent[i] = [1, "Dual Wield Specialization", 5, 1, 4]; i++;
talent[i] = [1, "Improved Execute", 2, 2, 4]; i++;
talent[i] = [1, "Enrage", 5, 3, 4]; i++;
talent[i] = [1, "Precision", 3, 1, 5]; i++;
talent[i] = [1, "Death Wish", 1, 2, 5]; i++;
talent[i] = [1, "Improved Intercept", 2, 3, 5]; i++;
talent[i] = [1, "Improved Berserker Rage", 2, 1, 6]; i++;
talent[i] = [1, "Flurry", 5, 3, 6]; i++;
talent[i] = [1, "Intensify Rage", 3, 1, 7]; i++;
talent[i] = [1, "Bloodthirst", 1, 2, 7, [getTalentID("Death Wish"),1]]; i++;
talent[i] = [1, "Improved Whirlwind", 2, 4, 7]; i++;
talent[i] = [1, "Furious Attacks", 2, 1, 8]; i++;
talent[i] = [1, "Improved Berserker Stance", 5, 4, 8]; i++;
talent[i] = [1, "Heroic Fury", 1, 1, 9]; i++;
talent[i] = [1, "Rampage", 1, 2, 9, [getTalentID("Bloodthirst"),1]]; i++;
talent[i] = [1, "Bloodsurge", 3, 3, 9, [getTalentID("Bloodthirst"),1]]; i++;
talent[i] = [1, "Unending Fury", 5, 2, 10]; i++;
talent[i] = [1, "Titan's Grip", 1, 2, 11]; i++;



treeStartStop[t] = i -1;
t++;

//protection talents
talent[i] = [2, "Improved Bloodrage", 2, 1, 1]; i++;
talent[i] = [2, "Shield Specialization", 5, 2, 1]; i++;
talent[i] = [2, "Improved Thunder Clap", 3, 3, 1]; i++;
talent[i] = [2, "Incite", 3, 2, 2]; i++;
talent[i] = [2, "Anticipation", 5, 3, 2]; i++;
talent[i] = [2, "Last Stand", 1, 1, 3]; i++;
talent[i] = [2, "Improved Revenge", 2, 2, 3]; i++;
talent[i] = [2, "Shield Mastery", 2, 3, 3]; i++;
talent[i] = [2, "Toughness", 5, 4, 3]; i++;
talent[i] = [2, "Improved Spell Reflection", 2, 1, 4]; i++;
talent[i] = [2, "Improved Disarm", 2, 2, 4]; i++;
talent[i] = [2, "Puncture", 3, 3, 4]; i++;
talent[i] = [2, "Improved Disciplines", 2, 1, 5]; i++;
talent[i] = [2, "Concussion Blow", 1, 2, 5]; i++;
talent[i] = [2, "Gag Order", 2, 3, 5]; i++;
talent[i] = [2, "One-Handed Weapon Specialization", 5, 3, 6]; i++;
talent[i] = [2, "Improved Defensive Stance", 2, 1, 7]; i++;
talent[i] = [2, "Vigilance", 1, 2, 7, [getTalentID("Concussion Blow"),1]]; i++;
talent[i] = [2, "Focused Rage", 3, 3, 7]; i++;
talent[i] = [2, "Vitality", 3, 2, 8]; i++;
talent[i] = [2, "Safeguard", 2, 3, 8]; i++;
talent[i] = [2, "Warbringer", 1, 1, 9]; i++;
talent[i] = [2, "Devastate", 1, 2, 9]; i++;
talent[i] = [2, "Critical Block", 3, 3, 9]; i++;
talent[i] = [2, "Sword and Board", 3, 2, 10, [getTalentID("Devastate"),1]]; i++;
talent[i] = [2, "Damage Shield", 2, 3, 10]; i++;
talent[i] = [2, "Shockwave", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

i = 0;


//Arms Talents Begin

//Improved Heroic Strike - Arms
rank[i] = [
"Reduces the cost of your Heroic Strike ability by 1 rage point.",
"Reduces the cost of your Heroic Strike ability by 2 rage points.",
"Reduces the cost of your Heroic Strike ability by 3 rage points."
		];
i++;		
		
//Deflection - Arms
rank[i] = [
"Increases your Parry chance by 1%.",
"Increases your Parry chance by 2%.",
"Increases your Parry chance by 3%.",
"Increases your Parry chance by 4%.",
"Increases your Parry chance by 5%."
		];
i++;		

//Improved Rend - Arms
rank[i] = [
"Increases the bleed damage done by your Rend ability by 10%.",
"Increases the bleed damage done by your Rend ability by 20%."
		];
i++;		

//Improved Charge - Arms 
rank[i] = [
"Increases the amount of rage generated by your Charge ability by 5.",
"Increases the amount of rage generated by your Charge ability by 10."
		];
i++;

//Iron Will - Arms
rank[i]=[
"Reduces the duration of all Stun and Charm effects used against you by 7%.",
"Reduces the duration of all Stun and Charm effects used against you by 14%.",
"Reduces the duration of all Stun and Charm effects used against you by 20%."
		];
i++;		

//Tactical Mastery - Arms
rank[i] = [
"You retain up to an additional 5 of your rage points when you change stances. Also greatly increases the threat generated by your Bloodthirst and Mortal Strike abilities when you are in Defensive Stance.",
"You retain up to an additional 10 of your rage points when you change stances. Also greatly increases the threat generated by your Bloodthirst and Mortal Strike abilities when you are in Defensive Stance. (More effective than Rank 1).",
"You retain up to an additional 15 of your rage points when you change stances. Also greatly increases the threat generated by your Bloodthirst and Mortal Strike abilities when you are in Defensive Stance. (More effective than Rank 2)."
		];
i++;		

//Improved Overpower - Arms
rank[i] = [
"Increases the critical strike chance of your Overpower ability by 25%.",
"Increases the critical strike chance of your Overpower ability by 50%."
		];		
i++;

//Anger Management - Arms	
rank[i] = [ 
"Generates 1 rage per 3 seconds."
		];
i++;		

//Impale - Arms	
rank[i] = [
"Increases the critical strike damage bonus of your abilities by 10%.",
"Increases the critical strike damage bonus of your abilities by 20%."
		];
i++;	

//Deep Wounds - Arms
rank[i] = [
"Your critical strikes cause the opponent to bleed, dealing 16% of your melee weapon's average damage over 6 sec.",
"Your critical strikes cause the opponent to bleed, dealing 32% of your melee weapon's average damage over 6 sec.",
"Your critical strikes cause the opponent to bleed, dealing 48% of your melee weapon's average damage over 6 sec."
		];
i++;

//Two-Handed Weapon Specialization - Arms
rank[i] = [
"Increases the damage you deal with two-handed melee weapons by 2%.",
"Increases the damage you deal with two-handed melee weapons by 4%.",
"Increases the damage you deal with two-handed melee weapons by 6%."
		];
i++;	

//Taste for Blood - Arms
rank[i] = [
"Whenever your Rend ability causes damage, you have a 33% chance of allowing the use of your Overpower ability for 9 sec. 1 charge. This effect will not occur more than once every 6 sec.",
"Whenever your Rend ability causes damage, you have a 66% chance of allowing the use of your Overpower ability for 9 sec. 1 charge. This effect will not occur more than once every 6 sec.",
"Whenever your Rend ability causes damage, you have a 100% chance of allowing the use of your Overpower ability for 9 sec. 1 charge. This effect will not occur more than once every 6 sec."
		];
i++;

//Poleaxe Specialization - Arms
rank[i] = [
"Increases your chance to get a critical strike and the critical damage caused with Axes and Polearms by 1%.",
"Increases your chance to get a critical strike and the critical damage caused with Axes and Polearms by 2%.",
"Increases your chance to get a critical strike and the critical damage caused with Axes and Polearms by 3%.",
"Increases your chance to get a critical strike and the critical damage caused with Axes and Polearms by 4%.",
"Increases your chance to get a critical strike and the critical damage caused with Axes and Polearms by 5%."
		];
i++;		

//Sweeping Strikes - Arms
rank[i] = [
"30 Rage<br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>30 sec cooldown</span><br>Your next 5 melee attacks strike an additional nearby opponent."
		];
i++;

//Mace Specialization - Arms	
rank[i] = [
"Your attacks with maces ignore up to 3% of your opponent's armor.",
"Your attacks with maces ignore up to 6% of your opponent's armor.",
"Your attacks with maces ignore up to 9% of your opponent's armor.",
"Your attacks with maces ignore up to 12% of your opponent's armor.",
"Your attacks with maces ignore up to 15% of your opponent's armor."
		];		
i++;		

//Sword Specialization - Arms				
rank[i] = [
"Gives you a 2% chance to get an extra attack on the same target after hitting your target with your Sword. This effect cannot occur more than once every 6 seconds.",
"Gives you a 4% chance to get an extra attack on the same target after hitting your target with your Sword. This effect cannot occur more than once every 6 seconds.",
"Gives you a 6% chance to get an extra attack on the same target after hitting your target with your Sword. This effect cannot occur more than once every 6 seconds.",
"Gives you a 8% chance to get an extra attack on the same target after hitting your target with your Sword. This effect cannot occur more than once every 6 seconds.",
"Gives you a 10% chance to get an extra attack on the same target after hitting your target with your Sword. This effect cannot occur more than once every 6 seconds."
		];
i++;		

//Weapon Mastery - Arms
rank[i]=[
"Reduces the chance for your attacks to be dodged by 1% and reduces the duration of all Disarm effects used against you by 25%. This does not stack with other Disarm duration reducing effects.",
"Reduces the chance for your attacks to be dodged by 2% and reduces the duration of all Disarm effects used against you by 50%. This does not stack with other Disarm duration reducing effects."
		];
i++;	

//Improved Hamstring - Arms	
rank[i] = [
"Gives your Hamstring ability a 5% chance to immobilize the target for 5 sec.",
"Gives your Hamstring ability a 10% chance to immobilize the target for 5 sec.",
"Gives your Hamstring ability a 15% chance to immobilize the target for 5 sec."
		];
i++;

//Trauma - Arms
rank[i] = [
"Your melee critical strikes increase the effectiveness of Bleed effects on the target by 15% for 1 min.",
"Your melee critical strikes increase the effectiveness of Bleed effects on the target by 30% for 1 min."
		];
i++;

//Second Wind - Arms
rank[i] = [
"Whenever you are struck by a Stun or Immobilize effect you will generate 10 rage and 5% of your total health over 10 sec.",
"Whenever you are struck by a Stun or Immobilize effect you will generate 20 rage and 10% of your total health over 10 sec."
		];
i++;

//Mortal Strike - Arms
rank[i] = [
"<span style=text-align:left;float:left;>30 Rage</span><span style=text-align:right;float:right;>Melee range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>6 sec cooldown</span><br>Requires Melee Weapon<br>A vicious strike that deals weapon damage plus 85 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec."
		];		
i++;

//Strength of Arms - Arms
rank[i] = [
"Increases your Strength and Stamina by 2% and your Expertise by 2.",
"Increases your Strength and Stamina by 4% and your Expertise by 4."
		];
i++;

//Improved Slam - Arms
rank[i] = [
"Decreases the swing time of your Slam ability by 0.5 sec.",
"Decreases the swing time of your Slam ability by 1 sec."
		];
i++;

//Juggernaut - Arms
rank[i] = [
"Your Charge ability is now usable while in combat, but the cooldown on Charge is increased by 5 sec. Following a Charge, your next Slam or Mortal Strike has an additional 25% chance to critically hit if used within 10 sec."
		];
i++;

//Improved Mortal Strike - Arms	
rank[i] = [
"Increases the damage caused by your Mortal Strike ability by 3% and reduces the cooldown by 0.33 sec.",
"Increases the damage caused by your Mortal Strike ability by 6% and reduces the cooldown by 0.67 sec.",
"Increases the damage caused by your Mortal Strike ability by 10% and reduces the cooldown by 1 sec."
		];
i++;

//Unrelenting Assault - Arms
rank[i] = [
"Reduces the cooldown of your Overpower and Revenge abilities by 2 secs and increases the damage done by both abilities by 10%. In addition, if you strike a player with Overpower while they are casting, their magical damage and healing will be reduced by 25% for 6 sec.",
"Reduces the cooldown of your Overpower and Revenge abilities by 4 secs and increases the damage done by both abilities by 20%. In addition, if you strike a player with Overpower while they are casting, their magical damage and healing will be reduced by 50% for 6 sec."
		];
i++;

//Sudden Death - Arms	
rank[i] = [
"Your melee hits have a 3% chance of allowing the use of Execute regardless of the target's health state. In addition, you keep at least 3 rage after using Execute.",
"Your melee hits have a 6% chance of allowing the use of Execute regardless of the target's health state. In addition, you keep at least 7 rage after using Execute.",
"Your melee hits have a 9% chance of allowing the use of Execute regardless of the target's health state. In addition, you keep at least 10 rage after using Execute."
		];
i++;

//Endless Rage - Arms
rank[i] = [
"You generate 25% more rage from damage dealt."
		];		
i++;

//Blood Frenzy - Arms
rank[i] = [
"Increases your attack speed by 5%. In addition your Rend and Deep Wound abilities also increase all physical damage caused to that target by 2%.",
"Increases your attack speed by 10%. In addition your Rend and Deep Wound abilities also increase all physical damage caused to that target by 4%."
		];
i++;

//Wrecking Crew - Arms
rank[i] = [
"Your melee critical hits Enrage you, increasing all damage caused by 2% for 12 sec. This effect does not stack with Enrage.",
"Your melee critical hits Enrage you, increasing all damage caused by 4% for 12 sec. This effect does not stack with Enrage.",
"Your melee critical hits Enrage you, increasing all damage caused by 6% for 12 sec. This effect does not stack with Enrage.",
"Your melee critical hits Enrage you, increasing all damage caused by 8% for 12 sec. This effect does not stack with Enrage.",
"Your melee critical hits Enrage you, increasing all damage caused by 10% for 12 sec. This effect does not stack with Enrage."
];i++;

//Bladestorm - Arms
rank[i] = [
"<span style=text-align:left;float:left;>25 Rage</span><span style=text-align:right;float:right;>Instant</span><br><span style=text-align:left;float:left;>Requires Melee Weapon</span><span style=text-align:right;float:right;>1.5 min cooldown</span><br/>Instantly Whirlwind up to 4 nearby targets and for the next 6 sec you will perform a whirlwind attack every 1 sec. While under the effects of Bladestorm, you can move but cannot perform any other abilities but you do not feel pity or remorse or fear and you cannot be stopped unless killed."
		];		
i++;

//FURY TREE ------------------------------

//Armored to the Teeth - Fury
rank[i] = [
"Increases your attack power by 1 for every 108 armor value you have.",
"Increases your attack power by 2 for every 108 armor value you have.",
"Increases your attack power by 3 for every 108 armor value you have."
		];
i++;

//Booming Voice - Fury
rank[i] = [
"Increases the area of effect and duration of your Battle Shout, Demoralizing Shout, and Commanding Shout by 25%.",
"Increases the area of effect and duration of your Battle Shout, Demoralizing Shout, and Commanding Shout by 50%."
		];
i++;		

//Cruelty - Fury
rank[i] = [
"Increases your chance to get a critical strike with melee weapons by 1%.",
"Increases your chance to get a critical strike with melee weapons by 2%.",
"Increases your chance to get a critical strike with melee weapons by 3%.",
"Increases your chance to get a critical strike with melee weapons by 4%.",
"Increases your chance to get a critical strike with melee weapons by 5%."
		];
i++;

//Improved Demoralizing Shout - Fury	
rank[i] = [
"Increases the melee attack power reduction of your Demoralizing Shout by 8%.",
"Increases the melee attack power reduction of your Demoralizing Shout by 16%.",
"Increases the melee attack power reduction of your Demoralizing Shout by 24%.",
"Increases the melee attack power reduction of your Demoralizing Shout by 32%.",
"Increases the melee attack power reduction of your Demoralizing Shout by 40%."
		];
i++;		

//Unbridled Wrath - Fury
rank[i] = [
"Gives you a chance to generate an additional rage point when you deal melee damage with a weapon.",
"Gives you a chance to generate an additional rage point when you deal melee damage with a weapon.  Effect occurs more often than Unbridled Wrath (Rank 1).",
"Gives you a chance to generate an additional rage point when you deal melee damage with a weapon.  Effect occurs more often than Unbridled Wrath (Rank 2).",
"Gives you a chance to generate an additional rage point when you deal melee damage with a weapon.  Effect occurs more often than Unbridled Wrath (Rank 3).",
"Gives you a chance to generate an additional rage point when you deal melee damage with a weapon.  Effect occurs more often than Unbridled Wrath (Rank 4)."
		];		
i++;		

//Improved Cleave - Fury
rank[i] = [

"Increases the bonus damage done by your Cleave ability by 40%.",
"Increases the bonus damage done by your Cleave ability by 80%.",
"Increases the bonus damage done by your Cleave ability by 120%."
		];
i++;		

//Piercing Howl - Fury
rank[i] = [
"10 Rage<br>Instant<br>Causes all enemies within 10 yards to be Dazed, reducing movement speed by 50% for 6 sec."
		];
i++;		

//Blood Craze - Fury	
rank[i] = [
"Regenerates 2% of your total Health over 6 sec after being the victim of a critical strike.",
"Regenerates 4% of your total Health over 6 sec after being the victim of a critical strike.",
"Regenerates 6% of your total Health over 6 sec after being the victim of a critical strike."
		];
i++;		

//Commanding Presence - Fury
rank[i] = [
"Increases the melee attack power bonus of your Battle Shout and the health bonus of your Commanding Shout by 5%.",
"Increases the melee attack power bonus of your Battle Shout and the health bonus of your Commanding Shout by 10%.",
"Increases the melee attack power bonus of your Battle Shout and the health bonus of your Commanding Shout by 15%.",
"Increases the melee attack power bonus of your Battle Shout and the health bonus of your Commanding Shout by 20%.",
"Increases the melee attack power bonus of your Battle Shout and the health bonus of your Commanding Shout by 25%."
		];
i++;		

//Dual Wield Specialization - Fury
rank[i] = [
"Increases the damage done by your offhand weapon by 5%.",
"Increases the damage done by your offhand weapon by 10%.",
"Increases the damage done by your offhand weapon by 15%.",
"Increases the damage done by your offhand weapon by 20%.",
"Increases the damage done by your offhand weapon by 25%."
		];
i++;		

//Improved Execute - Fury
rank[i] = [
"Reduces the rage cost of your Execute ability by 2.",
"Reduces the rage cost of your Execute ability by 5."
		];
i++;		

//Enrage - Fury
rank[i] = [
"Gives you a 30% chance to receive a 2% damage bonus for 12 sec after being the victim of a damaging attack. This effect does not stack with Wrecking Crew.",
"Gives you a 30% chance to receive a 4% damage bonus for 12 sec after being the victim of a damaging attack. This effect does not stack with Wrecking Crew.",
"Gives you a 30% chance to receive a 6% damage bonus for 12 sec after being the victim of a damaging attack. This effect does not stack with Wrecking Crew.",
"Gives you a 30% chance to receive a 8% damage bonus for 12 sec after being the victim of a damaging attack. This effect does not stack with Wrecking Crew.",
"Gives you a 30% chance to receive a 10% damage bonus for 12 sec after being the victim of a damaging attack. This effect does not stack with Wrecking Crew."
		];
i++;

//Precision - Fury
rank[i]=[
"Increases your chance to hit with melee weapons by 1%.",
"Increases your chance to hit with melee weapons by 2%.",
"Increases your chance to hit with melee weapons by 3%."
		];
i++;	

//Death Wish - Arms
rank[i]=[
"10 Rage<br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated you become enraged, increasing your physical damage by 20% but increasing all damage taken by 5%. Lasts 30 sec."
		];
i++;

//Improved Intercept - Fury
rank[i] = [
"Reduces the cooldown of your Intercept ability by 5 sec.",
"Reduces the cooldown of your Intercept ability by 10 sec."
		];
i++;	

//Improved Berserker Rage - Fury
rank[i]=[
"The Berserker Rage ability will generate 10 rage when used.",
"The Berserker Rage ability will generate 20 rage when used."
		];
i++;		

//Flurry - Fury
rank[i]=[
"Increases your attack speed by 5% for your next 3 swings after dealing a melee critical strike.",
"Increases your attack speed by 10% for your next 3 swings after dealing a melee critical strike.",
"Increases your attack speed by 15% for your next 3 swings after dealing a melee critical strike.",
"Increases your attack speed by 20% for your next 3 swings after dealing a melee critical strike.",
"Increases your attack speed by 25% for your next 3 swings after dealing a melee critical strike."
		];
i++;

//Intensify Rage - Fury
rank[i] = [
"Reduces the cooldown of your Bloodrage, Berserker Rage, Recklessness and Death Wish abilities by 11%.",
"Reduces the cooldown of your Bloodrage, Berserker Rage, Recklessness and Death Wish abilities by 22%.",
"Reduces the cooldown of your Bloodrage, Berserker Rage, Recklessness and Death Wish abilities by 33%."
		];
i++;
	
//Bloodthirst - Fury
rank[i]=[
"<span style=text-align:left;float:left;>20 Rage</span><span style=text-align:right;float:right;>Melee range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>4 sec cooldown</span><br>Instantly attack the target causing 5 damage. In addition, the next 3 successful melee attacks will restore 1% of max health. This effect lasts 8 sec. Damage is based on your attack power."
		];
i++;

//Improved Whirlwind - Fury
rank[i]=[
"Increases the damage of your Whirlwind ability by 10%.",
"Increases the damage of your Whirlwind ability by 20%."
		];
i++;

//Furious Attacks - Fury
rank[i]=[
"Your normal melee attacks have a chance to reduce all healing done to the target by 25% for 10 sec. This can stack up to 2 times.",
"Your normal melee attacks have a chance to reduce all healing done to the target by 25% for 10 sec. This occurs more often than Furious Attacks (Rank 1)."
		];
i++;			

//Improved Berserker Stance - Fury
rank[i]=[
"Increases Strength by 4% and reduces threat caused by 2% while in Berserker Stance.",
"Increases Strength by 8% and reduces threat caused by 4% while in Berserker Stance.",
"Increases Strength by 12% and reduces threat caused by 6% while in Berserker Stance.",
"Increases Strength by 16% and reduces threat caused by 8% while in Berserker Stance.",
"Increases Strength by 20% and reduces threat caused by 10% while in Berserker Stance."
		];
i++;	

//Heroic Fury - Fury
rank[i] = [
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>45 sec cooldown</span><br>Removes any Immobilization effects and refreshes the cooldown of your Intercept ability."
		];		
i++;

//Rampage - Fury
rank[i]=[
"Increases ranged and melee critical hit chance of all party and raid members within 100 yds by 5%."
		];
i++;

//Bloodsurge - Fury
rank[i] = [
"Your Heroic Strike, Bloodthirst, and Whirlwind hits have a 7% chance of making your next Slam instant for 5 sec.",
"Your Heroic Strike, Bloodthirst, and Whirlwind hits have a 13% chance of making your next Slam instant for 5 sec.",
"Your Heroic Strike, Bloodthirst, and Whirlwind hits have a 20% chance of making your next Slam instant for 5 sec."
		];
i++;

//Unending Fury - Fury
rank[i] = [
"Increases the damage done by your Slam, Whirlwind and Bloodthirst abilities by 2%.",
"Increases the damage done by your Slam, Whirlwind and Bloodthirst abilities by 4%.",
"Increases the damage done by your Slam, Whirlwind and Bloodthirst abilities by 6%.",
"Increases the damage done by your Slam, Whirlwind and Bloodthirst abilities by 8%.",
"Increases the damage done by your Slam, Whirlwind and Bloodthirst abilities by 10%."
		];
i++;

//Titan's Grip - Fury
rank[i] = [
"Allows you to equip two-handed axes, maces and swords in one hand. While you have a two-handed weapon equipped in one hand, your physical damage done is reduced by 10%."
		];
i++;


//PROTECTION TREE----------------------------------------------------------------------
	
//Improved Bloodrage - Protection
rank[i]=[
"Increases the rage generated by your Bloodrage ability by 25%.",
"Increases the rage generated by your Bloodrage ability by 50%."
		];
i++;

//Shield Specialization - Protection
rank[i]=[
"Increases your chance to block attacks with a shield by 1% and has a 20% chance to generate 5 rage when a block, dodge, or parry occurs.",
"Increases your chance to block attacks with a shield by 2% and has a 40% chance to generate 5 rage when a block, dodge, or parry occurs.",
"Increases your chance to block attacks with a shield by 3% and has a 60% chance to generate 5 rage when a block, dodge, or parry occurs.",
"Increases your chance to block attacks with a shield by 4% and has a 80% chance to generate 5 rage when a block, dodge, or parry occurs.",
"Increases your chance to block attacks with a shield by 5% and has a 100% chance to generate 5 rage when a block, dodge, or parry occurs."
		];
i++;

//Improved Thunder Clap - Protection
rank[i] = [
"Reduces the cost of your Thunder Clap ability by 1 rage point and increases the damage by 10% and the slowing effect by an additional 4%.",
"Reduces the cost of your Thunder Clap ability by 2 rage point and increases the damage by 20% and the slowing effect by an additional 7%.",
"Reduces the cost of your Thunder Clap ability by 4 rage point and increases the damage by 30% and the slowing effect by an additional 10%."
];
i++;	

//Incite - Protection
rank[i]=[
"Increases the critical strike chance of your Heroic Strike, Thunder Clap and Cleave abilities by 5%.",
"Increases the critical strike chance of your Heroic Strike, Thunder Clap and Cleave abilities by 10%.",
"Increases the critical strike chance of your Heroic Strike, Thunder Clap and Cleave abilities by 15%."
		];
i++;
	
//Anticipation - Protection
rank[i]=[
"Increases your Dodge chance by 1%.",
"Increases your Dodge chance by 2%.",
"Increases your Dodge chance by 3%.",
"Increases your Dodge chance by 4%.",
"Increases your Dodge chance by 5%."
		];
i++;		

//Last Stand - Protection
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, this ability temporarily grants you 30% of your maximum health for 20 sec. After the effect expires, the health is lost."
		];
i++;

//Improved Revenge - Protection
rank[i]=[
"Increases damage of your Revenge ability by 30% and causes Revenge to strike an additional target for 50% damage.",
"Increases damage of your Revenge ability by 60% and causes Revenge to strike an additional target."
		];
i++;

//Shield Mastery - Protection
rank[i]=[
"Increases your block value by 15% and reduces the cooldown of your Shield Block ability by 10 sec.",
"Increases your block value by 30% and reduces the cooldown of your Shield Block ability by 20 sec."
		];
i++;

//Toughness - Protection
rank[i]=[
"Increases your armor value from items by 2% and reduces the duration of all movement slowing effects by 6%.",
"Increases your armor value from items by 4% and reduces the duration of all movement slowing effects by 12%.",
"Increases your armor value from items by 6% and reduces the duration of all movement slowing effects by 18%.",
"Increases your armor value from items by 8% and reduces the duration of all movement slowing effects by 24%.",
"Increases your armor value from items by 10% and reduces the duration of all movement slowing effects by 30%."
		];
i++;

//Improved Spell Reflection - Protection
rank[i]=[
"Reduces the chance you'll be hit by spells by 2% and when the ability is used it will reflect the first spell cast against the 2 closest party members within 20 yards.",
"Reduces the chance you'll be hit by spells by 4% and when the ability is used it will reflect the first spell cast against the 4 closest party members within 20 yards."
		];
i++;	

//Improved Disarm - Protection
rank[i]=[
"Reduces the cooldown of your Disarm ability by 10 sec and causes the target to take an additional 5% damage while disarmed.",
"Reduces the cooldown of your Disarm ability by 20 sec and causes the target to take an additional 10% damage while disarmed."
		];
i++;

//Puncture - Protection
rank[i]=[
"Reduces the rage cost of your Sunder Armor and Devastate abilities by 1.",
"Reduces the rage cost of your Sunder Armor and Devastate abilities by 2.",
"Reduces the rage cost of your Sunder Armor and Devastate abilities by 3."
		];
i++;	

//Improved Disciplines - Protection
rank[i]=[
"Reduces the cooldown of your Shield Wall, Retaliation and Recklessness abilities by 30 sec.",
"Reduces the cooldown of your Shield Wall, Retaliation and Recklessness abilities by 60 sec."
		];
i++;

//Concussion Blow - Protection
rank[i]=[
"<span style=text-align:left;float:left;>15 Rage</span><span style=text-align:right;float:right;>Melee Range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>30 sec cooldown</span><br>Requires Melee Weapon<br>Stuns the opponent for 5 sec and deals 4 damage (based on attack power)."
		];
i++;	

//Gag Order - Protection
rank[i]=[
"Gives your Shield Bash and Heroic Throw abilities a 50% chance to silence the target for 3 sec and increases the damage of your Shield Slam ability by 5%.",
"Gives your Shield Bash and Heroic Throw abilities a 100% chance to silence the target for 3 sec and increases the damage of your Shield Slam ability by 10%."
		];
i++;

//One-Handed Weapon Specialization - Protection
rank[i]=[
"Increases physical damage you deal when a one-handed melee weapon is equipped by 2%.",
"Increases physical damage you deal when a one-handed melee weapon is equipped by 4%.",
"Increases physical damage you deal when a one-handed melee weapon is equipped by 6%.",
"Increases physical damage you deal when a one-handed melee weapon is equipped by 8%.",
"Increases physical damage you deal when a one-handed melee weapon is equipped by 10%."
		];
i++;

//Improved Defensive Stance - Protection
rank[i]=[
"While in Defensive Stance all spell damage is reduced by 3% and when you Block, Parry or Dodge an attack you have a 50% chance to become Enraged, increasing melee damage caused by 5% for 12 sec.",
"While in Defensive Stance all spell damage is reduced by 6% and when you Block, Parry or Dodge an attack you have a 100% chance to become Enraged, increasing melee damage caused by 10% for 12 sec."
		];
i++;	

//Vigilance - Protection
rank[i]=[
"<span style=text-align:left;float:left;>30 yd range</span><br><span style=text-align:left;float:left;>Instant</span><br>Focus your protective gaze on a group or raid target, reducing their damage taken by 3% and transfers 10% of the threat they cause to you. In addition, each time they are hit by an attack your Taunt cooldown is refreshed. Lasts 30 min. This effect can only be on one target at a time."
		];
i++;	

//Focussed Rage - Protection
rank[i]=[
"Reduces the rage cost of your offensive abilities by 1.",
"Reduces the rage cost of your offensive abilities by 2.",
"Reduces the rage cost of your offensive abilities by 3.",
		];
i++;	

//Vitality - Protection
rank[i]=[
"Increases your total Strength by 2%, Stamina by 3% and your Expertise by 2.",
"Increases your total Strength by 4%, Stamina by 6% and your Expertise by 4.",
"Increases your total Strength by 6%, Stamina by 9% and your Expertise by 6."
		];
i++;	

//Safeguard - Protection
rank[i] = [
"Reduces damage taken by the target of your Intervene ability by 15% for 6 sec.",
"Reduces damage taken by the target of your Intervene ability by 30% for 6 sec."
		];
i++;

//Warbringer - Protection
rank[i] = [
"Your Charge, Intercept and Intervene abilities are now usable while in combat and in any stance. In addition, your Intervene ability will remove all movement impairing effects."
		];
i++;

//Devastate - Protection
rank[i]=[
"<span style=text-align:left;float:left;>15 Rage</span><span style=text-align:right;float:right;>Melee Range</span><br>Instant<br>Requires One-Handed Melee Weapon<br>Sunder the target's armor causing the Sunder Armor effect. In addition, causes 120% of weapon damage plus 58 for each application of Sunder Armor on the target. The Sunder Armor effect can stack up to 5 times."
		];
i++;	

//Critical Block - Arms	
rank[i] = [
"Your successful blocks have a 20% chance to block double the normal amount and increases your chance to criticially hit with your Shield Slam ability by an additional 5%.",
"Your successful blocks have a 40% chance to block double the normal amount and increases your chance to criticially hit with your Shield Slam ability by an additional 10%.",
"Your successful blocks have a 60% chance to block double the normal amount and increases your chance to criticially hit with your Shield Slam ability by an additional 15%."
		];
i++;

//Sword and Board - Protection
rank[i]=[
"Increases the critical strike chance of your Devastate ability by 5% and when your Devastate or Revenge ability deals damage it has a 10% chance of refreshing the cooldown of your Shield Slam ability and reducing its cost by 100% for 5 sec.",
"Increases the critical strike chance of your Devastate ability by 10% and when your Devastate or Revenge ability deals damage it has a 20% chance of refreshing the cooldown of your Shield Slam ability and reducing its cost by 100% for 5 sec.",
"Increases the critical strike chance of your Devastate ability by 15% and when your Devastate or Revenge ability deals damage it has a 30% chance of refreshing the cooldown of your Shield Slam ability and reducing its cost by 100% for 5 sec."
		];
i++;

//Damage Shield - Protection
rank[i] = [
"Whenever you take damage from or block a melee attack you cause damage equal to 10% of your block value.",
"Whenever you take damage from or block a melee attack you cause damage equal to 20% of your block value."
		];
i++;

//Shockwave - Prtection
rank[i] = [
"<span style=text-align:left;float:left;>15 Rage</span><span style=text-align:right;float:right;>Melee Range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>20 sec cooldown</span><br>Sends a wave of force in front of the warrior, causing 8 damage (based on attack power) and stunning all enemy targets within 10 yards in a frontal cone for 4 sec."
		];		
i++;

//Protection Talents End^^

