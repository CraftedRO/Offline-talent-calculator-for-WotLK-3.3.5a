var i = 0;
var t = 0;

var className = "Shaman Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Elemental"; i++;
tree[i] = "Enhancement"; i++;
tree[i] = "Restoration"; i++;

i = 0;

talent[i] = [0, "Convection", 5, 2, 1]; i++;
talent[i] = [0, "Concussion", 5, 3, 1]; i++;
talent[i] = [0, "Call of Flame", 3, 1, 2]; i++;
talent[i] = [0, "Elemental Warding", 3, 2, 2]; i++; 
talent[i] = [0, "Elemental Devastation", 3, 3, 2]; i++;
talent[i] = [0, "Reverberation", 5, 1, 3]; i++;
talent[i] = [0, "Elemental Focus", 1, 2, 3]; i++;
talent[i] = [0, "Elemental Fury", 5, 3, 3]; i++;
talent[i] = [0, "Improved Fire Nova", 2, 1, 4]; i++;
talent[i] = [0, "Eye of the Storm", 3, 4, 4]; i++;
talent[i] = [0, "Elemental Reach", 2, 1, 5]; i++;
talent[i] = [0, "Call of Thunder", 1, 2, 5, [getTalentID("Elemental Focus"),1]]; i++;
talent[i] = [0, "Unrelenting Storm", 3, 4, 5]; i++;
talent[i] = [0, "Elemental Precision", 3, 1, 6]; i++;
talent[i] = [0, "Lightning Mastery", 5, 3, 6, [getTalentID("Elemental Fury"),5]]; i++;
talent[i] = [0, "Elemental Mastery", 1, 2, 7, [getTalentID("Call of Thunder"),1]]; i++;
talent[i] = [0, "Storm, Earth and Fire", 3, 3, 7]; i++;
talent[i] = [0, "Booming Echoes", 2, 1, 8]; i++;
talent[i] = [0, "Elemental Oath", 2, 2, 8, [getTalentID("Elemental Mastery"),1]]; i++;
talent[i] = [0, "Lightning Overload", 3, 3, 8]; i++;
talent[i] = [0, "Astral Shift", 3, 1, 9]; i++;
talent[i] = [0, "Totem of Wrath", 1, 2, 9]; i++;
talent[i] = [0, "Lava Flows", 3, 3, 9]; i++;
talent[i] = [0, "Shamanism", 5, 2, 10]; i++;
talent[i] = [0, "Thunderstorm", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

//enhancement talents
talent[i] = [1, "Enhancing Totems", 3, 1, 1]; i++;
talent[i] = [1, "Earth's Grasp", 2, 2, 1]; i++;
talent[i] = [1, "Ancestral Knowledge", 5, 3, 1]; i++;
talent[i] = [1, "Guardian Totems", 2, 1, 2]; i++;
talent[i] = [1, "Thundering Strikes", 5, 2, 2]; i++;
talent[i] = [1, "Improved Ghost Wolf", 2, 3, 2]; i++;
talent[i] = [1, "Improved Shields", 3, 4, 2]; i++;
talent[i] = [1, "Elemental Weapons", 3, 1, 3]; i++;
talent[i] = [1, "Shamanistic Focus", 1, 3, 3]; i++;
talent[i] = [1, "Anticipation", 3, 4, 3]; i++;
talent[i] = [1, "Flurry", 5, 2, 4, [getTalentID("Thundering Strikes"),5]]; i++;
talent[i] = [1, "Toughness", 5, 3, 4]; i++;
talent[i] = [1, "Improved Windfury Totem", 2, 1, 5]; i++;
talent[i] = [1, "Spirit Weapons", 1, 2, 5]; i++;
talent[i] = [1, "Mental Dexterity", 3, 3, 5]; i++;
talent[i] = [1, "Unleashed Rage", 5, 1, 6]; i++;  
talent[i] = [1, "Weapon Mastery", 3, 3, 6]; i++;
talent[i] = [1, "Frozen Power", 2, 4, 6]; i++;
talent[i] = [1, "Dual Wield Specialization", 3, 1, 7, [i+1,1]]; i++;
talent[i] = [1, "Dual Wield", 1, 2, 7, [getTalentID("Spirit Weapons"),1]]; i++;
talent[i] = [1, "Stormstrike", 1, 3, 7]; i++;
talent[i] = [1, "Static Shock", 3, 1, 8]; i++; 
talent[i] = [1, "Lava Lash", 1, 2, 8, [getTalentID("Dual Wield"),1]]; i++;
talent[i] = [1, "Improved Stormstrike", 2, 3, 8, [getTalentID("Stormstrike"),1]]; i++;
talent[i] = [1, "Mental Quickness", 3, 1, 9]; i++;
talent[i] = [1, "Shamanistic Rage", 1, 2, 9]; i++;
talent[i] = [1, "Earthen Power", 2, 3, 9]; i++;
talent[i] = [1, "Maelstrom Weapon", 5, 2, 10]; i++;
talent[i] = [1, "Feral Spirit", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

//restoration talents
talent[i] = [2, "Improved Healing Wave", 5, 2, 1]; i++;
talent[i] = [2, "Totemic Focus", 5, 3, 1]; i++;
talent[i] = [2, "Improved Reincarnation", 2, 1, 2]; i++;
talent[i] = [2, "Healing Grace", 3, 2, 2]; i++;
talent[i] = [2, "Tidal Focus", 5, 3, 2]; i++;
talent[i] = [2, "Improved Water Shield", 3, 1, 3]; i++;
talent[i] = [2, "Healing Focus", 3, 2, 3]; i++;
talent[i] = [2, "Tidal Force", 1, 3, 3]; i++;
talent[i] = [2, "Ancestral Healing", 3, 4, 3]; i++;
talent[i] = [2, "Restorative Totems", 3, 2, 4]; i++;
talent[i] = [2, "Tidal Mastery", 5, 3, 4]; i++;
talent[i] = [2, "Healing Way", 3, 1, 5]; i++;
talent[i] = [2, "Nature's Swiftness", 1, 3, 5]; i++;
talent[i] = [2, "Focused Mind", 3, 4, 5]; i++;
talent[i] = [2, "Purification", 5, 3, 6]; i++;
talent[i] = [2, "Nature's Guardian", 5, 1, 7]; i++;
talent[i] = [2, "Mana Tide Totem", 1, 2, 7, [getTalentID("Restorative Totems"),3]]; i++;
talent[i] = [2, "Cleanse Spirit", 1, 3, 7, [getTalentID("Purification"),5]]; i++;
talent[i] = [2, "Blessing of the Eternals", 2, 1, 8]; i++;
talent[i] = [2, "Improved Chain Heal", 2, 2, 8]; i++;
talent[i] = [2, "Nature's Blessing", 3, 3, 8]; i++;
talent[i] = [2, "Ancestral Awakening", 3, 1, 9]; i++;
talent[i] = [2, "Earth Shield", 1, 2, 9,]; i++;
talent[i] = [2, "Improved Earth Shield", 2, 3, 9, [getTalentID("Earth Shield"),1]]; i++;
talent[i] = [2, "Tidal Waves", 5, 2, 10,]; i++;
talent[i] = [2, "Riptide", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

i = 0;


//Elemental Talents Begin

//Convection - Elemental
rank[i] = [
"Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, and Lava Burst, and Wind Shear spells by 2%.",
"Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, and Lava Burst, and Wind Shear spells by 4%.",
"Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, and Lava Burst, and Wind Shear spells by 6%.",
"Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, and Lava Burst, and Wind Shear spells by 8%.",
"Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, and Lava Burst, and Wind Shear spells by 10%."
		];
i++;		
		
//Concussion - Elemental
rank[i] = [
"Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by 1%.",
"Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by 2%.",
"Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by 3%.",
"Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by 4%.",
"Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by 5%."
		];
i++;		

//Call of Flame - Elemental
rank[i] = [
"Increases the damage done by your Fire Totems and Fire Nova by 5%, and damage done by your Lava Burst spell by 2%.",
"Increases the damage done by your Fire Totems and Fire Nova by 10%, and damage done by your Lava Burst spell by 4%.",
"Increases the damage done by your Fire Totems and Fire Nova by 15%, and damage done by your Lava Burst spell by 6%."
		];
i++;	

//Elemental Warding - Elemental
rank[i] = [
"Reduces all damage taken by 2%.",
"Reduces all damage taken by 4%.",
"Reduces all damage taken by 6%."
		];
i++;
	
//Elemental Devistation - Elemental 
rank[i] = [
"Your non-periodic offensive spell crits will increase your chance to get a critical strike with melee attacks by 3% for 10 sec.",
"Your non-periodic offensive spell crits will increase your chance to get a critical strike with melee attacks by 6% for 10 sec.",
"Your non-periodic offensive spell crits will increase your chance to get a critical strike with melee attacks by 9% for 10 sec."
		];
i++;

//Reverberation - Elemental
rank[i] = [
"Reduces the cooldown of your Shock spells and Wind Shear by 0.2 sec.",
"Reduces the cooldown of your Shock spells and Wind Shear by 0.4 sec.",
"Reduces the cooldown of your Shock spells and Wind Shear by 0.6 sec.",
"Reduces the cooldown of your Shock spells and Wind Shear by 0.8 sec.",
"Reduces the cooldown of your Shock spells and Wind Shear by 1 sec."
		];
i++;

//Elemental Focus - Elemental
rank[i] = [
"After landing a non-periodic critical strike with a Fire, Frost, or Nature damage spell, you enter a Clearcasting state. The Clearcasting state reduces the mana cost of your next 2 damage or healing spells by 40%."
		];		
i++;

//Elemental Fury - Elemental 
rank[i] = [
"Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 20%.",
"Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 40%.",
"Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 60%.",
"Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 80%.",
"Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 100%."
		];
i++;

//Improved Fire Nova - Elemental
rank[i] = [
"Increases the damage done by your Fire Nova by 10% and reduces the cooldown by 2 sec.",
"Increases the damage done by your Fire Nova by 20% and reduces the cooldown by 4 sec."
		];
i++;		

//Eye of the Storm - Elemental
rank[i] = [
"Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, Lava Burst and Hex spells by 23%.",
"Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, Lava Burst and Hex spells by 46%.",
"Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, Lava Burst and Hex spells by 70%."
		];
i++;

//Elemental Reach Reach - Elemental
rank[i] = [
"Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by 3 yards, increases the radius of your Thunderstorm spell by 10%, and increases the range of your Flame Shock by 7 yards.",
"Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by 6 yards, increases the radius of your Thunderstorm spell by 20%, and increases the range of your Flame Shock by 15 yards."
		];
i++;	

//Call of Thunder - Elemental
rank[i] = [ 
"Increases the critical strike chance of your Lightning Bolt, Chain Lightning and Thunderstorm spells by an additional 5%."
		];
i++;

//Unrelenting Storm - Elemental 
rank[i] = [
"Regenerate mana equal to 4% of your Intellect every 5 sec, even while casting.",
"Regenerate mana equal to 8% of your Intellect every 5 sec, even while casting.",
"Regenerate mana equal to 12% of your Intellect every 5 sec, even while casting."
		];
i++;		

//Elemental Precision - Elemental 
rank[i] = [
"Increases your chance to hit with Fire, Frost, and Nature spells by 1% and reduces the threat caused by Fire, Frost, and Nature spells by 10%.",
"Increases your chance to hit with Fire, Frost, and Nature spells by 2% and reduces the threat caused by Fire, Frost, and Nature spells by 20%.",
"Increases your chance to hit with Fire, Frost, and Nature spells by 3% and reduces the threat caused by Fire, Frost, and Nature spells by 30%."
		];
i++;		

//Lightning Mastery - Elemental  
rank[i] = [
"Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.1 sec.",
"Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.2 sec.",
"Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.3 sec.",
"Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.4 sec.",
"Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.5 sec."
		];
i++;		

//Elemental Mastery - Elemental				
rank[i] = [
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, your next Lightning Bolt, Chain Lightning or Lava Burst spell becomes an instant cast spell. In addition, you gain 15% spell haste for 15 sec. Elemental Mastery shares a cooldown with Nature's Swiftness."
		];
i++;		

//Storm, Earth and Fire - Elemental  
rank[i] = [
"Reduces the cooldown of your Chain Lightning spell by .75 sec, your Earthbind Totem also has a 33% chance to root targets for 5 sec when cast and the periodic damage done by your Flame Shock is increased by 20%.",
"Reduces the cooldown of your Chain Lightning spell by 1.5 sec, your Earthbind Totem also has a 66% chance to root targets for 5 sec when cast and the periodic damage done by your Flame Shock is increased by 40%.",
"Reduces the cooldown of your Chain Lightning spell by 2.5 sec, your Earthbind Totem also has a 100% chance to root targets for 5 sec when cast and the periodic damage done by your Flame Shock is increased by 60%."
		];
i++;

//Booming Echoes - Elemental  
rank[i] = [
"Reduces the cooldown of your Flame Shock and Frost Shock spells by an additional 1 sec., and increases the direct damage done by your Flame Shock and Frost Shock spells by an additional 10%.",
"Reduces the cooldown of your Flame Shock and Frost Shock spells by an additional 2 sec., and increases the direct damage done by your Flame Shock and Frost Shock spells by an additional 20%.",
		];
i++;

//Elemental Oath - Elemental  
rank[i] = [
"While Clearcasting from Elemental Focus is active, you deal 5% more spell damage. In addition, party and raid members within 100 yards receive a 3% bonus to their spell critical strike chance.",
"While Clearcasting from Elemental Focus is active, you deal 10% more spell damage. In addition, party and raid members within 100 yards receive a 5% bonus to their spell critical strike chance."
		];
i++;

//Lightning Overload - Elemental
rank[i] = [
"Gives your Lightning Bolt and Chain Lightning spells a 11% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
"Gives your Lightning Bolt and Chain Lightning spells a 22% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
"Gives your Lightning Bolt and Chain Lightning spells a 33% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat."
		];
i++;

//Astral Shift - Elemental
rank[i] = [
"When stunned, feared or silenced you shift into the Astral Plane reducing all damage taken by 10% for the duration of the stun, fear or silence effect.",
"When stunned, feared or silenced you shift into the Astral Plane reducing all damage taken by 20% for the duration of the stun, fear or silence effect.",
"When stunned, feared or silenced you shift into the Astral Plane reducing all damage taken by 30% for the duration of the stun, fear or silence effect."
		];
i++;

//Totem of Wrath - Elemental
rank[i] = [
"5% of base mana<br>Instant cast<br>Summons a Totem of Wrath with 5 health at the feet of the caster. The totem increases spell power by 100 for all party and raid members, and increases the critical strike chance of all attacks by 3% against all enemies within 40 yards. Lasts 5 min."
		];
i++;	

//Lava Flows - Elemental
rank[i] = [
"Increases the critical strike damage bonus of your Lava Burst spell by an additional 6%, and when your Flame Shock is dispelled your spell casting speed is increased by 10% for 6 sec.",
"Increases the critical strike damage bonus of your Lava Burst spell by an additional 12%, and when your Flame Shock is dispelled your spell casting speed is increased by 20% for 6 sec.",
"Increases the critical strike damage bonus of your Lava Burst spell by an additional 24%, and when your Flame Shock is dispelled your spell casting speed is increased by 30% for 6 sec."
		];
i++;

//Shamanism - Elemental
rank[i] = [
"Your Lightning Bolt and Chain Lightning spells gain an additional 4% and your Lava Burst gains an additional 5% of your bonus damage effects.",
"Your Lightning Bolt and Chain Lightning spells gain an additional 8% and your Lava Burst gains an additional 10% of your bonus damage effects.",
"Your Lightning Bolt and Chain Lightning spells gain an additional 12% and your Lava Burst gains an additional 15% of your bonus damage effects.",
"Your Lightning Bolt and Chain Lightning spells gain an additional 16% and your Lava Burst gains an additional 20% of your bonus damage effects.",
"Your Lightning Bolt and Chain Lightning spells gain an additional 20% and your Lava Burst gains an additional 25% of your bonus damage effects."
		];
i++;

//Thunderstorm - Elemental
rank[i] = [
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>45 sec cooldown</span><br>You call down a bolt of lightning, energizing you and damaging nearby enemies within 10 yards. Restores 8% mana to you and deals 551 - 629 Nature damage to all nearby enemies, knocking them back 20 yards. This spell is usable while stunned."
		];
i++;

//ENHANCEMENT TREE---------------------------------------------------------------------------------->

//Enhancing Totems - Enhancement	
rank[i] = [
"Increases the effect of your Strength of Earth and Flametongue Totems by 5%.",
"Increases the effect of your Strength of Earth and Flametongue Totems by 10%.",
"Increases the effect of your Strength of Earth and Flametongue Totems by 15%."
		];
i++;

//Earth's Grasp - Elemental
rank[i] = [
"Increases the health of your Stoneclaw Totem by 25% and the radius of your Earthbind Totem by 10% and reduces the cooldown of both totems by 15%.",
"Increases the health of your Stoneclaw Totem by 50% and the radius of your Earthbind Totem by 20% and reduces the cooldown of both totems by 15%."
		];
i++;

//Ancestral Knowledge - Enhancement
rank[i] = [
"Increases your Intellect by 2%.",
"Increases your Intellect by 4%.",
"Increases your Intellect by 6%.",
"Increases your Intellect by 8%.",
"Increases your Intellect by 10%."
		];
i++;		

//Guardian Totems - Enhancement
rank[i] = [
"Increases the amount of armor increased by your Stoneskin Totem 10% and reduces the cooldown of your Grounding Totem by 1 sec.",
"Increases the amount of armor increased by your Stoneskin Totem 20% and reduces the cooldown of your Grounding Totem by 2 sec."
		];
i++;		

//Thundering Strikes - Enhancement 
rank[i] = [
"Improves your chance to get a critical strike with all spells and attacks by 1%.",
"Improves your chance to get a critical strike with all spells and attacks by 2%.",
"Improves your chance to get a critical strike with all spells and attacks by 3%.",
"Improves your chance to get a critical strike with all spells and attacks by 4%.",
"Improves your chance to get a critical strike with all spells and attacks by 5%."
		];		
i++;		

//Improved Ghost Wolf - Enhancement 
rank[i] = [

"Reduces the cast time of your Ghost Wolf spell by 1 sec.",
"Reduces the cast time of your Ghost Wolf spell by 2 sec."
		];
i++;		

//Improved Shields - Enhancement
rank[i] = [
"Increases the damage done by your Lightning Shield orbs by 5%, increases the amount of mana gained from your Water Shield orbs by 5% and increases the amount of healing done by your Earth Shield orbs by 5%.",
"Increases the damage done by your Lightning Shield orbs by 10%, increases the amount of mana gained from your Water Shield orbs by 10% and increases the amount of healing done by your Earth Shield orbs by 10%.",
"Increases the damage done by your Lightning Shield orbs by 15%, increases the amount of mana gained from your Water Shield orbs by 15% and increases the amount of healing done by your Earth Shield orbs by 15%."
		];
i++;	

//Elemental Weapons - Enhancement 

rank[i] = [
"Increases the damage caused by your Windfury Weapon effect by 13% increases the spell damage on your Flametongue Weapon by 10% and increases the bonus healing on your Earthliving Weapon by 10%.",
"Increases the damage caused by your Windfury Weapon effect by 27% increases the spell damage on your Flametongue Weapon by 20% and increases the bonus healing on your Earthliving Weapon by 20%.",
"Increases the damage caused by your Windfury Weapon effect by 40% increases the spell damage on your Flametongue Weapon by 30% and increases the bonus healing on your Earthliving Weapon by 30%."
		];
i++;

//Shamanistic Focus - Enhancement  
rank[i] = [
"Reduces the mana cost of your Shock spells by 45%."
		];
i++;		

//Anticipation - Enhancement 
rank[i] = [
"Increases your chance to dodge by an additional 1%, and reduces the duration of all Disarm effects used against you by 16%. This does not stack with other Disarm duration reducing effects.",
"Increases your chance to dodge by an additional 2%, and reduces the duration of all Disarm effects used against you by 25%. This does not stack with other Disarm duration reducing effects.",
"Increases your chance to dodge by an additional 3%, and reduces the duration of all Disarm effects used against you by 50%. This does not stack with other Disarm duration reducing effects."
		];
i++;		

//Flurry - Enhancement
rank[i] = [
"Increases your attack speed by 6% for your next 3 swings after dealing a critical strike.",
"Increases your attack speed by 12% for your next 3 swings after dealing a critical strike.",
"Increases your attack speed by 18% for your next 3 swings after dealing a critical strike.",
"Increases your attack speed by 24% for your next 3 swings after dealing a critical strike.",
"Increases your attack speed by 30% for your next 3 swings after dealing a critical strike."
		];
i++;		

//Toughness - Enhancement 
rank[i]=[
"Increases your armor value from items by 2%, and reduces the duration of movement slowing effects on you by 6%.",
"Increases your armor value from items by 4%, and reduces the duration of movement slowing effects on you by 12%.",
"Increases your armor value from items by 6%, and reduces the duration of movement slowing effects on you by 18%.",
"Increases your armor value from items by 8%, and reduces the duration of movement slowing effects on you by 24%.",
"Increases your armor value from items by 10%, and reduces the duration of movement slowing effects on you by 30%."
		];
i++;		

//Improved Windfury Totem - Enhancement  
rank[i] = [
"Increases the melee haste granted by your Windfury totem by 2%.",
"Increases the melee haste granted by your Windfury totem by 4%."
		];
i++;

//Spirit Weapons - Enhancement
rank[i]=[
"Gives a chance to parry enemy melee attacks and reduces the threat generated by your melee attacks by 30%."
		];
i++;			

//Mental Dexterity - Enhancement 
rank[i] = [
"Increases your Attack Power by 33% of your Intellect.",
"Increases your Attack Power by 66% of your Intellect.",
"Increases your Attack Power by 100% of your Intellect."
		];
i++;
	
//Unleashed Rage - Enhancement
rank[i] = [
"Increases your expertise by 3, and increases all party and raid members' attack power by 4% while within 100 yards of the Shaman.",
"Increases your expertise by 6, and increases all party and raid members' attack power by 7% while within 100 yards of the Shaman.",
"Increases your expertise by 9, and increases all party and raid members' attack power by 10% while within 100 yards of the Shaman."
		];
i++;		

//Weapon Mastery - Enhancement
rank[i]=[
"Increases the damage you deal with all weapons by 4%.",
"Increases the damage you deal with all weapons by 7%.",
"Increases the damage you deal with all weapons by 10%."
		];
i++;

//Frozen Power - Enhancement
rank[i]=[
"Increases the damage done by your Lightning Bolt, Chain Lightning, Lava Lash and Shock spells by 5% on targets afflicted by your Frostbrand Attack effect, and your Frost Shock has a 50% chance to root the target in ice for 5 sec. when used on targets at or further than 15 yards from you.",
"Increases the damage done by your Lightning Bolt, Chain Lightning, Lava Lash and Shock spells by 10% on targets afflicted by your Frostbrand Attack effect, and your Frost Shock has a 100% chance to root the target in ice for 5 sec. when used on targets at or further than 15 yards from you."
		];
i++;	

//Dual Wield Specialization - Enhancement
rank[i]=[
"Increases your chance to hit while dual wielding by an additional 2%.",
"Increases your chance to hit while dual wielding by an additional 4%.",
"Increases your chance to hit while dual wielding by an additional 6%."
		];
i++;		

//Dual Wield - Enhancement
rank[i]=[
"Allows one-hand and off-hand weapons to be equipped in the off-hand."
		];
i++;		

//Stormstrike - Enhancement
rank[i]=[
"<span style=text-align:left;float:left;>8% of base mana</span><span style=text-align:right;float:right;>Melee Range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>8 sec cooldown</span><br><span style=text-align:left;float:left;>Requires Melee Weapon</span><BR>Instantly attack with both weapons. In addition, the next 4 sources of Nature damage dealt to the target from the Shaman are increased by 20%. Lasts 12 sec."
		];
i++;

//Static Shock - Enhancement 
rank[i] = [
"You have a 2% chance to hit your target with a Lightning Shield Orb charge when you deal damage with melee attacks and abilities, and increases the number of charges of your Lightning Shield by 2.",
"You have a 4% chance to hit your target with a Lightning Shield Orb charge when you deal damage with melee attacks and abilities, and increases the number of charges of your Lightning Shield by 4.",
"You have a 6% chance to hit your target with a Lightning Shield Orb charge when you deal damage with melee attacks and abilities, and increases the number of charges of your Lightning Shield by 6."
		];
i++;

//Lava Lash - Enhancement
rank[i]=[
"<span style=text-align:left;float:left;>4% of base mana</span><span style=text-align:right;float:right;>Melee Range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>6 sec cooldown</span><br>You charge your off-hand weapon with lava, instantly dealing 100% off-hand Weapon damage. Damage is increased by 25% if your off-hand weapon is enchanted with Flametongue."
		];
i++;		

//Improved Stormstrike - Enhancement
rank[i]=[
"When you Stormstrike, you have a 50% chance to immediately grant you 20% of your base mana.",
"When you Stormstrike, you have a 100% chance to immediately grant you 20% of your base mana."
		];
i++;

//Mental Quickness - Enhancement
rank[i]=[
"Reduces the mana cost of your instant cast Shaman spells by 2% and increases your spell power by an amount equal to 10% of your attack power.",
"Reduces the mana cost of your instant cast Shaman spells by 4% and increases your spell power by an amount equal to 20% of your attack power.",
"Reduces the mana cost of your instant cast Shaman spells by 6% and increases your spell power by an amount equal to 30% of your attack power."
		];
i++;

//Shamanistic Rage - Enhancement 
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>1 min cooldown</span><br>Reduces all damage taken by 30% and gives your successful melee attacks a chance to regenerate mana equal to 15% of your attack power. This spell is usable while stunned. Lasts 15 sec."
		];
i++;

//Earthen Power - Enhancement 
rank[i] = [
"Your Earthbind Totem's pulses have a 50% chance to also remove all snare effects from you and nearby friendly targets, and your Earth Shock reduces enemy attack speed by an additional 5%.",
"Your Earthbind Totem's pulses have a 100% chance to also remove all snare effects from you and nearby friendly targets, and your Earth Shock reduces enemy attack speed by an additional 10%."
		];
i++;

//Maelstrom Weapon - Enhancement
rank[i] = [
"When you deal damage with a melee weapon, you have a chance to reduce the cast time of your next Lightning Bolt, Chain Lightning, Lesser Healing Wave, Chain Heal or Healing Wave Spell by 20%. Stacks up to 5 times. Lasts 30 seconds.",
"When you deal damage with a melee weapon, you have a chance (higher than rank 1) to reduce the cast time of your next Lightning Bolt, Chain Lightning, Lesser Healing Wave, Chain Heal or Healing Wave Spell by 20%. Stacks up to 5 times. Lasts 30 seconds.",
"When you deal damage with a melee weapon, you have a chance (higher than rank 2) to reduce the cast time of your next Lightning Bolt, Chain Lightning, Lesser Healing Wave, Chain Heal or Healing Wave Spell by 20%. Stacks up to 5 times. Lasts 30 seconds.",
"When you deal damage with a melee weapon, you have a chance (higher than rank 3) to reduce the cast time of your next Lightning Bolt, Chain Lightning, Lesser Healing Wave, Chain Heal or Healing Wave Spell by 20%. Stacks up to 5 times. Lasts 30 seconds.",
"When you deal damage with a melee weapon, you have a chance (higher than rank 4) to reduce the cast time of your next Lightning Bolt, Chain Lightning, Lesser Healing Wave, Chain Heal or Healing Wave Spell by 20%. Stacks up to 5 times. Lasts 30 seconds."
		];
i++;

//Feral Spirit - Enhancement
rank[i] = [
"<span style=text-align:left;float:left;>12% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Summons two Spirit Wolves under the command of the Shaman, lasting 45 sec."
		];
i++;


//RESTORATION TREE------------------------------------------------------------------------------->
//Improved Healing Wave - Restoration 
rank[i]=[
"Reduces the casting time of your Healing Wave spell by 0.1 sec.",
"Reduces the casting time of your Healing Wave spell by 0.2 sec.",
"Reduces the casting time of your Healing Wave spell by 0.3 sec.",
"Reduces the casting time of your Healing Wave spell by 0.4 sec.",
"Reduces the casting time of your Healing Wave spell by 0.5 sec."
		];
i++;
	
//Totemic Focus - Restoration
rank[i]=[
"Reduces the Mana cost of your totems by 5%.",
"Reduces the Mana cost of your totems by 10%.",
"Reduces the Mana cost of your totems by 15%.",
"Reduces the Mana cost of your totems by 20%.",
"Reduces the Mana cost of your totems by 25%."
		];
i++;

//Improved Reincarnation - Restoration 
rank[i]=[
"Reduces the cooldown of your Reincarnation spell by 7 min and increases the amount of health and mana recovered when reincarnating by an additional 10%.",
"Reduces the cooldown of your Reincarnation spell by 15 min and increases the amount of health and mana recovered when reincarnating by an additional 20%."
		];
i++;		

//Healing Grace - Restoration 
rank[i]=[
"Increases your target's armor value by 8% for 15 sec after getting a critical effect from one of your healing spells.",
"Increases your target's armor value by 16% for 15 sec after getting a critical effect from one of your healing spells.",
"Increases your target's armor value by 25% for 15 sec after getting a critical effect from one of your healing spells."
		];
i++;		
		
//Tidal Focus - Restoration 
rank[i]=[
"Reduces the Mana cost of your healing spells by 1%.",
"Reduces the Mana cost of your healing spells by 2%.",
"Reduces the Mana cost of your healing spells by 3%.",
"Reduces the Mana cost of your healing spells by 4%.",
"Reduces the Mana cost of your healing spells by 5%."
		];
i++;		
		
//Improved Water Shield - Restoration      
rank[i]=[
"You have a 33% chance to instantly gain mana as if you consumed a Water Shield Orb when you gain a critical effect from your Healing Wave or Riptide spells, a 33% chance when you gain a critical effect from your Chain Heal spell.",
"You have a 66% chance to instantly gain mana as if you consumed a Water Shield Orb when you gain a critical effect from your Healing Wave or Riptide spells, a 66% chance when you gain a critical effect from your Chain Heal spell.",
"You have a 100% chance to instantly gain mana as if you consumed a Water Shield Orb when you gain a critical effect from your Healing Wave or Riptide spells, a 100% chance when you gain a critical effect from your Chain Heal spell."
		];
i++;		
	
//Healing Focus - Restoration  
rank[i]=[
"Reduces the pushback suffered from damaging attacks while casting any Shaman healing spell by 23%.",
"Reduces the pushback suffered from damaging attacks while casting any Shaman healing spell by 46%.",
"Reduces the pushback suffered from damaging attacks while casting any Shaman healing spell by 70%."
		];
i++;		
		
//Tidal Force - Restoration 
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Increases the critical effect chance of your Healing Wave, Lesser Healing Wave and Chain heal by 60%. Each critical heal reduces the chance by 20%. Lasts 20 sec."
		];
i++;		

//Ancestral Healing - Restoration 
rank[i]=[
"Reduces your target's physical damage taken by 3% for 15 sec after getting a critical effect from one of your healing spells.",
"Reduces your target's physical damage taken by 7% for 15 sec after getting a critical effect from one of your healing spells.",
"Reduces your target's physical damage taken by 10% for 15 sec after getting a critical effect from one of your healing spells."
		];
i++;	

//Restorative Totems - Restoration  
rank[i]=[
"Increases the effect of your Mana Spring Totem by 7%, and increases the amount healed by your Healing Stream Totem by 15%.",
"Increases the effect of your Mana Spring Totem by 12%, and increases the amount healed by your Healing Stream Totem by 30%.",
"Increases the effect of your Mana Spring Totem by 20%, and increases the amount healed by your Healing Stream Totem by 45%."
		];
i++;	

//Tidal Mastery - Restoration 
rank[i]=[
"Increases the critical effect chance of your healing and lightning spells by 1%.",
"Increases the critical effect chance of your healing and lightning spells by 2%.",
"Increases the critical effect chance of your healing and lightning spells by 3%.",
"Increases the critical effect chance of your healing and lightning spells by 4%.",
"Increases the critical effect chance of your healing and lightning spells by 5%."
		];
i++;	

//Healing Way - Restoration  
rank[i]=[
"Increases the amount healed by your Healing Wave spell by 8%.",
"Increases the amount healed by your Healing Wave spell by 16%.",
"Increases the amount healed by your Healing Wave spell by 25%."
		];
i++;

//Nature's Swiftness - Restoration
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>2 min cooldown</span><br>When activated, your next Nature spell with a base casting time less than 10 sec. becomes an instant cast spell. Nature's Swiftness shares a cooldown with Elemental Mastery."
		];
