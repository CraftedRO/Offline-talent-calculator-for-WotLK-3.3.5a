var i = 0;
var t = 0;

var className = "Druid Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Balance"; i++;
tree[i] = "Feral Combat"; i++;
tree[i] = "Restoration"; i++;

i = 0;

talent[i] = [0, "Starlight Wrath", 5, 2, 1]; i++;
talent[i] = [0, "Genesis", 5, 3, 1]; i++;
talent[i] = [0, "Moonglow", 3, 1, 2]; i++;
talent[i] = [0, "Nature's Majesty", 2, 2, 2]; i++;
talent[i] = [0, "Improved Moonfire", 2, 4, 2]; i++;
talent[i] = [0, "Brambles", 3, 1, 3]; i++;
talent[i] = [0, "Nature's Grace", 3, 2, 3, [getTalentID("Nature's Majesty"),2]]; i++;
talent[i] = [0, "Nature's Splendor", 1, 3, 3, [getTalentID("Nature's Majesty"),2]]; i++;
talent[i] = [0, "Nature's Reach", 2, 4, 3]; i++;
talent[i] = [0, "Vengeance", 5, 2, 4]; i++;
talent[i] = [0, "Celestial Focus", 3, 3, 4]; i++;
talent[i] = [0, "Lunar Guidance", 3, 1, 5]; i++;
talent[i] = [0, "Insect Swarm", 1, 2, 5]; i++;
talent[i] = [0, "Improved Insect Swarm", 3, 3, 5, [getTalentID("Insect Swarm"),1]]; i++;
talent[i] = [0, "Dreamstate", 3, 1, 6]; i++;
talent[i] = [0, "Moonfury", 3, 2, 6]; i++;
talent[i] = [0, "Balance of Power", 2, 3, 6]; i++;
talent[i] = [0, "Moonkin Form", 1, 2, 7]; i++;
talent[i] = [0, "Improved Moonkin Form", 3, 3, 7, [getTalentID("Moonkin Form"),1]]; i++;
talent[i] = [0, "Improved Faerie Fire", 3, 4, 7]; i++;
talent[i] = [0, "Owlkin Frenzy", 3, 1, 8, [getTalentID("Moonkin Form"),1]]; i++;
talent[i] = [0, "Wrath of Cenarius", 5, 3, 8]; i++;
talent[i] = [0, "Eclipse", 3, 1, 9]; i++;
talent[i] = [0, "Typhoon", 1, 2, 9, [getTalentID("Moonkin Form"),1]]; i++;
talent[i] = [0, "Force of Nature", 1, 3, 9]; i++;
talent[i] = [0, "Gale Winds", 2, 4, 9]; i++;
talent[i] = [0, "Earth and Moon", 3, 2, 10]; i++;
talent[i] = [0, "Starfall", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

//feral combat talents
talent[i] = [1, "Ferocity", 5, 2, 1]; i++;
talent[i] = [1, "Feral Aggression", 5, 3, 1]; i++;
talent[i] = [1, "Feral Instinct", 3, 1, 2]; i++;
talent[i] = [1, "Savage Fury", 2, 2, 2]; i++;
talent[i] = [1, "Thick Hide", 3, 3, 2]; i++;
talent[i] = [1, "Feral Swiftness", 2, 1, 3]; i++;
talent[i] = [1, "Survival Instincts", 1, 2, 3]; i++;
talent[i] = [1, "Sharpened Claws", 3, 3, 3]; i++;
talent[i] = [1, "Shredding Attacks", 2, 1, 4]; i++;
talent[i] = [1, "Predatory Strikes", 3, 2, 4]; i++;
talent[i] = [1, "Primal Fury", 2, 3, 4, [getTalentID("Sharpened Claws"),3]]; i++;
talent[i] = [1, "Primal Precision", 2, 4, 4, [getTalentID("Sharpened Claws"),3]]; i++;
talent[i] = [1, "Brutal Impact", 2, 1, 5]; i++;
talent[i] = [1, "Feral Charge", 1, 3, 5]; i++;
talent[i] = [1, "Nurturing Instinct", 2, 4, 5]; i++;
talent[i] = [1, "Natural Reaction", 3, 1, 6]; i++;
talent[i] = [1, "Heart of the Wild", 5, 2, 6, [getTalentID("Predatory Strikes"),3]]; i++;
talent[i] = [1, "Survival of the Fittest", 3, 3, 6]; i++;
talent[i] = [1, "Leader of the Pack", 1, 2, 7]; i++;
talent[i] = [1, "Improved Leader of the Pack", 2, 3, 7, [getTalentID("Leader of the Pack"),1]]; i++;
talent[i] = [1, "Primal Tenacity", 3, 4, 7]; i++;
talent[i] = [1, "Protector of the Pack", 3, 1, 8, [getTalentID("Leader of the Pack"),1]]; i++;
talent[i] = [1, "Predatory Instincts", 3, 3, 8]; i++;
talent[i] = [1, "Infected Wounds", 3, 4, 8]; i++;
talent[i] = [1, "King of the Jungle", 3, 1, 9]; i++;
talent[i] = [1, "Mangle", 1, 2, 9, [getTalentID("Leader of the Pack"),1]]; i++;
talent[i] = [1, "Improved Mangle", 3, 3, 9, [getTalentID("Mangle"),1]]; i++;
talent[i] = [1, "Rend and Tear", 5, 2, 10]; i++;
talent[i] = [1, "Primal Gore", 1, 3, 10, [getTalentID("Rend and Tear"),5]]; i++;
talent[i] = [1, "Berserk", 1, 2, 11]; i++;
treeStartStop[t] = i -1;
t++;

//restoration talents
talent[i] = [2, "Improved Mark of the Wild", 2, 1, 1]; i++;
talent[i] = [2, "Nature's Focus", 3, 2, 1]; i++;
talent[i] = [2, "Furor", 5, 3, 1]; i++;
talent[i] = [2, "Naturalist", 5, 1, 2]; i++;
talent[i] = [2, "Subtlety", 3, 2, 2]; i++;
talent[i] = [2, "Natural Shapeshifter", 3, 3, 2]; i++;
talent[i] = [2, "Intensity", 3, 1, 3]; i++;
talent[i] = [2, "Omen of Clarity", 1, 2, 3]; i++;
talent[i] = [2, "Master Shapeshifter", 2, 3, 3, [getTalentID("Natural Shapeshifter"),3]]; i++;
talent[i] = [2, "Tranquil Spirit", 5, 2, 4]; i++;
talent[i] = [2, "Improved Rejuvenation", 3, 3, 4]; i++;
talent[i] = [2, "Nature's Swiftness", 1, 1, 5, [getTalentID("Intensity"),3]]; i++;
talent[i] = [2, "Gift of Nature", 5, 2, 5]; i++;
talent[i] = [2, "Improved Tranquility", 2, 4, 5]; i++;
talent[i] = [2, "Empowered Touch", 2, 1, 6]; i++;
talent[i] = [2, "Improved Regrowth", 5, 3, 6, [getTalentID("Improved Rejuvenation"),3]]; i++;
talent[i] = [2, "Living Spirit", 3, 1, 7]; i++;
talent[i] = [2, "Swiftmend", 1, 2, 7, [getTalentID("Gift of Nature"),5]]; i++;
talent[i] = [2, "Natural Perfection", 3, 3, 7]; i++;
talent[i] = [2, "Empowered Rejuvenation", 5, 2, 8]; i++;
talent[i] = [2, "Living Seed", 3, 3, 8]; i++;
talent[i] = [2, "Replenish", 3, 1, 9]; i++;
talent[i] = [2, "Tree of Life", 1, 2, 9, [getTalentID("Empowered Rejuvenation"),5]]; i++;
talent[i] = [2, "Improved Tree of Life", 3, 3, 9, [getTalentID("Tree of Life"),1]]; i++;
talent[i] = [2, "Improved Barkskin", 2, 1, 10]; i++;
talent[i] = [2, "Gift of the Earthmother", 5, 3, 10]; i++;
talent[i] = [2, "Wild Growth", 1, 2, 11, [getTalentID("Tree of Life"),1]]; i++;

treeStartStop[t] = i -1;
t++;

i = 0;


//Balance Talents Begin---------------------------------------------------------------

//Starlight Wrath - Balance 
rank[i] = [
"Reduces the cast time of your Wrath and Starfire spells by 0.1 sec.",
"Reduces the cast time of your Wrath and Starfire spells by 0.2 sec.",
"Reduces the cast time of your Wrath and Starfire spells by 0.3 sec.",
"Reduces the cast time of your Wrath and Starfire spells by 0.4 sec.",
"Reduces the cast time of your Wrath and Starfire spells by 0.5 sec."
		];
i++;

//Genesis - Balance
rank[i] = [
"Increases the damage and healing done by your periodic damage and healing effects by 1%.",
"Increases the damage and healing done by your periodic damage and healing effects by 2%.",
"Increases the damage and healing done by your periodic damage and healing effects by 3%.",
"Increases the damage and healing done by your periodic damage and healing effects by 4%.",
"Increases the damage and healing done by your periodic damage and healing effects by 5%."
		];
i++;

//Moonglow - Balance
rank[i] = [
"Reduces the Mana cost of your Moonfire, Starfire, Starfall, Wrath, Healing Touch, Nourish, Regrowth and Rejuvenation spells by 3%.",
"Reduces the Mana cost of your Moonfire, Starfire, Starfall, Wrath, Healing Touch, Nourish, Regrowth and Rejuvenation spells by 6%.",
"Reduces the Mana cost of your Moonfire, Starfire, Starfall, Wrath, Healing Touch, Nourish, Regrowth and Rejuvenation spells by 9%."
		];		
i++;	
		

//Nature's Majesty - Balance 
rank[i] = [
"Increases the critical strike chance of your Wrath, Starfire, Starfall, Nourish and Healing Touch spells by 2%.",
"Increases the critical strike chance of your Wrath, Starfire, Starfall, Nourish and Healing Touch spells by 4%."
		];
i++;		

//Improved Moonfire - Balance
rank[i] = [
"Increases the damage and critical strike chance of your Moonfire spell by 5%.",
"Increases the damage and critical strike chance of your Moonfire spell by 10%."
		];
i++;		

//Brambles - Balance
rank[i] = [ 
"Damage from your Thorns and Entangling Roots increased by 25% and damage done by your Treants increased by 5%. In addition, damage from your Treants and attacks done to you while you have Barkskin active have a 5% chance to daze the target for 3 sec.",
"Damage from your Thorns and Entangling Roots increased by 50% and damage done by your Treants increased by 10%. In addition, damage from your Treants and attacks done to you while you have Barkskin active have a 10% chance to daze the target for 3 sec.",
"Damage from your Thorns and Entangling Roots increased by 75% and damage done by your Treants increased by 15%. In addition, damage from your Treants and attacks done to you while you have Barkskin active have a 15% chance to daze the target for 3 sec."
		];
i++;		

//Nature's Grace - Balance
rank[i] = [
"All non-periodic spell criticals have a 33% chance to grace you with a blessing of nature, increasing your spell casting speed by 20% for 3 sec.",
"All non-periodic spell criticals have a 66% chance to grace you with a blessing of nature, increasing your spell casting speed by 20% for 3 sec.",
"All non-periodic spell criticals have a 100% chance to grace you with a blessing of nature, increasing your spell casting speed by 20% for 3 sec."
		];
i++;	

//Nature's Splendor - Balance
rank[i] = [
"Increases the duration of your Moonfire and Rejuvenation spells by 3 sec, your Regrowth spell by 6 sec, and your Insect Swarm and Lifebloom spells by 2 sec."
		];
i++;
	

//Nature's Reach - Balance
rank[i] = [
"Increases the range of your Balance spells and Faerie Fire (Feral) ability by 10%, and reduces the threat generated by your Balance spells by 15%.",
"Increases the range of your Balance spells and Faerie Fire (Feral) ability by 20%, and reduces the threat generated by your Balance spells by 30%."
		];
i++;		

//Vengeance - Balance
rank[i] = [
"Increases the critical strike damage bonus of your Starfire, Starfall, Moonfire, and Wrath spells by 20%.",
"Increases the critical strike damage bonus of your Starfire, Starfall, Moonfire, and Wrath spells by 40%.",
"Increases the critical strike damage bonus of your Starfire, Starfall, Moonfire, and Wrath spells by 60%.",
"Increases the critical strike damage bonus of your Starfire, Starfall, Moonfire, and Wrath spells by 80%.",
"Increases the critical strike damage bonus of your Starfire, Starfall, Moonfire, and Wrath spells by 100%."
		];
i++;		

//Celestial Focus - Balance  
rank[i] = [
"Reduces the pushback suffered from damaging attacks while casting Starfire, Hibernate and Hurricane by 23% and increases your total spell haste by 1%.",
"Reduces the pushback suffered from damaging attacks while casting Starfire, Hibernate and Hurricane by 46% and increases your total spell haste by 2%.",
"Reduces the pushback suffered from damaging attacks while casting Starfire, Hibernate and Hurricane by 70% and increases your total spell haste by 3%."
		];
i++;

//Lunar Guidance - Balance
rank[i] = [
"Increases your spell power by 4% of your total Intellect.",
"Increases your spell power by 8% of your total Intellect.",
"Increases your spell power by 12% of your total Intellect."
		];
i++;

//Insect Swarm - Balance
rank[i]=[
"<span style=text-align:left;float:left;>8% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br>Instant cast<br>The enemy target is swarmed by insects, decreasing their chance to hit by 3% and causing 144 Nature damage over 12 sec.<br>"
		];
i++;

//Improved Insect Swarm - Balance
rank[i] = [
"Increases your damage done by your Wrath spell to targets afflicted by your Insect Swarm by 1%, and increases the critical strike chance of your Starfire spell by 1% on targets afflicted by your Moonfire spell.",
"Increases your damage done by your Wrath spell to targets afflicted by your Insect Swarm by 2%, and increases the critical strike chance of your Starfire spell by 2% on targets afflicted by your Moonfire spell.",
"Increases your damage done by your Wrath spell to targets afflicted by your Insect Swarm by 3%, and increases the critical strike chance of your Starfire spell by 3% on targets afflicted by your Moonfire spell."
		];		
i++;

//Dreamstate - Balance
rank[i] = [
"Regenerate mana equal to 4% of your Intellect every 5 sec, even while casting.",
"Regenerate mana equal to 7% of your Intellect every 5 sec, even while casting.",
"Regenerate mana equal to 10% of your Intellect every 5 sec, even while casting."
		];		
i++;

//Moonfury - Balance
rank[i] = [
"Increases the damage done by your Starfire, Moonfire and Wrath spells by 3%.",
"Increases the damage done by your Starfire, Moonfire and Wrath spells by 6%.",
"Increases the damage done by your Starfire, Moonfire and Wrath spells by 10%."
		];
i++;		


//Balance of Power - Balance  			
rank[i] = [
"Increases your chance to hit with all spells by 2% and reduces your damage taken from all spells by 3%.",
"Increases your chance to hit with all spells by 4% and reduces your damage taken from all spells by 6%."
		];
i++;


//Moonkin Form - Balance
rank[i] = [
"13% of base mana<br><span style=text-align:left;float:left;>Instant cast</span><br>Shapeshift into Moonkin Form. While in this form the armor contribution from items is increased by 370%, damage taken while stunned is reduced by 15%, and all party and raid members within 100 yards have their spell critical chance increased by 5%. Single target spell critical strikes in this form have a chance to instantly regenerate 2% of your total mana. The Moonkin can not cast healing or resurrection spells while shapeshifted.<br><br>The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
		];
i++;

//Improved Moonkin Form - Balance  			
rank[i] = [
"Your Moonkin Aura also causes affected targets to gain 1% haste and you to gain 10% of your spirit as additional spell damage.",
"Your Moonkin Aura also causes affected targets to gain 2% haste and you to gain 20% of your spirit as additional spell damage.",
"Your Moonkin Aura also causes affected targets to gain 3% haste and you to gain 30% of your spirit as additional spell damage."
		];
i++;


//Improved Faerie Fire - Balance  			
rank[i] = [
"Your Faerie Fire spell also increases the chance the target will be hit by spell attacks by 1%, and increases the critical strike chance of your damage spells by 1% on targets afflicted by Faerie Fire.",
"Your Faerie Fire spell also increases the chance the target will be hit by spell attacks by 2%, and increases the critical strike chance of your damage spells by 2% on targets afflicted by Faerie Fire.",
"Your Faerie Fire spell also increases the chance the target will be hit by spell attacks by 3%, and increases the critical strike chance of your damage spells by 3% on targets afflicted by Faerie Fire."
		];
i++;

//Owlkin Frenzy - Balance
rank[i] = [
"Attacks done to you while in Moonkin form have a 5% chance to cause you to go into a Frenzy, increasing your damage by 10%, cause you to be immune to pushback while casting Balance spells and restore 2% base mana every 5 sec. Lasts 10 sec.",
"Attacks done to you while in Moonkin form have a 10% chance to cause you to go into a Frenzy, increasing your damage by 10%, cause you to be immune to pushback while casting Balance spells and restore 2% base mana every 5 sec. Lasts 10 sec.",
"Attacks done to you while in Moonkin form have a 15% chance to cause you to go into a Frenzy, increasing your damage by 10%, cause you to be immune to pushback while casting Balance spells and restore 2% base mana every 5 sec. Lasts 10 sec."
		];
i++;

//Wrath of Cenarius - Balance
rank[i] = [
"Your Starfire spell gains an additional 4% and your Wrath gains an additional 2% of your bonus damage effects.",
"Your Starfire spell gains an additional 8% and your Wrath gains an additional 4% of your bonus damage effects.",
"Your Starfire spell gains an additional 12% and your Wrath gains an additional 6% of your bonus damage effects.",
"Your Starfire spell gains an additional 16% and your Wrath gains an additional 8% of your bonus damage effects.",
"Your Starfire spell gains an additional 20% and your Wrath gains an additional 10% of your bonus damage effects."
		];
i++;

//Eclipse - Balance
rank[i] = [
"When you critically hit with Starfire, you have a 33% chance of increasing damage done by Wrath by 10%. When you critically hit with Wrath, you have a 20% chance of increasing your critical strike chance with Starfire by 15%. Effect lasts 15 sec and has a 30 sec cooldown.",
"When you critically hit with Starfire, you have a 66% chance of increasing damage done by Wrath by 10%. When you critically hit with Wrath, you have a 40% chance of increasing your critical strike chance with Starfire by 15%. Effect lasts 15 sec and has a 30 sec cooldown.",
"When you critically hit with Starfire, you have a 100% chance of increasing damage done by Wrath by 10%. When you critically hit with Wrath, you have a 60% chance of increasing your critical strike chance with Starfire by 15%. Effect lasts 15 sec and has a 30 sec cooldown."
		];
i++;

//Typhoon - Balance
rank[i] = [
"<span style=text-align:left;float:left;>25% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>20 sec cooldown</span><br>You summon a violent Typhoon that does 400 Nature damage when in contact with hostile targets, knocking them back and dazing them for 6 sec."
		];
i++;



//Force of Nature - Balance
rank[i] = [
"<span style=text-align:left;float:left;>12% of base mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Summons 3 treants to attack the enemy target for 30 sec."
		];
i++;

//Gale Winds - Balance
rank[i] = [
"Increases damage done by your Hurricane and Typhoon spells by 15%, and increases the range of your Cyclone spell by 2 yards.",
"Increases damage done by your Hurricane and Typhoon spells by 30%, and increases the range of your Cyclone spell by 4 yards."
		];
i++;

//Earth and Moon - Balance
rank[i] = [
"Your Wrath and Starfire spells have a 100% chance to apply the Earth and Moon effect, which increases spell damage taken by 4% for 12 sec. Also increases your spell damage by 2%.",
"Your Wrath and Starfire spells have a 100% chance to apply the Earth and Moon effect, which increases spell damage taken by 9% for 12 sec. Also increases your spell damage by 4%.",
"Your Wrath and Starfire spells have a 100% chance to apply the Earth and Moon effect, which increases spell damage taken by 13% for 12 sec. Also increases your spell damage by 6%."
		];
i++;

//Starfall - Balance
rank[i] = [
"<span style=text-align:left;float:left;>35% of base mana</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>1.5 min cooldown</span><br> You summon a flurry of stars from the sky on all targets within 30 yards of the caster, each dealing 145 - 167 Arcane damage. Also causes 26 Arcane damage to all other enemies within 5 yards of the enemy target. Maximum 20 stars. Lasts 10 sec. Shapeshifting into an animal form or mounting cancels the effect. Any effect which causes you to lose control of your character will suppress the starfall effect."
		];
i++;

//Feral Talents Begin---------------------------------------------------------------

//Ferocity - Feral
rank[i] = [
"Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 1 Rage or Energy.",
"Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 2 Rage or Energy.",
"Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 3 Rage or Energy.",
"Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 4 Rage or Energy.",
"Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 5 Rage or Energy."
		];
i++;

//Feral Aggression - Feral
rank[i] = [
"Increases the Attack Power reduction of your Demoralizing Roar by 8% and the damage caused by your Ferocious Bite by 3%.",
"Increases the Attack Power reduction of your Demoralizing Roar by 16% and the damage caused by your Ferocious Bite by 6%.",
"Increases the Attack Power reduction of your Demoralizing Roar by 24% and the damage caused by your Ferocious Bite by 9%.",
"Increases the Attack Power reduction of your Demoralizing Roar by 32% and the damage caused by your Ferocious Bite by 12%.",
"Increases the Attack Power reduction of your Demoralizing Roar by 40% and the damage caused by your Ferocious Bite by 15%."
		];
i++;

//Feral Instinct - Feral
rank[i] = [
"Increases the damage done by your Swipe ability by 10% and reduces the chance enemies have to detect you while Prowling.",
"Increases the damage done by your Swipe ability by 20% and reduces the chance enemies have to detect you while Prowling.",
"Increases the damage done by your Swipe ability by 30% and reduces the chance enemies have to detect you while Prowling."
		];
i++;		



//Savage Fury - Feral 
rank[i] = [
"Increases the damage caused by your Claw, Rake, Mangle (Cat), Mangle (Bear) and Maul abilities by 10%.",
"Increases the damage caused by your Claw, Rake, Mangle (Cat), Mangle (Bear) and Maul abilities by 20%."		
		];
i++;	


//Thick Hide - Feral 
rank[i] = [
"Increases your Armor contribution from cloth and leather items by 4%.",
"Increases your Armor contribution from cloth and leather items by 7%.",
"Increases your Armor contribution from cloth and leather items by 10%."
		];		
i++;		

//Feral Swiftness - Feral
rank[i] = [
"Increases your movement speed by 15% in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 2%.",
"Increases your movement speed by 30% in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 4%."
		];
i++;		

//Survival Instincts - Feral 
rank[i] = [
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, this ability temporarily grants you 30% of your maximum health for 20 sec while in Bear Form, Cat Form, or Dire Bear Form. After the effect expires, the health is lost."
		];
i++;		

//Sharpened Claws - Feral  
rank[i] = [
"Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 2%.",
"Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 4%.",
"Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 6%."
		];
i++;		

//Shredding Attacks - Feral
rank[i] = [
"Reduces the energy cost of your Shred ability by 9 and the rage cost of your Lacerate ability by 1.",
"Reduces the energy cost of your Shred ability by 18 and the rage cost of your Lacerate ability by 2."
		];
i++;		

//Predatory Strikes - Feral
rank[i] = [
"Increases your melee attack power in Cat, Bear and Dire Bear Forms by 50% of your level and 7% of any attack power on your equipped weapon. In addition, your finishing moves have a 7% chance per combo point to make your next Nature spell with a base casting time less than 10 sec. become an instant cast spell.",
"Increases your melee attack power in Cat, Bear and Dire Bear Forms by 100% of your level and 14% of any attack power on your equipped weapon. In addition, your finishing moves have a 13% chance per combo point to make your next Nature spell with a base casting time less than 10 sec. become an instant cast spell.",
"Increases your melee attack power in Cat, Bear and Dire Bear Forms by 150% of your level and 20% of any attack power on your equipped weapon. In addition, your finishing moves have a 20% chance per combo point to make your next Nature spell with a base casting time less than 10 sec. become an instant cast spell."
		];
i++;				
	
//Primal Fury - Feral 
rank[i] = [
"Gives you a 50% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points have a 50% chance to add an additional combo point.",
"Gives you a 100% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points have a 100% chance to add an additional combo point."
		];
i++;

//Primal Precision - Feral 
rank[i] = [
"Increases your expertise by 5, and you are refunded 40% of the energy cost of a finishing move if it fails to land.",
"Increases your expertise by 10, and you are refunded 80% of the energy cost of a finishing move if it fails to land."
		];
i++;

//Brutal Impact - Feral
rank[i] = [
"Increases the stun duration of your Bash and Pounce abilities by 0.5 sec and decreases the cooldown of Bash by 15 sec.",
"Increases the stun duration of your Bash and Pounce abilities by 1 sec and decreases the cooldown of Bash by 30 sec."
		];
i++;
	
//Feral Charge - Feral 
rank[i] = [
		"Teaches Feral Charge (Bear) and Feral Charge (Cat).<br/><br/> Feral Charge (Bear) - Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec. This ability can be used in Bear Form and Dire Bear Form. 15 second cooldown.<br/><br/> Feral Charge (Cat) - Causes you to leap behind an enemy, dazing them for 3 sec. 30 second cooldown."
		];
i++;	

//Nurturing Instinct - Feral
rank[i]=[
"Increases your healing spells by up to 35% of your Agility, and increases healing done to you by 10% while in Cat form.",
"Increases your healing spells by up to 70% of your Agility, and increases healing done to you by 20% while in Cat form."
		];
i++;		

//Natural Reaction - Feral
rank[i]=[
"Increases your dodge while in Bear Form or Dire Bear Form by 2%, and you regenerate 1 rage everytime you dodge while in Bear Form or Dire Bear Form.",
"Increases your dodge while in Bear Form or Dire Bear Form by 4%, and you regenerate 2 rage everytime you dodge while in Bear Form or Dire Bear Form.",
"Increases your dodge while in Bear Form or Dire Bear Form by 6%, and you regenerate 3 rage everytime you dodge while in Bear Form or Dire Bear Form."
		];
i++;

//Heart of the Wild - Feral
rank[i]=[
"Increases your Intellect by 4%. In addition, while in Bear or Dire Bear Form your Stamina is increased by 2% and while in Cat Form your attack power is increased by 2%.",
"Increases your Intellect by 8%. In addition, while in Bear or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your attack power is increased by 4%.",
"Increases your Intellect by 12%. In addition, while in Bear or Dire Bear Form your Stamina is increased by 6% and while in Cat Form your attack power is increased by 6%.",
"Increases your Intellect by 16%. In addition, while in Bear or Dire Bear Form your Stamina is increased by 8% and while in Cat Form your attack power is increased by 8%.",
"Increases your Intellect by 20%. In addition, while in Bear or Dire Bear Form your Stamina is increased by 10% and while in Cat Form your attack power is increased by 10%."
		];
i++;

//Survival of the Fittest - Feral
rank[i]=[
"Increases all attributes by 2%, reduces the chance you'll be critically hit by melee attacks by 2%, and increases your armor contribution from cloth and leather items in Bear Form and Dire Bear Form by 11%.",
"Increases all attributes by 4%, reduces the chance you'll be critically hit by melee attacks by 4%, and increases your armor contribution from cloth and leather items in Bear Form and Dire Bear Form by 22%.",
"Increases all attributes by 6%, reduces the chance you'll be critically hit by melee attacks by 6%, and increases your armor contribution from cloth and leather items in Bear Form and Dire Bear Form by 33%."
		];
i++;

//Leader of the Pack - Feral
rank[i]=[
"While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases ranged and melee critical chance of all party members within 100 yards by 5%."
		];
i++;

//Improved Leader of the Pack - Feral
rank[i]=[
"Your Leader of the Pack ability also causes affected targets to heal themselves for 2% of their total health when they critically hit with a melee or ranged attack. The healing effect cannot occur more than once every 6 sec. In addition, you gain 4% of your maximum mana when you benefit from this heal.",
"Your Leader of the Pack ability also causes affected targets to heal themselves for 4% of their total health when they critically hit with a melee or ranged attack. The healing effect cannot occur more than once every 6 sec. In addition, you gain 8% of your maximum mana when you benefit from this heal."
		];
i++;

	
//Primal Tenacity - Feral
rank[i]=[
"Reduces the duration of fear effects by 10%, reduces all damage taken while stunned by 10% while in Cat Form.",
"Reduces the duration of fear effects by 20%, reduces all damage taken while stunned by 20% while in Cat Form.",
"Reduces the duration of fear effects by 30%, reduces all damage taken while stunned by 30% while in Cat Form."
		];
i++;

//Protector of the Pack - Feral
rank[i] = [
"Increases your attack power by 2% and reduces the damage you take by 4%, while in Bear or Dire Bear Form.",
"Increases your attack power by 4% and reduces the damage you take by 8%, while in Bear or Dire Bear Form.",
"Increases your attack power by 6% and reduces the damage you take by 12%, while in Bear or Dire Bear Form."
		];
i++;		

//Predatory Instincts - Feral
rank[i]=[
"While in Cat Form increases your damage from melee critical strikes by 3% and reduces the damage taken from area of effect attacks by 10%.",
"While in Cat Form increases your damage from melee critical strikes by 7% and reduces the damage taken from area of effect attacks by 20%.",
"While in Cat Form increases your damage from melee critical strikes by 10% and reduces the damage taken from area of effect attacks by 30%."
		];
i++;

//Infected Wounds - Feral
rank[i] = [ 
"Your Shred, Maul, and Mangle attacks cause an Infected Wound in the target. The Infected Wound reduces the movement speed of the target by 16% and the attack speed by 6%. Lasts 12 sec.",
"Your Shred, Maul, and Mangle attacks cause an Infected Wound in the target. The Infected Wound reduces the movement speed of the target by 34% and the attack speed by 14%. Lasts 12 sec.",
"Your Shred, Maul, and Mangle attacks cause an Infected Wound in the target. The Infected Wound reduces the movement speed of the target by 50% and the attack speed by 20%. Lasts 12 sec."
		];
i++;

//King of the Jungle - Feral
rank[i] = [ 
"While using your Enrage ability in Bear Form or Dire Bear Form, your damage is increased by 5%, and your Tiger's Fury ability also instantly restores 20 energy. In addition, the mana cost of Bear Form, Cat Form, and Dire Bear Form is reduced by 20%.",
"While using your Enrage ability in Bear Form or Dire Bear Form, your damage is increased by 10%, and your Tiger's Fury ability also instantly restores 40 energy. In addition, the mana cost of Bear Form, Cat Form, and Dire Bear Form is reduced by 40%.",
"While using your Enrage ability in Bear Form or Dire Bear Form, your damage is increased by 15%, and your Tiger's Fury ability also instantly restores 60 energy. In addition, the mana cost of Bear Form, Cat Form, and Dire Bear Form is reduced by 60%."
		];
i++;	

//Mangle - Feral
rank[i]=[
"Mangle the target, inflicting damage and causing the target to take additional damage from bleed effects for 1 min. This ability can be used in Cat Form for Dire Bear Form."
		];
i++;

//Improved Mangle - Feral
rank[i] = [
"Reduces the cooldown of your Mangle (Bear) ability by 0.5 sec., and reduces the energy cost of your Mangle (Cat) ability by 2.",
"Reduces the cooldown of your Mangle (Bear) ability by 1 sec., and reduces the energy cost of your Mangle (Cat) ability by 4.",
"Reduces the cooldown of your Mangle (Bear) ability by 1.5 sec., and reduces the energy cost of your Mangle (Cat) ability by 6."
		];
i++;

//Rend and Tear - Feral
rank[i] = [
"Increases damage done by your Maul and Shred attacks on bleeding targets by 4%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 5%.",
"Increases damage done by your Maul and Shred attacks on bleeding targets by 8%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 10%.",
"Increases damage done by your Maul and Shred attacks on bleeding targets by 12%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 15%.",
"Increases damage done by your Maul and Shred attacks on bleeding targets by 16%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 20%.",
"Increases damage done by your Maul and Shred attacks on bleeding targets by 20%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 25%."
		];
i++;	

//Primal Gore - Feral
rank[i] = [
"Grants the periodic damage from your Lacerate and Rip abilities the ability to critically hit."
		];
i++;

//Berserk - Feral
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, this ability causes your Mangle (Bear) ability to hit up to 3 targets and have no cooldown, and reduces the energy cost of all your Cat Form abilities by 50%. Lasts 15 sec. You cannot use Tiger's Fury while Berserk is active.<br/><br/>Clears the effect of Fear and makes you immune to Fear for the duration."
		];
