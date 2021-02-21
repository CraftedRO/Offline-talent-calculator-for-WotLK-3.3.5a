var i = 0;
var t = 0;

var className = "Priest Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Discipline"; i++;
tree[i] = "Holy"; i++;
tree[i] = "Shadow"; i++;

i = 0;

talent[i] = [0, "Unbreakable Will", 5, 2, 1]; i++;
talent[i] = [0, "Twin Disciplines", 5, 3, 1]; i++;
talent[i] = [0, "Silent Resolve", 3, 1, 2]; i++;
talent[i] = [0, "Improved Inner Fire", 3, 2, 2]; i++;
talent[i] = [0, "Improved Power Word: Fortitude", 2, 3, 2]; i++;
talent[i] = [0, "Martyrdom", 2, 4, 2]; i++;
talent[i] = [0, "Meditation", 3, 1, 3]; i++;
talent[i] = [0, "Inner Focus", 1, 2, 3]; i++;
talent[i] = [0, "Improved Power Word: Shield", 3, 3, 3]; i++;
talent[i] = [0, "Absolution", 3, 1, 4]; i++;
talent[i] = [0, "Mental Agility", 3, 2, 4]; i++;
talent[i] = [0, "Improved Mana Burn", 2, 4, 4]; i++;
talent[i] = [0, "Reflective Shield", 2, 1, 5]; i++;
talent[i] = [0, "Mental Strenght", 5, 2, 5]; i++;
talent[i] = [0, "Soul Warding", 1, 3, 5, [getTalentID("Improved Power Word: Shield"),3]]; i++;
talent[i] = [0, "Focused Power", 2, 1, 6]; i++;
talent[i] = [0, "Enlightenment", 3, 3, 6]; i++;
talent[i] = [0, "Focused Will", 3, 1, 7]; i++;
talent[i] = [0, "Power Infusion", 1, 2, 7, [getTalentID("Mental Strenght"),5]]; i++;
talent[i] = [0, "Improved Flash Heal", 3, 3, 7]; i++;
talent[i] = [0, "Renewed Hope", 2, 1, 8]; i++;
talent[i] = [0, "Rapture", 3, 2, 8]; i++;
talent[i] = [0, "Aspiration", 2, 3, 8]; i++;
talent[i] = [0, "Divine Aegis", 3, 1, 9]; i++;
talent[i] = [0, "Pain Suppression", 1, 2, 9]; i++;
talent[i] = [0, "Grace", 2, 3, 9]; i++;
talent[i] = [0, "Borrowed Time", 5, 2, 10]; i++;
talent[i] = [0, "Penance", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

//holy talents
talent[i] = [1, "Healing Focus", 2, 1, 1]; i++;
talent[i] = [1, "Improved Renew", 3, 2, 1]; i++;
talent[i] = [1, "Holy Specialization", 5, 3, 1]; i++;
talent[i] = [1, "Spell Warding", 5, 2, 2]; i++;
talent[i] = [1, "Divine Fury", 5, 3, 2]; i++;
talent[i] = [1, "Desperate Prayer", 1, 1, 3]; i++;
talent[i] = [1, "Blessed Recovery", 3, 2, 3]; i++;
talent[i] = [1, "Inspiration", 3, 4, 3]; i++;
talent[i] = [1, "Holy Reach", 2, 1, 4]; i++;
talent[i] = [1, "Improved Healing", 3, 2, 4]; i++;
talent[i] = [1, "Searing Light", 2, 3, 4, [getTalentID("Divine Fury"),5]]; i++;
talent[i] = [1, "Healing Prayers", 2, 1, 5]; i++;
talent[i] = [1, "Spirit of Redemption", 1, 2, 5]; i++;
talent[i] = [1, "Spiritual Guidance", 5, 3, 5]; i++;
talent[i] = [1, "Surge of Light", 2, 1, 6]; i++; 
talent[i] = [1, "Spiritual Healing", 5, 3, 6]; i++;
talent[i] = [1, "Holy Concentration", 3, 1, 7]; i++; 
talent[i] = [1, "Lightwell", 1, 2, 7, [getTalentID("Spirit of Redemption"),1]]; i++;
talent[i] = [1, "Blessed Resilience", 3, 3, 7]; i++;
talent[i] = [1, "Body and Soul", 2, 1, 8]; i++;
talent[i] = [1, "Empowered Healing", 5, 2, 8]; i++;
talent[i] = [1, "Serendipity", 3, 3, 8]; i++;
talent[i] = [1, "Empowered Renew", 3, 1, 9]; i++;
talent[i] = [1, "Circle of Healing", 1, 2, 9]; i++;
talent[i] = [1, "Test of Faith", 3, 3, 9]; i++; 
talent[i] = [1, "Divine Providence", 5, 2, 10]; i++; 
talent[i] = [1, "Guardian Spirit", 1, 2, 11]; i++; 
treeStartStop[t] = i -1;
t++;

//shadow talents
talent[i] = [2, "Spirit Tap", 3, 1, 1]; i++;
talent[i] = [2, "Improved Spirit Tap", 2, 2, 1, [getTalentID("Spirit Tap"),3]]; i++;
talent[i] = [2, "Darkness", 5, 3, 1]; i++;
talent[i] = [2, "Shadow Affinity", 3, 1, 2]; i++;
talent[i] = [2, "Improved Shadow Word: Pain", 2, 2, 2]; i++;
talent[i] = [2, "Shadow Focus", 3, 3, 2]; i++;
talent[i] = [2, "Improved Psychic Scream", 2, 1, 3]; i++;
talent[i] = [2, "Improved Mind Blast", 5, 2, 3]; i++;
talent[i] = [2, "Mind Flay", 1, 3, 3]; i++;
talent[i] = [2, "Veiled Shadows", 2, 2, 4]; i++;
talent[i] = [2, "Shadow Reach", 2, 3, 4]; i++;
talent[i] = [2, "Shadow Weaving", 3, 4, 4]; i++;
talent[i] = [2, "Silence", 1, 1, 5, [getTalentID("Improved Psychic Scream"),2]]; i++;
talent[i] = [2, "Vampiric Embrace", 1, 2, 5]; i++;
talent[i] = [2, "Improved Vampiric Embrace", 2, 3, 5, [getTalentID("Vampiric Embrace"),1]]; i++;
talent[i] = [2, "Focused Mind", 3, 4, 5]; i++; 
talent[i] = [2, "Mind Melt", 2, 1, 6]; i++;
talent[i] = [2, "Improved Devouring Plague", 3, 3, 6]; i++;
talent[i] = [2, "Shadowform", 1, 2, 7, [getTalentID("Vampiric Embrace"),1]]; i++;
talent[i] = [2, "Shadow Power", 5, 3, 7]; i++;
talent[i] = [2, "Improved Shadowform", 2, 1, 8, [getTalentID("Shadowform"),1]]; i++;
talent[i] = [2, "Misery", 3, 3, 8]; i++; 
talent[i] = [2, "Psychic Horror", 1, 1, 9]; i++;
talent[i] = [2, "Vampiric Touch", 1, 2, 9, [getTalentID("Shadowform"),1]]; i++; 
talent[i] = [2, "Pain and Suffering", 3, 3, 9]; i++;
talent[i] = [2, "Twisted Faith", 5, 3, 10]; i++;
talent[i] = [2, "Dispersion", 1, 2, 11, [getTalentID("Vampiric Touch"),1]]; i++; 
treeStartStop[t] = i -1;
t++;

i = 0;


//Discipline Talents Begin


//Unbreakable Will - Discipline
rank[i] = [
"Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 6%.",
"Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 12%.",
"Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 18%.",
"Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 24%.",
"Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 30%."
		];
i++;

//Twin Disciplines - Discipline
rank[i] = [
"Increases the damage and healing done by your instant spells by 1%.",
"Increases the damage and healing done by your instant spells by 2%.",
"Increases the damage and healing done by your instant spells by 3%.",
"Increases the damage and healing done by your instant spells by 4%.",
"Increases the damage and healing done by your instant spells by 5%."
		];
i++;	

//Silent Resolve - Discipline
rank[i] = [
"Reduces the threat generated by your Holy and Discipline spells by 7% and reduces the chance your helpful spells and damage over time effects will be dispelled by 10%.",
"Reduces the threat generated by your Holy and Discipline spells by 14% and reduces the chance your helpful spells and damage over time effects will be dispelled by 20%.",
"Reduces the threat generated by your Holy and Discipline spells by 20% and reduces the chance your helpful spells and damage over time effects will be dispelled by 30%."
		];
i++;	

//Improved Inner Fire - Discipline		
rank[i] = [
"Increases the effect of your Inner Fire spell by 15%, and increases the total number of charges by 4.",
"Increases the effect of your Inner Fire spell by 30%, and increases the total number of charges by 8.",
"Increases the effect of your Inner Fire spell by 45%, and increases the total number of charges by 12."
		];
i++;

//Improved Power Word: Fortitude - Discipline		
rank[i] = [
"Increases the effect of your Power Word: Fortitude and Prayer of Fortitude spells by 15%, and increases your total Stamina by 2%.",
"Increases the effect of your Power Word: Fortitude and Prayer of Fortitude spells by 30%, and increases your total Stamina by 4%."
		];
i++;

//Martyrdom - Discipline
rank[i] = [
"Gives you a 50% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect reduces the pushback suffered from damaging attacks while casting Priest spells and decreases the duration of Interrupt effects by 10%.",
"Gives you a 100% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect reduces the pushback suffered from damaging attacks while casting Priest spells and decreases the duration of Interrupt effects by 20%."
		];
i++;	

//Meditation - Discipline
rank[i] = [
"Allows 17% of your mana regeneration to continue while casting.",
"Allows 33% of your mana regeneration to continue while casting.",
"Allows 50% of your mana regeneration to continue while casting."
		];
i++;	

//Inner Focus - Discipline		
rank[i] = [
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, reduces the Mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is capable of a critical effect."
		];
i++;

//Improved Power Word: Shield - Discipline		
rank[i] = [
"Increases the damage absorbed by your Power Word: Shield by 5%.",
"Increases the damage absorbed by your Power Word: Shield by 10%.",
"Increases the damage absorbed by your Power Word: Shield by 15%."
		];
i++;

//Absolution - Discipline
rank[i] = [
"Reduces the mana cost of your Dispel Magic, Cure Disease, Abolish Disease and Mass Dispel spells by 5%.",
"Reduces the mana cost of your Dispel Magic, Cure Disease, Abolish Disease and Mass Dispel spells by 10%.",
"Reduces the mana cost of your Dispel Magic, Cure Disease, Abolish Disease and Mass Dispel spells by 15%."				
		];
i++;

//Mental Agility - Discipline		
rank[i] = [ 
"Reduces the mana cost of your instant cast spells by 4%.",
"Reduces the mana cost of your instant cast spells by 7%.",
"Reduces the mana cost of your instant cast spells by 10%."
		];
i++;		

//Improved Mana Burn - Discipline		
rank[i] = [
"Reduces the casting time of your Mana Burn spell by 0.5 sec.",
"Reduces the casting time of your Mana Burn spell by 1 sec."
		];
i++;

//Reflective Shield - Discipline		
rank[i] = [
"Causes 22% of the damage you absorb with Power Word: Shield to reflect back at the attacker. This damage causes no threat.",
"Causes 45% of the damage you absorb with Power Word: Shield to reflect back at the attacker. This damage causes no threat."
		];
i++;	

//Mental Strenght - Discipline		
rank[i] = [
"Increases your total Intellect by 3%.",
"Increases your total Intellect by 6%.",
"Increases your total Intellect by 9%.",
"Increases your total Intellect by 12%.",
"Increases your total Intellect by 15%."
		];
i++;
	
//Soul Warding - Discipline
rank[i] = [
"Reduces the cooldown of your Power Word: Shield ability by 4 sec, and reduces the mana cost of your Power Word: Shield by 15%."
		];
i++;

//Focused Power - Discipline
rank[i] = [
"Increases damage and healing done by your spells by 2%. In addition, your Mass Dispel cast time is reduced by 0.5 sec.",
"Increases damage and healing done by your spells by 4%. In addition, your Mass Dispel cast time is reduced by 1 sec."			
		];
i++;			

//Enlightenment - Discipline
rank[i] = [
"Increases your total Spirit by 2% and increases your spell haste by 2%.",
"Increases your total Spirit by 4% and increases your spell haste by 4%.",
"Increases your total Spirit by 6% and increases your spell haste by 6%."
		];
i++;		

//Focused Will - Discipline		
rank[i] = [
"Increases your spell critical effect chance by 1%, and after taking a critical hit you gain the Focused Will effect, reducing all damage taken by 2% and increasing healing effects on you by 3%. Stacks up to 3 times. Lasts 8 sec.",
"Increases your spell critical effect chance by 2%, and after taking a critical hit you gain the Focused Will effect, reducing all damage taken by 3% and increasing healing effects on you by 4%. Stacks up to 3 times. Lasts 8 sec.",
"Increases your spell critical effect chance by 3%, and after taking a critical hit you gain the Focused Will effect, reducing all damage taken by 4% and increasing healing effects on you by 5%. Stacks up to 3 times. Lasts 8 sec.",
		];
i++;		

//Power Infusion - Discipline		
rank[i] = [
"<span style=text-align:left;float:left;>16% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>2 min cooldown</span><br>Infuses the target with power, increasing spell casting speed by 20% and reducing the mana cost of all spells by 20%. Lasts 15 sec."
		];
i++;			

//Improved Flash Heal - Discipline		
rank[i] = [
"Reduces the mana cost of your Flash Heal by 5%, and increases the critical effect chance of your Flash Heal by 4% on friendly targets at or below 50% health.",
"Reduces the mana cost of your Flash Heal by 10%, and increases the critical effect chance of your Flash Heal by 7% on friendly targets at or below 50% health.",
"Reduces the mana cost of your Flash Heal by 15%, and increases the critical effect chance of your Flash Heal by 10% on friendly targets at or below 50% health."								
		];
i++;

//Renewed Hope - Discipline		
rank[i] = [
"Increases the critical effect chance of your Flash Heal, Greater Heal and Penance (Heal) spells by 2% on targets afflicted by the Weakened Soul effect, and you have a 50% chance to reduce all damage taken by 3% for 1 min to all friendly party and raid targets when you cast Power Word: Shield. This effect has a 15 sec cooldown.",
"Increases the critical effect chance of your Flash Heal, Greater Heal and Penance (Heal) spells by 4% on targets afflicted by the Weakened Soul effect, and you have a 100% chance to reduce all damage taken by 3% for 1 min to all friendly party and raid targets when you cast Power Word: Shield. This effect has a 15 sec cooldown."								
		];
i++;

//Rapture - Discipline
rank[i] = [
"When your Power Word: Shield is completely absorbed or dispelled you are instantly energized with 1.5% of your total mana, and you have a 33% chance to energize your shielded target with 2% total mana, 8 rage, 16 energy or 32 runic power. This effect can only occur once every 12 sec.",
"When your Power Word: Shield is completely absorbed or dispelled you are instantly energized with 2% of your total mana, and you have a 66% chance to energize your shielded target with 2% total mana, 8 rage, 16 energy or 32 runic power. This effect can only occur once every 12 sec.",
"When your Power Word: Shield is completely absorbed or dispelled you are instantly energized with 2.5% of your total mana, and you have a 100% chance to energize your shielded target with 2% total mana, 8 rage, 16 energy or 32 runic power. This effect can only occur once every 12 sec."
		];
i++;

//Aspiration - Discipline 	
rank[i] = [
"Reduces the cooldown of your Inner Focus, Power Infusion, Pain Suppression and Penance spells by 10%.",
"Reduces the cooldown of your Inner Focus, Power Infusion, Pain Suppression and Penance spells by 20%."
		];

i++;

//Divine Aegis - Discipline 	
rank[i] = [
"Critical heals create a protective shield on the target, absorbing 10% of the amount healed. Lasts 12 sec.",
"Critical heals create a protective shield on the target, absorbing 20% of the amount healed. Lasts 12 sec.",
"Critical heals create a protective shield on the target, absorbing 30% of the amount healed. Lasts 12 sec."
		];
i++;

//Pain Suppression - Discipline	
rank[i] = [
"<span style=text-align:left;float:left;>8% of base mana</span><span style=text-align:right;float:right;>40 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Instantly reduces a friendly target's threat by 5%, reduces all damage taken by 40% and increases resistance to Dispel mechanics by 65% for 8 sec."
		];
i++;			

//Grace - Discipline 	
rank[i] = [
"Your Flash Heal, Greater Heal, and Penance spells have a 50% chance to bless the target with Grace, increasing all healing received from the Priest by 3%. This effect will stack up to 3 times. Effect lasts 15 sec. Grace can only be active on one target at a time.",
"Your Flash Heal, Greater Heal, and Penance spells have a 100% chance to bless the target with Grace, increasing all healing received from the Priest by 3%. This effect will stack up to 3 times. Effect lasts 15 sec. Grace can only be active on one target at a time."
		];
i++;	

//Borrowed Time - Discipline 	
rank[i] = [
"Grants 5% spell haste for your next spell after casting Power Word: Shield, and increases the amount absorbed by your Power Word: Shield equal to 8% of your spell power.",
"Grants 10% spell haste for your next spell after casting Power Word: Shield, and increases the amount absorbed by your Power Word: Shield equal to 16% of your spell power.",
"Grants 15% spell haste for your next spell after casting Power Word: Shield, and increases the amount absorbed by your Power Word: Shield equal to 24% of your spell power.",
"Grants 20% spell haste for your next spell after casting Power Word: Shield, and increases the amount absorbed by your Power Word: Shield equal to 32% of your spell power.",
"Grants 25% spell haste for your next spell after casting Power Word: Shield, and increases the amount absorbed by your Power Word: Shield equal to 40% of your spell power."
		];
i++;

//Penance - Discipline
rank[i]=[
"<span style=text-align:right;float:right;>Enemy: 30 yd range</span><br><span style=text-align:left;float:left;>16% of base mana</span><span style=text-align:right;float:right;>Friendly: 40 yd range</span><br><span style=text-align:left;float:left;>Channeled</span><span style=text-align:right;float:right;>10 sec cooldown</span><br>Launches a volley of holy light at the target, causing 240 Holy damage to an enemy, or 670 - 756 healing to an ally instantly and every 5 sec for 2 sec."
		];
i++;


//HOLY SPELLS------------------------------------------------------------------------------


//Healing Focus - Holy
rank[i] = [
"Reduces the pushback suffered from damaging attacks while casting any healing spell by 35%.",
"Reduces the pushback suffered from damaging attacks while casting any healing spell by 70%."
		];	
i++;				

//Improved Renew - Holy
rank[i] = [
"Increases the amount healed by your Renew spell by 5%.",
"Increases the amount healed by your Renew spell by 10%.",
"Increases the amount healed by your Renew spell by 15%."
		];
i++;		

//Holy Specialization - Holy
rank[i] = [
"Increases the critical effect chance of your Holy spells by 1%.",
"Increases the critical effect chance of your Holy spells by 2%.",
"Increases the critical effect chance of your Holy spells by 3%.",
"Increases the critical effect chance of your Holy spells by 4%.",
"Increases the critical effect chance of your Holy spells by 5%."
		];
i++;

//Spell Warding - Holy
rank[i] = [
"Reduces all spell damage taken by 2%.",
"Reduces all spell damage taken by 4%.",
"Reduces all spell damage taken by 6%.",
"Reduces all spell damage taken by 8%.",
"Reduces all spell damage taken by 10%."
		];
i++;

//Divine Fury - Holy
rank[i] = [
"Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.1 sec.",
"Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.2 sec.",
"Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.3 sec.",
"Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.4 sec.",
"Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.5 sec."
		];
i++;

//Desperate Prayer - Holy
rank[i]=[
"<span style=text-align:left;float:left;>21% of base mana</span><br/><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>2 min cooldown</span><br>Instantly heals the caster for 263 to 325.<br>"
		];
i++;

//Blessed Recovery - Holy
rank[i] = [
"After being struck by a melee or ranged critical hit, Blessed Recovery heals you for 5% of the damage taken over 6 sec. Additional critical hits taken during the effect increase the healing received.",
"After being struck by a melee or ranged critical hit, Blessed Recovery heals you for 5% of the damage taken over 6 sec. Additional critical hits taken during the effect increase the healing received.",
"After being struck by a melee or ranged critical hit, Blessed Recovery heals you for 5% of the damage taken over 6 sec. Additional critical hits taken during the effect increase the healing received."
		];
i++;

//Inspiration - Holy
rank[i] = [
"Reduces your target's physical damage taken by 3% for 15 sec after getting a critical effect from your Flash Heal, Heal, Greater Heal, Binding Heal, Penance, Prayer of Mending, Prayer of Healing, or Circle of Healing spell.",
"Reduces your target's physical damage taken by 7% for 15 sec after getting a critical effect from your Flash Heal, Heal, Greater Heal, Binding Heal, Penance, Prayer of Mending, Prayer of Healing, or Circle of Healing spell.",
"Reduces your target's physical damage taken by 10% for 15 sec after getting a critical effect from your Flash Heal, Heal, Greater Heal, Binding Heal, Penance, Prayer of Mending, Prayer of Healing, or Circle of Healing spell."
		];
i++;

//Holy Reach - Holy
rank[i] = [
"Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing, Holy Nova, Divine Hymm and Circle of Healing spells by 10%.",
"Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing, Holy Nova, Divine Hymm and Circle of Healing spells by 20%."
		];
i++;		

//Improved Healing - Holy
rank[i] = [
"Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Divine Hymn and Penance spells by 5%.",
"Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Divine Hymn and Penance spells by 10%.",
"Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Divine Hymn and Penance spells by 15%."
		];
i++;		

//Searing Light - Holy
rank[i] = [
"Increases the damage of your Smite, Holy Fire, Holy Nova and Penance spells by 5%.",
"Increases the damage of your Smite, Holy Fire, Holy Nova and Penance spells by 10%."
		];
i++;		

//Healing Prayers - Holy	
		
rank[i] = [
"Reduces the Mana cost of your Prayer of Healing and Prayer of Mending spells by 10%.",
"Reduces the Mana cost of your Prayer of Healing and Prayer of Mending spells by 20%."
		];
i++;

//Spirit of Redemption - Holy
rank[i] = [
"Increases total Spirit by 5% and upon death, the priest becomes the Spirit of Redemption for 15 sec. The Spirit of Redemption cannot move, attack, be attacked or targeted by any spells or effects. While in this form, the priest can cast any healing spell free of cost. When the effect ends, the priest dies."
		];
i++;

//Spiritual Guidance - Holy
rank[i] = [
"Increases spell power by 5% of your total Spirit.",
"Increases spell power by 10% of your total Spirit.",
"Increases spell power by 15% of your total Spirit.",
"Increases spell power by 20% of your total Spirit.",
"Increases spell power by 25% of your total Spirit."
		];
i++;

//Surge of Light - Holy
rank[i]=[
"Your spell criticals have a 25% chance to cause your next Smite or Flash Heal spell to be instant cast, cost no mana but be incapable of a critical hit. This effect lasts 10 sec.",
"Your spell criticals have a 50% chance to cause your next Smite or Flash Heal spell to be instant cast, cost no mana but be incapable of a critical hit. This effect lasts 10 sec."
		];
i++;

//Spiritual Healing - Holy
rank[i] = [
"Increases the amount healed by your healing spells by 2%.",
"Increases the amount healed by your healing spells by 4%.",
"Increases the amount healed by your healing spells by 6%.",
"Increases the amount healed by your healing spells by 8%.",
"Increases the amount healed by your healing spells by 10%."
		];		
i++;

//Holy Concentration - Holy
rank[i] = [
"Your mana regeneration from spirit is increased by 16% for 8 sec after you critically heal with Flash Heal, Greater Heal, Binding Heal or Empowered Renew.",
"Your mana regeneration from spirit is increased by 32% for 8 sec after you critically heal with Flash Heal, Greater Heal, Binding Heal or Empowered Renew.",
"Your mana regeneration from spirit is increased by 50% for 8 sec after you critically heal with Flash Heal, Greater Heal, Binding Heal or Empowered Renew."			
		];
i++;

//Lightwell - Holy
rank[i] = [
"<span style=text-align:left;float:left;>17% of base mana</span><span style=text-align:right;float:right;>40 yd range</span><br><span style=text-align:left;float:left;>0.5 sec cast</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Creates a Holy Lightwell. Members of your raid or party can click the Lightwell to restore 801 health over 6 sec. Attacks done to you equal to 30% of your total health will cancel the effect. Lightwell lasts for 3 min or 10 charges.<br>"
		];
i++;	

//Blessed Resilience - Holy
rank[i] = [
"Increases the effectiveness of your healing spells by 1%, and critical hits made against you have a 20% chance to prevent you from being critically hit again for 6 sec.",
"Increases the effectiveness of your healing spells by 2%, and critical hits made against you have a 40% chance to prevent you from being critically hit again for 6 sec.",
"Increases the effectiveness of your healing spells by 3%, and critical hits made against you have a 60% chance to prevent you from being critically hit again for 6 sec."						
		];
i++;

//Body and Soul - Holy
rank[i] = [
"When you cast Power Word: Shield, you increase the target's movement speed by 30% for 4 sec, and you have a 50% chance when you cast Abolish Disease on yourself to also cleanse 1 poison effect in addition to diseases.",
"When you cast Power Word: Shield, you increase the target's movement speed by 60% for 4 sec, and you have a 100% chance when you cast Abolish Disease on yourself to also cleanse 1 poison effect in addition to diseases."						
		];
i++;		

//Empowered Healing - Holy
rank[i]=[
"Your Greater Heal spell gains an additional 8% and your Flash Heal and Binding Heal gain an additional 4% of your bonus healing effects.",
"Your Greater Heal spell gains an additional 16% and your Flash Heal and Binding Heal gain an additional 8% of your bonus healing effects.",
"Your Greater Heal spell gains an additional 24% and your Flash Heal and Binding Heal gain an additional 12% of your bonus healing effects.",
"Your Greater Heal spell gains an additional 32% and your Flash Heal and Binding Heal gain an additional 16% of your bonus healing effects.",
"Your Greater Heal spell gains an additional 40% and your Flash Heal and Binding Heal gain an additional 20% of your bonus healing effects."												
			];
i++;

//Serendipity - Holy
rank[i]=[
"When you heal with Binding Heal or Flash Heal, the cast time of your next Greater Heal or Prayer of Healing spell is reduced by 4%. Stacks up to 3 times. Lasts 20 sec.",
"When you heal with Binding Heal or Flash Heal, the cast time of your next Greater Heal or Prayer of Healing spell is reduced by 8%. Stacks up to 3 times. Lasts 20 sec.",
"When you heal with Binding Heal or Flash Heal, the cast time of your next Greater Heal or Prayer of Healing spell is reduced by 12%. Stacks up to 3 times. Lasts 20 sec."								
			];
i++;

//Empowered Renew - Holy
rank[i] = [
"Your Renew spell gains an additional 5% of your bonus healing effects, and your Renew will instantly heal the target for 5% of the total periodic effect.",
"Your Renew spell gains an additional 10% of your bonus healing effects, and your Renew will instantly heal the target for 10% of the total periodic effect.",
"Your Renew spell gains an additional 15% of your bonus healing effects, and your Renew will instantly heal the target for 15% of the total periodic effect."
		];
i++;

//Circle of Healing - Holy
rank[i]=[
"<span style=text-align:left;float:left;>21% of base mana</span><span style=text-align:right;float:right;>40 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><br>Heals up to 5 friendly party or raid members within 15 yards of the target for 343 to 379.<br>"
		];
i++;

//Test of Faith - Holy
rank[i] = [
"Increases healing by 2% and spell critical effect chance by 4% on friendly targets at or below 50% health.",
"Increases healing by 4% and spell critical effect chance by 8% on friendly targets at or below 50% health.",
"Increases healing by 6% and spell critical effect chance by 12% on friendly targets at or below 50% health."
		];
i++;

//Divine Providence - Holy
rank[i] = [
"Increases the amount healed by Circle of Healing, Binding Heal, Holy Nova, Prayer of Healing, Divine Hymn and Prayer of Mending by 2%, and reduces the cooldown of your Prayer of Mending by 6%.",
"Increases the amount healed by Circle of Healing, Binding Heal, Holy Nova, Prayer of Healing, Divine Hymn and Prayer of Mending by 4%, and reduces the cooldown of your Prayer of Mending by 12%.",
"Increases the amount healed by Circle of Healing, Binding Heal, Holy Nova, Prayer of Healing, Divine Hymn and Prayer of Mending by 6%, and reduces the cooldown of your Prayer of Mending by 18%.",
"Increases the amount healed by Circle of Healing, Binding Heal, Holy Nova, Prayer of Healing, Divine Hymn and Prayer of Mending by 8%, and reduces the cooldown of your Prayer of Mending by 24%.",
"Increases the amount healed by Circle of Healing, Binding Heal, Holy Nova, Prayer of Healing, Divine Hymn and Prayer of Mending by 10%, and reduces the cooldown of your Prayer of Mending by 30%."
		];		

i++;

//Guardian Spirit - Holy
rank[i] = [
"<span style=text-align:left;float:left;>6% of base mana</span><span style=text-align:right;float:right;>40 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Calls upon a guardian spirit to watch over the friendly target. The spirit increases the healing received by the target by 40%, and also prevents the target from dying by sacrificing itself. This sacrifice terminates the effect but heals the target of 50% of their maximum health. Lasts 10 sec."
		];
i++;
	
//SHADOW TALENTS---------------------------------------------------------------->	

//Spirit Tap - Shadow
rank[i]=[
"Gives you a 33% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor. For the duration, your Mana will regenerate at a 83% rate while casting. Lasts 15 sec.",
"Gives you a 66% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor. For the duration, your Mana will regenerate at a 83% rate while casting. Lasts 15 sec.",
"Gives you a 100% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor. For the duration, your Mana will regenerate at a 83% rate while casting. Lasts 15 sec."
		];
i++;

//Improved Spirit Tap - Shadow
rank[i]=[
"Your Mind Blast and Shadow Word: Death critical strikes have a 100% chance and your Mind Flay critical strikes have a 50% chance to increase your total Spirit by 5%. For the duration, your mana will regenerate at a 17% rate while casting. Lasts 8 sec.",
"Your Mind Blast and Shadow Word: Death critical strikes have a 100% chance and your Mind Flay critical strikes have a 50% chance to increase your total Spirit by 10%. For the duration, your mana will regenerate at a 33% rate while casting. Lasts 8 sec."
		];
i++;

//Darkness - Shadow
rank[i]=[
"Increases your Shadow spell damage by 2%.",
"Increases your Shadow spell damage by 4%.",
"Increases your Shadow spell damage by 6%.",
"Increases your Shadow spell damage by 8%.",
"Increases your Shadow spell damage by 10%."
		];
i++;		

//Shadow Affinity - Shadow
rank[i]=[
"Reduces the threat generated by your Shadow spells by 8%, and you receive 5% of your base mana when your Shadow Word: Pain or Vampiric Touch spells are dispelled.",
"Reduces the threat generated by your Shadow spells by 16%, and you receive 10% of your base mana when your Shadow Word: Pain or Vampiric Touch spells are dispelled.",
"Reduces the threat generated by your Shadow spells by 25%, and you receive 15% of your base mana when your Shadow Word: Pain or Vampiric Touch spells are dispelled."
		];
i++;		

//Improved Shadow Word: Pain - Shadow
rank[i]=[
"Increases the damage of your Shadow Word: Pain spell by 3%.",
"Increases the damage of your Shadow Word: Pain spell by 6%."
		];
i++;		

//Shadow Focus - Shadow
rank[i]=[
"Increases your chance to hit with your Shadow spells by 1%, and reduces the mana cost of your Shadow spells by 2%.",
"Increases your chance to hit with your Shadow spells by 2%, and reduces the mana cost of your Shadow spells by 4%.",
"Increases your chance to hit with your Shadow spells by 3%, and reduces the mana cost of your Shadow spells by 6%."
		];
i++;		

//Improved Psychic Scream - Shadow
rank[i]=[
"Reduces the cooldown of your Psychic Scream spell by 2 sec.",
"Reduces the cooldown of your Psychic Scream spell by 4 sec."
		];
i++;		

//Improved Mind Blast - Shadow
rank[i]=[
"Reduces the cooldown of your Mind Blast spell by 0.5 sec, and while in Shadowform your Mind Blast also has a 20% chance to reduce all healing done to the target by 20% for 10 sec.",
"Reduces the cooldown of your Mind Blast spell by 1 sec, and while in Shadowform your Mind Blast also has a 40% chance to reduce all healing done to the target by 20% for 10 sec.",
"Reduces the cooldown of your Mind Blast spell by 1.5 sec, and while in Shadowform your Mind Blast also has a 60% chance to reduce all healing done to the target by 20% for 10 sec.",
"Reduces the cooldown of your Mind Blast spell by 2 sec, and while in Shadowform your Mind Blast also has a 80% chance to reduce all healing done to the target by 20% for 10 sec.",
"Reduces the cooldown of your Mind Blast spell by 2.5 sec, and while in Shadowform your Mind Blast also has a 100% chance to reduce all healing done to the target by 20% for 10 sec."
		];
i++;		
	
//Mind Flay - Shadow
rank[i]=[
"<span style=text-align:left;float:left;>9% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br>Channeled<br>Assault the target's mind with Shadow energy, causing 45 Shadow damage over 3 sec and slowing the target to 50% of their movement speed."
		];
i++;		
	
//Veiled Shadows - Shadow
rank[i]=[
"Decreases the cooldown of your Fade ability by 3 sec, and reduces the cooldown of your Shadowfiend ability by 1 minute.",
"Decreases the cooldown of your Fade ability by 6 sec, and reduces the cooldown of your Shadowfiend ability by 2 minutes."
		];

i++;		

//Shadow Reach - Shadow
rank[i]=[
"Increases the range of your offensive Shadow spells by 10%.",
"Increases the range of your offensive Shadow spells by 20%."
		];
i++;

//Shadow Weaving - Shadow
rank[i]=[
"Your Shadow damage spells have a 33% chance to increase the Shadow damage you deal by 2% for 15 sec. Stacks up to 5 times.",
"Your Shadow damage spells have a 66% chance to increase the Shadow damage you deal by 2% for 15 sec. Stacks up to 5 times.",
"Your Shadow damage spells have a 100% chance to increase the Shadow damage you deal by 2% for 15 sec. Stacks up to 5 times."
		];
i++;				

//Silence - Shadow
rank[i]=[
"<span style=text-align:left;float:left;>225 Mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>45 sec cooldown</span><br>Silences the target, preventing them from casting spells for 5 sec. Non-player victim spellcasting is also interrupted for 3 sec."
		];
i++;

//Vampiric Embrace
rank[i]=[
"<span style=text-align:left;float:left;>Instant cast</span><br>Fills you with the embrace of Shadow energy, causing you to be healed for 15% and other party members to be healed for 3% of any single-target Shadow spell damage you deal for 30 min."
		];
i++;

//Improved Vampiric Embrace
rank[i]=[
"Increases the healing received from Vampiric Embrace by 33%.",
"Increases the healing received from Vampiric Embrace by 67%."
		];
i++;		
	
//Focused Mind - Shadow 
rank[i]=[
"Reduces the mana cost of your Mind Blast, Mind Control, Mind Flay and Mind Sear spells by 5%.",
"Reduces the mana cost of your Mind Blast, Mind Control, Mind Flay and Mind Sear spells by 10%.",
"Reduces the mana cost of your Mind Blast, Mind Control, Mind Flay and Mind Sear spells by 15%."
		];
i++;				

//Mind Melt - Shadow
rank[i]=[
"Increases the critical strike chance of your Mind Blast, Mind Flay and Mind Sear spells by 2%, and increases the periodic critical strike chance of your Vampiric Touch, Devouring Plague and Shadow Word: Pain spells by 3%.",
"Increases the critical strike chance of your Mind Blast, Mind Flay and Mind Sear spells by 4%, and increases the periodic critical strike chance of your Vampiric Touch, Devouring Plague and Shadow Word: Pain spells by 6%."		
		];
i++;						

//Improved Devouring Plague - Shadow
rank[i]=[
"Increases the periodic damage done by your Devouring Plague by 5%, and when you cast Devouring Plague you instantly deal damage equal to 10% of its total periodic effect.",
"Increases the periodic damage done by your Devouring Plague by 10%, and when you cast Devouring Plague you instantly deal damage equal to 20% of its total periodic effect.",
"Increases the periodic damage done by your Devouring Plague by 15%, and when you cast Devouring Plague you instantly deal damage equal to 30% of its total periodic effect."
		];
i++;		
	
//Shadow Form - Shadoow
rank[i]=[
"13% of base mana<br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>1.5 sec cooldown</span><br>Assume a Shadowform, increasing your Shadow damage by 15%, reducing all damage done to you by 15% and threat generated by 30%. However, you may not cast Holy spells while in this form except Cure Disease and Abolish Disease. Grants the periodic damage from your Shadow Word: Pain, Devouring Plague, and Vampiric Touch spells the ability to critically hit for 100% increased damage and grants Devouring Plague and Vampiric Touch the ability to benefit from haste."
		];
i++;		

//Shadow Power - Shadow
rank[i]=[
"Increases the critical strike damage bonus of your Mind Blast, Mind Flay and Shadow Word: Death spells by 20%.",
"Increases the critical strike damage bonus of your Mind Blast, Mind Flay and Shadow Word: Death spells by 40%.",
"Increases the critical strike damage bonus of your Mind Blast, Mind Flay and Shadow Word: Death spells by 60%.",
"Increases the critical strike damage bonus of your Mind Blast, Mind Flay and Shadow Word: Death spells by 80%.",
"Increases the critical strike damage bonus of your Mind Blast, Mind Flay and Shadow Word: Death spells by 100%."								
		];
i++;

//Improved Shadowform - Shadow
rank[i]=[
"Your Fade ability now has a 50% chance to remove all movement impairing effects when used while in Shadowform, and reduces casting or channeling time lost when damaged by 35% when casting any Shadow spell while in Shadowform.",
"Your Fade ability now has a 100% chance to remove all movement impairing effects when used while in Shadowform, and reduces casting or channeling time lost when damaged by 70% when casting any Shadow spell while in Shadowform."										
		];
i++;

//Misery - Shadow 
rank[i] = [
"Your Shadow Word: Pain, Mind Flay and Vampiric Touch spells also increase the chance for harmful spells to hit by 1% lasting 24 sec, and increases the benefit from spell power gained by your Mind Blast, Mind Flay and Mind Sear spells by 5%.",
"Your Shadow Word: Pain, Mind Flay and Vampiric Touch spells also increase the chance for harmful spells to hit by 2% lasting 24 sec, and increases the benefit from spell power gained by your Mind Blast, Mind Flay and Mind Sear spells by 10%.",
"Your Shadow Word: Pain, Mind Flay and Vampiric Touch spells also increase the chance for harmful spells to hit by 3% lasting 24 sec, and increases the benefit from spell power gained by your Mind Blast, Mind Flay and Mind Sear spells by 15%."
		];
i++;

//Psychic Horror - Shadow
rank[i]=[
"16% of base mana<br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>2 min cooldown</span><br>You terrify the target, causing them to tremble in horror for 3 sec and drop their main hand and ranged weapons for 10 sec."
		];
i++;

//Vampiric Touch - Shadow
rank[i]=[
"<span style=text-align:left;float:left;>16% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br>1.5 sec cast<br>Causes 450 Shadow damage over 15 sec to your target and causes up to 10 party or raid members to gain 1% of their maximum mana per 5 sec when you deal damage from Mind Blast. In addition, if the Vampiric Touch is dispelled it will cause 720 damage to the afflicted target."
		];
i++;

//Pain and Suffering - Shadow
rank[i]=[
"Your Mind Flay has a 33% chance to refresh the duration of your Shadow Word: Pain on the target, and reduces the damage you take from your own Shadow Word: Death by 10%.",
"Your Mind Flay has a 66% chance to refresh the duration of your Shadow Word: Pain on the target, and reduces the damage you take from your own Shadow Word: Death by 20%.",	
"Your Mind Flay has a 100% chance to refresh the duration of your Shadow Word: Pain on the target, and reduces the damage you take from your own Shadow Word: Death by 30%."	
		];
i++;

//Twisted Faith - Shadow
rank[i]=[
"Increases your spell power by 4% of your total Spirit, and your damage done by your Mind Flay and Mind Blast is increased by 2% if your target is afflicted by your Shadow Word: Pain.",
"Increases your spell power by 8% of your total Spirit, and your damage done by your Mind Flay and Mind Blast is increased by 4% if your target is afflicted by your Shadow Word: Pain.",
"Increases your spell power by 12% of your total Spirit, and your damage done by your Mind Flay and Mind Blast is increased by 6% if your target is afflicted by your Shadow Word: Pain.",
"Increases your spell power by 16% of your total Spirit, and your damage done by your Mind Flay and Mind Blast is increased by 8% if your target is afflicted by your Shadow Word: Pain.",
"Increases your spell power by 20% of your total Spirit, and your damage done by your Mind Flay and Mind Blast is increased by 10% if your target is afflicted by your Shadow Word: Pain."									
		];
i++;

//Dispersion - Shadow 
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>2 min cooldown</span><br>You disperse into pure Shadow energy, reducing all damage taken by 90%. You are unable to attack or cast spells, but you regenerate 6% mana every 1 sec for 6 sec. Dispersion can be cast while stunned, feared or silenced and clears all snare and movement impairing effects when cast, and makes you immune to them while dispersed."
		];		
i++;

//Shadow Talents End^^