i++;	

//Focused Mind - Restoration  
rank[i]=[
"Reduces the duration of any Silence or Interrupt effects used against the Shaman by 10%. This effect does not stack with other similar effects.",
"Reduces the duration of any Silence or Interrupt effects used against the Shaman by 20%. This effect does not stack with other similar effects.",
"Reduces the duration of any Silence or Interrupt effects used against the Shaman by 30%. This effect does not stack with other similar effects."
		];
i++;	

//Purification - Restoration  
rank[i]=[
"Increases the effectiveness of your healing spells by 2%.",
"Increases the effectiveness of your healing spells by 4%.",
"Increases the effectiveness of your healing spells by 6%.",
"Increases the effectiveness of your healing spells by 8%.",
"Increases the effectiveness of your healing spells by 10%."
		];
i++;

//Nature's Guardian - Restoration  
rank[i]=[
"Whenever a damaging attack brings you below 30% health, your maximum health is increased by 3% for 10 sec and your threat level towards the attacker is reduced. 30 second cooldown.",
"Whenever a damaging attack brings you below 30% health, your maximum health is increased by 6% for 10 sec and your threat level towards the attacker is reduced. 30 second cooldown.",
"Whenever a damaging attack brings you below 30% health, your maximum health is increased by 9% for 10 sec and your threat level towards the attacker is reduced. 30 second cooldown.",
"Whenever a damaging attack brings you below 30% health, your maximum health is increased by 12% for 10 sec and your threat level towards the attacker is reduced. 30 second cooldown.",
"Whenever a damaging attack brings you below 30% health, your maximum health is increased by 15% for 10 sec and your threat level towards the attacker is reduced. 30 second cooldown."
		];
