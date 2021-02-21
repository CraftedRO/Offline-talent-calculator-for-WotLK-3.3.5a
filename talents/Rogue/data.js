var i = 0;
var t = 0;

var className = "Rogue Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Assassination"; i++;
tree[i] = "Combat"; i++;
tree[i] = "Subtlety"; i++;

i = 0;

talent[i] = [0, "Improved Eviscerate", 3, 1, 1]; i++;
talent[i] = [0, "Remorseless Attacks", 2, 2, 1]; i++;
talent[i] = [0, "Malice", 5, 3, 1]; i++;
talent[i] = [0, "Ruthlessness", 3, 1, 2]; i++; 
talent[i] = [0, "Blood Spatter", 2, 2, 2]; i++;
talent[i] = [0, "Puncturing Wounds", 3, 4, 2]; i++;
talent[i] = [0, "Vigor", 1, 1, 3]; i++;
talent[i] = [0, "Improved Expose Armor", 2, 2, 3]; i++;
talent[i] = [0, "Lethality", 5, 3, 3, [getTalentID("Malice"),5]]; i++;
talent[i] = [0, "Vile Poisons", 3, 2, 4]; i++;
talent[i] = [0, "Improved Poisons", 5, 3, 4]; i++;
talent[i] = [0, "Fleet Footed", 2, 1, 5]; i++;
talent[i] = [0, "Cold Blood", 1, 2, 5]; i++;
talent[i] = [0, "Improved Kidney Shot", 3, 3, 5]; i++;
talent[i] = [0, "Quick Recovery", 2, 4, 5]; i++;
talent[i] = [0, "Seal Fate", 5, 2, 6, [getTalentID("Cold Blood"),1]]; i++;
talent[i] = [0, "Murder", 2, 3, 6]; i++;
talent[i] = [0, "Deadly Brew", 2, 1, 7]; i++;
talent[i] = [0, "Overkill", 1, 2, 7]; i++;
talent[i] = [0, "Deadened Nerves", 3, 3, 7]; i++;
talent[i] = [0, "Focused Attacks", 3, 1, 8]; i++;
talent[i] = [0, "Find Weakness", 3, 3, 8]; i++;
talent[i] = [0, "Master Poisoner", 3, 1, 9]; i++;
talent[i] = [0, "Mutilate", 1, 2, 9, [getTalentID("Overkill"),1]]; i++;
talent[i] = [0, "Turn the Tables", 3, 3, 9]; i++;
talent[i] = [0, "Cut to the Chase", 5, 2, 10]; i++;
talent[i] = [0, "Hunger For Blood", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

talent[i] = [1, "Improved Gouge", 3, 1, 1]; i++;
talent[i] = [1, "Improved Sinister Strike", 2, 2, 1]; i++;
talent[i] = [1, "Dual Wield Specialization", 5, 3, 1]; i++;
talent[i] = [1, "Improved Slice and Dice", 2, 1, 2]; i++;
talent[i] = [1, "Deflection", 3, 2, 2]; i++;
talent[i] = [1, "Precision", 5, 4, 2]; i++;
talent[i] = [1, "Endurance", 2, 1, 3]; i++;
talent[i] = [1, "Riposte", 1, 2, 3, [getTalentID("Deflection"),3]]; i++;
talent[i] = [1, "Close Quarters Combat", 5, 3, 3, [getTalentID("Dual Wield Specialization"),5]]; i++;
talent[i] = [1, "Improved Kick", 2, 1, 4]; i++;
talent[i] = [1, "Improved Sprint", 2, 2, 4]; i++;
talent[i] = [1, "Lightning Reflexes", 3, 3, 4]; i++;
talent[i] = [1, "Aggression", 5, 4, 4]; i++;
talent[i] = [1, "Mace Specialization", 5, 1, 5]; i++;
talent[i] = [1, "Blade Flurry", 1, 2, 5]; i++;
talent[i] = [1, "Hack and Slash", 5, 3, 5]; i++;
talent[i] = [1, "Weapon Expertise", 2, 2, 6, [getTalentID("Blade Flurry"),1]]; i++;
talent[i] = [1, "Blade Twisting", 2, 3, 6]; i++;
talent[i] = [1, "Vitality", 3, 1, 7]; i++;
talent[i] = [1, "Adrenaline Rush", 1, 2, 7]; i++;
talent[i] = [1, "Nerves of Steel", 2, 3, 7]; i++;
talent[i] = [1, "Throwing Specialization", 2, 1, 8]; i++;
talent[i] = [1, "Combat Potency", 5, 3, 8]; i++;
talent[i] = [1, "Unfair Advantage", 2, 1, 9]; i++;
talent[i] = [1, "Surprise Attacks", 1, 2, 9, [getTalentID("Adrenaline Rush"),1]]; i++;
talent[i] = [1, "Savage Combat", 2, 3, 9]; i++;
talent[i] = [1, "Prey on the Weak", 5, 2, 10]; i++;
talent[i] = [1, "Killing Spree", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

//shadow talents
talent[i] = [2, "Relentless Strikes", 5, 1, 1]; i++;
talent[i] = [2, "Master of Deception", 3, 2, 1]; i++;
talent[i] = [2, "Opportunity", 2, 3, 1]; i++;
talent[i] = [2, "Sleight of Hand", 2, 1, 2]; i++;
talent[i] = [2, "Dirty Tricks", 2, 2, 2]; i++;
talent[i] = [2, "Camouflage", 3, 3, 2]; i++;
talent[i] = [2, "Elusiveness", 2, 1, 3]; i++;
talent[i] = [2, "Ghostly Strike", 1, 2, 3]; i++;
talent[i] = [2, "Serrated Blades", 3, 3, 3]; i++;
talent[i] = [2, "Setup", 3, 1, 4]; i++;
talent[i] = [2, "Initiative", 3, 2, 4]; i++;
talent[i] = [2, "Improved Ambush", 2, 3, 4]; i++;
talent[i] = [2, "Heightened Senses", 2, 1, 5]; i++;
talent[i] = [2, "Preparation", 1, 2, 5]; i++;
talent[i] = [2, "Dirty Deeds", 2, 3, 5]; i++;
talent[i] = [2, "Hemorrhage", 1, 4, 5, [getTalentID("Serrated Blades"),3]]; i++;
talent[i] = [2, "Master of Subtlety", 3, 1, 6]; i++;
talent[i] = [2, "Deadliness", 5, 3, 6]; i++;
talent[i] = [2, "Enveloping Shadows", 3, 1, 7]; i++;
talent[i] = [2, "Premeditation", 1, 2, 7, [getTalentID("Preparation"),1]]; i++;
talent[i] = [2, "Cheat Death", 3, 3, 7]; i++;
talent[i] = [2, "Sinister Calling", 5, 2, 8, [getTalentID("Premeditation"),1]]; i++;
talent[i] = [2, "Waylay", 2, 3, 8]; i++;
talent[i] = [2, "Honor Among Thieves", 3, 1, 9]; i++;
talent[i] = [2, "Shadowstep", 1, 2, 9]; i++;
talent[i] = [2, "Filthy Tricks", 2, 3, 9]; i++;
talent[i] = [2, "Slaughter from the Shadows", 5, 2, 10]; i++;
talent[i] = [2, "Shadow Dance", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

i = 0;


//Assassination Talents Begin

//Improved Eviscerate - Assassination
rank[i] = [
"Increases the damage done by your Eviscerate ability by 7%.",
"Increases the damage done by your Eviscerate ability by 14%.",
"Increases the damage done by your Eviscerate ability by 20%."
		];
i++;		

//Remorseless Attacks - Assassination
rank[i] = [
"After killing an opponent that yields experience or honor, gives you a 20% increased critical strike chance on your next Sinister Strike, Hemorrhage, Backstab, Mutilate, Ambush, or Ghostly Strike. Lasts 20 sec.",
"After killing an opponent that yields experience or honor, gives you a 40% increased critical strike chance on your next Sinister Strike, Hemorrhage, Backstab, Mutilate, Ambush, or Ghostly Strike. Lasts 20 sec."
		];
i++;		

//Malice - Assassination	
rank[i] = [
"Increases your critical strike chance by 1%.",
"Increases your critical strike chance by 2%.",
"Increases your critical strike chance by 3%.",
"Increases your critical strike chance by 4%.",
"Increases your critical strike chance by 5%."
		];
i++;		
	
//Ruthlessness - Assassination	
rank[i] = [
"Gives your melee finishing moves a 20% chance to add a combo point to your target.",
"Gives your melee finishing moves a 40% chance to add a combo point to your target.",
"Gives your melee finishing moves a 60% chance to add a combo point to your target."
		];
i++;		

//Blood Spatter - Assassination
rank[i] = [
"Increases the damage caused by your Garrote and Rupture abilities by 15%.",
"Increases the damage caused by your Garrote and Rupture abilities by 30%."
		];
i++;

//Puncturing Wounds - Assassination
rank[i] = [
"Increases the critical strike chance of your Backstab ability by 10%, and the critical strike chance of your Mutilate ability by 5%.",
"Increases the critical strike chance of your Backstab ability by 20%, and the critical strike chance of your Mutilate ability by 10%.",
"Increases the critical strike chance of your Backstab ability by 30%, and the critical strike chance of your Mutilate ability by 15%."
		];
i++;	

//Vigor - Assassination
rank[i] = [
"Increases your maximum Energy by 10."
		];
i++;

//Improved Expose Armor - Assassination	
rank[i] = [ 
"Reduces the energy cost of your Expose Armor ability by 5.",
"Reduces the energy cost of your Expose Armor ability by 10."
		];
i++;		

//Lethality - Assassination
rank[i] = [
"Increases the critical strike damage bonus of all combo point-generating abilities that do not require stealth by 6%.",
"Increases the critical strike damage bonus of all combo point-generating abilities that do not require stealth by 12%.",
"Increases the critical strike damage bonus of all combo point-generating abilities that do not require stealth by 18%.",
"Increases the critical strike damage bonus of all combo point-generating abilities that do not require stealth by 24%.",
"Increases the critical strike damage bonus of all combo point-generating abilities that do not require stealth by 30%."
	];
i++;		

//Vile Poisons - Assassination
rank[i] = [
"Increases the damage dealt by your poisons and Envenom ability by 7% and gives your damage over time poisons an additional 10% chance to resist dispel effects.",
"Increases the damage dealt by your poisons and Envenom ability by 14% and gives your damage over time poisons an additional 20% chance to resist dispel effects.",
"Increases the damage dealt by your poisons and Envenom ability by 20% and gives your damage over time poisons an additional 30% chance to resist dispel effects."
		];
i++;		

//Improved Poisons - Assassination	
rank[i] = [
"Increases the chance to apply Deadly Poison to your target by 4% and the frequency of applying Instant Poison to your target by 10%.",
"Increases the chance to apply Deadly Poison to your target by 8% and the frequency of applying Instant Poison to your target by 20%.",
"Increases the chance to apply Deadly Poison to your target by 12% and the frequency of applying Instant Poison to your target by 30%.",
"Increases the chance to apply Deadly Poison to your target by 16% and the frequency of applying Instant Poison to your target by 40%.",
"Increases the chance to apply Deadly Poison to your target by 20% and the frequency of applying Instant Poison to your target by 50%."
		];
i++;		

//Fleet Footed - Assassination	
rank[i] = [
"Reduces the duration of all movement impairing effects by 15% and increases your movement speed by 8%. This does not stack with other movement speed increasing effects.",
"Reduces the duration of all movement impairing effects by 30% and increases your movement speed by 15%. This does not stack with other movement speed increasing effects."
		];
i++;

//Cold Blood - Assassination
rank[i] = [
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, increases the critical strike chance of your next offensive ability by 100%."
		];
i++;		

//Improved Kidney Shot - Assassination
rank[i] = [
"While affected by your Kidney Shot ability, the target receives an additional 3% damage from all sources.",
"While affected by your Kidney Shot ability, the target receives an additional 6% damage from all sources.",
"While affected by your Kidney Shot ability, the target receives an additional 9% damage from all sources."
		];
i++;		

//Quick Recovery - Assassination
rank[i] = [
"All healing effects on you are increased by 10%. In addition, your finishing moves cost 40% of their Energy when they fail to hit.",
"All healing effects on you are increased by 20%. In addition, your finishing moves cost 80% of their Energy when they fail to hit."
		];
i++;		

//Seal Fate - Assassination		
rank[i] = [
"Your critical strikes from abilities that add combo points have a 20% chance to add an additional combo point.",
"Your critical strikes from abilities that add combo points have a 40% chance to add an additional combo point.",
"Your critical strikes from abilities that add combo points have a 60% chance to add an additional combo point.",
"Your critical strikes from abilities that add combo points have a 80% chance to add an additional combo point.",
"Your critical strikes from abilities that add combo points have a 100% chance to add an additional combo point."
		];
i++;

//Murder - Assassination
rank[i] = [
"Increases all damage caused by 2%",
"Increases all damage caused by 4%"
		];
i++;

//Deadly Brew - Assassination
rank[i] = [
"When you apply Instant, Wound or Mind-Numbing poison to a target, you have a 50% chance to apply Crippling poison.",
"When you apply Instant, Wound or Mind-Numbing poison to a target, you have a 100% chance to apply Crippling poison."
		];
i++;	

//Overkill - Assassination
rank[i] = [
"While stealthed, and for 20 seconds after breaking stealth, you regenerate 30% additional energy.",
		];
i++;

//Deadened Nerves - Assassination
rank[i] = [
"Reduces all damage taken by 2%.",
"Reduces all damage taken by 4%.",
"Reduces all damage taken by 6%."
		];
i++;	

//Focused Attacks - Assassination
rank[i] = [
"Your melee critical strikes have a 33% chance to give you 2 energy.",
"Your melee critical strikes have a 66% chance to give you 2 energy.",
"Your melee critical strikes have a 100% chance to give you 2 energy."
		];
i++;

//Find Weakness - Assassination
rank[i] = [
"Offensive ability damage increased by 2%.",
"Offensive ability damage increased by 4%.",
"Offensive ability damage increased by 6%."
		];
i++;	

//Master Poisoner - Assassination
rank[i] = [
"Increases the critical hit chance of all attacks made against any target you have poisoned by 1%, reduces the duration of all Poison effects applied to you by 17%, and gives Envenom a 33% chance not to consume Deadly Poison.",
"Increases the critical hit chance of all attacks made against any target you have poisoned by 2%, reduces the duration of all Poison effects applied to you by 34%, and gives Envenom a 66% chance not to consume Deadly Poison.",
"Increases the critical hit chance of all attacks made against any target you have poisoned by 3%, reduces the duration of all Poison effects applied to you by 50%, and gives Envenom a 100% chance not to consume Deadly Poison."
		];
i++;

//Mutilate - Assassination
rank[i] = [
"<span style=text-align:left;float:left;>60 Energy</span><span style=text-align:right;float:right;>Melee range</span><br>Instant<br>Requires Daggers<br>Instantly attacks with both weapons for 100% weapon damage plus 44 with each weapon. Damage is increased by 20% against Poisoned targets. Awards 2 combo points."
		];
i++;	

//Turn the Tables - Assassination
rank[i] = [
"Whenever anyone in your party or raid blocks, dodges, or parries an attack your chance to critically hit with all combo moves is increased by 2% for 8 sec.",
"Whenever anyone in your party or raid blocks, dodges, or parries an attack your chance to critically hit with all combo moves is increased by 4% for 8 sec.",
"Whenever anyone in your party or raid blocks, dodges, or parries an attack your chance to critically hit with all combo moves is increased by 6% for 8 sec."
		];
i++;	

//Cut to the Chase - Assassination - TALENT DIFFERENT - description
rank[i] = [
"Your Eviscerate and Envenom abilities have a 20% chance to refresh your Slice and Dice duration to its 5 combo point maximum.",
"Your Eviscerate and Envenom abilities have a 40% chance to refresh your Slice and Dice duration to its 5 combo point maximum.",
"Your Eviscerate and Envenom abilities have a 60% chance to refresh your Slice and Dice duration to its 5 combo point maximum.",
"Your Eviscerate and Envenom abilities have a 80% chance to refresh your Slice and Dice duration to its 5 combo point maximum.",
"Your Eviscerate and Envenom abilities have a 100% chance to refresh your Slice and Dice duration to its 5 combo point maximum."
		];
i++;

//Hunger For Blood - Assassination
rank[i] = [
"<span style=text-align:left;float:left;>15 Energy</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant</span><br>Enrages you, increasing all damage caused by 5%. Requires a bleed effect to be active on the target. Lasts 1 min."
		];
i++;


//COMBAT TREE------------------------------------------------------------------------------
//Improved Gouge - Combat
rank[i] = [
"Increases the effect duration of your Gouge ability by 0.5 sec.",
"Increases the effect duration of your Gouge ability by 1 sec.",
"Increases the effect duration of your Gouge ability by 1.5 sec."
		];
i++;		

//Improved Sinister Strike - Combat 
rank[i] = [
"Reduces the Energy cost of your Sinister Strike ability by 3.",
"Reduces the Energy cost of your Sinister Strike ability by 5."
		];
i++;		

//Dual Wield Specialization - Combat  
rank[i] = [
"Increases the damage done by your offhand weapon by 10%.",
"Increases the damage done by your offhand weapon by 20%.",
"Increases the damage done by your offhand weapon by 30%.",
"Increases the damage done by your offhand weapon by 40%.",
"Increases the damage done by your offhand weapon by 50%."
		];
i++;

//Improved Slice and Dice - Combat
rank[i] = [
"Increases the duration of your Slice and Dice ability by 25%.",
"Increases the duration of your Slice and Dice ability by 50%."
		];
i++;		
	
//Deflection - Combat	
rank[i] = [
"Increases your Parry chance by 2%.",
"Increases your Parry chance by 4%.",
"Increases your Parry chance by 6%."
		];
i++;		

//Precision - Combat 
rank[i] = [
"Increases your chance to hit with weapon and poison attacks by 1%.",
"Increases your chance to hit with weapon and poison attacks by 2%.",
"Increases your chance to hit with weapon and poison attacks by 3%.",
"Increases your chance to hit with weapon and poison attacks by 4%.",
"Increases your chance to hit with weapon and poison attacks by 5%."
		];
i++;		

//Endurance - Combat
rank[i] = [
"Reduces the cooldown of your Sprint and Evasion abilities by 30 sec and increases your total Stamina by 2%.",
"Reduces the cooldown of your Sprint and Evasion abilities by 60 sec and increases your total Stamina by 4%."
		];
i++;	

//Riposte - Combat
rank[i] = [
"<span style=text-align:left;float:left;>10 Energy</span><span style=text-align:right;float:right;>Melee range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>6 sec cooldown</span><br>A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and slows their melee attack speed by 20% for 30 sec. Awards 1 combo point."
		];
i++;
	
//Close Quarters Combat - Combat  
rank[i] = [
"Increases your chance to get a critical strike with Daggers and Fist Weapons by 1%.",
"Increases your chance to get a critical strike with Daggers and Fist Weapons by 2%.",
"Increases your chance to get a critical strike with Daggers and Fist Weapons by 3%.",
"Increases your chance to get a critical strike with Daggers and Fist Weapons by 4%.",
"Increases your chance to get a critical strike with Daggers and Fist Weapons by 5%."
];
i++;

//Improved Kick - Combat 
rank[i] = [
"Gives your Kick ability a 50% chance to silence the target for 2 sec.",
"Gives your Kick ability a 100% chance to silence the target for 2 sec."
		];
i++;		

//Improved Sprint - Combat
rank[i] = [
"Gives a 50% chance to remove all movement imparing effects when you activate your Sprint ability.",
"Gives a 100% chance to remove all movement imparing effects when you activate your Sprint ability."
		];
i++;

//Lightning Reflexes - Combat
rank[i] = [
"Increases your Dodge chance by 2% and gives you 4% melee haste.",
"Increases your Dodge chance by 4% and gives you 7% melee haste.",
"Increases your Dodge chance by 6% and gives you 10% melee haste."
		];
i++;

//Aggression - Combat 
rank[i]=[
"Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 3%.",
"Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 6%.",
"Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 9%.",
"Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 12%.",
"Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 15%."
		];
i++;

//Mace Specialization - Combat 
rank[i] = [
"Your attacks with maces ignore up to 3% of your opponents armor.",
"Your attacks with maces ignore up to 6% of your opponents armor.",
"Your attacks with maces ignore up to 9% of your opponents armor.",
"Your attacks with maces ignore up to 12% of your opponents armor.",
"Your attacks with maces ignore up to 15% of your opponents armor.",
];
i++;
		
//Blade Flurry - Combat  
rank[i]=[
"25 Energy<br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>2 min cooldown</span><br>Increases your attack speed by 20%. In addition, attacks strike an additional nearby opponent. Lasts 15 sec."
			];
i++;			
			
//Hack and Slash - Combat
rank[i]=[
"Gives you a 1% chance to get an extra attack on the same target after hitting your target with your Sword or Axe.",
"Gives you a 2% chance to get an extra attack on the same target after hitting your target with your Sword or Axe.",
"Gives you a 3% chance to get an extra attack on the same target after hitting your target with your Sword or Axe.",
"Gives you a 4% chance to get an extra attack on the same target after hitting your target with your Sword or Axe.",
"Gives you a 5% chance to get an extra attack on the same target after hitting your target with your Sword or Axe."
		];
i++;

//Weapon Expertise - Combat 
rank[i]=[
"Increases your expertise by 5.",
"Increases your expertise by 10."
		];
i++;		

//Blade Twisting - Combat 
rank[i]=[
"Increases the damage dealt by Sinister Strike and Backstab by 5% and your damaging melee attacks have a 10% chance to Daze the target for 4 sec.",
"Increases the damage dealt by Sinister Strike and Backstab by 10% and your damaging melee attacks have a 10% chance to Daze the target for 8 sec."
];
i++;	

//Vitality - Combat 
rank[i]=[
"Increases your Energy regeneration rate by 8%.",
"Increases your Energy regeneration rate by 16%.",
"Increases your Energy regeneration rate by 25%."
		];
i++;
		
//Adrenaline Rush - Combat  
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Increases your Energy regeneration rate by 100% for 15 sec."
		];
i++;		

//Nerves of Steel - Combat 
rank[i]=[
"Reduces the damage taken while affected by Stun and Fear effects by 15%.",
"Reduces the damage taken while affected by Stun and Fear effects by 30%."
		];
i++;

//Throwing Specialization - Combat 
rank[i]=[
"Increases the range of Throw and Deadly Throw by 2 yards and gives your Deadly Throw a 50% chance to interrupt the target for 3 sec.",
"Increases the range of Throw and Deadly Throw by 4 yards and gives your Deadly Throw a 100% chance to interrupt the target for 3 sec."
		];
i++;

//Combat Potency - Combat 
rank[i]=[
"Gives your successful off-hand melee attacks a 20% chance to generate 3 Energy.",
"Gives your successful off-hand melee attacks a 20% chance to generate 6 Energy.",
"Gives your successful off-hand melee attacks a 20% chance to generate 9 Energy.",
"Gives your successful off-hand melee attacks a 20% chance to generate 12 Energy.",
"Gives your successful off-hand melee attacks a 20% chance to generate 15 Energy."
		];
i++;

//Unfair Advantage - Combat 
rank[i]=[
"Whenever you dodge an attack you gain an Unfair Advantage, striking back for 50% of your main hand weapon's damage. This cannot occur more than once per second.",
"Whenever you dodge an attack you gain an Unfair Advantage, striking back for 100% of your main hand weapon's damage. This cannot occur more than once per second."
		];
i++;

//Surprise Attack - Combat
rank[i] = [
"Your finishing moves can no longer be dodged, and the damage dealt by your Sinister Strike, Backstab, Shiv, Hemorrhage and Gouge abilities is increased by 10%."
		];
i++;		

//Savage Combat - Combat
rank[i]=[
"Increases your total attack power by 2% and all physical damage caused to enemies you have poisoned is increased by 2%.",
"Increases your total attack power by 4% and all physical damage caused to enemies you have poisoned is increased by 4%."
		];
i++;

//Prey on the Weak - Combat 
rank[i]=[
"Your critical strike damage is increased by 4% when the target has less health than you (as a percentage of total health).",
"Your critical strike damage is increased by 8% when the target has less health than you (as a percentage of total health).",
"Your critical strike damage is increased by 12% when the target has less health than you (as a percentage of total health).",
"Your critical strike damage is increased by 16% when the target has less health than you (as a percentage of total health).",
"Your critical strike damage is increased by 20% when the target has less health than you (as a percentage of total health)."
		];
i++;

//Killing Spree - Combat
rank[i]=[
"<span style=text-align:left;float:left;>10 yd range</span><br/><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>2 min cooldown</span><br><span style=text-align:left;float:left;>Requires Melee Weapon</span><br/>Step through the shadows from enemy to enemy within 10 yards, attacking an enemy every 0.5 sec with both weapons until 5 assaults are made, and increasing all damage done by 20% for the duration. Can hit the same target multiple times. Cannot hit invisible or stealthed targets."
		];
i++;	


//SUBTLETY------------------------------------------------------------------------------------->	

//Relentless Strikes - Subtlety
rank[i]=[
"Your finishing moves have a 4% chance per combo point to restore 25 energy.",
"Your finishing moves have a 8% chance per combo point to restore 25 energy.",
"Your finishing moves have a 12% chance per combo point to restore 25 energy.",
"Your finishing moves have a 16% chance per combo point to restore 25 energy.",
"Your finishing moves have a 20% chance per combo point to restore 25 energy."
		];
i++;

//Master of Deception - Subtlety
rank[i]=[
"Reduces the chance enemies have to detect you while in Stealth mode.",
"Reduces the chance enemies have to detect you while in Stealth mode. More effective than Master of Deception (Rank 1).",
"Reduces the chance enemies have to detect you while in Stealth mode. More effective than Master of Deception (Rank 2)."
		];
i++;		

//Opportunity - Subtlety
rank[i]=[
"Increases the damage dealt with your Backstab, Mutilate, Garrote, and Ambush abilities by 10%.",
"Increases the damage dealt with your Backstab, Mutilate, Garrote, and Ambush abilities by 20%."
		];
i++;		
		
//Sleight of Hand - Subtlety 
rank[i]=[
"Reduces the chance you are critically hit by melee and ranged attacks by 1% and increases the threat reduction of your Feint ability by 10%.",
"Reduces the chance you are critically hit by melee and ranged attacks by 2% and increases the threat reduction of your Feint ability by 20%."
		];
i++;				
		
//Dirty Tricks - Subtlety
rank[i]=[
"Increases the range of your Blind and Sap abilities by 2 yards and reduces the energy cost of your Blind and Sap abilities by 25%.",
"Increases the range of your Blind and Sap abilities by 5 yards and reduces the energy cost of your Blind and Sap abilities by 50%."
		];
i++;		

//Camouflage - Subtlety 
rank[i]=[
"Increases your speed while stealthed by 5% and reduces the cooldown of your Stealth ability by 2 sec.",
"Increases your speed while stealthed by 10% and reduces the cooldown of your Stealth ability by 4 sec.",
"Increases your speed while stealthed by 15% and reduces the cooldown of your Stealth ability by 6 sec."
		];
i++;	

//Elusiveness - Subtlety 
rank[i]=[
"Reduces the cooldown of your Vanish and Blind abilities by 30 sec. and your Cloak of Shadows ability by 15 sec.",
"Reduces the cooldown of your Vanish and Blind abilities by 60 sec. and your Cloak of Shadows ability by 30 sec."
		];
i++;

//Ghostly Strike - Subtlety
rank[i]=[
"<span style=text-align:left;float:left;>40 Energy</span><span style=text-align:right;float:right;>Melee range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>20 sec cooldown</span><br><span style='text-align:left;float:left;'>Requires Melee Weapon</span><br>A strike that deals 125% weapon damage (180% if a dagger is equipped) and increases your chance to dodge by 15% for 7 sec. Awards 1 combo point."
		];
i++;		

//Serrated Blades - Subtlety
rank[i]=[
"Causes your attacks to ignore up to 3% of your target's Armor and increases the damage dealt by your Rupture ability by 10%.",
"Causes your attacks to ignore up to 6% of your target's Armor and increases the damage dealt by your Rupture ability by 20%.",
"Causes your attacks to ignore up to 9% of your target's Armor and increases the damage dealt by your Rupture ability by 30%."
		];
i++;

//Setup - Subtlety 
rank[i]=[
"Gives you a 33% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells. This cannot happen more than once per second.",
"Gives you a 66% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells. This cannot happen more than once per second.",
"Gives you a 100% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells. This cannot happen more than once per second."
		];
i++;		

//Initiative - Subtlety 
rank[i]=[
"Gives you a 33% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
"Gives you a 66% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
"Gives you a 100% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability."
		];
i++;

//Improved Ambush - Subtlety
rank[i]=[
"Increases the critical strike chance of your Ambush ability by 25%.",
"Increases the critical strike chance of your Ambush ability by 50%."
		];
i++;

//Heightened Senses - Subtlety
rank[i]=[
"Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 2%.",
"Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 4%. More effective than Heightened Senses (Rank 1)."
		];
i++;			

//Preparation - Subtlety 
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>8 min cooldown</span><br>When activated, this ability immediately finishes the cooldown on your Evasion, Sprint, Vanish, Cold Blood and Shadowstep abilities."
		];
i++;		
	
//Dirty Deeds - Subtlety 
rank[i]=[
"Reduces the Energy Cost of your Cheap Shot and Garrote abilities by 10. Additionally, your special abilities cause 10% more damage against targets below 35% health.",
"Reduces the Energy Cost of your Cheap Shot and Garrote abilities by 20. Additionally, your special abilities cause 20% more damage against targets below 35% health."
		];
i++;	

//Hemorrhage - Subtlety 
rank[i]=[
"<span style=text-align:left;float:left;>35 Energy</span><span style=text-align:right;float:right;>Melee range</span><br>Instant<br>Requires Melee Weapon<br>An instant strike that deals 110% weapon damage (160% if a dagger is equipped) and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to 13. Lasts 10 charges or 15 sec. Awards 1 combo point."
		];
i++;		

//Master of Subtlety - Subtlety
rank[i]=[
"Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 4% damage.",
"Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 7% damage.",
"Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 10% damage."
		];
i++;

//Deadliness - Subtlety
rank[i]=[
"Increases your Attack Power by 2%.",
"Increases your Attack Power by 4%.",
"Increases your Attack Power by 6%.",
"Increases your Attack Power by 8%.",
"Increases your Attack Power by 10%."
		];
i++;		

//Enveloping Shadows - Subtlety
rank[i]=[
"Reduces the damage taken by area of effect attacks by 10%.",
"Reduces the damage taken by area of effect attacks by 20%.",
"Reduces the damage taken by area of effect attacks by 30%."
		];
i++;				
	
//Premeditation - Subtlety
rank[i]=[
"30 yd range<br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>20 sec cooldown</span><br><span style=color:eb0504>Requires Stealth</span><br>When used, adds 2 combo points to your target. You must add to or use those combo points within 20 sec or the combo points are lost."
		];
i++;	
	
//Cheat Death - Subtlety
rank[i]=[
"You have a 33% chance that an attack which would otherwise kill you will instead reduce you to 10% of your maximum health. In addition, all damage taken will be reduced by up to 90% for 3 sec (modified by resilience). This effect cannot occur more than once per minute.",
"You have a 66% chance that an attack which would otherwise kill you will instead reduce you to 10% of your maximum health. In addition, all damage taken will be reduced by up to 90% for 3 sec (modified by resilience). This effect cannot occur more than once per minute.",
"You have a 100% chance that an attack which would otherwise kill you will instead reduce you to 10% of your maximum health. In addition, all damage taken will be reduced by up to 90% for 3 sec (modified by resilience). This effect cannot occur more than once per minute."
		];
i++;	

//Sinister Calling - Subtlety
rank[i]=[
"Increases your total Agility by 3% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 2%.",
"Increases your total Agility by 6% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 4%.",
"Increases your total Agility by 9% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 6%.",
"Increases your total Agility by 12% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 8%.",
"Increases your total Agility by 15% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 10%."
		];
i++;	

//Waylay - Subtlety
rank[i]=[
"Your Ambush and Backstab hits have a 50% chance to unbalance a target, increasing the time between their melee and ranged attacks by 20%, and reducing movement speed by 50% for 8 sec.",
"Your Ambush and Backstab hits have a 100% chance to unbalance a target, increasing the time between their melee and ranged attacks by 20%, and reducing movement speed by 50% for 8 sec."
		];
i++;

//Honor Among Thieves - Subtlety
rank[i]=[
"When anyone in your group critically hits with a damage or healing spell or ability, you have a 33% chance to gain a combo point on your current target. This effect cannot occur more than once every second.",
"When anyone in your group critically hits with a damage or healing spell or ability, you have a 66% chance to gain a combo point on your current target. This effect cannot occur more than once every second.",
"When anyone in your group critically hits with a damage or healing spell or ability, you have a 100% chance to gain a combo point on your current target. This effect cannot occur more than once every second."
		];
i++;

//Shadowstep - Subtlety 
rank[i]=[
"<span style=text-align:left;float:left;>10 Energy</span><span style=text-align:right;float:right;>25 yd range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>30 sec cooldown</span><br>Attempts to step through the shadows and reappear behind your enemy and increases movement speed by 70% for 3 sec. The damage of your next ability is increased by 20% and the threat caused is reduced by 50%. Lasts 10 sec."
		];
i++;

//Filthy Tricks - Subtlety
rank[i]=[
"Reduces the cooldown by 5 sec and energy cost by 5 of your Tricks of the Trade, Distract and Shadowstep abilities and reduces the cooldown of Preparation by 1.5 min.",
"Reduces the cooldown by 10 sec and energy cost by 10 of your Tricks of the Trade, Distract and Shadowstep abilities and reduces the cooldown of Preparation by 3 min."
		];
i++;

//Slaughter form the Shadows - Subtlety
rank[i]=[
"Reduces the energy cost of your Backstab and Ambush abilities by 4 and the energy cost of your Hemorrhage by 1, and increases all damage done by 1%.",
"Reduces the energy cost of your Backstab and Ambush abilities by 8 and the energy cost of your Hemorrhage by 2, and increases all damage done by 2%.",
"Reduces the energy cost of your Backstab and Ambush abilities by 12 and the energy cost of your Hemorrhage by 3, and increases all damage done by 3%.",
"Reduces the energy cost of your Backstab and Ambush abilities by 16 and the energy cost of your Hemorrhage by 4, and increases all damage done by 4%.",
"Reduces the energy cost of your Backstab and Ambush abilities by 20 and the energy cost of your Hemorrhage by 5, and increases all damage done by 5%."
		];
i++;

//Shadow Dance - Subtlety 
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>1 min cooldown</span><br>Enter the Shadow Dance for 6 sec, allowing the use of Sap, Garrote, Ambush, Cheap Shot, Premeditation, Pickpocket and Disarm Trap regardless of being stealthed."
		];
i++;


//Subtlety Talents End^^
jsLoaded=true;//needed for ajax script loading
