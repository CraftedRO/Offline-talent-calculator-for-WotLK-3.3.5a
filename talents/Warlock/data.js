var i = 0;
var t = 0;

var className = "Warlock Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Affliction"; i++;
tree[i] = "Demonology"; i++;
tree[i] = "Destruction"; i++;

i = 0;

//rank
//horizontal position
//vertical position
talent[i] = [0, "Improved Curse of Agony", 2, 1, 1]; i++;
talent[i] = [0, "Suppression", 3, 2, 1]; i++;
talent[i] = [0, "Improved Corruption", 5, 3, 1]; i++;
talent[i] = [0, "Improved Curse of Weakness", 2, 1, 2]; i++;
talent[i] = [0, "Improved Drain Soul", 2, 2, 2]; i++; 
talent[i] = [0, "Improved Life Tap", 2, 3, 2]; i++;
talent[i] = [0, "Soul Siphon", 2, 4, 2]; i++;
talent[i] = [0, "Improved Fear", 2, 1, 3]; i++;
talent[i] = [0, "Fel Concentration", 3, 2, 3]; i++;
talent[i] = [0, "Amplify Curse", 1, 3, 3]; i++;
talent[i] = [0, "Grim Reach", 2, 1, 4]; i++;
talent[i] = [0, "Nightfall", 2, 2, 4]; i++;
talent[i] = [0, "Empowered Corruption", 3, 4, 4]; i++;
talent[i] = [0, "Shadow Embrace", 5, 1, 5]; i++;
talent[i] = [0, "Siphon Life", 1, 2, 5]; i++;
talent[i] = [0, "Curse of Exhaustion", 1, 3, 5, [getTalentID("Amplify Curse"),1]]; i++;
talent[i] = [0, "Improved Felhunter", 2, 1, 6]; i++;
talent[i] = [0, "Shadow Mastery", 5, 2, 6, [getTalentID("Siphon Life"),1]]; i++;
talent[i] = [0, "Eradication", 3, 1, 7]; i++;
talent[i] = [0, "Contagion", 5, 2, 7]; i++;
talent[i] = [0, "Dark Pact", 1, 3, 7]; i++;
talent[i] = [0, "Improved Howl of Terror", 2, 1, 8]; i++;
talent[i] = [0, "Malediction", 3, 3, 8]; i++;
talent[i] = [0, "Death's Embrace", 3, 1, 9]; i++;
talent[i] = [0, "Unstable Affliction", 1, 2, 9, [getTalentID("Contagion"),5]]; i++;
talent[i] = [0, "Pandemic", 1, 3, 9, [getTalentID("Unstable Affliction"),1]]; i++;
talent[i] = [0, "Everlasting Affliction", 5, 2, 10]; i++;
talent[i] = [0, "Haunt", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

//demonology talents
talent[i] = [1, "Improved Healthstone", 2, 1, 1]; i++;
talent[i] = [1, "Improved Imp", 3, 2, 1]; i++;
talent[i] = [1, "Demonic Embrace", 3, 3, 1]; i++;
talent[i] = [1, "Fel Synergy", 2, 4, 1]; i++;
talent[i] = [1, "Improved Health Funnel", 2, 1, 2]; i++;
talent[i] = [1, "Demonic Brutality", 3, 2, 2]; i++;
talent[i] = [1, "Fel Vitality", 3, 3, 2]; i++;
talent[i] = [1, "Improved Succubus", 3, 1, 3]; i++;
talent[i] = [1, "Soul Link", 1, 2, 3]; i++;
talent[i] = [1, "Fel Domination", 1, 3, 3]; i++;
talent[i] = [1, "Demonic Aegis", 3, 4, 3]; i++;
talent[i] = [1, "Unholy Power", 5, 2, 4, [getTalentID("Soul Link"),1]]; i++;
talent[i] = [1, "Master Summoner", 2, 3, 4, [getTalentID("Fel Domination"),1]]; i++;
talent[i] = [1, "Mana Feed", 1, 1, 5, [getTalentID("Unholy Power"),5]]; i++;
talent[i] = [1, "Master Conjuror", 2, 3, 5]; i++;
talent[i] = [1, "Master Demonologist", 5, 2, 6, [getTalentID("Unholy Power"),5]]; i++;
talent[i] = [1, "Molten Core", 3, 3, 6]; i++;
talent[i] = [1, "Demonic Resilience", 3, 1, 7]; i++;
talent[i] = [1, "Demonic Empowerment", 1, 2, 7, [getTalentID("Master Demonologist"),5]]; i++;
talent[i] = [1, "Demonic Knowledge", 3, 3, 7]; i++;
talent[i] = [1, "Demonic Tactics", 5, 2, 8]; i++;
talent[i] = [1, "Decimation", 2, 3, 8]; i++;
talent[i] = [1, "Improved Demonic Tactics", 3, 1, 9, [getTalentID("Demonic Tactics"),5]]; i++;
talent[i] = [1, "Summon Felguard", 1, 2, 9]; i++;
talent[i] = [1, "Nemesis", 3, 3, 9]; i++;
talent[i] = [1, "Demonic Pact", 5, 2, 10]; i++;
talent[i] = [1, "Metamorphosis", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

//destruction talents
talent[i] = [2, "Improved Shadow Bolt", 5, 2, 1]; i++;
talent[i] = [2, "Bane", 5, 3, 1]; i++;
talent[i] = [2, "Aftermath", 2, 1, 2]; i++;
talent[i] = [2, "Molten Skin", 3, 2, 2]; i++;
talent[i] = [2, "Cataclysm", 3, 3, 2]; i++;
talent[i] = [2, "Demonic Power", 2, 1, 3]; i++;
talent[i] = [2, "Shadowburn", 1, 2, 3]; i++;
talent[i] = [2, "Ruin", 5, 3, 3]; i++;
talent[i] = [2, "Intensity", 2, 1, 4]; i++;
talent[i] = [2, "Destructive Reach", 2, 2, 4]; i++;
talent[i] = [2, "Improved Searing Pain", 3, 4, 4]; i++;
talent[i] = [2, "Backlash", 3, 1, 5, [getTalentID("Intensity"),2]]; i++;
talent[i] = [2, "Improved Immolate", 3, 2, 5]; i++;
talent[i] = [2, "Devastation", 1, 3, 5, [getTalentID("Ruin"),5]]; i++;
talent[i] = [2, "Nether Protection", 3, 1, 6]; i++;
talent[i] = [2, "Emberstorm", 5, 3, 6]; i++;
talent[i] = [2, "Conflagrate", 1, 2, 7, [getTalentID("Improved Immolate"),3]]; i++;
talent[i] = [2, "Soul Leech", 3, 3, 7]; i++;
talent[i] = [2, "Pyroclasm", 3, 4, 7]; i++; 
talent[i] = [2, "Shadow and Flame", 5, 2, 8]; i++;
talent[i] = [2, "Improved Soul Leech", 2, 3, 8, [getTalentID("Soul Leech"),3]]; i++;
talent[i] = [2, "Backdraft", 3, 1, 9, [getTalentID("Conflagrate"),1]]; i++;
talent[i] = [2, "Shadowfury", 1, 2, 9]; i++;
talent[i] = [2, "Empowered Imp", 3, 3, 9]; i++;
talent[i] = [2, "Fire and Brimstone", 5, 2, 10]; i++;
talent[i] = [2, "Chaos Bolt", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

i = 0;


//Affliction Talents Begin


//Improved Curse of Agony - Affliction
rank[i] = [
"Increases the damage done by your Curse of Agony by 5%.",
"Increases the damage done by your Curse of Agony by 10%."
		];		
i++;	

//Suppression - Affliction
rank[i] = [
"Increases your chance to hit with spells by 1%, and reduces the mana cost of your Affliction spells by 2%.",
"Increases your chance to hit with spells by 2%, and reduces the mana cost of your Affliction spells by 4%.",
"Increases your chance to hit with spells by 3%, and reduces the mana cost of your Affliction spells by 6%."
		];
i++;		

//Improved Corruption - Affliction
rank[i] = [
"Increases the damage done by your Corruption by 2% and increases the critical strike chance of your Seed of Corruption by 1%.",
"Increases the damage done by your Corruption by 4% and increases the critical strike chance of your Seed of Corruption by 2%.",
"Increases the damage done by your Corruption by 6% and increases the critical strike chance of your Seed of Corruption by 3%.",
"Increases the damage done by your Corruption by 8% and increases the critical strike chance of your Seed of Corruption by 4%.",
"Increases the damage done by your Corruption by 10% and increases the critical strike chance of your Seed of Corruption by 5%."
		];
i++;		

//Improved Curse of Weakness - Affliction
rank[i] = [
"Increases the amount of attack power reduced by your Curse of Weakness by 10%.",
"Increases the amount of attack power reduced by your Curse of Weakness by 20%."
		];
i++;		

//Improved Drain Soul - Affliction
rank[i] = [
"Returns 7% of your maximum mana if the target is killed by you while you drain its soul. In addition, your Affliction spells generate 10% less threat.",
"Returns 15% of your maximum mana if the target is killed by you while you drain its soul. In addition, your Affliction spells generate 20% less threat."
		];
i++;		

//Improved Life Tap - Affliction
rank[i] = [
"Increases the amount of Mana awarded by your Life Tap spell by 10%.",
"Increases the amount of Mana awarded by your Life Tap spell by 20%."
		];
i++;		

//Soul Siphon - Affliction
rank[i] = [
"Increases the amount drained by your Drain Life and Drain Soul spells by an additional 3% for each Affliction effect on the target, up to a maximum of 24% additional effect.",
"Increases the amount drained by your Drain Life and Drain Soul spells by an additional 6% for each Affliction effect on the target, up to a maximum of 18% additional effect."
		];
i++;		

//Improved Fear - Affliction
rank[i] = [
"Causes your Fear spell to inflict a Nightmare on the target when the fear effect ends. The Nightmare effect reduces the target's movement speed by 15% for 5 sec.",
"Causes your Fear spell to inflict a Nightmare on the target when the fear effect ends. The Nightmare effect reduces the target's movement speed by 30% for 5 sec."
		];
i++;	

//Fel Concentration - Affliction
rank[i] = [ 
"Reduces the pushback suffered from damaging attacks, while casting Drain Life, Drain Mana, Drain Soul, Unstable Affliction and Haunt by 23%.",
"Reduces the pushback suffered from damaging attacks, while casting Drain Life, Drain Mana, Drain Soul, Unstable Affliction and Haunt by 46%.",
"Reduces the pushback suffered from damaging attacks, while casting Drain Life, Drain Mana, Drain Soul, Unstable Affliction and Haunt by 70%."
		];
i++;

//Amplify Curse - Affliction
rank[i] = [
"Reduces the global cooldown of your Curses by 0.5 sec."
		];
i++;		

//Grim Reach - Affliction
rank[i] = [
"Increases the range of your Affliction spells by 10%.",
"Increases the range of your Affliction spells by 20%."
		];
i++;

//Nightfall - Affliction	
rank[i] = [
"Gives your Corruption and Drain Life spells a 2% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
"Gives your Corruption and Drain Life spells a 4% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%."
		];
i++;

//Empowered Corruption - Affliction
rank[i] = [
"Increases the damage of your Corruption spell by an amount equal to 12% of your spell power.",
"Increases the damage of your Corruption spell by an amount equal to 24% of your spell power.",
"Increases the damage of your Corruption spell by an amount equal to 36% of your spell power."
		];
i++;

//Shadow Embrace - Affliction
rank[i] = [
"Your Shadow Bolt and Haunt spells apply the Shadow Embrace effect, increasing all periodic damage dealt to the target by you by 1%, and reduces all periodic healing done to the target by 2%. Lasts for 12 sec. Stacks up to 3 times.",
"Your Shadow Bolt and Haunt spells apply the Shadow Embrace effect, increasing all periodic damage dealt to the target by you by 2%, and reduces all periodic healing done to the target by 4%. Lasts for 12 sec. Stacks up to 3 times.",
"Your Shadow Bolt and Haunt spells apply the Shadow Embrace effect, increasing all periodic damage dealt to the target by you by 3%, and reduces all periodic healing done to the target by 6%. Lasts for 12 sec. Stacks up to 3 times.",
"Your Shadow Bolt and Haunt spells apply the Shadow Embrace effect, increasing all periodic damage dealt to the target by you by 4%, and reduces all periodic healing done to the target by 8%. Lasts for 12 sec. Stacks up to 3 times.",
"Your Shadow Bolt and Haunt spells apply the Shadow Embrace effect, increasing all periodic damage dealt to the target by you by 5%, and reduces all periodic healing done to the target by 10%. Lasts for 12 sec. Stacks up to 3 times."
		];
i++;

//Siphon Life - Affliction
rank[i] = [
"Instant<br>When you deal damage with your Corruption spell, you are instantly healed for 40% of the damage done. In addition, the damage done by your Corruption, Seed of Corruption and Unstable Affliction damage over time effects is increased by 5%."
		];
i++;		

//Curse of Exhaustion - Affliction
rank[i] = [
"<span style=text-align:left;float:left;>6% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br>Instant cast<br>Reduces the target's movement speed by 30% for 12 sec. Only one Curse per Warlock can be active on any one target."
		];		
i++;		

//Improved Felhunter - Affliction
rank[i] = [
"Your Felhunter regains 4% of its maximum mana each time it hits with its Shadow Bite ability and the cooldown on that ability is reduced by 2 sec. In addition, increases the effect of your Felhunter's Fel Intelligence by 5%.",
"Your Felhunter regains 8% of its maximum mana each time it hits with its Shadow Bite ability and the cooldown on that ability is reduced by 4 sec. In addition, increases the effect of your Felhunter's Fel Intelligence by 10%.",
		];
i++;

//Shadow Mastery - Affliction
rank[i] = [
"Increases the damage dealt or life drained by your Shadow spells by 3%.",
"Increases the damage dealt or life drained by your Shadow spells by 6%.",
"Increases the damage dealt or life drained by your Shadow spells by 9%.",
"Increases the damage dealt or life drained by your Shadow spells by 12%.",
"Increases the damage dealt or life drained by your Shadow spells by 15%."
		];
i++;

//Eradication - Affliction 
rank[i]=[
"When you deal damage with Corruption, you have 6% chance to increase your spell casting speed by 6% for 10 sec.",
"When you deal damage with Corruption, you have 6% chance to increase your spell casting speed by 12% for 10 sec.",
"When you deal damage with Corruption, you have 6% chance to increase your spell casting speed by 20% for 10 sec."
			];
i++;	

//Contagion - Affliction
rank[i] = [
"Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 1% and reduces the chance your helpful Affliction spells and damage over time effects will be dispelled by an additional 6%.",
"Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 2% and reduces the chance your helpful Affliction spells and damage over time effects will be dispelled by an additional 12%.",
"Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 3% and reduces the chance your helpful Affliction spells and damage over time effects will be dispelled by an additional 18%.",
"Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 4% and reduces the chance your helpful Affliction spells and damage over time effects will be dispelled by an additional 24%.",
"Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 5% and reduces the chance your helpful Affliction spells and damage over time effects will be dispelled by an additional 30%."
		];
i++;

//Dark Pact - Affliction
rank[i] = [
"100 yd range<br>Instant<br>Drains 305 of your summoned demon's Mana, returning 100% to you."
		];
i++;

//Improved Howl of Terror - Affliction
rank[i] = [
"Reduces the casting time of your Howl of Terror spell by 0.8 sec.",
"Reduces the casting time of your Howl of Terror spell by 1.5 sec."
		];
i++;

//Malediction - Affliction
rank[i] = [
"Increases your spell damage by 1%, and increases the periodic critical strike chance of your Corruption and Unstable Affliction spells by 3%.",
"Increases your spell damage by 2%, and increases the periodic critical strike chance of your Corruption and Unstable Affliction spells by 6%.",
"Increases your spell damage by 3%, and increases the periodic critical strike chance of your Corruption and Unstable Affliction spells by 9%."
		];
i++;

//Death's Embrace - Affliction
rank[i] = [
"Increases the amount drained by your Drain Life by 10% while your health is at or below 20% health, and increases the damage done by your Shadow spells by 4% when your target is at or below 35% health.",
"Increases the amount drained by your Drain Life by 20% while your health is at or below 20% health, and increases the damage done by your Shadow spells by 8% when your target is at or below 35% health.",
"Increases the amount drained by your Drain Life by 30% while your health is at or below 20% health, and increases the damage done by your Shadow spells by 12% when your target is at or below 35% health."
		];
i++;

//Unstable Affliction - Affliction  
rank[i]=[
"<span style=text-align:left;float:left;>15% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br>1.5 sec cast<br>Shadow energy slowly destroys the target, causing 550 damage over 15 sec. In addition, if the Unstable Affliction is dispelled it will cause 990 damage to the dispeller and silence them for 5 sec. Only one Unstable Affliction or Immolate per Warlock can be active on any one target."
			];
i++;	

//Pandemic - Affliction
rank[i] = [
"Grants the periodic damage from your Corruption and Unstable Affliction spells the ability to critically hit for 100% increased damage, and increases the critical strike damage bonus of your Haunt spell by 100%."
		];
i++;

//Everlasting Affliction - Affliction
rank[i] = [
"Your Corruption and Unstable Affliction spells gain an additional 1% of your bonus spell damage, and your Drain Life, Drain Soul, Shadow Bolt, and Haunt spells have a 20% chance to reset the duration of your Corruption spell on the target.",
"Your Corruption and Unstable Affliction spells gain an additional 2% of your bonus spell damage, and your Drain Life, Drain Soul, Shadow Bolt, and Haunt spells have a 40% chance to reset the duration of your Corruption spell on the target.",
"Your Corruption and Unstable Affliction spells gain an additional 3% of your bonus spell damage, and your Drain Life, Drain Soul, Shadow Bolt, and Haunt spells have a 60% chance to reset the duration of your Corruption spell on the target.",
"Your Corruption and Unstable Affliction spells gain an additional 4% of your bonus spell damage, and your Drain Life, Drain Soul, Shadow Bolt, and Haunt spells have a 80% chance to reset the duration of your Corruption spell on the target.",
"Your Corruption and Unstable Affliction spells gain an additional 5% of your bonus spell damage, and your Drain Life, Drain Soul, Shadow Bolt, and Haunt spells have a 100% chance to reset the duration of your Corruption spell on the target."
		];
i++;

//Haunt - Affliction 
rank[i] = [
"<span style=text-align:left;float:left;>12% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>1.5 sec cast</span><span style=text-align:right;float:right;>8 sec cooldown</span><br> You send a ghostly soul into the target, dealing 405 to 473 Shadow damage and increasing all damage done by your Shadow damage-over-time effects on the target by 20% for 12 sec. When the Haunt spell ends or is dispelled, the soul returns to you, healing you for 100% of the damage it did to the target."
		];
i++;


// DEMONOLOGY-------------------------------------------------------------->
//Improved Healthstone - Demonology
rank[i] = [
"Increases the amount of Health restored by your Healthstone by 10%.",
"Increases the amount of Health restored by your Healthstone by 20%."
		];
i++;		

//Improved Imp - Demonology
rank[i] = [
"Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 10%.",
"Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 20%.",
"Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 30%."
		];
i++;

//Demonic Embrace - Demonology
rank[i] = [
"Increases your total Stamina by 4%.",
"Increases your total Stamina by 7%.",
"Increases your total Stamina by 10%."
		];
i++;

//Fel Synergy - Demonology 
rank[i]=[
"You have a 50% chance to heal your pet for 15% of the amount of spell damage done by you.",
"You have a 100% chance to heal your pet for 15% of the amount of spell damage done by you."
		];
i++;

//Improved Health Funnel - Demonology
rank[i] = [
"Increases the amount of Health transfered by your Health Funnel spell by 10% and reduces the health cost by 10%. In addition, your summoned Demon takes 15% less damage while under the effect of your Health Funnel.",
"Increases the amount of Health transfered by your Health Funnel spell by 20% and reduces the health cost by 20%. In addition, your summoned Demon takes 30% less damage while under the effect of your Health Funnel."
		];		
i++;		

//Demonic Brutality - Demonology
rank[i] = [
"Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 10%, and increases the attack power bonus on your Felguard's Demonic Frenzy effect by 1%.",
"Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 20%, and increases the attack power bonus on your Felguard's Demonic Frenzy effect by 2%.",
"Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 30%, and increases the attack power bonus on your Felguard's Demonic Frenzy effect by 3%."
		];
i++;		

//Fel Vitality - Demonology
rank[i] = [
"Increases the Stamina and Intellect of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 5% and increases your maximum health and mana by 1%.",
"Increases the Stamina and Intellect of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 10% and increases your maximum health and mana by 2%.",
"Increases the Stamina and Intellect of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 15% and increases your maximum health and mana by 3%."
		];
i++;		

//Improved Succubus - Demonology
rank[i] = [
"Reduces the cast time of your Succubus' Seduction by 22%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 10%.",
"Reduces the cast time of your Succubus' Seduction by 44%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 20%.",
"Reduces the cast time of your Succubus' Seduction by 66%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 30%."
		];
i++;

//Soul Link - Demonology
rank[i]=[
"<span style=text-align:left;float:left;>16% of base mana</span><span style=text-align:right;float:right;>100 yd range</span><br>Instant cast<br>When active, 20% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, Felhunter, Felguard, or enslaved demon instead. That damage cannot be prevented. Lasts as long as the demon is active and controlled."
		];
i++;	

//Fel Domination - Demonology
rank[i] = [
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Your next Imp, Voidwalker, Succubus, Felhunter or Felguard Summon spell has its casting time reduced by 5.5 sec and its Mana cost reduced by 50%."
		];
i++;		

//Demonic Aegis - Demonology 
rank[i] = [
"Increases the effectiveness of your Demon Armor and Fel Armor spells by 10%.",
"Increases the effectiveness of your Demon Armor and Fel Armor spells by 20%.",
"Increases the effectiveness of your Demon Armor and Fel Armor spells by 30%."
		];
i++;	

//Unholy Power - Demonology 
rank[i] = [
"Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 4%.",
"Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 8%.",
"Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 12%.",
"Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 16%.",
"Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 20%."
		];
i++;

//Master Summoner - Demonology 
rank[i] = [
"Reduces the casting time of your Imp, Voidwalker, Succubus, Felhunter and Felguard Summoning spells by 2 sec and the Mana cost by 20%.",
"Reduces the casting time of your Imp, Voidwalker, Succubus, Felhunter and Felguard Summoning spells by 4 sec and the Mana cost by 40%."
		];
i++;		

//Mana Feed - Demonology 
rank[i]=[
"Instant<br>When you gain mana from Drain Mana or Life Tap spells, your summoned demon gains 100% of the mana you gain."
		];
i++;			

//Master Conjuror - Demonology
rank[i]=[
"Increases the combat ratings gained from your conjured Firestone and Spellstone by 150%.",
"Increases the combat ratings gained from your conjured Firestone and Spellstone by 300%."
		];
i++;		
	
//Master Demonologist - Demonology 
rank[i]=[
"Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br><br>Imp - Increases your fire damage by 1%, and increases the critical effect chance of your fire spells by 1%.<br><br>Voidwalker - Reduces physical damage taken by 2%.<br><br>Succubus - Increases your shadow damage by 1%, and increases the critical effect chance of your shadow spells by 1%.<br><br>Felhunter - Reduces all spell damage taken by 2%.<br><br>Felguard - Increases all damage done by 1%, and reduces all damage taken by 1%.",
"Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br><br>Imp - Increases your fire damage by 2%, and increases the critical effect chance of your fire spells by 1%.<br><br>Voidwalker - Reduces physical damage taken by 4%.<br><br>Succubus - Increases your shadow damage by 2%, and increases the critical effect chance of your shadow spells by 2%.<br><br>Felhunter - Reduces all spell damage taken by 4%.<br><br>Felguard - Increases all damage done by 2%, and reduces all damage taken by 2%.",
"Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br><br>Imp - Increases your fire damage by 3%, and increases the critical effect chance of your fire spells by 3%.<br><br>Voidwalker - Reduces physical damage taken by 6%.<br><br>Succubus - Increases your shadow damage by 3%, and increases the critical effect chance of your shadow spells by 3%.<br><br>Felhunter - Reduces all spell damage taken by 6%.<br><br>Felguard - Increases all damage done by 3%, and reduces all damage taken by 3%.",
"Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br><br>Imp - Increases your fire damage by 4%, and increases the critical effect chance of your fire spells by 4%.<br><br>Voidwalker - Reduces physical damage taken by 8%.<br><br>Succubus - Increases your shadow damage by 4%, and increases the critical effect chance of your shadow spells by 4%.<br><br>Felhunter - Reduces all spell damage taken by 8%.<br><br>Felguard - Increases all damage done by 4%, and reduces all damage taken by 4%.",
"Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br><br>Imp - Increases your fire damage by 5%, and increases the critical effect chance of your fire spells by 5%.<br><br>Voidwalker - Reduces physical damage taken by 10%.<br><br>Succubus - Increases your shadow damage by 5%, and increases the critical effect chance of your shadow spells by 5%.<br><br>Felhunter - Reduces all spell damage taken by 10%.<br><br>Felguard - Increases all damage done by 5%, and reduces all damage taken by 5%."
		];
i++;

//Molten Core - Demonology
rank[i] = [
"Increases the duration of your Immolate by 3 sec, and you have a 4% chance to gain the Molten Core effect when your Corruption deals damage. The Molten Core effect empowers your next 3 Incinerate or Soul Fire spells cast within 15 sec.<br><br>Incinerate - Increases damage done by 6% and reduces cast time by 10%.<br><br>Soul Fire - Increases damage done by 6% and increases critical strike chance by 5%.",
"Increases the duration of your Immolate by 6 sec, and you have a 8% chance to gain the Molten Core effect when your Corruption deals damage. The Molten Core effect empowers your next 3 Incinerate or Soul Fire spells cast within 15 sec.<br><br>Incinerate - Increases damage done by 12% and reduces cast time by 20%.<br><br>Soul Fire - Increases damage done by 12% and increases critical strike chance by 10%.",
"Increases the duration of your Immolate by 9 sec, and you have a 12% chance to gain the Molten Core effect when your Corruption deals damage. The Molten Core effect empowers your next 3 Incinerate or Soul Fire spells cast within 15 sec.<br><br>Incinerate - Increases damage done by 18% and reduces cast time by 30%.<br><br>Soul Fire - Increases damage done by 18% and increases critical strike chance by 15%."
		];
i++;

//Demonic Resilience - Demonology 
rank[i]=[
"Reduces the chance you'll be critically hit by melee and spells by 1% and reduces all damage your summoned demon takes by 5%.",
"Reduces the chance you'll be critically hit by melee and spells by 2% and reduces all damage your summoned demon takes by 10%.",
"Reduces the chance you'll be critically hit by melee and spells by 3% and reduces all damage your summoned demon takes by 15%."
		];
i++;

//Demonic Empowerment - Demonology
rank[i]=[
"Grants the Warlock's summoned demon Empowerment.<br><br>Imp - Increases the Imp's spell critical strike chance by 20% for 30 sec.<br><br>Voidwalker - Increases the Voidwalker's health by 20%, and its threat generated from spells and attacks by 20% for 20 sec.<br><br>Succubus - Instantly vanishes, causing the Succubus to go into an improved Invisibility state. The vanish effect removes all stuns, snares and movement impairing effects from the Succubus.<br><br>Felhunter - Dispels all magical effects from the Felhunter.<br/><br/>Felguard - Increases the Felguard's attack speed by 20% and breaks all stun, snare and movement impairing effects and makes your Felguard immune to them for 15 sec."
		];
i++;		
	
//Demonic Knowledge - Demonology 
rank[i]=[
"Increases your spell damage by an amount equal to 4% of the total of your active demon's Stamina plus Intellect.",
"Increases your spell damage by an amount equal to 8% of the total of your active demon's Stamina plus Intellect.",
"Increases your spell damage by an amount equal to 12% of the total of your active demon's Stamina plus Intellect."
		];
i++;

//Demonic Tactics - Demonology 
rank[i]=[
"Increases melee and spell critical strike chance for you and your summoned demon by 2%.",
"Increases melee and spell critical strike chance for you and your summoned demon by 4%.",
"Increases melee and spell critical strike chance for you and your summoned demon by 6%.",
"Increases melee and spell critical strike chance for you and your summoned demon by 8%.",
"Increases melee and spell critical strike chance for you and your summoned demon by 10%."
		];
i++;

//Decimation - Demonology 
rank[i]=[
"When you Shadowbolt, Incinerate or Soul Fire a target that is at or below 35% health, the cast time of Soul Fire spell is reduced by 20% for 10 sec. Soul Fires cast under the effect of Decimation cost no shard.",
"When you Shadowbolt, Incinerate or Soul Fire a target that is at or below 35% health, the cast time of Soul Fire spell is reduced by 40% for 10 sec. Soul Fires cast under the effect of Decimation cost no shard."
		];
i++;	

//Improved Demonic Tactics - Demonology
rank[i]=[
"Increases your summoned demons critical strike chance equal to 10% of your critical strike chance.",
"Increases your summoned demons critical strike chance equal to 20% of your critical strike chance.",
"Increases your summoned demons critical strike chance equal to 30% of your critical strike chance."
		];
i++;

//Summon Felguard - Demonology 
rank[i]=[
"<span style=text-align:left;float:left;>80% of base Mana</span><BR><span style=text-align:left;float:left;>10 sec cast</span><br>Summons a Felguard under the command of the Warlock."
		];
i++;

//Nemesis - Demonology 
rank[i]=[
"Reduces the cooldown of your Demonic Empowerment, Metamorphosis, and Fel Domination spells by 10%.",
"Reduces the cooldown of your Demonic Empowerment, Metamorphosis, and Fel Domination spells by 20%.",
"Reduces the cooldown of your Demonic Empowerment, Metamorphosis, and Fel Domination spells by 30%."
		];
i++;

//Demonic Pact - Demonology
rank[i]=[
"Increases your spell damage by 2%, and your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 2% of your Spell Damage for 45 sec. This effect has a 20 sec cooldown. Does not work on Enslaved demons.",
"Increases your spell damage by 4%, and your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 4% of your Spell Damage for 45 sec. This effect has a 20 sec cooldown. Does not work on Enslaved demons.",
"Increases your spell damage by 6%, and your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 6% of your Spell Damage for 45 sec. This effect has a 20 sec cooldown. Does not work on Enslaved demons.",
"Increases your spell damage by 8%, and your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 8% of your Spell Damage for 45 sec. This effect has a 20 sec cooldown. Does not work on Enslaved demons.",
"Increases your spell damage by 10%, and your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 10% of your Spell Damage for 45 sec. This effect has a 20 sec cooldown. Does not work on Enslaved demons."
		];
i++;

//Metamorphosis - Demonology 
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><br>You transform into a Demon for 30 sec. This form increases your armor by 600%, damage by 20%, reduces the chance you'll be critically hit by melee attacks by 6% and reduces the duration of stun and snare effects by 50%. You gain some unique demon abilities in addition to your normal abilities. 3 minute cooldown."
		];
i++;


//DESTRUCTION ----------------------------------------------

//Improved Shadow Bolt - Destruction  
rank[i]=[
"Increases the damage done by your Shadow Bolt spell by 2%, and your Shadow Bolt has a 20% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.",
"Increases the damage done by your Shadow Bolt spell by 4%, and your Shadow Bolt has a 40% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.",
"Increases the damage done by your Shadow Bolt spell by 6%, and your Shadow Bolt has a 60% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.",
"Increases the damage done by your Shadow Bolt spell by 8%, and your Shadow Bolt has a 80% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.",
"Increases the damage done by your Shadow Bolt spell by 10%, and your Shadow Bolt has a 100% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec."
		];
i++;		

//Bane - Destruction
rank[i]=[
"Reduces the casting time of your Shadow Bolt, Chaos Bolt and Immolate spells by 0.1 sec and your Soul Fire spell by 0.4 sec.",
"Reduces the casting time of your Shadow Bolt, Chaos Bolt and Immolate spells by 0.2 sec and your Soul Fire spell by 0.8 sec.",
"Reduces the casting time of your Shadow Bolt, Chaos Bolt and Immolate spells by 0.3 sec and your Soul Fire spell by 1.2 sec.",
"Reduces the casting time of your Shadow Bolt, Chaos Bolt and Immolate spells by 0.4 sec and your Soul Fire spell by 1.6 sec.",
"Reduces the casting time of your Shadow Bolt, Chaos Bolt and Immolate spells by 0.5 sec and your Soul Fire spell by 2 sec."
		];
i++;

//Aftermath - Destruction
rank[i]=[
"Increases the periodic damage done by your Immolate by 3%, and your Conflagrate has a 50% chance to daze the target for 5 sec.",
"Increases the periodic damage done by your Immolate by 6%, and your Conflagrate has a 100% chance to daze the target for 5 sec."
		];
i++;

//Molten Skin - Destruction
rank[i]=[
"Reduces all damage taken by 2%.",
"Reduces all damage taken by 4%.",
"Reduces all damage taken by 6%."
		];
i++;

//Cataclysm - Destruction
rank[i]=[
"Reduces the Mana cost of your Destruction spells by 4%.",
"Reduces the Mana cost of your Destruction spells by 7%.",
"Reduces the Mana cost of your Destruction spells by 10%."
		];
i++;

//Demonic Power - Destruction
rank[i]=[
"Reduces the cooldown of your Succubus' Lash of Pain spell by 3 sec, and reduces the casting time of your Imp's Firebolt spell by 0.25 sec.",
"Reduces the cooldown of your Succubus' Lash of Pain spell by 6 sec, and reduces the casting time of your Imp's Firebolt spell by 0.5 sec."
		];
i++;	

//Shadowburn - Destruction 
rank[i]=[
"<span style=text-align:left;float:left;>20% of base mana</span><span style=text-align:right;float:right;>20 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>15 sec cooldown</span><br>Instantly blasts the target for 89 to 99 Shadow damage. If the target dies within 5 secs of Shadowburn, and yields experience or honor, the caster gains a Soul Shard."
		];
i++;

//Ruin - Destruction  
rank[i]=[
"Increases the critical strike damage bonus of your Destruction spells and your Imp's Firebolt spell by 20%.",
"Increases the critical strike damage bonus of your Destruction spells and your Imp's Firebolt spell by 40%.",
"Increases the critical strike damage bonus of your Destruction spells and your Imp's Firebolt spell by 60%.",
"Increases the critical strike damage bonus of your Destruction spells and your Imp's Firebolt spell by 80%.",
"Increases the critical strike damage bonus of your Destruction spells and your Imp's Firebolt spell by 100%."
		];
i++;

//Intensity - Destruction
rank[i]=[
"Reduces the pushback suffered from damaging attacks while casting or channeling any Destruction spell by 35%.",
"Reduces the pushback suffered from damaging attacks while casting or channeling any Destruction spell by 70%."
		];
i++;		

//Destructive Reach - Destruction  
rank[i]=[
"Increases the range of your Destruction spells by 10% and reduces threat caused by Destruction spells by 10%.",
"Increases the range of your Destruction spells by 20% and reduces threat caused by Destruction spells by 20%."
		];
i++;	

//Improved Searing Pain - Destruction   
rank[i]=[
"Increases the critical strike chance of your Searing Pain spell by 4%.",
"Increases the critical strike chance of your Searing Pain spell by 7%.",
"Increases the critical strike chance of your Searing Pain spell by 10%."
		];
i++;	

//Backlash - Destruction
rank[i]=[
"Increases your critical strike chance with spells by an additional 1% and gives you a 8% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%. This effect lasts 8 sec and will not occur more than once every 8 seconds.",
"Increases your critical strike chance with spells by an additional 2% and gives you a 16% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%. This effect lasts 8 sec and will not occur more than once every 8 seconds.",
"Increases your critical strike chance with spells by an additional 3% and gives you a 25% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%. This effect lasts 8 sec and will not occur more than once every 8 seconds."
		];
i++;

//Improved Immolate - Destruction 
rank[i]=[
"Increases the damage of your Immolate spell by 10%.",
"Increases the damage of your Immolate spell by 20%.",
"Increases the damage of your Immolate spell by 30%."
		];
i++;

//Devastation - Destruction
rank[i]=[
"Increases the critical strike chance of your Destruction spells by 5%."
		];
i++;

//Nether Protection - Destruction 
rank[i]=[
"After being hit with a spell, you have a 10% chance to gain Nether Protection, reducing all damage by that spell school by 30% for 8 sec.",
"After being hit with a spell, you have a 20% chance to gain Nether Protection, reducing all damage by that spell school by 30% for 8 sec.",
"After being hit with a spell, you have a 30% chance to gain Nether Protection, reducing all damage by that spell school by 30% for 8 sec."
		];
i++;

//Emberstorm - Destruction 
rank[i]=[
"Increases the damage done by your Fire spells by 3% and reduces the cast time of your Incinerate spell by 0.05 sec.",
"Increases the damage done by your Fire spells by 6% and reduces the cast time of your Incinerate spell by 0.10 sec.",
"Increases the damage done by your Fire spells by 9% and reduces the cast time of your Incinerate spell by 0.15 sec.",
"Increases the damage done by your Fire spells by 12% and reduces the cast time of your Incinerate spell by 0.20 sec.",
"Increases the damage done by your Fire spells by 15% and reduces the cast time of your Incinerate spell by 0.25 sec."
		];
i++;

//Conflagrate - Destruction 
rank[i]=[
"<span style=text-align:left;float:left;>16% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant Cast</span><span style=text-align:right;float:right;>10 sec cooldown</span><br>Consumes an Immolate or Shadowflame effect on the enemy target to instantly deal damage equal to 60% of your Immolate or Shadowflame, and causes an additional 40% damage over 6 sec."
		];
i++;	

//Soul Leech - Destruction 
rank[i]=[
"Gives your Shadow Bolt, Shadowburn, Chaos Bolt, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 10% chance to return health equal to 20% of the damage caused.",
"Gives your Shadow Bolt, Shadowburn, Chaos Bolt, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 20% chance to return health equal to 20% of the damage caused.",
"Gives your Shadow Bolt, Shadowburn, Chaos Bolt, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 30% chance to return health equal to 20% of the damage caused."
		];
i++;

//Pyroclasm - Destruction
rank[i]=[
"When you critically strike with Searing Pain or Conflagrate, your Fire and Shadow spell damage is increased by 2% for 10 sec.",
"When you critically strike with Searing Pain or Conflagrate, your Fire and Shadow spell damage is increased by 4% for 10 sec.",
"When you critically strike with Searing Pain or Conflagrate, your Fire and Shadow spell damage is increased by 6% for 10 sec."
		];
i++;

//Shadow and Flame - Destruction 
rank[i]=[
"Your Shadow Bolt, Shadowburn, Chaos Bolt and Incinerate spells gain an additional 4% of your bonus spell damage effects.",
"Your Shadow Bolt, Shadowburn, Chaos Bolt and Incinerate spells gain an additional 8% of your bonus spell damage effects.",
"Your Shadow Bolt, Shadowburn, Chaos Bolt and Incinerate spells gain an additional 12% of your bonus spell damage effects.",
"Your Shadow Bolt, Shadowburn, Chaos Bolt and Incinerate spells gain an additional 16% of your bonus spell damage effects.",
"Your Shadow Bolt, Shadowburn, Chaos Bolt and Incinerate spells gain an additional 20% of your bonus spell damage effects."
		];
i++;

//Improved Soul Leech - Destruction 
rank[i]=[
"Your Soul Leech effect also restores mana to you and your summoned demon equal to 1% of maximum mana, and has a 50% chance to grant up to 10 party or raid members mana regeneration equal to 1% of maximum mana per 5 sec. Lasts for 15 sec.",
"Your Soul Leech effect also restores mana to you and your summoned demon equal to 2% of maximum mana, and has a 100% chance to grant up to 10 party or raid members mana regeneration equal to 1% of maximum mana per 5 sec. Lasts for 15 sec."
		];
i++;

//Backdraft - Destruction 
rank[i]=[
"When you cast Conflagrate, the cast time of your next three Destruction spells is reduced by 10%. Lasts 15 sec.",
"When you cast Conflagrate, the cast time of your next three Destruction spells is reduced by 20%. Lasts 15 sec.",
"When you cast Conflagrate, the cast time of your next three Destruction spells is reduced by 30%. Lasts 15 sec."
		];
i++;

//Shadowfury - Destruction
rank[i]=[
"<span style=text-align:left;float:left;>27% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>20 sec cooldown</span><br>Shadowfury is unleashed, causing 343 to 407 Shadow damage and stunning all enemies within 8 yds for 3 sec."
		];
i++;

//Empowered Imp - Destruction 
rank[i]=[
"Increases the damage done by your Imp by 10%, and all critical hits done by your Imp have a 33% chance to increase your spell critical hit chance for your next spell by 20%. This effect lasts 8 sec.",
"Increases the damage done by your Imp by 20%, and all critical hits done by your Imp have a 66% chance to increase your spell critical hit chance for your next spell by 20%. This effect lasts 8 sec.",
"Increases the damage done by your Imp by 30%, and all critical hits done by your Imp have a 100% chance to increase your spell critical hit chance for your next spell by 20%. This effect lasts 8 sec."
		];
i++;

//Fire and Brimstone - Destruction 
rank[i]=[
"Increases the damage done by your Incinerate and Chaos Bolt spells to targets afflicted by your Immolate by 2%, and the critical strike chance of your Conflagrate spell is increased by 5%.",
"Increases the damage done by your Incinerate and Chaos Bolt spells to targets afflicted by your Immolate by 4%, and the critical strike chance of your Conflagrate spell is increased by 10%.",
"Increases the damage done by your Incinerate and Chaos Bolt spells to targets afflicted by your Immolate by 6%, and the critical strike chance of your Conflagrate spell is increased by 15%.",
"Increases the damage done by your Incinerate and Chaos Bolt spells to targets afflicted by your Immolate by 8%, and the critical strike chance of your Conflagrate spell is increased by 20%.",
"Increases the damage done by your Incinerate and Chaos Bolt spells to targets afflicted by your Immolate by 10%, and the critical strike chance of your Conflagrate spell is increased by 25%."
		];
i++;

//Chaos Bolt - Destruction 
rank[i]=[
"<span style=text-align:left;float:left;>7% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>2.5 sec cast</span><span style=text-align:right;float:right;>12 sec cooldown</span><BR> Sends a bolt of chaotic fire at the enemy, dealing 837 to 1061 Fire damage. Chaos Bolt cannot be resisted, and pierces through all absorption effects."
		];
i++;

//Destruction Talents End^^

