var i = 0;

var t = 0;

var className = "Hunter Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Beast Mastery"; i++;
tree[i] = "Marksmanship"; i++;
tree[i] = "Survival"; i++;

i = 0;

talent[i] = [0, "Improved Aspect of the Hawk", 5, 2, 1]; i++;
talent[i] = [0, "Endurance Training", 5, 3, 1]; i++;
talent[i] = [0, "Focused Fire", 2, 1, 2]; i++;
talent[i] = [0, "Improved Aspect of the Monkey", 3, 2, 2]; i++; 
talent[i] = [0, "Thick Hide", 3, 3, 2]; i++;
talent[i] = [0, "Improved Revive Pet", 2, 4, 2]; i++;
talent[i] = [0, "Pathfinding", 2, 1, 3]; i++;
talent[i] = [0, "Aspect Mastery", 1, 2, 3]; i++;
talent[i] = [0, "Unleashed Fury", 5, 3, 3]; i++;
talent[i] = [0, "Improved Mend Pet", 2, 2, 4]; i++;
talent[i] = [0, "Ferocity", 5, 3, 4]; i++;
talent[i] = [0, "Spirit Bond", 2, 1, 5]; i++;
talent[i] = [0, "Intimidation", 1, 2, 5]; i++;
talent[i] = [0, "Bestial Discipline", 2, 4, 5]; i++;
talent[i] = [0, "Animal Handler", 2, 1, 6]; i++;
talent[i] = [0, "Frenzy", 5, 3, 6, [getTalentID("Ferocity"),5]]; i++;
talent[i] = [0, "Ferocious Inspiration", 3, 1, 7]; i++;
talent[i] = [0, "Bestial Wrath", 1, 2, 7, [getTalentID("Intimidation"),1]]; i++;
talent[i] = [0, "Catlike Reflexes", 3, 3, 7]; i++;
talent[i] = [0, "Invigoration", 2, 1, 8, [getTalentID("Ferocious Inspiration"),3]]; i++;
talent[i] = [0, "Serpent's Swiftness", 5, 3, 8]; i++;
talent[i] = [0, "Longevity", 3, 1, 9]; i++;
talent[i] = [0, "The Beast Within", 1, 2, 9, [getTalentID("Bestial Wrath"),1]]; i++;
talent[i] = [0, "Cobra Strikes", 3, 3, 9, [getTalentID("Serpent's Swiftness"),5]]; i++;
talent[i] = [0, "Kindred Spirits", 5, 2, 10]; i++;
talent[i] = [0, "Beast Mastery", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

//marksmanship talents
talent[i] = [1, "Improved Concussive Shot", 2, 1, 1]; i++;
talent[i] = [1, "Focused Aim", 3, 2, 1]; i++;
talent[i] = [1, "Lethal Shots", 5, 3, 1]; i++;
talent[i] = [1, "Careful Aim", 3, 1, 2]; i++;
talent[i] = [1, "Improved Hunter's Mark", 3, 2, 2]; i++;
talent[i] = [1, "Mortal Shots", 5, 3, 2]; i++;
talent[i] = [1, "Go for the Throat", 2, 1, 3]; i++;
talent[i] = [1, "Improved Arcane Shot", 3, 2, 3]; i++;
talent[i] = [1, "Aimed Shot", 1, 3, 3, [getTalentID("Mortal Shots"),5]]; i++;
talent[i] = [1, "Rapid Killing", 2, 4, 3]; i++;
talent[i] = [1, "Improved Stings", 3, 2, 4]; i++;
talent[i] = [1, "Efficiency", 5, 3, 4]; i++;
talent[i] = [1, "Concussive Barrage", 2, 1, 5]; i++;
talent[i] = [1, "Readiness", 1, 2, 5]; i++;
talent[i] = [1, "Barrage", 3, 3, 5]; i++;
talent[i] = [1, "Combat Experience", 2, 1, 6]; i++;
talent[i] = [1, "Ranged Weapon Specialization", 3, 4, 6]; i++;
talent[i] = [1, "Piercing Shots", 3, 1, 7]; i++;
talent[i] = [1, "Trueshot Aura", 1, 2, 7, [getTalentID("Readiness"),1]]; i++;
talent[i] = [1, "Improved Barrage", 3, 3, 7, [getTalentID("Barrage"),3]]; i++;
talent[i] = [1, "Master Marksman", 5, 2, 8]; i++;
talent[i] = [1, "Rapid Recuperation", 2, 3, 8]; i++;
talent[i] = [1, "Wild Quiver", 3, 1, 9]; i++;
talent[i] = [1, "Silencing Shot", 1, 2, 9, [getTalentID("Master Marksman"),5]]; i++;
talent[i] = [1, "Improved Steady Shot", 3, 3, 9]; i++;
talent[i] = [1, "Marked for Death", 5, 2, 10]; i++;
talent[i] = [1, "Chimera Shot", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

//survival talents
talent[i] = [2, "Improved Tracking", 5, 1, 1]; i++;
talent[i] = [2, "Hawk Eye", 3, 2, 1]; i++;
talent[i] = [2, "Savage Strikes", 2, 3, 1]; i++;
talent[i] = [2, "Surefooted", 3, 1, 2]; i++;
talent[i] = [2, "Entrapment", 3, 2, 2]; i++;
talent[i] = [2, "Trap Mastery", 3, 3, 2]; i++;
talent[i] = [2, "Survival Instincts", 2, 4, 2]; i++;
talent[i] = [2, "Survivalist", 5, 1, 3]; i++;
talent[i] = [2, "Scatter Shot", 1, 2, 3]; i++;
talent[i] = [2, "Deflection", 3, 3, 3]; i++;
talent[i] = [2, "Survival Tactics", 2, 4, 3]; i++;
talent[i] = [2, "T.N.T.", 3, 2, 4]; i++;
talent[i] = [2, "Lock and Load", 3, 4, 4]; i++;
talent[i] = [2, "Hunter vs. Wild", 3, 1, 5, [getTalentID("Survivalist"),5]]; i++;
talent[i] = [2, "Killer Instinct", 3, 2, 5]; i++;
talent[i] = [2, "Counterattack", 1, 3, 5, [getTalentID("Deflection"),3]]; i++;
talent[i] = [2, "Lightning Reflexes", 5, 1, 6]; i++;
talent[i] = [2, "Resourcefulness", 3, 3, 6]; i++;
talent[i] = [2, "Expose Weakness", 3, 1, 7, [getTalentID("Lightning Reflexes"),5]]; i++;
talent[i] = [2, "Wyvern Sting", 1, 2, 7, [getTalentID("Killer Instinct"),3]]; i++;
talent[i] = [2, "Thrill of the Hunt", 3, 3, 7]; i++;
talent[i] = [2, "Master Tactician", 5, 1, 8]; i++;
talent[i] = [2, "Noxious Stings", 3, 2, 8, [getTalentID("Wyvern Sting"),1]]; i++;
talent[i] = [2, "Point of No Escape", 2, 1, 9]; i++;
talent[i] = [2, "Black Arrow", 1, 2, 9]; i++;
talent[i] = [2, "Sniper Training", 3, 4, 9]; i++;
talent[i] = [2, "Hunting Party", 3, 3, 10, [getTalentID("Thrill of the Hunt"),3]]; i++;
talent[i] = [2, "Explosive Shot", 1, 2, 11, [getTalentID("Black Arrow"),1]]; i++;
treeStartStop[t] = i -1;
t++;

i = 0;

//Beast Mastery Talents Begin

//Improved Aspect of the Hawk - Beast Mastery
rank[i] = [
"While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 3% for 12 sec.",
"While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 6% for 12 sec.",
"While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 9% for 12 sec.",
"While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 12% for 12 sec.",
"While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 15% for 12 sec."
		];
i++;		
		
//Endurance Training - Beast Mastery
rank[i] = [
"Increases the Health of your pets by 2% and your total health by 1%.",
"Increases the Health of your pets by 4% and your total health by 2%.",
"Increases the Health of your pets by 6% and your total health by 3%.",
"Increases the Health of your pets by 8% and your total health by 4%.",
"Increases the Health of your pets by 10% and your total health by 5%."
		];
i++;		

//Focused Fire - Beast Mastery
rank[i] = [
"All damage caused by you is increased by 1% while your pet is active and the critical strike chance of your pet's special abilities is increased by 10% while Kill Command is active.",
"All damage caused by you is increased by 2% while your pet is active and the critical strike chance of your pet's special abilities is increased by 20% while Kill Command is active."
		];
i++;		
		
//Improved Aspect of the Monkey - Beast Mastery
rank[i] = [
"Increases the Dodge bonus of your Aspect of the Monkey and Aspect of the Dragonhawk by 2%.",
"Increases the Dodge bonus of your Aspect of the Monkey and Aspect of the Dragonhawk by 4%.",
"Increases the Dodge bonus of your Aspect of the Monkey and Aspect of the Dragonhawk by 6%."
		];
i++;		

//Thick Hide - Beast Mastery
rank[i] = [
"Increases the armor rating of your pets by 7% and your armor contributions from items by 4%.",
"Increases the armor rating of your pets by 14% and your armor contributions from items by 7%.",
"Increases the armor rating of your pets by 20% and your armor contributions from items by 10%.",

		];
i++;		

//Improved Revive Pet - Beast Mastery
rank[i] = [
"Revive Pet's casting time is reduced by 3 sec, mana cost is reduced by 20%, and increases the health your pet returns with by an additional 15%.",
"Revive Pet's casting time is reduced by 6 sec, mana cost is reduced by 40%, and increases the health your pet returns with by an additional 30%."
		];
i++;		


//Pathfinding - Beast Mastery
rank[i] = [
"Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 4%, and increases your speed while mounted by 5%. The mounted movement speed increase does not stack with other effects.",
"Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 8%, and increases your speed while mounted by 10%. The mounted movement speed increase does not stack with other effects."
		];
i++;	


//Aspect Mastery - Beast Mastery
rank[i] = [
"Aspect of the Viper - Reduces the damage penalty by 10%.<br/><br/>Aspect of the Monkey - Reduces the damage done to you while active by 5%<br/><br/>Aspect of the Hawk - Increases the attack power bonus by 30%<br/><br/>Aspect of the Dragonhawk - Combines the bonuses from Aspect of the Monkey and Hawk.",
		];		
i++;		

//Unleashed Fury - Beast Mastery
rank[i] = [ 
"Increases the damage done by your pets by 3%.",
"Increases the damage done by your pets by 6%.",
"Increases the damage done by your pets by 9%.",
"Increases the damage done by your pets by 12%.",
"Increases the damage done by your pets by 15%."
		];
i++;		

//Improved Mend Pet - Beast Mastery
rank[i] = [ 
"Reduces the mana cost of your Mend Pet spell by 10% and gives the Mend Pet spell a 25% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.",
"Reduces the mana cost of your Mend Pet spell by 20% and gives the Mend Pet spell a 50% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick."
		];
i++;	

//Ferocity - Beast Mastery
rank[i] = [
"Increases the critical strike chance of your pet by 2%.",
"Increases the critical strike chance of your pet by 4%.",
"Increases the critical strike chance of your pet by 6%.",
"Increases the critical strike chance of your pet by 8%.",
"Increases the critical strike chance of your pet by 10%."

		];
i++;		

//Spirit Bond - Beast Mastery 
rank[i] = [
"While your pet is active, you and your pet will regenerate 1% of total health every 10 sec and increases healing done to you and your pet by 5%.",
"While your pet is active, you and your pet will regenerate 2% of total health every 10 sec and increases healing done to you and your pet by 10%."
		];
i++;

//Intimidation - Beast Mastery
rank[i] = [
"<span style=text-align:left;float:left;>8% of base mana</span><span style=text-align:right;float:right;>100 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>1 min cooldown</span><br>Command your pet to intimidate the target, causing a high amount of threat and stunning the target for 3 sec. Lasts 15 sec."
		];
i++;		

//Bestial Discipline - Beast Mastery
rank[i] = [
"Increases the Focus regeneration of your pets by 50%.",
"Increases the Focus regeneration of your pets by 100%."
		];
i++;		

//Animal Handler - Beast Mastery
rank[i] = [
"Increases your pet's attack power by 5%, and increases the duration of your Master's Call effect by 3 sec.",
"Increases your pet's attack power by 10%, and increases the duration of your Master's Call effect by 6 sec."
		];
i++;		

//Frenzy - Beast Mastery
rank[i] = [
"Gives your pet a 20% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
"Gives your pet a 40% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
"Gives your pet a 60% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
"Gives your pet a 80% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
"Gives your pet a 100% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike."

		];		
i++;		

//Ferocious Inspiration - Beast Mastery
rank[i] = [
"All party and raid members have all damage increased by 1% within 100 yards of your pet. In addition, increases the damage dealt by Arcane Shot and Steady Shot by 3%.",
"All party and raid members have all damage increased by 2% within 100 yards of your pet. In addition, increases the damage dealt by Arcane Shot and Steady Shot by 6%.",
"All party and raid members have all damage increased by 3% within 100 yards of your pet. In addition, increases the damage dealt by Arcane Shot and Steady Shot by 9%."

		];		
i++;		

//Bestial Wrath - Beast Mastery
rank[i] = [
"<span style=text-align:left;float:left;>10% of base mana</span><span style=text-align:right;float:right;>100 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>2 min cooldown</span><br>Send your pet into a rage causing 50% additional damage for 10 sec. While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed."
		];
i++;		

//Catlike Reflexes - Beast Mastery
rank[i] = [
"Increases your chance to dodge by 1% and your pet's chance to dodge by an additional 3%. In addition, reduces the cooldown of your Kill Command ability by 10 sec.",
"Increases your chance to dodge by 2% and your pet's chance to dodge by an additional 6%. In addition, reduces the cooldown of your Kill Command ability by 20 sec.",
"Increases your chance to dodge by 3% and your pet's chance to dodge by an additional 9%. In addition, reduces the cooldown of your Kill Command ability by 30 sec."
		];		
i++;

//Invigoration - Beast Mastery
rank[i] = [ 
"When your pet scores a critical hit with a special ability, you have a 50% chance to instantly regenerate 1% mana.",
"When your pet scores a critical hit with a special ability, you have a 100% chance to instantly regenerate 1% mana."
		];
i++;	

//Serpent's Swiftness - Beast Mastery
rank[i] = [
"Increases ranged combat attack speed by 4% and your pet's melee attack speed by 4%.",
"Increases ranged combat attack speed by 8% and your pet's melee attack speed by 8%.",
"Increases ranged combat attack speed by 12% and your pet's melee attack speed by 12%.",
"Increases ranged combat attack speed by 16% and your pet's melee attack speed by 16%.",
"Increases ranged combat attack speed by 20% and your pet's melee attack speed by 20%."
		];		
i++;

//Longevity - Beast Mastery
rank[i] = [
"Reduces the cooldown of your Bestial Wrath, Intimidation and Pet Special Abilities by 10%.",
"Reduces the cooldown of your Bestial Wrath, Intimidation and Pet Special Abilities by 20%.",
"Reduces the cooldown of your Bestial Wrath, Intimidation and Pet Special Abilities by 30%."
		];		
i++;

//The Beast Within - Beast Mastery
rank[i] = [
"Increases all damage you deal by 10% and while your pet is under the effects of Bestial Wrath, you also go into a rage causing 10% additional damage and reducing mana costs of all spells by 50% for 10 sec. While enraged, you do not feel pity or remorse or fear and you cannot be stopped unless killed."
		];		
i++;

//Cobra Strikes - Beast Mastery
rank[i] = [
"You have a 20% chance when you critically hit with Arcane Shot, Steady Shot or Kill Shot to cause your pet's next 2 special attacks to critically hit.",
"You have a 40% chance when you critically hit with Arcane Shot, Steady Shot or Kill Shot to cause your pet's next 2 special attacks to critically hit.",
"You have a 60% chance when you critically hit with Arcane Shot, Steady Shot or Kill Shot to cause your pet's next 2 special attacks to critically hit."
		];		
i++;

//Kindred Spirits - Beast Mastery
rank[i]=[
"Increases your pet's damage by 4% and you and your pet's movement speed by 2% while your pet is active. This does not stack with other movement speed increasing effects.",
"Increases your pet's damage by 8% and you and your pet's movement speed by 4% while your pet is active. This does not stack with other movement speed increasing effects.",
"Increases your pet's damage by 12% and you and your pet's movement speed by 6% while your pet is active. This does not stack with other movement speed increasing effects.",
"Increases your pet's damage by 16% and you and your pet's movement speed by 8% while your pet is active. This does not stack with other movement speed increasing effects.",
"Increases your pet's damage by 20% and you and your pet's movement speed by 10% while your pet is active. This does not stack with other movement speed increasing effects."
		];
i++;

//Beast Mastery - Beast Mastery
rank[i] = [
"You master the art of Beast training, teaching you the ability to tame Exotic pets and increasing your total amount of Pet Skill points by 4."
		];		
i++;

// MARKSMANSHIP----------------------------------------------------------------->
//Improved Concussive Shot - Marksmanship
rank[i] = [
"Increases the duration of your Concussive Shot's daze effect by 1 sec.",
"Increases the duration of your Concussive Shot's daze effect by 2 sec."
		];
i++;

//Focused Aim - Marksmanship
rank[i] = [
"Reduces the pushback suffered from damaging attacks while casting Steady Shot by 23%, and increases your chance to hit by 1%.",
"Reduces the pushback suffered from damaging attacks while casting Steady Shot by 46%, and increases your chance to hit by 2%.",
"Reduces the pushback suffered from damaging attacks while casting Steady Shot by 70%, and increases your chance to hit by 3%."
		];
i++;

//Lethal Shots - Marksmanship 
rank[i] = [
"Increases your critical strike chance with ranged weapons by 1%.",
"Increases your critical strike chance with ranged weapons by 2%.",
"Increases your critical strike chance with ranged weapons by 3%.",
"Increases your critical strike chance with ranged weapons by 4%.",
"Increases your critical strike chance with ranged weapons by 5%."
		];		
i++;	

//Careful Aim - Marksmanship 
rank[i]=[
"Increases your ranged attack power by an amount equal to 33% of your total Intellect.",
"Increases your ranged attack power by an amount equal to 66% of your total Intellect.",
"Increases your ranged attack power by an amount equal to 100% of your total Intellect."
		];
i++;	

//Improved Hunter's Mark - Marksmanship
rank[i] = [
"Increases the bonus attack power granted by your Hunter's Mark ability by 10%, and reduces the mana cost of your Hunter's Mark ability by 33%.",
"Increases the bonus attack power granted by your Hunter's Mark ability by 20%, and reduces the mana cost of your Hunter's Mark ability by 66%.",
"Increases the bonus attack power granted by your Hunter's Mark ability by 30%, and reduces the mana cost of your Hunter's Mark ability by 100%."
		];
i++;

//Mortal Shots - Marksmanship
rank[i] = [
"Increases the critical strike damage bonus of your ranged abilities by 6%.",
"Increases the critical strike damage bonus of your ranged abilities by 12%.",
"Increases the critical strike damage bonus of your ranged abilities by 18%.",
"Increases the critical strike damage bonus of your ranged abilities by 24%.",
"Increases the critical strike damage bonus of your ranged abilities by 30%."
		];
i++;

//Go for the Throat - Marksmanship
rank[i] = [
"Your ranged critical hits cause your pet to generate 25 Focus.",
"Your ranged critical hits cause your pet to generate 50 Focus."
		];
i++;

//Improved Arcane Shot - Marksmanship
rank[i] = [
"Increases the damage done by your Arcane Shot by 5%.",
"Increases the damage done by your Arcane Shot by 10%.",
"Increases the damage done by your Arcane Shot by 15%."
		];
i++;		

//Aimed Shot - Marksmanship
rank[i] = [
"<span style=text-align:left;float:left;>8% of base mana</span><span style=text-align:right;float:right;>5-35 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>10 sec cooldown</span><br><br>Requires Ranged Weapon<br>An aimed shot that increases ranged damage by 408 and reduces healing done to that target by 50%. Lasts 10 sec.<br>"
		];
i++;		

//Rapid Killing - Marksmanship
rank[i] = [
"Reduces the cooldown of your Rapid Fire ability by 1 min.  In addition, after killing an opponent that yields experience or honor, your next Aimed Shot, Arcane Shot or Chimera Shot causes 10% additional damage.  Lasts 20 sec.",
"Reduces the cooldown of your Rapid Fire ability by 2 min.  In addition, after killing an opponent that yields experience or honor, your next Aimed Shot, Arcane Shot or Chimera Shot causes 20% additional damage.  Lasts 20 sec." 
		];
i++;		

//Improved Stings - Marksmanship
rank[i] = [
"Increases the damage done by your Serpent Sting and Wyvern Sting by 10% and the mana drained by your Viper Sting by 10%. In addition, reduces the chance Stings will be dispelled by 10%.",
"Increases the damage done by your Serpent Sting and Wyvern Sting by 20% and the mana drained by your Viper Sting by 20%. In addition, reduces the chance Stings will be dispelled by 20%.",
"Increases the damage done by your Serpent Sting and Wyvern Sting by 30% and the mana drained by your Viper Sting by 30%. In addition, reduces the chance Stings will be dispelled by 30%."
		];
i++;		

//Efficiency - Marksmanship
rank[i] = [
"Reduces the Mana cost of your Shots and Stings by 3%.",
"Reduces the Mana cost of your Shots and Stings by 6%.",
"Reduces the Mana cost of your Shots and Stings by 9%.",
"Reduces the Mana cost of your Shots and Stings by 12%.",
"Reduces the Mana cost of your Shots and Stings by 15%."
		];
i++;		

//Concussive Barrage - Marksmanship

rank[i] = [
"Your successful Chimera Shot and Multi-Shot attacks have a 50% chance to Daze the target for 4 sec.",
"Your successful Chimera Shot and Multi-Shot attacks have a 100% chance to Daze the target for 4 sec."	
			];
i++;		
		
//Readiness - Marksmanship 
rank[i] = [
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, this ability immediately finishes the cooldown on your other Hunter abilities except Bestial Wrath."
		];
i++;		

//Barrage - Marksmanship
rank[i] = [
"Increases the damage done by your Multi-Shot, Aimed Shot, and Volley spells by 4%.",
"Increases the damage done by your Multi-Shot, Aimed Shot, and Volley spells by 8%.",
"Increases the damage done by your Multi-Shot, Aimed Shot, and Volley spells by 12%."
		];
i++;


//Combat Experience - Marksmanship
rank[i] = [
"Increases your total Agility and Intellect by 2%.",
"Increases your total Agility and Intellect by 4%."
			];
i++;	
		
//Ranged Weapon Specialization - Marksmanship 
rank[i]=[
"Increases the damage you deal with ranged weapons by 1%.",
"Increases the damage you deal with ranged weapons by 3%.",
"Increases the damage you deal with ranged weapons by 5%."
		];
i++;			

//Piercing Shots - Marksmanship 
rank[i]=[
"Your critical Aimed, Steady and Chimera Shots cause the target to bleed for 10% of the damage dealt over 8 sec.",
"Your critical Aimed, Steady and Chimera Shots cause the target to bleed for 20% of the damage dealt over 8 sec.",
"Your critical Aimed, Steady and Chimera Shots cause the target to bleed for 30% of the damage dealt over 8 sec."
		];
i++;	
	

//Trueshot Aura - Marksmanship 
rank[i]=[
"Instant cast<br>Increases the attack power of party and raid members within 100 yards by 10%. Lasts until cancelled."
		];
i++;		

//Improved Barrage - Marksmanship
rank[i]=[
"Increases the critical strike chance of your Multi-Shot and Aimed Shot abilities by 4% and reduces the pushback suffered from damaging attacks while channeling Volley by 33%.",
"Increases the critical strike chance of your Multi-Shot and Aimed Shot abilities by 8% and reduces the pushback suffered from damaging attacks while channeling Volley by 66%.",
"Increases the critical strike chance of your Multi-Shot and Aimed Shot abilities by 12% and reduces the pushback suffered from damaging attacks while channeling Volley by 100%."
		];
i++;		

//Master Marksman - Marksmanship 
rank[i]=[
"Increases your critical strike chance by 1%, and reduces the Mana cost of your Steady Shot, Aimed Shot, and Chimera Shot by 5%.",
"Increases your critical strike chance by 2%, and reduces the Mana cost of your Steady Shot, Aimed Shot, and Chimera Shot by 10%.",
"Increases your critical strike chance by 3%, and reduces the Mana cost of your Steady Shot, Aimed Shot, and Chimera Shot by 15%.",
"Increases your critical strike chance by 4%, and reduces the Mana cost of your Steady Shot, Aimed Shot, and Chimera Shot by 20%.",
"Increases your critical strike chance by 5%, and reduces the Mana cost of your Steady Shot, Aimed Shot, and Chimera Shot by 25%."
		];
i++;	

//Rapid Recuperation - Marksmanship 
rank[i]=[
"You gain 2% of your mana every 3 sec while under the effect of Rapid Fire, and you gain 1% of your mana every 2 sec for 6 sec when you gain Rapid Killing.",
"You gain 4% of your mana every 3 sec while under the effect of Rapid Fire, and you gain 2% of your mana every 2 sec for 6 sec when you gain Rapid Killing."
		];
i++;	

//Wild Quiver - Marksmanship 
rank[i]=[
"You have a 4% chance to shoot an additional shot when doing damage with your auto shot, dealing 80% weapon nature damage. Wild Quiver consumes no ammo.",
"You have a 8% chance to shoot an additional shot when doing damage with your auto shot, dealing 80% weapon nature damage. Wild Quiver consumes no ammo.",
"You have a 12% chance to shoot an additional shot when doing damage with your auto shot, dealing 80% weapon nature damage. Wild Quiver consumes no ammo."
		];
i++;	

//Silencing Shot - Marksmanship
rank[i]=[
"<span style=text-align:left;float:left;>6% of base mana</span><span style=text-align:right;float:right;>5-35 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>20 sec cooldown</span><br>A shot that deals 50% weapon damage and Silences the target for 3 sec. Non-player victim spellcasting is also interrupted for 3 sec.<br>"
		];
i++;	

//Improved Steady Shot - Marksmanship
rank[i]=[
"Your Steady Shot hits have a 5% chance to increase the damage done by your next Aimed Shot, Arcane Shot or Chimera Shot by 15%, and reduce the mana cost of your next Aimed Shot, Arcane Shot or Chimera Shot by 20%.",
"Your Steady Shot hits have a 10% chance to increase the damage done by your next Aimed Shot, Arcane Shot or Chimera Shot by 15%, and reduce the mana cost of your next Aimed Shot, Arcane Shot or Chimera Shot by 20%.",
"Your Steady Shot hits have a 15% chance to increase the damage done by your next Aimed Shot, Arcane Shot or Chimera Shot by 15%, and reduce the mana cost of your next Aimed Shot, Arcane Shot or Chimera Shot by 20%."
		];
i++;	
	
//Marked for Death - Marksmanship
rank[i]=[
"Increases your damage done by your shots and the damage done by your pet's special abilities by 1% on market targets, and increases the critical strike damage bonus of your Aimed Shot, Steady Shot, Kill Shot or Chimera Shot by 2%.",
"Increases your damage done by your shots and the damage done by your pet's special abilities by 2% on market targets, and increases the critical strike damage bonus of your Aimed Shot, Steady Shot, Kill Shot or Chimera Shot by 4%.",
"Increases your damage done by your shots and the damage done by your pet's special abilities by 3% on market targets, and increases the critical strike damage bonus of your Aimed Shot, Steady Shot, Kill Shot or Chimera Shot by 6%.",
"Increases your damage done by your shots and the damage done by your pet's special abilities by 4% on market targets, and increases the critical strike damage bonus of your Aimed Shot, Steady Shot, Kill Shot or Chimera Shot by 8%.",
"Increases your damage done by your shots and the damage done by your pet's special abilities by 5% on market targets, and increases the critical strike damage bonus of your Aimed Shot, Steady Shot, Kill Shot or Chimera Shot by 10%."
];
i++;		
	
	
//Chimera Shot - Marksmanship
rank[i]=[
"<span style=text-align:left;float:left;>12% of base mana</span><span style=text-align:right;float:right;>5-35 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>10 sec cooldown</span><span style=text-align:left;float:left;>Requires Ranged Weapon</span><br><br/>You deal 125% weapon damage, refreshing the current Sting on your target and triggering an effect:<br/><br/> Serpent Sting - Instantly deals 40% of the damage done by your Serpent Sting.<br/><br/> Viper Sting - Instantly restores mana to you equal to 60% of the total amount drained by your Viper Sting.<br/><br/> Scorpid Sting - Attempts to Disarm the target for 10 sec. This effect cannot occur more than once per 1 minute."
		];
i++;		
	
	
	
//SURVIVAL TAB--------------------------------------------------->

//Improved Tracking - Survival
rank[i]=[
"While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 1%.",
"While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 2%.",
"While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 3%.",
"While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 4%.",
"While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 5%."
		];
i++;

//Hawk Eye - Survival
rank[i]=[
"Increases the range of your ranged weapons by 2 yards.",
"Increases the range of your ranged weapons by 4 yards.",
"Increases the range of your ranged weapons by 6 yards."
		];
i++;

//Savage Strikes - Survival
rank[i]=[
"Increases the critical strike chance of Raptor Strike, Mongoose Bite and Counterattack by 10%.",
"Increases the critical strike chance of Raptor Strike, Mongoose Bite and Counterattack by 20%."
		];
i++;

//Surefooted - Survival 
rank[i]=[
"Reduces the duration of movement impairing effects by 10%.",
"Reduces the duration of movement impairing effects by 20%.",
"Reduces the duration of movement impairing effects by 30%."
		];
i++;	

//Entrapment - Survival
rank[i]=[
"When your Frost Trap or Snake Trap are triggered you entrap all afflicted targets, preventing them from moving for 2 sec.",
"When your Frost Trap or Snake Trap are triggered you entrap all afflicted targets, preventing them from moving for 3 sec.",
"When your Frost Trap or Snake Trap are triggered you entrap all afflicted targets, preventing them from moving for 4 sec."
		];
i++;

//Trap Mastery - Survival
rank[i]=[
"Frost Trap and Freezing Trap - Increases the duration by 10%.<br/><br/>Immolation Trap, Explosive Trap and Black Arrow - Increases the periodic damage done by 10%.<br/><br/>Snake Trap - Increases the number of snakes summoned by 2.",
"Frost Trap and Freezing Trap - Increases the duration by 20%.<br/><br/>Immolation Trap, Explosive Trap and Black Arrow - Increases the periodic damage done by 20%.<br/><br/>Snake Trap - Increases the number of snakes summoned by 4.",
"Frost Trap and Freezing Trap - Increases the duration by 30%.<br/><br/>Immolation Trap, Explosive Trap and Black Arrow - Increases the periodic damage done by 30%.<br/><br/>Snake Trap - Increases the number of snakes summoned by 6.",
		];
i++;	

//Survival Instincts - Survival
rank[i]=[
"Reduces all damage taken by 2% and increases the critical strike chance of your Arcane Shot, Steady Shot, and Explosive Shot by 2%.",
"Reduces all damage taken by 4% and increases the critical strike chance of your Arcane Shot, Steady Shot, and Explosive Shot by 4%."
		];
i++;

//Survivalist - Survival
rank[i]=[
"Increases your Stamina by 2%.",
"Increases your Stamina by 4%.",
"Increases your Stamina by 6%.",
"Increases your Stamina by 8%.",
"Increases your Stamina by 10%."
		];
i++;		

//Scatter Shot - Survival TALENT DIFFERENT
rank[i]=[
"<span style=text-align:left;float:left;>8% of base mana</span><span style=text-align:right;float:right;>15 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>30 sec cooldown</span><br><span style=text-align:left;float:left;>Requires Ranged Weapon</span><br/> A short-range shot that deals 50% weapon damage and disorients the target for 4 sec. Any damage caused will remove the effect. Turns off your attack when used."
		];
i++;
	
//Deflection - Survival
rank[i]=[
"Increases your chance to parry by 1%, and reduces the duration of all Disarm effects used against you by 16%. This does not stack with other Disarm duration reducing effects.",
"Increases your chance to parry by 2%, and reduces the duration of all Disarm effects used against you by 25%. This does not stack with other Disarm duration reducing effects.",
"Increases your chance to parry by 3%, and reduces the duration of all Disarm effects used against you by 50%. This does not stack with other Disarm duration reducing effects."
		];
i++;	

//Survival Tactics - Survival
rank[i]=[
"Reduces the chance your Feign Death ability and all trap spells will be resisted by 2%, and reduces the cooldown of your Disengage ability by 2 sec.",
"Reduces the chance your Feign Death ability and all trap spells will be resisted by 4%, and reduces the cooldown of your Disengage ability by 4 sec."
		];
i++;	

//T.N.T. - Survival
rank[i]=[
"Increases the damage done by your Explosive Shot, Explosive Trap, Black Arrow and Immolation Trap by 2%.",
"Increases the damage done by your Explosive Shot, Explosive Trap, Black Arrow and Immolation Trap by 4%.",
"Increases the damage done by your Explosive Shot, Explosive Trap, Black Arrow and Immolation Trap by 6%."
		];
i++;

//Lock and Load - Survival
rank[i]=[
"You have a 33% chance when you trap a target with Freezing Trap, Freezing Arrow or Frost Trap and a 2% chance when you deal periodic damage with your Immolation Trap, Explosive Trap or Black Arrow to cause your next 2 Arcane Shot or Explosive Shot spells to trigger no cooldown, cost no mana and consume no ammo. This effect has a 22 sec cooldown.",
"You have a 66% chance when you trap a target with Freezing Trap, Freezing Arrow or Frost Trap and a 4% chance when you deal periodic damage with your Immolation Trap, Explosive Trap or Black Arrow to cause your next 2 Arcane Shot or Explosive Shot spells to trigger no cooldown, cost no mana and consume no ammo. This effect has a 22 sec cooldown.",
"You have a 100% chance when you trap a target with Freezing Trap, Freezing Arrow or Frost Trap and a 6% chance when you deal periodic damage with your Immolation Trap, Explosive Trap or Black Arrow to cause your next 2 Arcane Shot or Explosive Shot spells to trigger no cooldown, cost no mana and consume no ammo. This effect has a 22 sec cooldown."
		];
i++;	

//Hunter vs. Wild - Survival
rank[i]=[
"Increases you and your pet's attack power and ranged attack power equal to 10% of your total Stamina.",
"Increases you and your pet's attack power and ranged attack power equal to 20% of your total Stamina.",
"Increases you and your pet's attack power and ranged attack power equal to 30% of your total Stamina."
		];
i++;

//Killer Instinct - Survival
rank[i]=[
"Increases your critical strike chance with all attacks by 1%.",
"Increases your critical strike chance with all attacks by 2%.",
"Increases your critical strike chance with all attacks by 3%."
		];
i++;

//Counterattack - Survival
rank[i]=[
"<span style=text-align:left;float:left;>3% of base mana</span><span style=text-align:right;float:right;>Melee range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>5 sec cooldown</span><br>A strike that becomes active after parrying an opponent's attack. This attack deals 50 damage and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried.<br>"
		];
i++;	

//Lightning Reflexes - Survival
rank[i]=[
"Increases your Agility by 3%.",
"Increases your Agility by 6%.",
"Increases your Agility by 9%.",
"Increases your Agility by 12%.",
"Increases your Agility by 15%."
		];
i++;

//Resourcefulness - Survival
rank[i]=[
"Reduces the mana cost of all traps, melee abilities and Black Arrow by 20% and reduces the cooldown of all traps and Black Arrow by 2 sec.",
"Reduces the mana cost of all traps, melee abilities and Black Arrow by 40% and reduces the cooldown of all traps and Black Arrow by 4 sec.",
"Reduces the mana cost of all traps, melee abilities and Black Arrow by 60% and reduces the cooldown of all traps and Black Arrow by 6 sec."
		];
i++;

//Expose Weakness - Survival
rank[i]=[
"Your ranged criticals have a 33% chance to apply an Expose Weakness effect to the target. Expose Weakness increases your attack power by 25% of your Agility for 7 sec.",
"Your ranged criticals have a 66% chance to apply an Expose Weakness effect to the target. Expose Weakness increases your attack power by 25% of your Agility for 7 sec.",
"Your ranged criticals have a 100% chance to apply an Expose Weakness effect to the target. Expose Weakness increases your attack power by 25% of your Agility for 7 sec."
		];
i++;	

//Wyvern Sting - Survival
rank[i]=[
"<span style=text-align:left;float:left;>8% of base mana</span><span style=text-align:right;float:right;>5-35 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>1 min cooldown</span><br>A stinging shot that puts the target to sleep for 30 sec. Any damage will cancel the effect. When the target wakes up, the Sting causes 300 Nature damage over 6 sec. Only one Sting per Hunter can be active on the target at a time.<br>"
		];
i++;

//Thrill of the Hunt - Survival
rank[i]=[
"Gives you a 33% chance to regain 40% of the mana cost of any shot when it critically hits.",
"Gives you a 66% chance to regain 40% of the mana cost of any shot when it critically hits.",
"Gives you a 100% chance to regain 40% of the mana cost of any shot when it critically hits."
		];
i++;
	
//Master Tactician - Survival
rank[i]=[
"Your successful ranged attacks have a 10% chance to increase your critical strike chance with all attacks by 2% for 8 sec.",
"Your successful ranged attacks have a 10% chance to increase your critical strike chance with all attacks by 4% for 8 sec.",
"Your successful ranged attacks have a 10% chance to increase your critical strike chance with all attacks by 6% for 8 sec.",
"Your successful ranged attacks have a 10% chance to increase your critical strike chance with all attacks by 8% for 8 sec.",
"Your successful ranged attacks have a 10% chance to increase your critical strike chance with all attacks by 10% for 8 sec."
		];
i++;

//Noxious Stings - Survival
rank[i]=[
"If Wyvern Sting is dispelled, the dispeller is also afflicted by Wyvern Sting lasting 16% of the duration remaining, and increases all damage done by you on targets afflicted by your Serpent Sting by 1%.",
"If Wyvern Sting is dispelled, the dispeller is also afflicted by Wyvern Sting lasting 25% of the duration remaining, and increases all damage done by you on targets afflicted by your Serpent Sting by 2%.",
"If Wyvern Sting is dispelled, the dispeller is also afflicted by Wyvern Sting lasting 50% of the duration remaining, and increases all damage done by you on targets afflicted by your Serpent Sting by 3%."
		];
i++;

//Point of No Escape - Survival
rank[i]=[
"Increases the critical strike chance of all attacks on targets affected by your Frost Trap, Freezing Trap and Freezing Arrow by 3%.",
"Increases the critical strike chance of all attacks on targets affected by your Frost Trap, Freezing Trap and Freezing Arrow by 6%."
		];
i++;
	
//Black Arrow - Survival
rank[i]=[
"Fires a Black Arrow at the target, increasing all damage done by you to the target by 6% and dealing 786 Shadow damage over 15 sec. Black Arrow shares a cooldown with Trap spells."
		];
i++;	
	
//Sniper Training - Survival
rank[i]=[
"Increases the critical strike chance of your Kill Shot ability by 5%, and while standing still for 6 sec, you gain Sniper Training increasing the damage done by your Steady Shot, Aimed Shot, Black Arrow and Explosive Shot by 2% for 15 sec.",
"Increases the critical strike chance of your Kill Shot ability by 10%, and while standing still for 6 sec, you gain Sniper Training increasing the damage done by your Steady Shot, Aimed Shot, Black Arrow and Explosive Shot by 4% for 15 sec.",
"Increases the critical strike chance of your Kill Shot ability by 15%, and while standing still for 6 sec, you gain Sniper Training increasing the damage done by your Steady Shot, Aimed Shot, Black Arrow and Explosive Shot by 6% for 15 sec."
		];
i++;	

//Hunting Party - Survival
rank[i]=[
"Increases your total Agility by an additional 1%, and your Arcane Shot, Explosive Shot and Steady Shot critical strikes have a 33% chance to grant up to 10 party or raid members mana regeneration equal to 1% of the maximum mana per 5 sec. Lasts for 15 sec.",
"Increases your total Agility by an additional 2%, and your Arcane Shot, Explosive Shot and Steady Shot critical strikes have a 66% chance to grant up to 10 party or raid members mana regeneration equal to 1% of the maximum mana per 5 sec. Lasts for 15 sec.",
"Increases your total Agility by an additional 3%, and your Arcane Shot, Explosive Shot and Steady Shot critical strikes have a 100% chance to grant up to 10 party or raid members mana regeneration equal to 1% of the maximum mana per 5 sec. Lasts for 15 sec."
		];
i++;	

//Explosive Shot - Survival TALENT DIFFERENT
rank[i] = [
"<span style=text-align:left;float:left;>7% of base mana</span><span style=text-align:right;float:right;>5-35 yd range</span><br><span style=text-align:left;float:left;>Instant Cast</span><span style=text-align:right;float:right;>6 sec cooldown</span><br>Requires Ranged Weapon<br>You fire an explosive charge into the enemy target, dealing 146-174 Fire damage. The charge will blast the target every second for an additional 2 sec."
		];
i++;	
	
//Survival Talents End^^