i++;	

//RESTORATION--------------------------------------------------------------

//Improved Mark of the Wild - Restoration
rank[i]=[
"Increases the effects of your Mark of the Wild and Gift of the Wild spells by 20%, and increases all of your total attributes by 1%.",
"Increases the effects of your Mark of the Wild and Gift of the Wild spells by 40%, and increases all of your total attributes by 2%."
		];
i++;	

//Nature's Focus - Restoration 
rank[i]=[
"Reduces the pushback suffered from damaging attacks while casting Healing Touch, Wrath, Entangling Roots, Cyclone, Nourish, Regrowth and Tranquility by 23%.",
"Reduces the pushback suffered from damaging attacks while casting Healing Touch, Wrath, Entangling Roots, Cyclone, Nourish, Regrowth and Tranquility by 46%.",
"Reduces the pushback suffered from damaging attacks while casting Healing Touch, Wrath, Entangling Roots, Cyclone, Nourish, Regrowth and Tranquility by 70%."
		];
i++;	

//Furor - Restoration
rank[i]=[
"Gives you 20% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form, and you keep up to 20 Energy when you shapeshift into Cat Form, and increases your total Intellect while in Moonkin form by 2%.",
"Gives you 40% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form, and you keep up to 40 Energy when you shapeshift into Cat Form, and increases your total Intellect while in Moonkin form by 4%.",
"Gives you 60% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form, and you keep up to 60 Energy when you shapeshift into Cat Form, and increases your total Intellect while in Moonkin form by 6%.",
"Gives you 80% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form, and you keep up to 80 Energy when you shapeshift into Cat Form, and increases your total Intellect while in Moonkin form by 8%.",
"Gives you 100% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form, and you keep up to 100 Energy when you shapeshift into Cat Form, and increases your total Intellect while in Moonkin form by 10%."
		];