i++;

//Mana Tide Totem - Restoration 
rank[i]=[
"3% of base mana<br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>5 min cooldown</span><br>Summons a Mana Tide Totem with 10% of the caster's health at the feet of the caster for 12 sec that restores 6% of total mana every 3 seconds to group members within 30 yards."
		];
i++;

//Cleanse Spirit - Restoration 
rank[i]=[
"<span style=text-align:left;float:left;>7% of base mana</span><span style=text-align:right;float:right;>40 yd range</span><br>Instant Cast<br>Cleanse the spirit of a friendly target, removing 1 poison effect, 1 disease effect, and 1 curse effect."
		];
i++;

//Blessing of the Eternals - Restoration  
rank[i]=[
"Increases the critical effect chance of your spells by 2%, and increases the chance to apply the Earthliving heal over time effect on the target by 40% when they are at or under 35% total health.",
"Increases the critical effect chance of your spells by 4%, and increases the chance to apply the Earthliving heal over time effect on the target by 80% when they are at or under 35% total health."
		];
i++;

//Improved Chain Heal - Restoration  
rank[i]=[
"Increases the amount healed by your Chain Heal spell by 10%.",
"Increases the amount healed by your Chain Heal spell by 20%."
		];
i++;
	
//Nature's Blessing - Restoration  
rank[i]=[
"Increases your healing by an amount equal to 5% of your Intellect.",
"Increases your healing by an amount equal to 10% of your Intellect.",
"Increases your healing by an amount equal to 15% of your Intellect."
		];
