var i = 0;
var t = 0;

var className = "Death Knight Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Blood"; i++;
tree[i] = "Frost"; i++;
tree[i] = "Unholy"; i++;

i = 0;

//rank
//horizontal position
//vertical position
//Blood talents
talent[i] = [0, "Butchery", 2, 1, 1]; i++;
talent[i] = [0, "Subversion", 3, 2, 1]; i++;
talent[i] = [0, "Blade Barrier", 5, 3, 1]; i++;
talent[i] = [0, "Bladed Armor", 5, 1, 2]; i++;
talent[i] = [0, "Scent of Blood", 3, 2, 2]; i++;
talent[i] = [0, "Two-Handed Weapon Specialization", 2, 3, 2]; i++;
talent[i] = [0, "Rune Tap", 1, 1, 3]; i++;
talent[i] = [0, "Dark Conviction", 5, 2, 3]; i++;
talent[i] = [0, "Death Rune Mastery", 3, 3, 3]; i++;
talent[i] = [0, "Improved Rune Tap", 3, 1, 4, [getTalentID("Rune Tap"),1]]; i++;
talent[i] = [0, "Spell Deflection", 3, 3, 4]; i++;
talent[i] = [0, "Vendetta", 3, 4, 4]; i++;
talent[i] = [0, "Bloody Strikes", 3, 1, 5]; i++;
talent[i] = [0, "Veteran of the Third War", 3, 3, 5]; i++;
talent[i] = [0, "Mark of Blood", 1, 4, 5]; i++;
talent[i] = [0, "Bloody Vengeance", 3, 2, 6, [getTalentID("Dark Conviction"),5]]; i++;
talent[i] = [0, "Abomination's Might", 2, 3, 6]; i++;
talent[i] = [0, "Bloodworms", 3, 1, 7]; i++;
talent[i] = [0, "Hysteria", 1, 2, 7]; i++;
talent[i] = [0, "Improved Blood Presence", 2, 3, 7]; i++;
talent[i] = [0, "Improved Death Strike", 2, 1, 8]; i++;
talent[i] = [0, "Sudden Doom", 3, 2, 8]; i++;
talent[i] = [0, "Vampiric Blood", 1, 3, 8]; i++;
talent[i] = [0, "Will of the Necropolis", 3, 1, 9]; i++;
talent[i] = [0, "Heart Strike", 1, 2, 9]; i++;
talent[i] = [0, "Might of Mograine", 3, 3, 9]; i++;
talent[i] = [0, "Blood Gorged", 5, 2, 10]; i++;
talent[i] = [0, "Dancing Rune Weapon", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

//Frost talents
talent[i] = [1, "Improved Icy Touch", 3, 1, 1]; i++;
talent[i] = [1, "Runic Power Mastery", 2, 2, 1]; i++;
talent[i] = [1, "Toughness", 5, 3, 1]; i++;
talent[i] = [1, "Icy Reach", 2, 2, 2]; i++;
talent[i] = [1, "Black Ice", 5, 3, 2]; i++;
talent[i] = [1, "Nerves of Cold Steel", 3, 4, 2]; i++;
talent[i] = [1, "Icy Talons", 5, 1, 3, [getTalentID("Improved Icy Touch"),3]]; i++;
talent[i] = [1, "Lichborne", 1, 2, 3]; i++;
talent[i] = [1, "Annihilation", 3, 3, 3]; i++;
talent[i] = [1, "Killing Machine", 5, 2, 4]; i++;
talent[i] = [1, "Chill of the Grave", 2, 3, 4]; i++;
talent[i] = [1, "Endless Winter", 2, 4, 4]; i++;
talent[i] = [1, "Frigid Dreadplate", 3, 2, 5]; i++;
talent[i] = [1, "Glacier Rot", 3, 3, 5]; i++;
talent[i] = [1, "Deathchill", 1, 4, 5]; i++;
talent[i] = [1, "Improved Icy Talons", 1, 1, 6, [getTalentID("Icy Talons"),5]]; i++;
talent[i] = [1, "Merciless Combat", 2, 2, 6]; i++
talent[i] = [1, "Rime", 3, 3, 6]; i++;
talent[i] = [1, "Chilblains", 3, 1, 7]; i++;
talent[i] = [1, "Hungering Cold", 1, 2, 7]; i++;
talent[i] = [1, "Improved Frost Presence", 2, 3, 7]; i++;
talent[i] = [1, "Threat of Thassarian", 3, 1, 8]; i++;
talent[i] = [1, "Blood of the North", 3, 2, 8]; i++;
talent[i] = [1, "Unbreakable Armor", 1, 3, 8]; i++;
talent[i] = [1, "Acclimation", 3, 1, 9]; i++;
talent[i] = [1, "Frost Strike", 1, 2, 9]; i++;
talent[i] = [1, "Guile of Gorefiend", 3, 3, 9]; i++;
talent[i] = [1, "Tundra Stalker", 5, 2, 10]; i++;
talent[i] = [1, "Howling Blast", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

//Unholy talents
talent[i] = [2, "Vicious Strikes", 2, 1, 1]; i++;
talent[i] = [2, "Virulence", 3, 2, 1]; i++;
talent[i] = [2, "Anticipation", 5, 3, 1]; i++;
talent[i] = [2, "Epidemic", 2, 1, 2]; i++;
talent[i] = [2, "Morbidity", 3, 2, 2]; i++;
talent[i] = [2, "Unholy Command", 2, 3, 2]; i++;
talent[i] = [2, "Ravenous Dead", 3, 4, 2]; i++;
talent[i] = [2, "Outbreak", 3, 1, 3]; i++;
talent[i] = [2, "Necrosis", 5, 2, 3]; i++;
talent[i] = [2, "Corpse Explosion", 1, 3, 3]; i++;
talent[i] = [2, "On a Pale Horse", 2, 2, 4]; i++;
talent[i] = [2, "Blood-Caked Blade", 3, 3, 4]; i++;
talent[i] = [2, "Night of the Dead", 2, 4, 4]; i++;
talent[i] = [2, "Unholy Blight", 1, 1, 5]; i++;
talent[i] = [2, "Impurity", 5, 2, 5]; i++;
talent[i] = [2, "Dirge", 2, 3, 5]; i++;
talent[i] = [2, "Desecration", 2, 1, 6]; i++;
talent[i] = [2, "Magic Suppression", 3, 2, 6]; i++;
talent[i] = [2, "Reaping", 3, 3, 6]; i++;
talent[i] = [2, "Master of Ghouls", 1, 4, 6, [getTalentID("Night of the Dead"),2]]; i++;
talent[i] = [2, "Desolation", 5, 1, 7]; i++;
talent[i] = [2, "Anti-Magic Zone", 1, 2, 7, [getTalentID("Magic Suppression"),3]]; i++;
talent[i] = [2, "Improved Unholy Presence", 2, 3, 7]; i++;
talent[i] = [2, "Ghoul Frenzy", 1, 4, 7, [getTalentID("Master of Ghouls"),1]]; i++;
talent[i] = [2, "Crypt Fever", 3, 2, 8]; i++;
talent[i] = [2, "Bone Shield", 1, 3, 8]; i++;
talent[i] = [2, "Wandering Plague", 3, 1, 9]; i++;
talent[i] = [2, "Ebon Plaguebringer", 3, 2, 9, [getTalentID("Crypt Fever"),3]]; i++;
talent[i] = [2, "Scourge Strike", 1, 3, 9]; i++;
talent[i] = [2, "Rage of Rivendare", 5, 2, 10]; i++;
talent[i] = [2, "Summon Gargoyle", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

i = 0;


//Blood Talents Begin

//Butchery - BLOOD
rank[i] = [
"Whenever you kill an enemy that grants experience or honor, you generate up to 10 runic power. In addition, you generate 1 runic power per 5 sec. while in combat.",
"Whenever you kill an enemy that grants experience or honor, you generate up to 20 runic power. In addition, you generate 2 runic power per 5 sec. while in combat."
		];
i++;	
//Blood Talents End

//SUBVERSION - BLOOD
rank[i] = [
"Increases the critical strike chance of Blood Strike, Scourge Strike, Heart Strike and Obliterate by 3%, and reduces threat generated while in Blood or Unholy Presence by 8%.",
"Increases the critical strike chance of Blood Strike, Scourge Strike, Heart Strike and Obliterate by 6%, and reduces threat generated while in Blood or Unholy Presence by 16%.",
"Increases the critical strike chance of Blood Strike, Scourge Strike, Heart Strike and Obliterate by 9%, and reduces threat generated while in Blood or Unholy Presence by 25%."
		];
i++;

//BLADE BARRIER - BLOOD
rank[i] = [
"Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 1% for the next 10 sec.",
"Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 2% for the next 10 sec.",
"Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 3% for the next 10 sec.",
"Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 4% for the next 10 sec.",
"Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 5% for the next 10 sec."
		];
i++;

//Bladed Armor - Blood
rank[i] = [
"Increases your attack power by 1 for every 180 armor value you have. ",
"Increases your attack power by 2 for every 180 armor value you have. ",
"Increases your attack power by 3 for every 180 armor value you have. ",
"Increases your attack power by 4 for every 180 armor value you have. ",
"Increases your attack power by 5 for every 180 armor value you have. "
		];
i++;

//SCENT OF BLOOD - BLOOD
rank[i] = [
"You have a 15% chance after being struck by a ranged or melee hit to gain the Scent of Blood effect, causing your next melee hit to generate 5 runic power. This effect cannot occur more often than once every 20 sec.",
"You have a 15% chance after being struck by a ranged or melee hit to gain the Scent of Blood effect, causing your next 2 melee hits to generate 5 runic power. This effect cannot occur more often than once every 20 sec.",
"You have a 15% chance after being struck by a ranged or melee hit to gain the Scent of Blood effect, causing your next 3 melee hits to generate 5 runic power. This effect cannot occur more often than once every 20 sec."
		];
i++;
	
//Two-Handed Weapon Specialization - BLOOD
rank[i] = [
"Increases the damage you deal with two-handed melee weapons by 2%.",
"Increases the damage you deal with two-handed melee weapons by 4%."
		];
i++;	
	
//Rune Tap - Blood
rank[i] = [
"<span style=text-align:left;float:left;>1 Blood<br></span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>1 min cooldown</span><br>Converts 1 Blood Rune into 10% of your maximum health."
		];
i++;
	
//DARK CONVICTION - BLOOD
rank[i] = [
"Increases your chance to critically hit with weapons, spells and abilities by 1%.",
"Increases your chance to critically hit with weapons, spells and abilities by 2%.",
"Increases your chance to critically hit with weapons, spells and abilities by 3%.",
"Increases your chance to critically hit with weapons, spells and abilities by 4%.",
"Increases your chance to critically hit with weapons, spells and abilities by 5%."
		];
i++;

//DEATH RUNE MASTERY - BLOOD
rank[i] = [
"Whenever you hit with Death Strike or Obliterate there is a 33% chance that the Frost and Unholy Runes will become Death Runes when they activate. Death Runes count as a Blood, Frost or Unholy Rune.",
"Whenever you hit with Death Strike or Obliterate there is a 66% chance that the Frost and Unholy Runes will become Death Runes when they activate. Death Runes count as a Blood, Frost or Unholy Rune.",
"Whenever you hit with Death Strike or Obliterate there is a 100% chance that the Frost and Unholy Runes will become Death Runes when they activate. Death Runes count as a Blood, Frost or Unholy Rune."
		];
i++;

//Improved Rune Tap - Blood
rank[i] = [
"Increases the health provided by Rune Tap by 33% and lowers its cooldown by 10 sec.",
"Increases the health provided by Rune Tap by 66% and lowers its cooldown by 20 sec.",
"Increases the health provided by Rune Tap by 100% and lowers its cooldown by 30 sec."
		];
i++;

//SPELL DEFLECTION - BLOOD
rank[i] = [
"You have a chance equal to your Parry chance of taking 15% less damage from a direct damage spell.",
"You have a chance equal to your Parry chance of taking 30% less damage from a direct damage spell.",
"You have a chance equal to your Parry chance of taking 45% less damage from a direct damage spell."
		];
i++;

//VENDETTA - BLOOD
rank[i] = [
"Heals you for up to 2% of your total maximum health whenever you kill a target that yields experience or honor.",
"Heals you for up to 4% of your total maximum health whenever you kill a target that yields experience or honor.",
"Heals you for up to 6% of your total maximum health whenever you kill a target that yields experience or honor."
		];
i++;

//Bloody Strikes - Blood
rank[i] = [
"Increases the damage of Blood Strike by 5% and Heart Strike by 15%, and increases the damage of Blood Boil by 10%.",
"Increases the damage of Blood Strike by 10% and Heart Strike by 30%, and increases the damage of Blood Boil by 20%.",
"Increases the damage of Blood Strike by 15% and Heart Strike by 45%, and increases the damage of Blood Boil by 30%."
		];
i++;

//Veteran of the Third War - Blood
rank[i] = [
"Increases your total Strength by 2%, your Stamina by 1%, and your expertise by 2.",
"Increases your total Strength by 4%, your Stamina by 2%, and your expertise by 4.",
"Increases your total Strength by 6%, your Stamina by 3%, and your expertise by 6."
		];
i++;

//Mark of Blood - Blood
rank[i] = [
"<span style=text-align:left;float:left;>1 Blood</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br> Place a Mark of Blood on an enemy. Whenever the marked enemy deals damage to a target, that target is healed for 4% of its maximum health. Lasts for 20 sec or up to 20 hits."
		];
i++;

//Bloody Vengeance - Blood
rank[i] = [
"Gives you a 1% bonus to physical damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability. This effect stacks up to 3 times.",
"Gives you a 2% bonus to physical damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability. This effect stacks up to 3 times.",
"Gives you a 3% bonus to physical damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability. This effect stacks up to 3 times."
		];
i++;

//Abomination's Might - Blood
rank[i] = [
"Increases the attack power by 5% of party and raid members within 100 yards. Also increases your total Strength by 1%.",
"Increases the attack power by 10% of party and raid members within 100 yards. Also increases your total Strength by 2%."
		];
i++;
	

//Bloodworms - Blood
rank[i] = [
"Your weapon hits have a 3% chance to cause the target to spawn 2-4 Bloodworms. Bloodworms attack your enemies, healing you as they do damage for 20 sec or until killed.",
"Your weapon hits have a 6% chance to cause the target to spawn 2-4 Bloodworms. Bloodworms attack your enemies, healing you as they do damage for 20 sec or until killed.",
"Your weapon hits have a 9% chance to cause the target to spawn 2-4 Bloodworms. Bloodworms attack your enemies, healing you as they do damage for 20 sec or until killed."
		];
i++;

//Hysteria - Blood
rank[i] = [
"<span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br> Induces a friendly unit into a killing frenzy for 30 sec. The target is Enraged, which increases their physical damage by 20%, but causes them to lose health equal to 1% of their maximum health every second."
		];
i++;

//Improved Blood Presence - Blood
rank[i] = [
"While in Frost Presence or Unholy Presence, you retain 2% healing from Blood Presence, and healing done to you is increased by 5% in Blood Presence.",
"While in Frost Presence or Unholy Presence, you retain 4% healing from Blood Presence, and healing done to you is increased by 10% in Blood Presence.",
		];
i++;

//Improved Death Strike - Blood
rank[i] = [
"Increases the damage of your Death Strike by 15%, increases its critical strike chance by 3%, and increases the healing granted by 25%.",
"Increases the damage of your Death Strike by 30%, increases its critical strike chance by 6%, and increases the healing granted by 50%.",
		];
i++;

//SUDDEN DOOM - BLOOD
rank[i] = [
"Your Blood Strikes and Heart Strikes have a 5% chance to launch a free Death Coil at your target.",
"Your Blood Strikes and Heart Strikes have a 10% chance to launch a free Death Coil at your target.",
"Your Blood Strikes and Heart Strikes have a 15% chance to launch a free Death Coil at your target."
		];
i++;

//Vampiric Blood - Blood
rank[i] = [
"<span style=text-align:left;float:left;>1 Blood</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>1 min cooldown</span><br>Temporarily grants the Death Knight 15% of maximum health and increases the amount of health generated through spells and effects by 35% for 10 sec. After the effect expires, the health is lost."
		];
i++;

//Will of the Necropolis - BLOOD
rank[i] = [
"Damage that would take you below 35% health or taken while you are at 35% health is reduced by 5%.",
"Damage that would take you below 35% health or taken while you are at 35% health is reduced by 10%.",
"Damage that would take you below 35% health or taken while you are at 35% health is reduced by 15%.",
		];
i++;

//Heart Strike - Blood
rank[i] = [
"<span style=text-align:left;float:left;>1 Blood</span><span style=text-align:right;float:right;>Melee range</span><br><span style=text-align:left;float:left;>Instant</span><br><span style=text-align:left;float:left;>Requires Melee Weapon</span><br> Instantly strike the target and his nearest ally, causing 50% weapon damage plus 125 on the primary target, and 25% weapon damage plus 63 on the secondary target. Each target takes 10% additional damage for each of your diseases active on that target."
		];
i++;

//Might of Mograine - BLOOD
rank[i] = [
"Increases the critical strike damage bonus of your Blood Boil, Blood Strike, Death Strike, and Heart Strike abilities by 15%.",
"Increases the critical strike damage bonus of your Blood Boil, Blood Strike, Death Strike, and Heart Strike abilities by 30%.",
"Increases the critical strike damage bonus of your Blood Boil, Blood Strike, Death Strike, and Heart Strike abilities by 45%."
		];
i++;

//Blood Gorged - Blood
rank[i] = [
"When you are above 75% health, you deal 2% more damage. In addition, your attacks ignore up to 2% of your opponent's armor at all times.",
"When you are above 75% health, you deal 4% more damage. In addition, your attacks ignore up to 4% of your opponent's armor at all times.",
"When you are above 75% health, you deal 6% more damage. In addition, your attacks ignore up to 6% of your opponent's armor at all times.",
"When you are above 75% health, you deal 8% more damage. In addition, your attacks ignore up to 8% of your opponent's armor at all times.",
"When you are above 75% health, you deal 10% more damage. In addition, your attacks ignore up to 10% of your opponent's armor at all times."
		];
i++;

//Dancing Rune Weapon - Blood
rank[i] = [
"<span style=text-align:left;float:left;>60 Runic Power</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>1.5 min cooldown</span><br><span style=text-align:left;float:left;>Requires Melee Weapon</span><br> Summons a second rune weapon that fights on its own for 12 sec, doing the same attacks as the Death Knight but for 50% reduced damage."
		];
i++;

//FROST TALENTS BEGIN----------------------------------------------------------------------
//Improved Icy Touch - Frost
rank[i] = [
"Your Icy Touch does an additional 5% damage and your Frost Fever reduces melee and ranged attack speed by an additional 2%.",
"Your Icy Touch does an additional 10% damage and your Frost Fever reduces melee and ranged attack speed by an additional 4%.",
"Your Icy Touch does an additional 15% damage and your Frost Fever reduces melee and ranged attack speed by an additional 6%."
		];
i++;		

//Runic Power Mastery - Frost
rank[i]=[
"Increases your maximum Runic Power by 15.",
"Increases your maximum Runic Power by 30."
	];
i++;

//Toughness - Frost
rank[i]=[
"Increases your armor value from items by 2% and reduces the duration of all movement slowing effects by 6%.",
"Increases your armor value from items by 4% and reduces the duration of all movement slowing effects by 12%.",
"Increases your armor value from items by 6% and reduces the duration of all movement slowing effects by 18%.",
"Increases your armor value from items by 8% and reduces the duration of all movement slowing effects by 24%.",
"Increases your armor value from items by 10% and reduces the duration of all movement slowing effects by 30%."
	];
i++;

//Icy Reach - Frost
rank[i]=[
"Increases the range of your Icy Touch, Chains of Ice and Howling Blast by 5 yards.",
"Increases the range of your Icy Touch, Chains of Ice and Howling Blast by 10 yards."
	];
i++;

//Black Ice - Frost
rank[i] = [
"Increases your Frost and Shadow damage by 2%.",
"Increases your Frost and Shadow damage by 4%.",
"Increases your Frost and Shadow damage by 6%.",
"Increases your Frost and Shadow damage by 8%.",
"Increases your Frost and Shadow damage by 10%."
		];
i++;

//Nerves of Cold Steel - Frost
rank[i] = [
"Increases your chance to hit with a one-handed melee weapon by 1% and increases the damage done by your offhand weapon by 8%.",
"Increases your chance to hit with a one-handed melee weapon by 2% and increases the damage done by your offhand weapon by 16%.",
"Increases your chance to hit with a one-handed melee weapon by 3% and increases the damage done by your offhand weapon by 25%."
		];
i++;

//Icy Talons - Frost
rank[i] = [
"You leech heat from victims of your Frost Fever, so that when their melee speed is reduced, yours increases by 4% for for the next 20 sec.",
"You leech heat from victims of your Frost Fever, so that when their melee speed is reduced, yours increases by 8% for for the next 20 sec.",
"You leech heat from victims of your Frost Fever, so that when their melee speed is reduced, yours increases by 12% for for the next 20 sec.",
"You leech heat from victims of your Frost Fever, so that when their melee speed is reduced, yours increases by 16% for for the next 20 sec.",
"You leech heat from victims of your Frost Fever, so that when their melee speed is reduced, yours increases by 20% for for the next 20 sec."
		];
i++;

//Lichborne - Frost
rank[i] = [
"<span style=text-align:left;float:left;>Instant<br></span><span style=text-align:right;float:right;>2 min cooldown</span><br>Draw upon unholy energy to become undead for 10 sec. While undead, you are immune to Charm, Fear and Sleep effects."
		];
i++;

//Annihilation - Frost
rank[i] = [
"Increases the critical strike chance of your melee special abilities by 1%. In addition, there is a 33% chance that your Obliterate will do its damage without consuming diseases.",
"Increases the critical strike chance of your melee special abilities by 2%. In addition, there is a 66% chance that your Obliterate will do its damage without consuming diseases.",
"Increases the critical strike chance of your melee special abilities by 3%. In addition, there is a 100% chance that your Obliterate will do its damage without consuming diseases.",
		];
i++;

//Killing Machine - Frost
rank[i] = [
"Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike.",
"Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike. Effect occurs more often than Killing Machine (Rank 1).",
"Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike. Effect occurs more often than Killing Machine (Rank 2).",
"Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike. Effect occurs more often than Killing Machine (Rank 3).",
"Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike. Effect occurs more often than Killing Machine (Rank 4).",
		];
i++;	

//Chill of the Grave - Frost
rank[i]=[
"Your Chains of Ice, Howling Blast, Icy Touch and Obliterate generate 2.5 additional runic power.",
"Your Chains of Ice, Howling Blast, Icy Touch and Obliterate generate 5 additional runic power."
	];
i++;

//Endless Winter - Frost
rank[i]=[
"Your Strength is increased by 2% and the cost of your Mind Freeze is reduced to 10 runic power.",
"Your Strength is increased by 4% and your Mind Freeze no longer costs runic power."
	];
i++;

//Frigid Dreadplate - Frost
rank[i]=[
"Reduces the chance melee attacks will hit you by 1%.",
"Reduces the chance melee attacks will hit you by 2%.",
"Reduces the chance melee attacks will hit you by 3%."
	];
i++;

//Glacier Rot - Frost
rank[i]=[
"Diseased enemies take 7% more damage from your Icy Touch, Howling Blast and Frost Strike.",
"Diseased enemies take 13% more damage from your Icy Touch, Howling Blast and Frost Strike.",
"Diseased enemies take 20% more damage from your Icy Touch, Howling Blast and Frost Strike.",
	];
i++;

//Deathchill - Frost
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>2 min cooldown</span><br>When activated, makes your next Icy Touch, Howling Blast, Frost Strike or Obliterate a critical hit if used within 30 sec."
	];
i++;

//Improved Icy Talons - Frost
rank[i] = [
"Increases the melee haste of all party and raid members within 100 yds by 20% and your haste by an additional 5%."
		];
i++;

//Merciless Combat - Frost
rank[i] = [
"Your Icy Touch, Howling Blast, Obliterate and Frost Strike do an additional 6% damage when striking targets with less than 35% health.",
"Your Icy Touch, Howling Blast, Obliterate and Frost Strike do an additional 12% damage when striking targets with less than 35% health."
		];
i++;

//Rime - Frost
rank[i] = [
"Increases the critical strike chance of your Icy Touch and Obliterate by 5% and casting Icy Touch has a 5% chance to cause your next Howling Blast to consume no runes.",
"Increases the critical strike chance of your Icy Touch and Obliterate by 10% and casting Icy Touch has a 10% chance to cause your next Howling Blast to consume no runes.",
"Increases the critical strike chance of your Icy Touch and Obliterate by 15% and casting Icy Touch has a 15% chance to cause your next Howling Blast to consume no runes."
		];
i++;

//Chilbrains - Frost
rank[i] = [
"Victims of your Frost Fever disease are Chilled, reducing movement speed by 15% for 10 sec.",
"Victims of your Frost Fever disease are Chilled, reducing movement speed by 30% for 10 sec.",
"Victims of your Frost Fever disease are Chilled, reducing movement speed by 50% for 10 sec."
		];
i++;

//Hungering Cold - Frost
rank[i] = [
"<span style=text-align:left;float:left;>40 Runic Power<br></span><br> <span style=text-align:left;float:left;>Instant<br></span><span style=text-align:right;float:right;>1 min cooldown</span><br>Purges the earth around the Death Knight of all heat. Enemies within 10 yards are trapped in ice, preventing them from performing any action for 10 sec and infecting them with Frost Fever. Enemies are considered Frozen, but any damage other than diseases will break the ice."
		];
i++;

//Improved Frost Presence - Frost
rank[i] = [
"While in Blood Presence or Unholy Presence, you retain 4% stamina from Frost Presence, and damage done to you is decreased by an additional 1% in Frost Presence.",
"While in Blood Presence or Unholy Presence, you retain 8% stamina from Frost Presence, and damage done to you is decreased by an additional 2% in Frost Presence."
		];
i++;

//Threat of Thassarian - Frost
rank[i] = [
"When dual-wielding, your Death Strikes, Obliterates, Plague Strikes, Rune Strikes, Blood Strikes and Frost Strikes have a 30% chance to also deal damage with your offhand weapon.",
"When dual-wielding, your Death Strikes, Obliterates, Plague Strikes, Rune Strikes, Blood Strikes and Frost Strikes have a 60% chance to also deal damage with your offhand weapon.",
"When dual-wielding, your Death Strikes, Obliterates, Plague Strikes, Rune Strikes, Blood Strikes and Frost Strikes have a 100% chance to also deal damage with your offhand weapon."
		];
i++;

//Blood of the North - FROST
rank[i] = [
"Increases Blood Strike and Frost Strike damage by 3%. In addition, whenever you hit with Blood Strike or Pestilence there is a 30% chance that the Blood Rune will become a Death Rune when it activates. Death Runes count as a Blood, Frost or Unholy Rune.",
"Increases Blood Strike and Frost Strike damage by 6%. In addition, whenever you hit with Blood Strike or Pestilence there is a 60% chance that the Blood Rune will become a Death Rune when it activates. Death Runes count as a Blood, Frost or Unholy Rune.",
"Increases Blood Strike and Frost Strike damage by 10%. In addition, whenever you hit with Blood Strike or Pestilence there is a 100% chance that the Blood Rune will become a Death Rune when it activates. Death Runes count as a Blood, Frost or Unholy Rune."
		];
i++;

//UNBREAKABLE ARMOR - FROST
rank[i] = [
"<span style=text-align:left;float:left;>1 Frost<br></span><br><span style=text-align:left;float:left;>Instant<br></span><span style=text-align:right;float:right;>1 min cooldown</span><br>Reinforces your armor with a thick coat of ice, increasing your armor by 25% and increasing your Strength by 20% for 20 sec."
		];
i++;

//Acclimation - Frost
rank[i] = [
"When you are hit by a spell, you have a 10% chance to boost your resistance to that type of magic for 18 sec. Stacks up to 3 times.",
"When you are hit by a spell, you have a 20% chance to boost your resistance to that type of magic for 18 sec. Stacks up to 3 times.",
"When you are hit by a spell, you have a 30% chance to boost your resistance to that type of magic for 18 sec. Stacks up to 3 times.",
		];
i++;

//Frost Strike - Frost
rank[i] = [
"<span style=text-align:left;float:left;>40 Runic Power<br></span><span style=text-align:right;float:right;>Melee Range</span><br><span style=text-align:left;float:left;>Instant</span><br/><span style=text-align:left;float:left;>Requires Melee Weapon<br></span><br>Instantly strike the enemy, causing 55% weapon damage plus 48 as Frost damage."
		];
i++;

//Guile of Gorefiend - Frost
rank[i] = [
"Increases the critical strike damage bonus of your Blood Strike, Frost Strike, Howling Blast and Obliterate abilities by 15%, and increases the duration of your Icebound Fortitude by 2 sec.",
"Increases the critical strike damage bonus of your Blood Strike, Frost Strike, Howling Blast and Obliterate abilities by 30%, and increases the duration of your Icebound Fortitude by 4 sec.",
"Increases the critical strike damage bonus of your Blood Strike, Frost Strike, Howling Blast and Obliterate abilities by 45%, and increases the duration of your Icebound Fortitude by 6 sec."
		];
i++;

//Tundra Stalker - Frost
rank[i] = [
"Your spells and abilities deal 3% more damage to targets infected with Frost Fever. Also increases your expertise by 1.",
"Your spells and abilities deal 6% more damage to targets infected with Frost Fever. Also increases your expertise by 2.",
"Your spells and abilities deal 9% more damage to targets infected with Frost Fever. Also increases your expertise by 3.",
"Your spells and abilities deal 12% more damage to targets infected with Frost Fever. Also increases your expertise by 4.",
"Your spells and abilities deal 15% more damage to targets infected with Frost Fever. Also increases your expertise by 5."
		];
i++;

//Howling Blast - FROST
rank[i] = [
"<span style=text-align:left;float:left;>1 Unholy 1 Frost<br></span><span style=text-align:right;float:right;>20 yd range</span><br> <span style=text-align:left;float:left;>Instant<br></span><span style=text-align:right;float:right;>8 sec cooldown</span><br>Blast the target with a frigid wind dealing 198 - 214 Frost damage to all enemies within 10 yards."
		];
i++;



//UNHOLY TALENTS BEGIN--------------------------------------------------------

//Vicious Strikes - UNHOLY
rank[i]=[
"Increases the critical strike chance by 3% and critical strike damage bonus by 15% of your Plague Strike and Scourge Strike.",
"Increases the critical strike chance by 6% and critical strike damage bonus by 30% of your Plague Strike and Scourge Strike.",
	];
i++;

//Virulence - UNHOLY
rank[i] = [
"Increases your chance to hit with your spells by 1% and reduces the chance that your damage over time diseases can be cured by 10%.",
"Increases your chance to hit with your spells by 2% and reduces the chance that your damage over time diseases can be cured by 20%.",
"Increases your chance to hit with your spells by 3% and reduces the chance that your damage over time diseases can be cured by 30%."
		];
i++;

//Anticipation - UNHOLY
rank[i]=[
"Increases your Dodge chance by 1%.",
"Increases your Dodge chance by 2%.",
"Increases your Dodge chance by 3%.",
"Increases your Dodge chance by 4%.",
"Increases your Dodge chance by 5%."
	];
i++;

//EPIDEMIC - UNHOLY
rank[i]=[
"Increases the duration of Blood Plague and Frost Fever by 3 sec.",
"Increases the duration of Blood Plague and Frost Fever by 6 sec."
	];
i++;

//Morbidity - UNHOLY
rank[i]=[
"Increases the damage and healing of Death Coil by 5% and reduces the cooldown on Death and Decay by 5 sec.",
"Increases the damage and healing of Death Coil by 10% and reduces the cooldown on Death and Decay by 10 sec.",
"Increases the damage and healing of Death Coil by 15% and reduces the cooldown on Death and Decay by 15 sec."
	];
i++;

//Unholy Command - Unholy
rank[i]=[
"Reduces the cooldown of your Death Grip ability by 5 sec.",
"Reduces the cooldown of your Death Grip ability by 10 sec."
	];
i++;

//Ravenous Dead - Unholy
rank[i]=[
"Increases the total Strength 1% and the contribution your Ghouls get from your Strength and Stamina by 20%.",
"Increases the total Strength 2% and the contribution your Ghouls get from your Strength and Stamina by 40%.",
"Increases the total Strength 3% and the contribution your Ghouls get from your Strength and Stamina by 60%."
	];
i++;

//Outbreak - UNHOLY
rank[i]=[
"Increases the damage of Plague Strike by 10% and Scourge Strike by 7%.",
"Increases the damage of Plague Strike by 20% and Scourge Strike by 13%.",
"Increases the damage of Plague Strike by 30% and Scourge Strike by 20%."
	];
i++;

//Necrosis - Unholy
rank[i]=[
"Your auto attacks deal an additional 4% Shadow damage.",
"Your auto attacks deal an additional 8% Shadow damage.",
"Your auto attacks deal an additional 12% Shadow damage.",
"Your auto attacks deal an additional 16% Shadow damage.",
"Your auto attacks deal an additional 20% Shadow damage."
	];
i++;

//CORPSE EXPLOSION - UNHOLY
rank[i] = [
"<span style=text-align:left;float:left;>40 Runic Power<br></span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant<br></span><br>Cause a corpse to explode for 166 Shadow damage to all enemies within 10 yards. Will use a nearby corpse if the target is not a corpse. Does not affect mechanical or elemental corpses."
		];
i++;

//ON A PALE HORSE - UNHOLY
rank[i]=[
"You become as hard to stop as death itself. The duration of all Stun and Fear effects used against you is reduced by 10%, and your mounted speed is increased by 10%. This does not stack with other movement speed increasing effects.",
"You become as hard to stop as death itself. The duration of all Stun and Fear effects used against you is reduced by 20%, and your mounted speed is increased by 20%. This does not stack with other movement speed increasing effects."
	];
i++;

//Blood-Caked Blade – Unholy 
rank[i] = [
"Your auto attacks have a 10% chance to cause a Blood-Caked Strike, which hits for 25% weapon damage plus 12.5% for each of your diseases on the target.",
"Your auto attacks have a 20% chance to cause a Blood-Caked Strike, which hits for 25% weapon damage plus 12.5% for each of your diseases on the target.",
"Your auto attacks have a 30% chance to cause a Blood-Caked Strike, which hits for 25% weapon damage plus 12.5% for each of your diseases on the target."
		];
i++;

//Night of the Dead - UNHOLY
rank[i] = [
"Reduces the cooldown on Raise Dead by 45 sec and the cooldown on Army of the Dead by 2 min. Also reduces the damage your pet takes from creature area of effect attacks by 45%.",
"Reduces the cooldown on Raise Dead by 90 sec and the cooldown on Army of the Dead by 4 min. Also reduces the damage your pet takes from creature area of effect attacks by 90%."
		];
i++;

//Unholy Blight - UNHOLY
rank[i] = [
"Causes the victims of your Death Coil to be surrounded by a vile swarm of unholy insects, taking 10% of the damage done by the Death Coil over 10 sec, and preventing any diseases on the victim from being dispelled."
		];
i++;

//IMPURITY - UNHOLY
rank[i] = [
"The attack power bonus of your spells is increased by 4%.",
"The attack power bonus of your spells is increased by 8%.",
"The attack power bonus of your spells is increased by 12%.",
"The attack power bonus of your spells is increased by 16%.",
"The attack power bonus of your spells is increased by 20%."
		];
i++;

//Dirge - Unholy
rank[i] = [
"Your Death Strike, Plague Strike and Scourge Strike generate 2.5 additional runic power.",
"Your Death Strike, Plague Strike and Scourge Strike generate 5 additional runic power."
		];
i++;

//Desecration - Unholy 
rank[i] = [
"Your Plague Strikes and Scourge Strikes cause the Desecrated Ground effect. Targets in the area are slowed by 25% by the grasping arms of the dead while standing on the unholy ground. Lasts 20 sec.",
"Your Plague Strikes and Scourge Strikes cause the Desecrated Ground effect. Targets in the area are slowed by 50% by the grasping arms of the dead while standing on the unholy ground. Lasts 20 sec."
		];
i++;

//Magic Suppression - UNHOLY
rank[i] = [
"You take 2% less damage from all magic. In addition, your Anti-Magic Shell absorbs an additional 8% of spell damage.",
"You take 4% less damage from all magic. In addition, your Anti-Magic Shell absorbs an additional 16% of spell damage.",
"You take 6% less damage from all magic. In addition, your Anti-Magic Shell absorbs an additional 15% of spell damage."
		];
i++;

//Reaping - Unholy
rank[i] = [
"Whenever you hit with Blood Strike or Pestilence there is a 33% chance that the Blood Rune becomes a Death Rune when it activates. Death Runes count as a Blood, Frost or Unholy Rune.",
"Whenever you hit with Blood Strike or Pestilence there is a 66% chance that the Blood Rune becomes a Death Rune when it activates. Death Runes count as a Blood, Frost or Unholy Rune.",
"Whenever you hit with Blood Strike or Pestilence there is a 100% chance that the Blood Rune becomes a Death Rune when it activates. Death Runes count as a Blood, Frost or Unholy Rune."
		];
i++;

//Master of Ghouls - Unholy
rank[i]=[
"Reduces the cooldown on Raise Dead by 60 sec, and the Ghoul summoned by your Raise Dead spell is considered a pet under your control. Unlike normal Death Knight Ghouls, your pet does not have a limited duration."
	];
i++;

//Desolation - Unholy 
rank[i] = [
"Your Blood Strikes cause you to deal 1% additional damage with all attacks for the next 20 sec.",
"Your Blood Strikes cause you to deal 2% additional damage with all attacks for the next 20 sec.",
"Your Blood Strikes cause you to deal 3% additional damage with all attacks for the next 20 sec.",
"Your Blood Strikes cause you to deal 4% additional damage with all attacks for the next 20 sec.",
"Your Blood Strikes cause you to deal 5% additional damage with all attacks for the next 20 sec."
		];
i++;

//Anti-Magic Zone - Unholy
rank[i] = [
"<span style=text-align:left;float:left;>1 Unholy<br></span><br><span style=text-align:left;float:left;>Instant<br></span><span style=text-align:right;float:right;>2 min cooldown</span><br> Places a large, stationary Anti-Magic Zone that reduces spell damage done to party or raid members inside it by 75%. The Anti-Magic Zone lasts for 10 sec or until it absorbs [10000+2*AP] spell damage."
		];
i++;

//Improved Unholy Presence - UNHOLY
rank[i] = [
"While in Blood Presence or Frost Presence, you retain 8% increased movement speed from Unholy Presence, and your runes finish their cooldowns 5% faster in Unholy Presence.",
"While in Blood Presence or Frost Presence, you retain 15% increased movement speed from Unholy Presence, and your runes finish their cooldowns 10% faster in Unholy Presence."
		];
i++;

//Ghoul Frenzy - Unholy
rank[i] = [
"Grants your pet 25% haste for 30 sec and heals it for 60% of its health over the duration."
		];
i++;

//Crypt Fever - Unholy
rank[i] = [
"Your diseases also cause Crypt Fever, which increases disease damage taken by the target by 10%.",
"Your diseases also cause Crypt Fever, which increases disease damage taken by the target by 20%.",
"Your diseases also cause Crypt Fever, which increases disease damage taken by the target by 30%."
		];
i++;

//Bone Shield - Unholy
rank[i] = [
"<span style=text-align:left;float:left;>1 Unholy<br></span><br><span style=text-align:left;float:left;>Instant<br></span><span style=text-align:right;float:right;>1 min cooldown</span><br>The Death Knight is surrounded by 3 whirling bones. While at least 1 bone remains, he takes 20% less damage from all sources and deals 2% more damage with all attacks, spells and abilities. Each damaging attack that lands consumes 1 bone. Lasts 5 min."
		];
i++;

//Wandering Plague - UNHOLY
rank[i] = [
"When your diseases damage an enemy, there is a chance equal to your melee critical strike chance that they will cause 33% additional damage to the target and all enemies within 8 yards. Ignores any target under the effect of a spell that is cancelled by taking damage.",
"When your diseases damage an enemy, there is a chance equal to your melee critical strike chance that they will cause 66% additional damage to the target and all enemies within 8 yards. Ignores any target under the effect of a spell that is cancelled by taking damage.",
"When your diseases damage an enemy, there is a chance equal to your melee critical strike chance that they will cause 100% additional damage to the target and all enemies within 8 yards. Ignores any target under the effect of a spell that is cancelled by taking damage."
		];
i++;

//EBON PLAGUEBRINGER - UNHOLY
rank[i] = [
"Your Crypt Fever morphs into Ebon Plague, which increases magic damage taken by 4% in addition to increasing disease damage taken. Improves your critical strike chance with weapons and spells by 1% at all times.",
"Your Crypt Fever morphs into Ebon Plague, which increases magic damage taken by 9% in addition to increasing disease damage taken. Improves your critical strike chance with weapons and spells by 2% at all times.",
"Your Crypt Fever morphs into Ebon Plague, which increases magic damage taken by 13% in addition to increasing disease damage taken. Improves your critical strike chance with weapons and spells by 3% at all times."
		];
i++;

//Scourge Strike - Unholy
rank[i] = [
"<span style=text-align:left;float:left;>1 Unholy 1 Frost<br></span><span style=text-align:right;float:right;>Melee range</span><br> <span style=text-align:left;float:left;>Instant<br></span><br><span style=text-align:left;float:left;>Requires Melee Weapon<br></span><br>An unholy strike that deals 70% of weapon damage as Physical damage plus 238. In addition, for each of your diseases on your target, you deal an additional 12% of the Physical damage done as Shadow damage."
		];
i++;

//Rage of Rivendare - Unholy
rank[i] = [
"Your spells and abilities deal 2% more damage to targets infected with Blood Plague. Also increases your expertise by 1.",
"Your spells and abilities deal 4% more damage to targets infected with Blood Plague. Also increases your expertise by 2.",
"Your spells and abilities deal 6% more damage to targets infected with Blood Plague. Also increases your expertise by 3.",
"Your spells and abilities deal 8% more damage to targets infected with Blood Plague. Also increases your expertise by 4.",
"Your spells and abilities deal 10% more damage to targets infected with Blood Plague. Also increases your expertise by 5."
		];
i++;

//Summon Gargoyle - Unholy
rank[i] = [
"<span style=text-align:left;float:left;>60 Runic Power<br></span><span style=text-align:right;float:right;>30 yd range</span><br> <span style=text-align:left;float:left;>Instant<br></span><span style=text-align:right;float:right;>3 min cooldown</span><br>A Gargoyle flies into the area and bombards the target with Nature damage modified by the Death Knight's attack power. Persists for 30 sec."
		];
i++;

//UNHOLY Talents End^^