i++;		

//Naturalist - Restoration
rank[i]=[
"Reduces the cast time of your Healing Touch spell by 0.1 sec and increases the damage you deal with physical attacks in all forms by 2%.",
"Reduces the cast time of your Healing Touch spell by 0.2 sec and increases the damage you deal with physical attacks in all forms by 4%.",
"Reduces the cast time of your Healing Touch spell by 0.3 sec and increases the damage you deal with physical attacks in all forms by 6%.",
"Reduces the cast time of your Healing Touch spell by 0.4 sec and increases the damage you deal with physical attacks in all forms by 8%.",
"Reduces the cast time of your Healing Touch spell by 0.5 sec and increases the damage you deal with physical attacks in all forms by 10%."
		];
i++;		

//Subtlety - Restoration 
rank[i]=[
"Reduces the threat generated by your restoration spells by 10% and reduces the chance your helpful spells, Moonfire, and Insect Swarm will be dispelled by 10%.",
"Reduces the threat generated by your restoration spells by 20% and reduces the chance your helpful spells, Moonfire, and Insect Swarm will be dispelled by 20%.",
"Reduces the threat generated by your restoration spells by 30% and reduces the chance your helpful spells, Moonfire, and Insect Swarm will be dispelled by 30%."
		];
i++;	
	