i++;			
	
//Ancestral Awakening - Restoration  
rank[i]=[
"When you critically heal with your Healing Wave, Lesser Healing Wave or Riptide you summon an Ancestral spirit to aid you, instantly healing the lowest percentage health friendly party or raid target within 40 yards for 10% of the amount healed.",
"When you critically heal with your Healing Wave, Lesser Healing Wave or Riptide you summon an Ancestral spirit to aid you, instantly healing the lowest percentage health friendly party or raid target within 40 yards for 20% of the amount healed.",
"When you critically heal with your Healing Wave, Lesser Healing Wave or Riptide you summon an Ancestral spirit to aid you, instantly healing the lowest percentage health friendly party or raid target within 40 yards for 30% of the amount healed."
		];
i++;		

//Earth Shield - Restoration 
rank[i]=[
"<span style=text-align:left;float:left;>15% of base mana</span><span style=text-align:right;float:right;>40 yd range</span><br>Instant Cast<br>Protects the target with an earthen shield, reducing casting or channeling time lost when damaged by 30% and causing attacks to heal the shielded target for 150. This effect can only occur once every few seconds. 6 charges. Lasts 10 min. Earth Shield can only be placed on one target at a time and only one Elemental Shield can be active on a target at a time."
		];
i++;

//Improved Earth Shield - Restoration  
rank[i]=[
"Increases the amount of charges for your Earth Shield by 1, and increases the healing done by your Earth Shield by 5%.",
"Increases the amount of charges for your Earth Shield by 2, and increases the healing done by your Earth Shield by 10%."
		];
