var i = 0;
var t = 0;

var className = "Mage Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Arcane"; i++;
tree[i] = "Fire"; i++;
tree[i] = "Frost"; i++;

i = 0;

talent[i] = [0, "Arcane Subtlety", 2, 1, 1]; i++;
talent[i] = [0, "Arcane Focus", 3, 2, 1]; i++;
talent[i] = [0, "Arcane Stability", 5, 3, 1]; i++;
talent[i] = [0, "Arcane Fortitude", 3, 1, 2]; i++;
talent[i] = [0, "Magic Absorption", 2, 2, 2]; i++;
talent[i] = [0, "Arcane Concentration", 5, 3, 2]; i++;
talent[i] = [0, "Magic Attunement", 2, 1, 3]; i++;
talent[i] = [0, "Spell Impact", 3, 2, 3]; i++;
talent[i] = [0, "Student of the Mind", 3, 3, 3]; i++;
talent[i] = [0, "Focus Magic", 1, 4, 3]; i++;
talent[i] = [0, "Arcane Shielding", 2, 1, 4]; i++;
talent[i] = [0, "Improved Counterspell", 2, 2, 4]; i++;
talent[i] = [0, "Arcane Meditation", 3, 3, 4]; i++;
talent[i] = [0, "Torment the Weak", 3, 4, 4]; i++;
talent[i] = [0, "Improved Blink", 2, 1, 5]; i++;
talent[i] = [0, "Presence of Mind", 1, 2, 5]; i++;
talent[i] = [0, "Arcane Mind", 5, 4, 5]; i++;
talent[i] = [0, "Prismatic Cloak", 3, 1, 6]; i++;
talent[i] = [0, "Arcane Instability", 3, 2, 6, [getTalentID("Presence of Mind"),1]]; i++;
talent[i] = [0, "Arcane Potency", 2, 3, 6, [getTalentID("Presence of Mind"),1]]; i++;
talent[i] = [0, "Arcane Empowerment", 3, 1, 7]; i++;
talent[i] = [0, "Arcane Power", 1, 2, 7, [getTalentID("Arcane Instability"),3]]; i++;
talent[i] = [0, "Incanter's Absorption", 3, 3, 7]; i++;
talent[i] = [0, "Arcane Flows", 2, 2, 8, [getTalentID("Arcane Power"),1]]; i++;
talent[i] = [0, "Mind Mastery", 5, 3, 8]; i++;
talent[i] = [0, "Slow", 1, 2, 9]; i++;
talent[i] = [0, "Missile Barrage", 5, 3, 9]; i++;
talent[i] = [0, "Netherwind Presence", 3, 2, 10]; i++;
talent[i] = [0, "Spell Power", 2, 3, 10]; i++;
talent[i] = [0, "Arcane Barrage", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

//fire talents
talent[i] = [1, "Improved Fire Blast", 2, 1, 1]; i++;
talent[i] = [1, "Incineration", 3, 2, 1]; i++;
talent[i] = [1, "Improved Fireball", 5, 3, 1]; i++;
talent[i] = [1, "Ignite", 5, 1, 2]; i++;
talent[i] = [1, "Burning Determination", 2, 2, 2]; i++;
talent[i] = [1, "World in Flames", 3, 3, 2]; i++;
talent[i] = [1, "Flame Throwing", 2, 1, 3]; i++;
talent[i] = [1, "Impact", 3, 2, 3]; i++;
talent[i] = [1, "Pyroblast", 1, 3, 3]; i++;
talent[i] = [1, "Burning Soul", 2, 4, 3]; i++;
talent[i] = [1, "Improved Scorch", 3, 1, 4]; i++;
talent[i] = [1, "Molten Shields", 2, 2, 4]; i++;
talent[i] = [1, "Master of Elements", 3, 4, 4]; i++;
talent[i] = [1, "Playing with Fire", 3, 1, 5]; i++;
talent[i] = [1, "Critical Mass", 3, 2, 5]; i++;
talent[i] = [1, "Blast Wave", 1, 3, 5, [getTalentID("Pyroblast"),1]]; i++;
talent[i] = [1, "Blazing Speed", 2, 1, 6]; i++;
talent[i] = [1, "Fire Power", 5, 3, 6]; i++;
talent[i] = [1, "Pyromaniac", 3, 1, 7]; i++;
talent[i] = [1, "Combustion", 1, 2, 7, [getTalentID("Critical Mass"),3]]; i++;
talent[i] = [1, "Molten Fury", 2, 3, 7]; i++;
talent[i] = [1, "Fiery Payback", 2, 1, 8]; i++;
talent[i] = [1, "Empowered Fire", 3, 3, 8]; i++;
talent[i] = [1, "Firestarter", 2, 1, 9, [i+1,1]]; i++;
talent[i] = [1, "Dragon's Breath", 1, 2, 9, [getTalentID("Combustion"),1]]; i++;
talent[i] = [1, "Hot Streak", 3, 3, 9]; i++;
talent[i] = [1, "Burnout", 5, 2, 10]; i++;
talent[i] = [1, "Living Bomb", 1, 2, 11]; i++;


treeStartStop[t] = i -1;
t++;

//frost talents
talent[i] = [2, "Frostbite", 3, 1, 1]; i++;
talent[i] = [2, "Improved Frostbolt", 5, 2, 1]; i++;
talent[i] = [2, "Ice Floes", 3, 3, 1]; i++;
talent[i] = [2, "Ice Shards", 3, 1, 2]; i++;
talent[i] = [2, "Frost Warding", 2, 2, 2]; i++;
talent[i] = [2, "Elemental Precision", 3, 3, 2]; i++;
talent[i] = [2, "Permafrost", 3, 4, 2]; i++;
talent[i] = [2, "Piercing Ice", 3, 1, 3]; i++;
talent[i] = [2, "Icy Veins", 1, 2, 3]; i++;
talent[i] = [2, "Improved Blizzard", 3, 3, 3]; i++;
talent[i] = [2, "Arctic Reach", 2, 1, 4]; i++;
talent[i] = [2, "Frost Channeling", 3, 2, 4]; i++;
talent[i] = [2, "Shatter", 3, 3, 4]; i++;
talent[i] = [2, "Cold Snap", 1, 2, 5]; i++;
talent[i] = [2, "Improved Cone of Cold", 3, 3, 5]; i++;
talent[i] = [2, "Frozen Core", 3, 4, 5]; i++;
talent[i] = [2, "Cold as Ice", 2, 1, 6, [getTalentID("Cold Snap"),1]]; i++;
talent[i] = [2, "Winter's Chill", 3, 3, 6]; i++;
talent[i] = [2, "Shattered Barrier", 2, 1, 7, [i+1,1]]; i++;
talent[i] = [2, "Ice Barrier", 1, 2, 7, [getTalentID("Cold Snap"),1]]; i++;
talent[i] = [2, "Arctic Winds", 5, 3, 7]; i++;
talent[i] = [2, "Empowered Frostbolt", 2, 2, 8]; i++;
talent[i] = [2, "Fingers of Frost", 2, 3, 8]; i++;
talent[i] = [2, "Brain Freeze", 3, 1, 9]; i++;
talent[i] = [2, "Summon Water Elemental", 1, 2, 9]; i++;
talent[i] = [2, "Enduring Winter", 3, 3, 9, [getTalentID("Summon Water Elemental"),1]]; i++;
talent[i] = [2, "Chilled to the Bone", 5, 2, 10]; i++;
talent[i] = [2, "Deep Freeze", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

i = 0;

//Arcane Talents Begin

//Arcane Subtlety - Arcane
rank[i] = [
"Reduces the chance your helpful spells and damage over time effects will be dispelled by 15% and reduces the threat caused by your Arcane spells by 20%.",
"Reduces the chance your helpful spells and damage over time effects will be dispelled by 30% and reduces the threat caused by your Arcane spells by 40%."
		];
i++;		
		
//Arcane Focus - Arcane
rank[i] = [
"Increases your chance to hit and reduces the mana cost of your Arcane spells by 1%.",
"Increases your chance to hit and reduces the mana cost of your Arcane spells by 2%.",
"Increases your chance to hit and reduces the mana cost of your Arcane spells by 3%."
		];
i++;		

//Arcane Stability - Arcane
rank[i] = [
"Reduces the pushback suffered from damaging attacks while casting Arcane Missiles and Arcane Blast by 20%.",
"Reduces the pushback suffered from damaging attacks while casting Arcane Missiles and Arcane Blast by 40%.",
"Reduces the pushback suffered from damaging attacks while casting Arcane Missiles and Arcane Blast by 60%.",
"Reduces the pushback suffered from damaging attacks while casting Arcane Missiles and Arcane Blast by 80%.",
"Reduces the pushback suffered from damaging attacks while casting Arcane Missiles and Arcane Blast by 100%."
		];
i++;

//Arcane Fortitude - Arcane
rank[i] = [
"Increases your armor by an amount equal to 50% of your Intellect.",
"Increases your armor by an amount equal to 100% of your Intellect.",
"Increases your armor by an amount equal to 150% of your Intellect."
		];
i++;	
		
//Magic Absorption - Arcane
rank[i] = [
"Increases all resistances by 0.5 per level and causes all spells you fully resist to restore 1% of your total mana.  1 sec. cooldown.",
"Increases all resistances by 1 per level and causes all spells you fully resist to restore 2% of your total mana.  1 sec. cooldown."
		];
i++;		

//Arcane Concentration - Arcane	
rank[i] = [
"Gives you a 2% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage	spell by 100%.",
"Gives you a 4% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
"Gives you a 6% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
"Gives you a 8% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
"Gives you a 10% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%."
		];
i++;		

//Magic Attunement - Arcane
rank[i] = [
"Increases the range of your Arcane spells by 3 yards and the effect of your Amplify Magic and Dampen Magic spells by 25%.",
"Increases the range of your Arcane spells by 6 yards and the effect of your Amplify Magic and Dampen Magic spells by 50%."
		];
i++;		
		
//Spell Impact - Arcane	
rank[i] = [
"Increases the damage of your Arcane Explosion, Arcane Blast, Blast Wave, Fire Blast, Scorch, Fireball, Ice Lance and Cone of Cold spells by an additional 2%.",
"Increases the damage of your Arcane Explosion, Arcane Blast, Blast Wave, Fire Blast, Scorch, Fireball, Ice Lance and Cone of Cold spells by an additional 4%.",
"Increases the damage of your Arcane Explosion, Arcane Blast, Blast Wave, Fire Blast, Scorch, Fireball, Ice Lance and Cone of Cold spells by an additional 6%."
		];		
i++;

//Student of the Mind - Arcane	
rank[i] = [
"Increases your total Spirit by 4%.",
"Increases your total Spirit by 7%.",
"Increases your total Spirit by 10%."
		];		
i++;

//Focus Magic - Arcane TALENT DIFFERENT
rank[i] = [
"<span style=text-align:left;float:left;>6% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><br>Increases the target's chance to critically hit with all spells by 3%. When the target critically hits the caster's chance to critically hit with spells is increased by 3% for 10 sec."
		];
i++;	

//Arcane Shielding - Arcane		
rank[i] = [
"Decreases the mana lost per point of damage taken when Mana Shield is active by 17% and increases the resistances granted by Mage Armor by 25%.",
"Decreases the mana lost per point of damage taken when Mana Shield is active by 33% and increases the resistances granted by Mage Armor by 50%."
		];
i++;		

//Improved Counterspell - Arcane	
rank[i] = [
"Your Counterspell also silences the target for 2 sec.",
"Your Counterspell also silences the target for 4 sec."
		];
i++;		

//Arcane Meditation - Arcane		
rank[i] = [
"Allows 17% of your Mana regeneration to continue while casting.",
"Allows 33% of your Mana regeneration to continue while casting.",
"Allows 50% of your Mana regeneration to continue while casting."
		];
i++;	

//Torment the Weak - Arcane		
rank[i] = [
"Your Frostbolt, Fireball, Frostfire Bolt, Pyroblast, Arcane Missiles, Arcane Blast, and Arcane Barrage abilities deal 4% more damage to snared or slowed targets.",
"Your Frostbolt, Fireball, Frostfire Bolt, Pyroblast, Arcane Missiles, Arcane Blast, and Arcane Barrage abilities deal 8% more damage to snared or slowed targets.",
"Your Frostbolt, Fireball, Frostfire Bolt, Pyroblast, Arcane Missiles, Arcane Blast, and Arcane Barrage abilities deal 12% more damage to snared or slowed targets."
		];
i++;	

//Improved Blink - Arcane	
rank[i] = [
"Reduces the mana cost of Blink by 25% and for 4 sec after casting your chance to be hit by all attacks and spells is reduced by 15%.",
"Reduces the mana cost of Blink by 50% and for 4 sec after casting your chance to be hit by all attacks and spells is reduced by 30%."
		];
i++;

//Presence of Mind - Arcane
rank[i] = [
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>2 min cooldown</span><br>When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell."
		];
i++;		

//Arcane Mind - Arcane		
rank[i] = [
"Increases your total Intellect by 3%.",
"Increases your total Intellect by 6%.",
"Increases your total Intellect by 9%.",
"Increases your total Intellect by 12%.",
"Increases your total Intellect by 15%."
		];
i++;

//Prismatic Cloak - Arcane
rank[i]=[
"Reduces all damage taken by 2% and reduces the fade time of your Invisibility spell by 1 sec.",
"Reduces all damage taken by 4% and reduces the fade time of your Invisibility spell by 2 sec.",
"Reduces all damage taken by 6% and reduces the fade time of your Invisibility spell by 3 sec."
		];
i++;

//Arcane Instability - Arcane		
rank[i] = [
"Increases the damage done by your spells and your critical strike chance by 1%.",
"Increases the damage done by your spells and your critical strike chance by 2%.",
"Increases the damage done by your spells and your critical strike chance by 3%."
		];		
i++;

//Arcane Potency - Arcane		
rank[i] = [
"Increases the critical strike chance of your next damaging spell by 15% after gaining Clearcasting or Presence of Mind.",
"Increases the critical strike chance of your next damaging spell by 30% after gaining Clearcasting or Presence of Mind."
		];		
i++;

//Arcane Empowerment - Arcane
rank[i]=[
"Increases the damage of your Arcane Missiles spell by an amount equal to 15% of your spell power and the damage of your Arcane Blast by 3% of your spell power. In addition, increases the damage of all party and raid members within 100 yds by 1%.",
"Increases the damage of your Arcane Missiles spell by an amount equal to 30% of your spell power and the damage of your Arcane Blast by 6% of your spell power. In addition, increases the damage of all party and raid members within 100 yds by 2%.",
"Increases the damage of your Arcane Missiles spell by an amount equal to 45% of your spell power and the damage of your Arcane Blast by 9% of your spell power. In addition, increases the damage of all party and raid members within 100 yds by 3%."
		];
i++;

//Arcane Power - Arcane				
rank[i] = [
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>2 min cooldown</span><br>When activated, your spells deal 20% more damage while costing 20% more mana to cast. This effect lasts 15 sec."
		];
i++;	

//Incanter's Absorption - Arcane 
rank[i]=[
"When your Mana Shield, Frost Ward, Fire Ward, or Ice Barrier absorbs damage your spell damage is increased by 5% of the amount absorbed for 10 sec.",
"When your Mana Shield, Frost Ward, Fire Ward, or Ice Barrier absorbs damage your spell damage is increased by 10% of the amount absorbed for 10 sec.",
"When your Mana Shield, Frost Ward, Fire Ward, or Ice Barrier absorbs damage your spell damage is increased by 15% of the amount absorbed for 10 sec."
		];
i++;

//Arcane Flows - Arcane 
rank[i]=[
"Reduces the cooldown of your Presence of Mind, Arcane Power and Invisibility spells by 15% and the cooldown of your Evocation spell by 1 min.",
"Reduces the cooldown of your Presence of Mind, Arcane Power and Invisibility spells by 30% and the cooldown of your Evocation spell by 2 min.",
		];
i++;

//Mind Mastery - Arcane
rank[i]=[
"Increases spell power by 3% of your total Intellect.",
"Increases spell power by 6% of your total Intellect.",
"Increases spell power by 9% of your total Intellect.",
"Increases spell power by 12% of your total Intellect.",
"Increases spell power by 15% of your total Intellect."
		];
i++;

//Slow - Arcane
rank[i] = [
"<span style=text-align:left;float:left;>12% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><BR>Reduces target's movement speed by 60%, increases the time between ranged attacks by 60% and increases casting time by 30%. Lasts 15 sec. Slow can only affect one target at a time."
		];
i++;

//Missile Barrage - Arcane
rank[i] = [
"Gives your Arcane Blast a 8% chance, and your Arcane Barrage, Fireball, Frostbolt and Frostfire Bolt spells a 4% chance to reduce the channeled duration of the next Arcane Missiles spell by 2.5 sec, reduce the mana cost by 100%, and missiles will fire every 0.5 sec.",
"Gives your Arcane Blast a 16% chance, and your Arcane Barrage, Fireball, Frostbolt and Frostfire Bolt spells a 8% chance to reduce the channeled duration of the next Arcane Missiles spell by 2.5 sec, reduce the mana cost by 100%, and missiles will fire every 0.5 sec.",
"Gives your Arcane Blast a 24% chance, and your Arcane Barrage, Fireball, Frostbolt and Frostfire Bolt spells a 12% chance to reduce the channeled duration of the next Arcane Missiles spell by 2.5 sec, reduce the mana cost by 100%, and missiles will fire every 0.5 sec.",
"Gives your Arcane Blast a 32% chance, and your Arcane Barrage, Fireball, Frostbolt and Frostfire Bolt spells a 16% chance to reduce the channeled duration of the next Arcane Missiles spell by 2.5 sec, reduce the mana cost by 100%, and missiles will fire every 0.5 sec.",
"Gives your Arcane Blast a 40% chance, and your Arcane Barrage, Fireball, Frostbolt and Frostfire Bolt spells a 20% chance to reduce the channeled duration of the next Arcane Missiles spell by 2.5 sec, reduce the mana cost by 100%, and missiles will fire every 0.5 sec."
		];
i++;

//Netherwind Presence - Arcane
rank[i] = [
"Increases your spell haste by 2%.",
"Increases your spell haste by 4%.",
"Increases your spell haste by 6%."
		];
i++;

//Spell Power - Arcane 
rank[i]=[
"Increases critical strike damage bonus of all spells by 25%.",
"Increases critical strike damage bonus of all spells by 50%."
		];
i++;

//Arcane Barrage - Arcane		
rank[i] = [
"<span style=text-align:left;float:left;>18% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>3 sec cooldown</span><BR>Launches several missiles at the enemy target, causing 386 to 470 Arcane damage.<br>"
		];
i++;

//FIRE TALENTS---------------------------------------------------

//Improved Fire Blast - Fire	
rank[i] = [
"Reduces the cooldown of your Fire Blast spell by 1 sec.",
"Reduces the cooldown of your Fire Blast spell by 2 sec."
		];
i++;	

//Incineration - Fire	
rank[i] = [
"Increases the critical strike chance of your Fire Blast, Scorch, Arcane Blast and Cone of Cold spells by 2%.",
"Increases the critical strike chance of your Fire Blast, Scorch, Arcane Blast and Cone of Cold spells by 4%.",
"Increases the critical strike chance of your Fire Blast, Scorch, Arcane Blast and Cone of Cold spells by 6%."
		];
i++;

//Improved Fireball - Fire	
rank[i] = [
"Reduces the casting time of your Fireball spell by 0.1 sec.",
"Reduces the casting time of your Fireball spell by 0.2 sec.",
"Reduces the casting time of your Fireball spell by 0.3 sec.",
"Reduces the casting time of your Fireball spell by 0.4 sec.",
"Reduces the casting time of your Fireball spell by 0.5 sec."
		];
i++;

//Ignite - Fire		
rank[i] = [
"Your critical strikes from Fire damage spells cause the target to burn for an additional 8% of your spell's damage over 4 sec.",
"Your critical strikes from Fire damage spells cause the target to burn for an additional 16% of your spell's damage over 4 sec.",
"Your critical strikes from Fire damage spells cause the target to burn for an additional 24% of your spell's damage over 4 sec.",
"Your critical strikes from Fire damage spells cause the target to burn for an additional 32% of your spell's damage over 4 sec.",
"Your critical strikes from Fire damage spells cause the target to burn for an additional 40% of your spell's damage over 4 sec."
		];
i++;	

//Burning Determination - Fire
rank[i] = [
"When Interrupted or Silenced you have a 50% chance to become immune to the next Interrupt or Silence mechanic. Lasts 20 sec.",
"When Interrupted or Silenced you have a 100% chance to become immune to the next Interrupt or Silence mechanic. Lasts 20 sec."
		];
i++;

//World in Flames - Fire
rank[i] = [
"Increases the critical strike chance of your Flamestrike, Pyroblast, Blast Wave, Dragon's Breath, Living Bomb, Blizzard and Arcane Explosion spells by 2%.",
"Increases the critical strike chance of your Flamestrike, Pyroblast, Blast Wave, Dragon's Breath, Living Bomb, Blizzard and Arcane Explosion spells by 4%.",
"Increases the critical strike chance of your Flamestrike, Pyroblast, Blast Wave, Dragon's Breath, Living Bomb, Blizzard and Arcane Explosion spells by 6%."
		];
i++;

//Flame Throwing - Fire
rank[i] = [
"Increases the range of all Fire spells exept Frostfire Bolt by 3 yards.",
"Increases the range of all Fire spells exept Frostfire Bolt by 6 yards."
		];
i++;

//Impact - Fire			
rank[i] = [
"Gives your damaging spells a 4% chance to cause the next Fire Blast you cast to stun the target for 2 sec.",
"Gives your damaging spells a 7% chance to cause the next Fire Blast you cast to stun the target for 2 sec.",
"Gives your damaging spells a 10% chance to cause the next Fire Blast you cast to stun the target for 2 sec."
		];
i++;

//Pyroblast - Fire
rank[i] = [
"<span style=text-align:left;float:left;>22% of base mana</span><span style=text-align:right;float:right;>35 yd range</span><br><span style=text-align:left;float:left;>5 sec cast</span><br>Hurls an immense fiery boulder that causes 141 to 187 Fire damage and an additional 56 Fire damage over 12 sec.<br>"
		];		
i++;

//Burning Soul - Fire
rank[i] = [
"Reduces the pushback suffered from damaging attacks while casting Fire spells by 35% and reduces the threat caused by your Fire spells by 10%.",
"Reduces the pushback suffered from damaging attacks while casting Fire spells by 70% and reduces the threat caused by your Fire spells by 20%."
		];
i++;

//Improved Scorch - Fire
rank[i] = [
"Increases your chance to critically hit with Scorch, Fireball and Frostfire Bolt by an additional 1% and your damaging Scorch spells have a 33% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5% and lasts 30 sec.",
"Increases your chance to critically hit with Scorch, Fireball and Frostfire Bolt by an additional 2% and your damaging Scorch spells have a 66% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5% and lasts 30 sec.",
"Increases your chance to critically hit with Scorch, Fireball and Frostfire Bolt by an additional 3% and your damaging Scorch spells have a 100% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5% and lasts 30 sec."
		];
i++;

//MOLTEN SHIELDS - Fire	
rank[i] = [
"Causes your Fire Ward and Frost Ward spells to have a 15% chance to reflect the warded spell while active. In addition, your Molten Armor has a 50% chance to affect ranged and spell attacks.",
"Causes your Fire Ward and Frost Ward spells to have a 30% chance to reflect the warded spell while active. In addition, your Molten Armor has a 50% chance to affect ranged and spell attacks."
		];
i++;		

//Master of Elements - Fire	
rank[i] = [
"Your spell criticals will refund 10% of their base mana cost.",
"Your spell criticals will refund 20% of their base mana cost.",
"Your spell criticals will refund 30% of their base mana cost."
		];
i++;

//Playing with Fire - Fire	
rank[i] = [
"Increases all spell damage caused by 1% and all spell damage taken by 1%.",
"Increases all spell damage caused by 2% and all spell damage taken by 2%.",
"Increases all spell damage caused by 3% and all spell damage taken by 3%."
		];
i++;

//Critical Mass - Fire	
rank[i] = [
"Increases the critical strike chance of your fire spells by 2%.",
"Increases the critical strike chance of your fire spells by 4%.",
"Increases the critical strike chance of your fire spells by 6%."
		];
i++;

//Blast Wave - Fire
rank[i] = [
"7% of base mana<br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>30 sec cooldown</span><br>A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 154 to 186 Fire damage, knocking them back and Dazing them for 6 sec.<br>"
];
i++;		

//Blazing Speed - Fire	
rank[i] = [
"Gives you a 5% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all movement impairing effects. This effect lasts 8 sec.",
"Gives you a 10% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all movement impairing effects. This effect lasts 8 sec."
		];
i++;

//Fire Power - Fire
rank[i] = [
"Increases the damage done by your fire spells by 2%.",
"Increases the damage done by your fire spells by 4%.",
"Increases the damage done by your fire spells by 6%.",
"Increases the damage done by your fire spells by 8%.",
"Increases the damage done by your fire spells by 10%."		
		];
i++;

//Pyromaniac - Fire	
rank[i] = [
"Increases chance to critically hit by 1% and allows 17% of your mana regeneration to continue while casting.",
"Increases chance to critically hit by 2% and allows 33% of your mana regeneration to continue while casting.",
"Increases chance to critically hit by 3% and allows 50% of your mana regeneration to continue while casting."			
		]; 
i++;

//Combustion - Fire
rank[i] = [
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>2 min cooldown</span><br>When activated, this spell increases your critical strike damage bonus with Fire damage spells by 50%, and causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%. This effect lasts until you have caused 3 non-periodic critical strikes with Fire spells."
		];
i++;

//Molten Fury - Fire
rank[i] = [
"Increases damage of all spells against targets with less than 35% health by 6%.",
"Increases damage of all spells against targets with less than 35% health by 12%."
		];
i++;

//Fiery Payback - Fire
rank[i] = [
"When below 35% health all damage taken is reduced by 10% and your Pyroblast spell's cast time is reduced by 1.75 sec while the cooldown is increased by 2.5 sec. In addition, melee and ranged attacks made against you have a 5% chance to disarm your attacker's main hand and ranged weapons.",
"When below 35% health all damage taken is reduced by 20% and your Pyroblast spell's cast time is reduced by 3.5 sec while the cooldown is increased by 5 sec. In addition, melee and ranged attacks made against you have a 10% chance to disarm your attacker's main hand and ranged weapons."
		];
i++;

//Empowered Fire - Fire
rank[i] = [
"Increases the damage of your Fireball, Frostfire Bolt and Pyroblast spells by an amount equal to 5% of your spell power. In addition, each time your Ignite talent causes damage, you have a 33% chance to regain 2% of your base mana.",
"Increases the damage of your Fireball, Frostfire Bolt and Pyroblast spells by an amount equal to 10% of your spell power. In addition, each time your Ignite talent causes damage, you have a 67% chance to regain 2% of your base mana.",
"Increases the damage of your Fireball, Frostfire Bolt and Pyroblast spells by an amount equal to 15% of your spell power. In addition, each time your Ignite talent causes damage, you have a 100% chance to regain 2% of your base mana."
		];
i++;

//Firestarter - Fire
rank[i] = [
"Your damaging Blast Wave and Dragon's Breath spells have a 50% chance to make your next Flamestrike spell instant cast and cost no mana. Lasts 10 sec.",
"Your damaging Blast Wave and Dragon's Breath spells have a 100% chance to make your next Flamestrike spell instant cast and cost no mana. Lasts 10 sec."
		];
i++;

//Dragon's Breath - Fire

rank[i] = [
"<span style=text-align:left;float:left;>7% of base mana</span><BR><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>20 sec cooldown</span><br>Targets in a cone in front of the caster take 370 to 430 Fire damage and are Disoriented for 5 sec. Any direct damaging attack will revive targets. Turns off your attack when used.<br>"
		];
i++;

//Hot Streak - Fire
rank[i] = [
"Any time you score 2 spell criticals in a row using Fireball, Fire Blast, Scorch, Living Bomb, or Frostfire Bolt, you have a 33% chance the next Pyroblast spell cast within 10 sec will be instant cast.",
"Any time you score 2 spell criticals in a row using Fireball, Fire Blast, Scorch, Living Bomb, or Frostfire Bolt, you have a 66% chance the next Pyroblast spell cast within 10 sec will be instant cast.",
"Any time you score 2 spell criticals in a row using Fireball, Fire Blast, Scorch, Living Bomb, or Frostfire Bolt, you have a 100% chance the next Pyroblast spell cast within 10 sec will be instant cast."
		];
i++;

//Burnout - Fire
rank[i] = [
"Increases your spell critical damage bonus with all spells by 10% but your spell criticals cost an additional 1% of the spell's cost.",
"Increases your spell critical damage bonus with all spells by 20% but your spell criticals cost an additional 2% of the spell's cost.",
"Increases your spell critical damage bonus with all spells by 30% but your spell criticals cost an additional 3% of the spell's cost.",
"Increases your spell critical damage bonus with all spells by 40% but your spell criticals cost an additional 4% of the spell's cost.",
"Increases your spell critical damage bonus with all spells by 50% but your spell criticals cost an additional 5% of the spell's cost."
		];
i++;

//Living Bomb - Fire	
rank[i] = [
"<span style=text-align:left;float:left;>22% of base mana</span><span style=text-align:right;float:right;>35 yd range</span><BR><span style=text-align:left;float:left;>Instant</span><BR>The target becomes a Living Bomb, taking 612 Fire Damage over 12 sec. After 12 sec or when the spell is dispelled, the target explodes dealing 306 Fire damage to all enemies within 10 yards.<br>"
		];
i++;


//FROST TREE--------------------------------------------------------------------------------------		
//Frostbite - Frost
rank[i]=[
"Gives your Chill effects a 5% chance to freeze the target for 5 sec.",
"Gives your Chill effects a 10% chance to freeze the target for 5 sec.",
"Gives your Chill effects a 15% chance to freeze the target for 5 sec."
		];
i++;	

//Improved Frost Bolt - Frost
rank[i]=[
"Reduces the casting time of your Frostbolt spell by 0.1 sec.",
"Reduces the casting time of your Frostbolt spell by 0.2 sec.",
"Reduces the casting time of your Frostbolt spell by 0.3 sec.",
"Reduces the casting time of your Frostbolt spell by 0.4 sec.",
"Reduces the casting time of your Frostbolt spell by 0.5 sec."
	    ];
i++;

//Ice Floes - Frost	
rank[i] = [
"Reduces the cooldown of your Frost Nova, Cone of Cold, Ice Block and Icy Veins spells by 7%.",
"Reduces the cooldown of your Frost Nova, Cone of Cold, Ice Block and Icy Veins spells by 14%.",
"Reduces the cooldown of your Frost Nova, Cone of Cold, Ice Block and Icy Veins spells by 20%."
		];
i++;

//Ice Shards - Frost
rank[i]=[
"Increases the critical strike damage bonus of your Frost spells by 33%.",
"Increases the critical strike damage bonus of your Frost spells by 66%.",
"Increases the critical strike damage bonus of your Frost spells by 100%."
		];
i++;

//Frost Warding - Frost
rank[i]=[
"Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 25%. In addition, gives your Frost Ward and Fire Ward a 15% chance to negate the warded damage spell and restore mana equal to the damage caused.",
"Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 50%. In addition, gives your Frost Ward and Fire Ward a 30% chance to negate the warded damage spell and restore mana equal to the damage caused."
		];
i++;				

//Elemental Precision - Frost
rank[i]=[
"Reduces the mana cost and increases your chance to hit with Frost and spells by 1%.",
"Reduces the mana cost and increases your chance to hit with Frost and spells by 2%.",
"Reduces the mana cost and increases your chance to hit with Frost and spells by 3%."
		];
i++;

//Permafrost - Frost
rank[i]=[
"Increases the duration of your Chill effects by 1 sec, reduces the target's speed by an additional 4%, and reduces the target's healing received by 7%.",
"Increases the duration of your Chill effects by 2 sec and reduces the target's speed by an additional 7%, and reduces the target's healing received by 13%.",
"Increases the duration of your Chill effects by 3 sec and reduces the target's speed by an additional 10%, and reduces the target's healing received by 20%."
		];
i++;

//Piercing Ice - Frost
rank[i]=[
"Increases the damage done by your Frost spells by 2%.",
"Increases the damage done by your Frost spells by 4%.",
"Increases the damage done by your Frost spells by 6%."
		];
i++;

//Icy Veins - Frost
rank[i]=[
"<span style=text-align:left;float:left;>3% of base mana</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Hastens your spellcasting, increasing spell casting speed by 20% and reduces the pushback suffered from damaging attacks while casting by 100%. Lasts 20 sec."
		];
i++;

//Improved Blizzard - Frost
rank[i]=[
"Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 25%. Lasts 1.50 sec.",
"Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 40%. Lasts 1.50 sec.",
"Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 50%. Lasts 1.50 sec."
		];
i++;		

//Arctic Reach - Frost
rank[i]=[
"Increases the range of your Frostbolt, Ice Lance, Deep Freeze and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.",
"Increases the range of your Frostbolt, Ice Lance, Deep Freeze and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 20%."
		];
i++;

//Frost Channeling - Frost
rank[i]=[
"Reduces the mana cost of all spells by 4% and reduces the threat caused by your Frost spells by 4%.",
"Reduces the mana cost of all spells by 7% and reduces the threat caused by your Frost spells by 7%.",
"Reduces the mana cost of all spells by 10% and reduces the threat caused by your Frost spells by 10%."
		];
i++;		
		
//Shatter - Frost
rank[i]=[
"Increases the critical strike chance of all your spells against frozen targets by 17%.",
"Increases the critical strike chance of all your spells against frozen targets by 34%.",
"Increases the critical strike chance of all your spells against frozen targets by 50%."
		];
i++;

//Cold Snap - Frost
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>8 min cooldown</span><br>When activated, this spell finishes the cooldown on all Frost spells you recently cast."
		];
i++;

//Improved Cone of Cold - Frost
rank[i]=[
"Increases the damage dealt by your Cone of Cold spell by 15%.",
"Increases the damage dealt by your Cone of Cold spell by 25%.",
"Increases the damage dealt by your Cone of Cold spell by 35%."
		];
i++;

//Frozen Core - Frost
rank[i]=[
"Reduces the damage taken from all spells by 2%.",
"Reduces the damage taken from all spells by 4%.",
"Reduces the damage taken from all spells by 6%."
		];
i++;

//Cold as Ice - Frost
rank[i]=[
"Reduces the cooldown of your Cold Snap, Ice Barrier and Summon Water Elemental spells by 10%.",
"Reduces the cooldown of your Cold Snap, Ice Barrier and Summon Water Elemental spells by 20%."
		];
i++;

//Winter's Chill - Frost
rank[i]=[
"Increases your chance to critically hit with Frostbolt by an additional 1% and gives your Frost damage spells a 33% chance to apply the Winter's Chill effect, which increases the chance spells will critically hit the target by 1% for 15 sec. Stacks up to 5 times.",
"Increases your chance to critically hit with Frostbolt by an additional 2% and gives your Frost damage spells a 66% chance to apply the Winter's Chill effect, which increases the chance spells will critically hit the target by 1% for 15 sec. Stacks up to 5 times.",
"Increases your chance to critically hit with Frostbolt by an additional 3% and gives your Frost damage spells a 100% chance to apply the Winter's Chill effect, which increases the chance spells will critically hit the target by 1% for 15 sec. Stacks up to 5 times."
		];
i++;

//Shattered Barrier - Frost	
rank[i] = [
"Gives your Ice Barrier spell a 50% chance to freeze all enemies within 10 yds for 8 sec when it is destroyed.",
"Gives your Ice Barrier spell a 100% chance to freeze all enemies within 10 yds for 8 sec when it is destroyed."
		];
i++;

//Ice Barrier - Frost
rank[i]=[
"<span style=text-align:left;float:left;>21% of base mana</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>30 sec cooldown</span><br>Instantly shields you, absorbing 438 damage. Lasts 1 min. While the shield holds, spells will not be delayed by damage.<br>"
		];
i++;	

//Arctic Winds - Frost
rank[i]=[
"Increases all Frost damage you cause by 1% and reduces the chance melee and ranged attacks will hit you by 1%.",
"Increases all Frost damage you cause by 2% and reduces the chance melee and ranged attacks will hit you by 2%.",
"Increases all Frost damage you cause by 3% and reduces the chance melee and ranged attacks will hit you by 3%.",
"Increases all Frost damage you cause by 4% and reduces the chance melee and ranged attacks will hit you by 4%.",
"Increases all Frost damage you cause by 5% and reduces the chance melee and ranged attacks will hit you by 5%."
		];
i++;

//Empowered Frostbolt - Frost
rank[i]=[
"Increases the damage of your Frostbolt spell by an amount equal to 5% of your spell power and reduces the cast time by 0.1 sec.",
"Increases the damage of your Frostbolt spell by an amount equal to 10% of your spell power and reduces the cast time by 0.2 sec."
		];
i++;

//Fingers of Frost - Frost
rank[i]=[
"Gives your Chill effects a 7% chance to grant you the Fingers of Frost effect, which treats your next 2 spells cast as if the target were Frozen. Lasts 15 sec.",
"Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next 2 spells cast as if the target were Frozen. Lasts 15 sec."
		];
i++;

//Brain Freeze - Frost
rank[i]=[
"Your Frost damage spells with chilling effects have a 5% chance to cause your next Fireball or Frostfire Bolt spell to be instant cast and cost no mana.",
"Your Frost damage spells with chilling effects have a 10% chance to cause your next Fireball or Frostfire Bolt spell to be instant cast and cost no mana.",
"Your Frost damage spells with chilling effects have a 15% chance to cause your next Fireball or Frostfire Bolt spell to be instant cast and cost no mana."
		];
i++;

//Summon Water Elemental - Frost
rank[i]=[
"16% of base mana<br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Summon a Water Elemental to fight for the caster for 45 sec."
		];
i++;

//Enduring Winter - Frost
rank[i]=[
"Increases the duration of your Summon Water Elemental spell by 5 sec and your Frostbolt spell has a 33% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec. This effect cannot occur more often than once every 6 sec.",
"Increases the duration of your Summon Water Elemental spell by 10 sec and your Frostbolt spell has a 66% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec. This effect cannot occur more often than once every 6 sec.",
"Increases the duration of your Summon Water Elemental spell by 15 sec and your Frostbolt spell has a 100% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec. This effect cannot occur more often than once every 6 sec."
		];
i++;

//Chilled to the Bone - Frost
rank[i]=[
"Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 1% and reduces the movement speed of all chilled targets by an additional 2%",
"Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 2% and reduces the movement speed of all chilled targets by an additional 4%",
"Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 3% and reduces the movement speed of all chilled targets by an additional 6%",
"Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 4% and reduces the movement speed of all chilled targets by an additional 8%",
"Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 5% and reduces the movement speed of all chilled targets by an additional 10%"
		];
i++;

//Deep Freeze - Frost
rank[i]=[
"<span style=text-align:left;float:left;>9% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>30 sec cooldown</span><br>Stuns the target for 5 sec. Only usable on Frozen targets. Deals 1469 - 1741 damage to targets permanently immune to stuns.<br>"
		];
i++;
		
//Frost Talents End^^
jsLoaded=true;//needed for ajax script loading