//Natural Shapeshifter - Balance 
rank[i] = [
"Reduces the mana cost of all shapeshifting by 10%.",
"Reduces the mana cost of all shapeshifting by 20%.",
"Reduces the mana cost of all shapeshifting by 30%."
		];		
i++;		

//Intensity - Restoration 
rank[i]=[
"Allows 17% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 4 rage.",
"Allows 33% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 7 rage.",
"Allows 50% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 10 rage."
		];
i++;

//Omen of Clarity - Restoration //UPDATED
rank[i] = [
"Each of the Druid's damage, healing spells and auto attacks have a chance of causing the caster to enter a Clearcasting state. The Clearcasting state reduces the Mana, Rage or Energy cost of your next damage, healing spell or offensive ability by 100%."
		];
i++;
		
//MASTER SHAPESHIFTER - Restoration 
rank[i]=[
"Grants an effect which lasts while the Druid is within the respective shapeshift form.<br><br>Bear form - Increases physical damage by 2%<br><br>Cat form - Increases critical strike chance by 2%<br><br>Moonkin form - Increases spell damage by 2%<br><br>Tree of Life form - Increases healing by 2%.",
"Grants an effect which lasts while the Druid is within the respective shapeshift form.<br><br>Bear form - Increases physical damage by 4%<br><br>Cat form - Increases critical strike chance by 4%<br><br>Moonkin form - Increases spell damage by 4%<br><br>Tree of Life form - Increases healing by 4%."
		];