i++;	

//Tidal Waves - Restoration
rank[i]=[
"When you cast Chain Heal or Riptide, you have a 20% chance to lower the cast time of your Healing Wave spell by 30% and increase the critical effect chance of your Lesser Healing Wave spell by 25%, until two such spells have been cast. In addition, your Healing Wave gains an additional 4% of your bonus healing effects and your Lesser Healing Wave gains an additional 2% of your bonus healing effects.",
"When you cast Chain Heal or Riptide, you have a 40% chance to lower the cast time of your Healing Wave spell by 30% and increase the critical effect chance of your Lesser Healing Wave spell by 25%, until two such spells have been cast. In addition, your Healing Wave gains an additional 8% of your bonus healing effects and your Lesser Healing Wave gains an additional 4% of your bonus healing effects.",
"When you cast Chain Heal or Riptide, you have a 60% chance to lower the cast time of your Healing Wave spell by 30% and increase the critical effect chance of your Lesser Healing Wave spell by 25%, until two such spells have been cast. In addition, your Healing Wave gains an additional 12% of your bonus healing effects and your Lesser Healing Wave gains an additional 6% of your bonus healing effects.",
"When you cast Chain Heal or Riptide, you have a 80% chance to lower the cast time of your Healing Wave spell by 30% and increase the critical effect chance of your Lesser Healing Wave spell by 25%, until two such spells have been cast. In addition, your Healing Wave gains an additional 16% of your bonus healing effects and your Lesser Healing Wave gains an additional 8% of your bonus healing effects.",
"When you cast Chain Heal or Riptide, you have a 100% chance to lower the cast time of your Healing Wave spell by 30% and increase the critical effect chance of your Lesser Healing Wave spell by 25%, until two such spells have been cast. In addition, your Healing Wave gains an additional 20% of your bonus healing effects and your Lesser Healing Wave gains an additional 10% of your bonus healing effects."
		];
i++;	

//Riptide - Restoration 
rank[i]=[
"<span style=text-align:left;float:left;>18% of base mana</span><span style=text-align:right;float:right;>40 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>6 sec cooldown</span><br>Heals a friendly target for 639 to 691 and another 665 over 15 sec. Your next Chain Heal cast on that primary target within 15 sec will consume the healing over time effect and increase the amount of the Chain Heal by 25%."
		];
i++;

//Restoration Talents End^^

