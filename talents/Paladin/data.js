var i = 0;
var t = 0;

var className = "Paladin Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Holy"; i++;
tree[i] = "Protection"; i++;
tree[i] = "Retribution"; i++;

i = 0;

talent[i] = [0, "Spiritual Focus", 5, 2, 1]; i++;
talent[i] = [0, "Seals of the Pure", 5, 3, 1]; i++; 
talent[i] = [0, "Healing Light", 3, 1, 2]; i++;
talent[i] = [0, "Divine Intellect", 5, 2, 2]; i++;
talent[i] = [0, "Unyielding Faith", 2, 3, 2]; i++;
talent[i] = [0, "Aura Mastery", 1, 1, 3]; i++;
talent[i] = [0, "Illumination", 5, 2, 3]; i++;
talent[i] = [0, "Improved Lay on Hands", 2, 3, 3]; i++;
talent[i] = [0, "Improved Concentration Aura", 3, 1, 4]; i++;
talent[i] = [0, "Improved Blessing of Wisdom", 2, 3, 4]; i++;
talent[i] = [0, "Blessed Hands", 2, 4, 4]; i++;
talent[i] = [0, "Pure of Heart", 2, 1, 5]; i++;
talent[i] = [0, "Divine Favor", 1, 2, 5, [getTalentID("Illumination"),5]]; i++;
talent[i] = [0, "Sanctified Light", 3, 3, 5]; i++;
talent[i] = [0, "Purifying Power", 2, 1, 6]; i++;
talent[i] = [0, "Holy Power", 5, 3, 6]; i++;
talent[i] = [0, "Light's Grace", 3, 1, 7]; i++;
talent[i] = [0, "Holy Shock", 1, 2, 7, [getTalentID("Divine Favor"),1]]; i++;
talent[i] = [0, "Blessed Life", 3, 3, 7]; i++;
talent[i] = [0, "Sacred Cleansing", 3, 1, 8]; i++;
talent[i] = [0, "Holy Guidance", 5, 3, 8]; i++;
talent[i] = [0, "Divine Illumination", 1, 1, 9]; i++;
talent[i] = [0, "Judgements of the Pure", 5, 3, 9]; i++;
talent[i] = [0, "Infusion of Light", 2, 2, 10, [getTalentID("Holy Shock"),1]]; i++;
talent[i] = [0, "Enlightened Judgements", 2, 3, 10]; i++;
talent[i] = [0, "Beacon of Light", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

//protection talents

talent[i] = [1, "Divinity", 5, 2, 1]; i++;
talent[i] = [1, "Divine Strength", 5, 3, 1]; i++;
talent[i] = [1, "Stoicism", 3, 1, 2]; i++;
talent[i] = [1, "Guardian's Favor", 2, 2, 2]; i++;
talent[i] = [1, "Anticipation", 5, 3, 2]; i++;
talent[i] = [1, "Divine Sacrifice", 1, 1, 3]; i++;
talent[i] = [1, "Improved Righteous Fury", 3, 2, 3]; i++;
talent[i] = [1, "Toughness", 5, 3, 3]; i++;
talent[i] = [1, "Divine Guardian", 2, 1, 4, [getTalentID("Divine Sacrifice"),1]]; i++;
talent[i] = [1, "Improved Hammer of Justice", 2, 2, 4]; i++;
talent[i] = [1, "Improved Devotion Aura", 3, 3, 4]; i++;
talent[i] = [1, "Blessing of Sanctuary", 1, 2, 5]; i++;
talent[i] = [1, "Reckoning", 5, 3, 5]; i++;
talent[i] = [1, "Sacred Duty", 2, 1, 6]; i++;
talent[i] = [1, "One-Handed Weapon Specialization", 3, 3, 6]; i++;
talent[i] = [1, "Spiritual Attunement", 2, 1, 7]; i++;
talent[i] = [1, "Holy Shield", 1, 2, 7, [getTalentID("Blessing of Sanctuary"),1]]; i++;
talent[i] = [1, "Ardent Defender", 3, 3, 7]; i++;
talent[i] = [1, "Redoubt", 3, 1, 8]; i++;
talent[i] = [1, "Combat Expertise", 3, 3, 8]; i++;
talent[i] = [1, "Touched by the Light", 3, 1, 9]; i++;
talent[i] = [1, "Avenger's Shield", 1, 2, 9, [getTalentID("Holy Shield"),1]]; i++;
talent[i] = [1, "Guarded by the Light", 2, 3, 9]; i++;
talent[i] = [1, "Shield of the Templar", 3, 2, 10, [getTalentID("Avenger's Shield"),1]]; i++;
talent[i] = [1, "Judgements of the Just", 2, 3, 10]; i++;
talent[i] = [1, "Hammer of the Righteous", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

//retribution talents
talent[i] = [2, "Deflection", 5, 2, 1]; i++;
talent[i] = [2, "Benediction", 5, 3, 1]; i++;
talent[i] = [2, "Improved Judgements", 2, 1, 2]; i++;
talent[i] = [2, "Heart of the Crusader", 3, 2, 2]; i++;
talent[i] = [2, "Improved Blessing of Might", 2, 3, 2]; i++;
talent[i] = [2, "Vindication", 2, 1, 3]; i++;
talent[i] = [2, "Conviction", 5, 2, 3]; i++;
talent[i] = [2, "Seal of Command", 1, 3, 3]; i++;
talent[i] = [2, "Pursuit of Justice", 2, 4, 3]; i++;
talent[i] = [2, "Eye for an Eye", 2, 1, 4]; i++;
talent[i] = [2, "Sanctity of Battle", 3, 3, 4]; i++;
talent[i] = [2, "Crusade", 3, 4, 4]; i++;
talent[i] = [2, "Two-Handed Weapon Specialization", 3, 1, 5]; i++;
talent[i] = [2, "Sanctified Retribution", 1, 3, 5]; i++;
talent[i] = [2, "Vengeance", 3, 2, 6, [getTalentID("Conviction"),5]]; i++;
talent[i] = [2, "Divine Purpose", 2, 3, 6]; i++;
talent[i] = [2, "The Art of War", 2, 1, 7]; i++;
talent[i] = [2, "Repentance", 1, 2, 7]; i++;
talent[i] = [2, "Judgements of the Wise", 3, 3, 7]; i++;
talent[i] = [2, "Fanaticism", 3, 2, 8, [getTalentID("Repentance"),1]]; i++;
talent[i] = [2, "Sanctified Wrath", 2, 3, 8]; i++;
talent[i] = [2, "Swift Retribution", 3, 1, 9]; i++;
talent[i] = [2, "Crusader Strike", 1, 2, 9]; i++;
talent[i] = [2, "Sheath of Light", 3, 3, 9]; i++;
talent[i] = [2, "Righteous Vengeance", 3, 2, 10]; i++;
talent[i] = [2, "Divine Storm", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

i = 0;


//Holy Talents Begin

//Spiritual Focus - Holy
rank[i] = [
"Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 14%.",
"Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 28%.",
"Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 42%.",
"Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 56%.",
"Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 70%."
		];
i++;

//Seals of the Pure - Holy
rank[i] = [
"Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 3%.",
"Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 6%.",
"Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 9%.",
"Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 12%.",
"Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 15%."
		];
i++;	

//Healing Light - Holy
rank[i] = [
"Increases the amount healed by your Holy Light, Flash of Light and the effectiveness of Holy Shock spells by 4%.",
"Increases the amount healed by your Holy Light, Flash of Light and the effectiveness of Holy Shock spells by 8%.",
"Increases the amount healed by your Holy Light, Flash of Light and the effectiveness of Holy Shock spells by 12%."
		];
i++;
		
//Divine Intellect - Holy
rank[i] = [
"Increases your total Intellect by 2%.",
"Increases your total Intellect by 4%.",
"Increases your total Intellect by 6%.",
"Increases your total Intellect by 8%.",
"Increases your total Intellect by 10%."
		];
i++;

//Unyielding Faith - Holy
rank[i] = [ 
"Reduces the duration of all Fear and Disorient effects by 15%.",
"Reduces the duration of all Fear and Disorient effects by 30%."
		];
i++;
	
//Aura Mastery - Retribution 
rank[i]=[
"Causes your Concentration Aura to make all affected targets immune to Silence and Interrupt effects and improve the effect of all other auras by 100%. Lasts 6 sec."
		];
i++;

//Illumination - Holy
rank[i] = [
"After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 20% chance to gain Mana equal to 30% of the base cost of your spell.",
"After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 40% chance to gain Mana equal to 30% of the base cost of your spell.",
"After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 60% chance to gain Mana equal to 30% of the base cost of your spell.",
"After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 80% chance to gain Mana equal to 30% of the base cost of your spell.",
"After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 100% chance to gain Mana equal to 30% of the base cost of your spell."
		];
i++;

//Improved Lay on Hands - Holy
rank[i] = [
"Grants the target of your Lay on Hands spell 10% reduced physical damage taken for 15 sec. In addition, the cooldown for your Lay on Hands spell is reduced by 2 min.",
"Grants the target of your Lay on Hands spell 20% reduced physical damage taken for 15 sec. In addition, the cooldown for your Lay on Hands spell is reduced by 4 min."
		];
i++;

//Improved Concentration Aura - Holy
rank[i] = [
"Increases the effect of your Concentration Aura by an additional 5% and while any Aura is active reduces the duration of any Silence or Interrupt effect used against an affected group member by 10%. The duration reduction does not stack with any other effects.",
"Increases the effect of your Concentration Aura by an additional 10% and while any Aura is active reduces the duration of any Silence or Interrupt effect used against an affected group member by 20%. The duration reduction does not stack with any other effects.",
"Increases the effect of your Concentration Aura by an additional 15% and while any Aura is active reduces the duration of any Silence or Interrupt effect used against an affected group member by 30%. The duration reduction does not stack with any other effects."
		];i++;

//Improved Blessing of Wisdom - Holy
rank[i] = [
"Increases the effect of your Blessing of Wisdom spell by 10%.",
"Increases the effect of your Blessing of Wisdom spell by 20%."
		];
i++;		

//Blessed Hands - Holy
rank[i] = [
"Reduces the mana cost of Hand of Freedom, Hand of Sacrifice and Hand of Salvation by 15%, increases the effectiveness of Hand of Salvation by 50% and the effectiveness of Hand of Sacrifice by an additional 5%.",
"Reduces the mana cost of Hand of Freedom, Hand of Sacrifice and Hand of Salvation by 30%, increases the effectiveness of Hand of Salvation by 100% and the effectiveness of Hand of Sacrifice by an additional 10%."
		];
i++;

//Pure of Heart - Holy 
rank[i] = [
"Reduces the duration of Curse, Disease and Poison effects by 15%.",
"Reduces the duration of Curse, Disease and Poison effects by 30%."
		];
i++;		

//Divine Favor - Holy
rank[i] = [
"3% of base mana<br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>2 min cooldown</span><br>When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance."
		];
i++;		

//Sanctified Light - Holy
rank[i] = [
"Increases the critical effect chance of your Holy Light and Holy Shock spells by 2%.",
"Increases the critical effect chance of your Holy Light and Holy Shock spells by 4%.",
"Increases the critical effect chance of your Holy Light and Holy Shock spells by 6%."	
		];
i++;		

//Purifying Power - Holy
rank[i] = [
"Reduces the mana cost of your Cleanse, Purify, and Consecration spells by 5% and reduces the cooldown of your Exorcism and Holy Wrath spells by 17%.",
"Reduces the mana cost of your Cleanse, Purify, and Consecration spells by 10% and reduces the cooldown of your Exorcism and Holy Wrath spells by 33%."
		];
i++;	

//Holy Power - Holy
rank[i] = [
"Increases the critical effect chance of your Holy spells by 1%.",
"Increases the critical effect chance of your Holy spells by 2%.",
"Increases the critical effect chance of your Holy spells by 3%.",
"Increases the critical effect chance of your Holy spells by 4%.",
"Increases the critical effect chance of your Holy spells by 5%."
		];
i++;		

//Light's Grace - Holy
rank[i] = [
"Gives your Holy Light spell a 33% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec.",
"Gives your Holy Light spell a 66% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec.",
"Gives your Holy Light spell a 100% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec."
		];
i++;		

//Holy Shock - Holy
rank[i] = [
"<span style=text-align:right;float:right;>Enemy: 20 yd range</span><br><span style=text-align:left;float:left;>18% of base mana</span><span style=text-align:right;float:right;>Friendly: 40 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>6 sec cooldown</span><br>Blasts the target with Holy energy, causing 314 to 340 Holy damage to an enemy, or 481 - 519 healing to an ally."
		];
i++;		

//Blessed Life - Holy
rank[i] = [
"All attacks against you have a 4% chance to cause half damage.",
"All attacks against you have a 7% chance to cause half damage.",
"All attacks against you have a 10% chance to cause half damage."
		];
i++;

//Sacred Cleansing - Holy
rank[i] = [
"Your Cleanse spell has a 10% chance to increase the target's resistance to Disease, Magic and Poison by 30% for 10 sec.",
"Your Cleanse spell has a 20% chance to increase the target's resistance to Disease, Magic and Poison by 30% for 10 sec.",
"Your Cleanse spell has a 30% chance to increase the target's resistance to Disease, Magic and Poison by 30% for 10 sec."
		];
i++;

//Holy Guidance - Holy
rank[i] = [
"Increases your spell power by 4% of your total Intellect.",
"Increases your spell power by 8% of your total Intellect.",
"Increases your spell power by 12% of your total Intellect.",
"Increases your spell power by 16% of your total Intellect.",
"Increases your spell power by 20% of your total Intellect."
		];
i++;

//Divine Illumination - Holy			
rank[i] = [
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Reduces the mana cost of all spells by 50% for 15 sec."
		];
i++;

//Judgements of the Pure - Holy
rank[i] = [
"Increases the damage done by your Seal and Judgement spells by 5%, and your Judgement spells increase your casting and melee haste by 3% for 1 min.",
"Increases the damage done by your Seal and Judgement spells by 10%, and your Judgement spells increase your casting and melee haste by 6% for 1 min.",
"Increases the damage done by your Seal and Judgement spells by 15%, and your Judgement spells increase your casting and melee haste by 9% for 1 min.",
"Increases the damage done by your Seal and Judgement spells by 20%, and your Judgement spells increase your casting and melee haste by 12% for 1 min.",
"Increases the damage done by your Seal and Judgement spells by 25%, and your Judgement spells increase your casting and melee haste by 15% for 1 min."
		];
i++;

//Infusion of Light - Holy
rank[i] = [
"Your Holy Shock critical hits reduce the cast time of your next Flash of Light by 0.75 sec or increase the critical chance of your next Holy Light by 10%. In addition, causes your Flash of Light to heal targets with Sacred Shield for an additional 50% over 12 sec.",
"Your Holy Shock critical hits reduce the cast time of your next Flash of Light by 1.5 sec or increase the critical chance of your next Holy Light by 20%. In addition, causes your Flash of Light to heal targets with Sacred Shield for an additional 100% over 12 sec."
		];
i++;

//Enlightened Judgements - Holy
rank[i] = [
"Increases the range of your Judgement of Light and Judgement of Wisdom spells by 15 yards and increases your chance to hit by 2%.",
"Increases the range of your Judgement of Light and Judgement of Wisdom spells by 30 yards and increases your chance to hit by 4%."
		];
i++;

//Beacon of Light - Holy	
rank[i] = [
"<span style=text-align:left;float:left;>35% of base mana</span><span style=text-align:right;float:right;>60 yd range</span><br><span style=text-align:left;float:left;>Instant Cast</span><br>The target becomes a Beacon of Light to all members of your party or raid within a 60 yard radius. Any heals you cast on party or raid members will also heal the Beacon for 100% of the amount healed. Only one target can be the Beacon of Light at a time. Lasts 1 min."
		];
i++;

// PROTECTION TREE--------------------------------------------------------------------------



//Divinity - Protection
rank[i] = [
"Increases all healing done by you and all healing effects on you by 1%.",
"Increases all healing done by you and all healing effects on you by 2%.",
"Increases all healing done by you and all healing effects on you by 3%.",
"Increases all healing done by you and all healing effects on you by 4%.",
"Increases all healing done by you and all healing effects on you by 5%"
		];
i++;

//Divine Strength - Protection
rank[i] = [
"Increases your total Strength by 3%.",
"Increases your total Strength by 6%.",
"Increases your total Strength by 9%.",
"Increases your total Strength by 12%.",
"Increases your total Strength by 15%."
		];
i++;

//Stoicism - Protection
rank[i] = [
"Reduces the duration of all Stun effects by an additional 10% and reduces the chance your helpful spells and damage over time effects will be dispelled by an additional 10%.",
"Reduces the duration of all Stun effects by an additional 20% and reduces the chance your helpful spells and damage over time effects will be dispelled by an additional 20%.",
"Reduces the duration of all Stun effects by an additional 30% and reduces the chance your helpful spells and damage over time effects will be dispelled by an additional 30%."
		];
i++;

//Guardian's Favor - Protection 
rank[i] = [
"Reduces the cooldown of your Hand of Protection by 60 sec and increases the duration of your Hand of Freedom by 2 sec.",
"Reduces the cooldown of your Hand of Protection by 2 min and increases the duration of your Hand of Freedom by 4 sec."
		];		
i++;

//Anticipation - Protection
rank[i] = [
"Increases your chance to dodge by 1%.",
"Increases your chance to dodge by 2%.",
"Increases your chance to dodge by 3%.",
"Increases your chance to dodge by 4%.",
"Increases your chance to dodge by 5%."
		];
i++;

//Divine Sacrifice - Protection 
rank[i] = [
"30% of all damage taken by party members within 30 yards is redirected to the Paladin (up to a maximum of 40% of the Paladin's health times the number of party members). Damage which reduces the Paladin below 20% health will break the effect. Lasts 10 sec."
		];
i++;

//Improved Righteous Fury - Protection 
rank[i] = [
"While Righteous Fury is active, all damage taken is reduced by 2%.",
"While Righteous Fury is active, all damage taken is reduced by 4%.",
"While Righteous Fury is active, all damage taken is reduced by 6%."
		];
i++;		

//Toughness - Protection
rank[i] = [
"Increases your armor value from items by 2% and reduces the duration of all movement slowing effects by 6%.",
"Increases your armor value from items by 4% and reduces the duration of all movement slowing effects by 12%.",
"Increases your armor value from items by 6% and reduces the duration of all movement slowing effects by 18%.",
"Increases your armor value from items by 8% and reduces the duration of all movement slowing effects by 24%.",
"Increases your armor value from items by 10% and reduces the duration of all movement slowing effects by 30%."		
		];
i++;
	
//Divine Guardian - Protection 
rank[i] = [
"When Divine Sacrifice is activated, your party and raid members within 30 yards take 10% reduced damage for 6 sec. In addition, increases the duration of your Sacred Shield by 50% and the amount absorbed by 10%.",
"When Divine Sacrifice is activated, your party and raid members within 30 yards take 20% reduced damage for 6 sec. In addition, increases the duration of your Sacred Shield by 100% and the amount absorbed by 20%."
		];
i++;

//Improved Hammer of Justice - Protection 
rank[i] = [
"Decreases the cooldown of your Hammer of Justice spell by 10 sec.",
"Decreases the cooldown of your Hammer of Justice spell by 20 sec."
		];
i++;		

//Improved Devotion Aura - Protection
rank[i] = [
"Increases the armor bonus of your Devotion Aura by 17% and increases the amount healed on any target affected by any of your Auras by 2%.",
"Increases the armor bonus of your Devotion Aura by 34% and increases the amount healed on any target affected by any of your Auras by 4%.",
"Increases the armor bonus of your Devotion Aura by 50% and increases the amount healed on any target affected by any of your Auras by 6%."
		];
i++;			

//Blessing of Sanctuary - Protection
rank[i] = [
"<span style=text-align:left;float:left;>7% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br>Instant cast<br>Places a Blessing on the friendly target, reducing damage taken from all sources by 3% for 10 min and increasing strength and stamina by 10%. In addition, when the target blocks, parries, or dodges a melee attack the target will gain 2% of maximum displayed mana. Players may only have one Blessing on them per Paladin at any one time."
		];
i++;		

//Reckoning - Protection
rank[i] = [
"Gives you a 2% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
"Gives you a 4% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
"Gives you a 6% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
"Gives you a 8% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
"Gives you a 10% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack."						
		];
i++;

//Sacred Duty - Protection
rank[i] = [
"Increases your total Stamina by 2%, reduces the cooldown of your Divine Shield and Divine Protection spells by 30 sec.",
"Increases your total Stamina by 4%, reduces the cooldown of your Divine Shield and Divine Protection spells by 60 sec."
		];
i++;

//One-Handed Weapon Specialization - Protection
rank[i]=[
"Increases all damage you deal when a one-handed melee weapon is equipped by 4%.",
"Increases all damage you deal when a one-handed melee weapon is equipped by 7%.",
"Increases all damage you deal when a one-handed melee weapon is equipped by 10%."
		];
i++;

//Spiritual Attunement - Protection
rank[i] = [
"A passive ability that gives the Paladin mana when healed by other friendly targets' spells. The amount of mana gained is equal to 5% of the amount healed.",
"A passive ability that gives the Paladin mana when healed by other friendly targets' spells. The amount of mana gained is equal to 10% of the amount healed."
		];
i++;		

//Holy Shield - Protection
rank[i] = [
"10% of base mana<br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>8 sec cooldown</span><br>Requires Shields<br>Increases chance to block by 30% for 10 sec and deals 79 Holy damage for each attack blocked while active. Each block expends a charge. 8 charges.<br>"
		];
i++;

//Ardent Defender - Protection
rank[i]=[
"Damage that takes you below 35% health is reduced by 7%. In addition, attacks which would otherwise kill you cause you to be healed by up to 10% of your maximum health (amount healed based on defense). This healing effect cannot occur more often than once every 2 min.",
"Damage that takes you below 35% health is reduced by 13%. In addition, attacks which would otherwise kill you cause you to be healed by up to 20% of your maximum health (amount healed based on defense). This healing effect cannot occur more often than once every 2 min.",
"Damage that takes you below 35% health is reduced by 20%. In addition, attacks which would otherwise kill you cause you to be healed by up to 30% of your maximum health (amount healed based on defense). This healing effect cannot occur more often than once every 2 min."
			];
i++;

//Redoubt - Protection
rank[i] = [
"Increases your block value by 10% and damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 10%. Lasts 10 sec or 5 blocks.",
"Increases your block value by 20% and damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 20%. Lasts 10 sec or 5 blocks.",
"Increases your block value by 30% and damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 30%. Lasts 10 sec or 5 blocks."
		];
i++;
		
//Combat Expertise - Protection
rank[i]=[
"Increases your expertise by 2, total Stamina and chance to critically hit by 2%.",
"Increases your expertise by 4, total Stamina and chance to critically hit by 4%.",
"Increases your expertise by 6, total Stamina and chance to critically hit by 6%."
			];
i++;		

//Touched by the Light - Protection
rank[i] = [
"Increases your spell power by an amount equal to 20% of your Strength and increases the amount healed by your critical heals by 10%.",
"Increases your spell power by an amount equal to 40% of your Strength and increases the amount healed by your critical heals by 20%.",
"Increases your spell power by an amount equal to 60% of your Strength and increases the amount healed by your critical heals by 30%."		
		];
i++;	
	
//Avenger's Shield - Protection
rank[i] = [
"<span style=text-align:left;float:left;>26% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant Cast</span><span style=text-align:right;float:right;>30 sec cooldown</span><br>Hurls a holy shield at the enemy, dealing 441 to 537 Holy damage, Dazing them and then jumping to additional nearby enemies. Affects 3 total targets. Lasts 10 sec.<br>"
		];
i++;

//Guarded by the Light - Protection
rank[i]=[
"Reduces spell damage taken by 3% and gives a 50% chance to refresh the duration of your Divine Plea when you hit an enemy. In addition, your Divine Plea spell is 50% less likely to be dispelled.",
"Reduces spell damage taken by 6% and gives a 100% chance to refresh the duration of your Divine Plea when you hit an enemy. In addition, your Divine Plea spell is 100% less likely to be dispelled."
		];
i++;	

//Shield of the Templar - Protection
rank[i]=[
"Reduces all damage taken by 1% and grants your Avenger's Shield a 33% chance to silence your targets for 3 sec.",
"Reduces all damage taken by 2% and grants your Avenger's Shield a 66% chance to silence your targets for 3 sec.",
"Reduces all damage taken by 3% and grants your Avenger's Shield a 100% chance to silence your targets for 3 sec."
		];
i++;	

//Judgements of the Just - Protection
rank[i] = [
"Reduces the cooldown of your Hammer of Justice by 5 sec, increases the duration of your Seal of Justice effect by 0.5 sec and your Judgement spells also reduce the melee attack speed of the target by 10%.",
"Reduces the cooldown of your Hammer of Justice by 10 sec, increases the duration of your Seal of Justice effect by 1 sec and your Judgement spells also reduce the melee attack speed of the target by 20%."
		];
i++;

//Hammer of the Righteous - Protection
rank[i]=[
"<span style=text-align:left;float:left;>6% of base mana</span><span style=text-align:right;float:right;>Melee Range</span><br><span style=text-align:left;float:left;>Instant Cast</span><span style=text-align:right;float:right;>6 sec cooldown</span><br><span style=text-align:left;float:left;>Requires One-Handed Melee Weapon</span><br/>Hammer the current target and up to 2 additional nearby targets, causing 4 times your main hand damage per second as Holy damage."
		];
i++;
		
//RETRIBUTION TREE------------------------------------------------------------------------		

//Deflection - Retribution
rank[i]=[
"Increases your Parry chance by 1%.",
"Increases your Parry chance by 2%.",
"Increases your Parry chance by 3%.",
"Increases your Parry chance by 4%.",
"Increases your Parry chance by 5%."
		];
i++;

//Benediction - Retribution  
rank[i]=[
"Reduces the mana cost of all instant cast spells by 2%.",
"Reduces the mana cost of all instant cast spells by 4%.",
"Reduces the mana cost of all instant cast spells by 6%.",
"Reduces the mana cost of all instant cast spells by 8%.",
"Reduces the mana cost of all instant cast spells by 10%."
		];
i++;		

//Improved Judgements - Retribution 
rank[i]=[
"Decreases the cooldown of your Judgement spells by 1 sec.",
"Decreases the cooldown of your Judgement spells by 2 sec."
		];
i++;		

//Heart of the Crusader - Retribution  
rank[i]=[
"In addition to the normal effect, your Judgement spells will also increase the critical strike chance of all attacks made against that target by an additional 1%.",
"In addition to the normal effect, your Judgement spells will also increase the critical strike chance of all attacks made against that target by an additional 2%.",
"In addition to the normal effect, your Judgement spells will also increase the critical strike chance of all attacks made against that target by an additional 3%."
		];
i++;

//Improved Blessing of Might - Retribution
rank[i]=[
"Increases the attack power bonus of your Blessing of Might by 12%.",
"Increases the attack power bonus of your Blessing of Might by 25%."
		];
i++;	

//Vindication - Retribution
rank[i]=[
"Gives the Paladin's damaging attacks a chance to reduce the target's attack power by 23 for 10 sec.",
"Gives the Paladin's damaging attacks a chance to reduce the target's attack power by 46 for 10 sec."
		];
i++;		

//Conviction - Retribution
rank[i]=[
"Increases your chance to get a critical strike with all spells and attacks by 1%.",
"Increases your chance to get a critical strike with all spells and attacks by 2%.",
"Increases your chance to get a critical strike with all spells and attacks by 3%.",
"Increases your chance to get a critical strike with all spells and attacks by 4%.",
"Increases your chance to get a critical strike with all spells and attacks by 5%."				
		];
i++;	
		
//Seal of Command - Retribution
rank[i]=[
"14% of base mana<br/>Instant cast<br/>All melee attacks deal 2 to 3 additional Holy damage. When used with attacks or abilities that strike a single target, this additional Holy damage will strike up to 2 additional targets. Lasts 30 min.<br/><br/>Unleasing this Seal's energy will judge an enemy, instantly causing 2 to 2 Holy damage.<br>"
		];
i++;		

//Pursuit of Justice - Retribution
rank[i]=[
"Reduces the duration of all Disarm effects by 25% and increases movement and mounted movement speed by 8%. This does not stack with other movement speed increasing effects.",
"Reduces the duration of all Disarm effects by 50% and increases movement and mounted movement speed by 15%. This does not stack with other movement speed increasing effects."
		];
i++;		
		
//Eye for an Eye - Retribution  
rank[i]=[
"All criticals against you cause 5% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
"All criticals against you cause 10% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health."
		];
i++;

//Sanctity of Battle - Retribution 
rank[i]=[
"Increases your chance to critically hit with all spells and attacks by 1% and increases the damage caused by Exorcism and Crusader Strike by 5%.",
"Increases your chance to critically hit with all spells and attacks by 2% and increases the damage caused by Exorcism and Crusader Strike by 10%.",
"Increases your chance to critically hit with all spells and attacks by 3% and increases the damage caused by Exorcism and Crusader Strike by 15%."
		];
i++;

//Crusade - Retribution 
rank[i]=[
"Increases all damage caused by 1% and all damage caused against Humanoids, Demons, Undead and Elementals by an additional 1%.",
"Increases all damage caused by 2% and all damage caused against Humanoids, Demons, Undead and Elementals by an additional 2%.",
"Increases all damage caused by 3% and all damage caused against Humanoids, Demons, Undead and Elementals by an additional 3%."
		];
i++;

//Two-Handed Weapon Specialization - Retribution 
rank[i]=[
"Increases the damage you deal with two-handed melee weapons by 2%.",
"Increases the damage you deal with two-handed melee weapons by 4%.",
"Increases the damage you deal with two-handed melee weapons by 6%."
		];
i++;	

//Sanctified Retribution - Holy
rank[i] = [
"Increases the damage caused by Retribution Aura by 50% and all damage caused by friendly targets affected by any of your Auras is increased by 3%."
		];
i++;

//Vengeance - Retribution
rank[i]=[
"Gives you a 1% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell or ability. This effect stacks up to 3 times.",
"Gives you a 2% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell or ability. This effect stacks up to 3 times.",
"Gives you a 3% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell or ability. This effect stacks up to 3 times."
		];
i++;

//Divine Purpose - Retribution 
rank[i]=[
"Reduces your chance to be hit by spells and ranged attacks by 2% and gives your Hand of Freedom spell a 50% chance to remove any Stun effects on the target.",
"Reduces your chance to be hit by spells and ranged attacks by 4% and gives your Hand of Freedom spell a 100% chance to remove any Stun effects on the target."							
		];
i++;

//The Art of War - Retribution 
rank[i]=[
"Increases the critical strike damage of your Judgement, Crusader Strike and Divine Storm abilities by 5% and when melee attacks critically hit the cast time of your next Flash of Light or Exorcism is reduced by 0.75 sec.",
"Increases the critical strike damage of your Judgement, Crusader Strike and Divine Storm abilities by 10% and when melee attacks critically hit the cast time of your next Flash of Light or Exorcism becomes instant cast."			
		];
i++;

//Repentance - Protection
rank[i]=[
"<span style=text-align:left;float:left;>9% of base mana</span><span style=text-align:right;float:right;>20 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>1 min cooldown</span><br>Puts the enemy target in a state of meditation, incapacitating them for up to 1 min, and removing the effect of Righteous Vengeance. Any damage caused will awaken the target. Usable against Demons, Dragonkin, Giants, Humanoids and Undead."
		];
i++;		

//Judgements of the Wise- Retribution 
rank[i]=[
"Your damaging Judgement spells have a 33% chance to grant the Replenishment effect to up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec, and to immediately grant you 25% of your base mana.",
"Your damaging Judgement spells have a 66% chance to grant the Replenishment effect to up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec, and to immediately grant you 25% of your base mana.",
"Your damaging Judgement spells have a 100% chance to grant the Replenishment effect to up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec, and to immediately grant you 25% of your base mana."
		];
i++;	

//Fanaticism - Retribution 
rank[i]=[
"Increases the critical strike chance of all Judgements capable of a critical hit by 6% and reduces threat caused by all actions by 10% except when under the effects of Righteous Fury.",
"Increases the critical strike chance of all Judgements capable of a critical hit by 12% and reduces threat caused by all actions by 20% except when under the effects of Righteous Fury.",
"Increases the critical strike chance of all Judgements capable of a critical hit by 18% and reduces threat caused by all actions by 30% except when under the effects of Righteous Fury."								
		];
i++;

//Sanctified Wrath - Retribution 
rank[i]=[
"Increases the critical strike chance of Hammer of Wrath by 25%, reduces the cooldown of Avenging Wrath by 30 sec and while affected by Avenging Wrath 25% of all damage caused bypasses damage reduction effects.",
"Increases the critical strike chance of Hammer of Wrath by 50%, reduces the cooldown of Avenging Wrath by 60 sec and while affected by Avenging Wrath 50% of all damage caused bypasses damage reduction effects."							
		];
i++;

//Swift Retribution - Retribution 
rank[i]=[
"Your Retribution Aura also increases casting, ranged and melee attack speeds by 1%.",
"Your Retribution Aura also increases casting, ranged and melee attack speeds by 2%.",
"Your Retribution Aura also increases casting, ranged and melee attack speeds by 3%."							
		];
i++;

//Crusader Strike - Retribution
rank[i]=[
"<span style=text-align:left;float:left;>5% of base mana</span><span style=text-align:right;float:right;>Melee Range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>4 sec cooldown</span><br>Requires Melee Weapon<br>An instant strike that causes 75% weapon damage."						
		];
i++;

//Sheath of Light - Retribution 
rank[i]=[
"Increases your spell power by an amount equal to 10% of your attack power and your critical healing spells heal the target for 20% of the healed amount over 12 seconds.",
"Increases your spell power by an amount equal to 20% of your attack power and your critical healing spells heal the target for 40% of the healed amount over 12 seconds.",
"Increases your spell power by an amount equal to 30% of your attack power and your critical healing spells heal the target for 60% of the healed amount over 12 seconds."
		];
i++;

//Righteous Vengeance - Retribution
rank[i]=[
"When your Judgement and Divine Storm spells deal a critical strike, your target will take 10% additional damage over 8 sec.",
"When your Judgement and Divine Storm spells deal a critical strike, your target will take 20% additional damage over 8 sec.",
"When your Judgement and Divine Storm spells deal a critical strike, your target will take 30% additional damage over 8 sec.",
		];
i++;

//Divine Storm - Retribution
rank[i]=[
"<span style=text-align:left;float:left;>12% of base mana</span><span style=text-align:right;float:right;>Melee Range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>10 sec cooldown</span><br>Requires Melee Weapon<br>An instant weapon attack that causes 110% of weapon damage to up to 4 enemies within 8 yards. The Divine Storm heals up to 3 party or raid members totaling 25% of the damage caused."						
		];
i++;

//Retribution Talents End^^
jsLoaded=true;//needed for ajax script loading