i++;		

//Tranquil Spirit - Restoration  
rank[i]=[
"Reduces the mana cost of your Healing Touch, Nourish and Tranquility spells by 2%.",
"Reduces the mana cost of your Healing Touch, Nourish and Tranquility spells by 4%.",
"Reduces the mana cost of your Healing Touch, Nourish and Tranquility spells by 6%.",
"Reduces the mana cost of your Healing Touch, Nourish and Tranquility spells by 8%.",
"Reduces the mana cost of your Healing Touch, Nourish and Tranquility spells by 10%."
		];
i++;		

//Improved Rejuvenation - Restoration   
rank[i]=[
"Increases the effect of your Rejuvenation spell by 5%.",
"Increases the effect of your Rejuvenation spell by 10%.",
"Increases the effect of your Rejuvenation spell by 15%."
		];
i++;	

//Nature's Swiftness - Restoration   
rank[i]=[
"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, your next Nature spell with a base casting time less than 10 sec, becomes an instant cast spell."
		];
i++;

//Gift of Nature - Restoration 
rank[i]=[
"Increases the effect of all healing spells by 2%.",
"Increases the effect of all healing spells by 4%.",
"Increases the effect of all healing spells by 6%.",
"Increases the effect of all healing spells by 8%.",
"Increases the effect of all healing spells by 10%."
		];
i++;

//Improved Tranquility - Restoration
rank[i]=[
"Reduces threat caused by Tranquility by 50%, and reduces the cooldown by 30%.",
"Reduces threat caused by Tranquility by 100%, and reduces the cooldown by 60%."
		];
i++;

//Empowered Touch - Restoration
rank[i]=[
"Your Healing Touch spell gains an additional 20% and your Nourish spell gains an additional 10% of your bonus healing effects.",
"Your Healing Touch spell gains an additional 40% and your Nourish spell gains an additional 20% of your bonus healing effects."
		];
i++;	

//Improved Regrowth - Restoration 
rank[i]=[
"Increases the critical effect chance of your Regrowth and Nourish spells by 5%.",
"Increases the critical effect chance of your Regrowth and Nourish spells by 10%.",
"Increases the critical effect chance of your Regrowth and Nourish spells by 15%.",
"Increases the critical effect chance of your Regrowth and Nourish spells by 20%.",
"Increases the critical effect chance of your Regrowth and Nourish spells by 25%."
		];
i++;

//Living Spirit - Restoration 
rank[i]=[
"Increases your total Spirit by 5%.",
"Increases your total Spirit by 10%.",
"Increases your total Spirit by 15%."
		];
i++;	

//Swiftmend - Restoration
rank[i]=[
"<span style=text-align:left;float:left;>16% of base mana</span><span style=text-align:right;float:right;>40 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>15 sec cooldown</span><br>Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal them an amount equal to 12 sec. of Rejuvenation or 18 sec. of Regrowth."
		];
i++;


//Natural Perfection - Restoration 
rank[i]=[
"Your critical strike chance with all spells is increased by 1% and critical strikes against you give you the Natural Perfection effect reducing all damage taken by 2%.  Stacks up to 3 times.  Lasts 8 sec.",
"Your critical strike chance with all spells is increased by 2% and critical strikes against you give you the Natural Perfection effect reducing all damage taken by 3%.  Stacks up to 3 times.  Lasts 8 sec.",
"Your critical strike chance with all spells is increased by 3% and critical strikes against you give you the Natural Perfection effect reducing all damage taken by 4%.  Stacks up to 3 times.  Lasts 8 sec."
		];
i++;

//Empowered Rejuvenation - Restoration 
rank[i]=[
"The bonus healing effects of your healing over time spells is increased by 4%.",
"The bonus healing effects of your healing over time spells is increased by 8%.",
"The bonus healing effects of your healing over time spells is increased by 12%.",
"The bonus healing effects of your healing over time spells is increased by 16%.",
"The bonus healing effects of your healing over time spells is increased by 20%."
		];
i++;

//Living Seed - Restoration
rank[i]=[
"When you critically heal your target with Swiftmend, Regrowth, Nourish or Healing Touch spell you have a 33% chance to plant a Living Seed on the target for 30% of the amount healed. The Living Seed will bloom when the target is next attacked. Lasts 15 sec.", 
"When you critically heal your target with Swiftmend, Regrowth, Nourish or Healing Touch spell you have a 66% chance to plant a Living Seed on the target for 30% of the amount healed. The Living Seed will bloom when the target is next attacked. Lasts 15 sec.",
"When you critically heal your target with Swiftmend, Regrowth, Nourish or Healing Touch spell you have a 100% chance to plant a Living Seed on the target for 30% of the amount healed. The Living Seed will bloom when the target is next attacked. Lasts 15 sec."	
];
i++;

//REPLENISH - Restoration 
rank[i]=[
"Your Rejuvenation spell has a 5% chance to restore 8 Energy, 4 Rage, 1% Mana or 16 Runic Power per tick.",
"Your Rejuvenation spell has a 10% chance to restore 8 Energy, 4 Rage, 1% Mana or 16 Runic Power per tick.",
"Your Rejuvenation spell has a 15% chance to restore 8 Energy, 4 Rage, 1% Mana or 16 Runic Power per tick."
		];
i++;

//Tree of Life - Restoration 
rank[i]=[
"<span>28% of base mana</span><br><span>Instant cast</span><br>Reduces the mana cost of your healing over time spells by 20% and grants the ability to shapeshift into the Tree of Life. While in this form you increase healing received by 6% for all party and raid members within 100 yards, and you can only cast Restoration spells in addition to Innervate, Barkskin, Nature's Grasp and Thorns spells. <br><br>The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
		];
i++;

//IMPROVED TREE OF LIFE - Restoration 
rank[i]=[
"Increases your armor contribution from items while in Tree of Life Form by 67%, and increases your healing spell power by 5% of your spirit while in Tree of Life Form.",
"Increases your armor contribution from items while in Tree of Life Form by 133%, and increases your healing spell power by 10% of your spirit while in Tree of Life Form.",
"Increases your armor contribution from items while in Tree of Life Form by 200%, and increases your healing spell power by 15% of your spirit while in Tree of Life Form."
		];
i++;

//Improved Barkskin - Restoration 
rank[i]=[
"Grants 80% additional armor contribution from cloth and leather items while in Travel Form or while not shapeshifted, increases the damage reduction granted by your Barkskin spell by 5% and reduces the chance your Barkskin is dispelled by 35%.",
"Grants 160% additional armor contribution from cloth and leather items while in Travel Form or while not shapeshifted, increases the damage reduction granted by your Barkskin spell by 10% and reduces the chance your Barkskin is dispelled by 70%."
		];
i++;

//GIFT OF THE EARTHMOTHER - Restoration 
rank[i]=[
"Increases your total spell haste by 2% and reduces the base cooldown of your Lifebloom spell by 2%.",
"Increases your total spell haste by 4% and reduces the base cooldown of your Lifebloom spell by 4%.",
"Increases your total spell haste by 6% and reduces the base cooldown of your Lifebloom spell by 6%.",
"Increases your total spell haste by 8% and reduces the base cooldown of your Lifebloom spell by 8%.",
"Increases your total spell haste by 10% and reduces the base cooldown of your Lifebloom spell by 10%."
		];
i++;

//Wild Growth - Restoration
rank[i]=[
"<span style=text-align:left;float:left;>23% of base mana</span><span style=text-align:right;float:right;>40 yd range</span><br>Instant cast<span style=text-align:right;float:right;>6 sec cooldown</span><br>Heals up to 5 friendly party or raid members within 15 yards of the target for 686 over 7 sec. The amount healed is applied quickly at first, and slows down as the Wild Growth reaches its full duration."
		];
i++;
	
//Restoration Talents End^^

