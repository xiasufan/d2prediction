const heroes = [
  {
    id: 1,
    name: "npc_dota_hero_antimage",
    displayName: "Anti-Mage",
  },
  {
    id: 2,
    name: "npc_dota_hero_axe",
    displayName: "Axe",
  },
  {
    id: 3,
    name: "npc_dota_hero_bane",
    displayName: "Bane",
  },
  {
    id: 4,
    name: "npc_dota_hero_bloodseeker",
    displayName: "Bloodseeker",
  },
  {
    id: 5,
    name: "npc_dota_hero_crystal_maiden",
    displayName: "Crystal Maiden",
  },
  {
    id: 6,
    name: "npc_dota_hero_drow_ranger",
    displayName: "Drow Ranger",
  },
  {
    id: 7,
    name: "npc_dota_hero_earthshaker",
    displayName: "Earthshaker",
  },
  {
    id: 8,
    name: "npc_dota_hero_juggernaut",
    displayName: "Juggernaut",
  },
  {
    id: 9,
    name: "npc_dota_hero_mirana",
    displayName: "Mirana",
  },
  {
    id: 10,
    name: "npc_dota_hero_morphling",
    displayName: "Morphling",
  },
  {
    id: 11,
    name: "npc_dota_hero_nevermore",
    displayName: "Shadow Fiend",
  },
  {
    id: 12,
    name: "npc_dota_hero_phantom_lancer",
    displayName: "Phantom Lancer",
  },
  {
    id: 13,
    name: "npc_dota_hero_puck",
    displayName: "Puck",
  },
  {
    id: 14,
    name: "npc_dota_hero_pudge",
    displayName: "Pudge",
  },
  {
    id: 15,
    name: "npc_dota_hero_razor",
    displayName: "Razor",
  },
  {
    id: 16,
    name: "npc_dota_hero_sand_king",
    displayName: "Sand King",
  },
  {
    id: 17,
    name: "npc_dota_hero_storm_spirit",
    displayName: "Storm Spirit",
  },
  {
    id: 18,
    name: "npc_dota_hero_sven",
    displayName: "Sven",
  },
  {
    id: 19,
    name: "npc_dota_hero_tiny",
    displayName: "Tiny",
  },
  {
    id: 20,
    name: "npc_dota_hero_vengefulspirit",
    displayName: "Vengeful Spirit",
  },
  {
    id: 21,
    name: "npc_dota_hero_windrunner",
    displayName: "Windranger",
  },
  {
    id: 22,
    name: "npc_dota_hero_zuus",
    displayName: "Zeus",
  },
  {
    id: 23,
    name: "npc_dota_hero_kunkka",
    displayName: "Kunkka",
  },
  {
    id: 25,
    name: "npc_dota_hero_lina",
    displayName: "Lina",
  },
  {
    id: 26,
    name: "npc_dota_hero_lion",
    displayName: "Lion",
  },
  {
    id: 27,
    name: "npc_dota_hero_shadow_shaman",
    displayName: "Shadow Shaman",
  },
  {
    id: 28,
    name: "npc_dota_hero_slardar",
    displayName: "Slardar",
  },
  {
    id: 29,
    name: "npc_dota_hero_tidehunter",
    displayName: "Tidehunter",
  },
  {
    id: 30,
    name: "npc_dota_hero_witch_doctor",
    displayName: "Witch Doctor",
  },
  {
    id: 31,
    name: "npc_dota_hero_lich",
    displayName: "Lich",
  },
  {
    id: 32,
    name: "npc_dota_hero_riki",
    displayName: "Riki",
  },
  {
    id: 33,
    name: "npc_dota_hero_enigma",
    displayName: "Enigma",
  },
  {
    id: 34,
    name: "npc_dota_hero_tinker",
    displayName: "Tinker",
  },
  {
    id: 35,
    name: "npc_dota_hero_sniper",
    displayName: "Sniper",
  },
  {
    id: 36,
    name: "npc_dota_hero_necrolyte",
    displayName: "Necrophos",
  },
  {
    id: 37,
    name: "npc_dota_hero_warlock",
    displayName: "Warlock",
  },
  {
    id: 38,
    name: "npc_dota_hero_beastmaster",
    displayName: "Beastmaster",
  },
  {
    id: 39,
    name: "npc_dota_hero_queenofpain",
    displayName: "Queen of Pain",
  },
  {
    id: 40,
    name: "npc_dota_hero_venomancer",
    displayName: "Venomancer",
  },
  {
    id: 41,
    name: "npc_dota_hero_faceless_void",
    displayName: "Faceless Void",
  },
  {
    id: 42,
    name: "npc_dota_hero_skeleton_king",
    displayName: "Wraith King",
  },
  {
    id: 43,
    name: "npc_dota_hero_death_prophet",
    displayName: "Death Prophet",
  },
  {
    id: 44,
    name: "npc_dota_hero_phantom_assassin",
    displayName: "Phantom Assassin",
  },
  {
    id: 45,
    name: "npc_dota_hero_pugna",
    displayName: "Pugna",
  },
  {
    id: 46,
    name: "npc_dota_hero_templar_assassin",
    displayName: "Templar Assassin",
  },
  {
    id: 47,
    name: "npc_dota_hero_viper",
    displayName: "Viper",
  },
  {
    id: 48,
    name: "npc_dota_hero_luna",
    displayName: "Luna",
  },
  {
    id: 49,
    name: "npc_dota_hero_dragon_knight",
    displayName: "Dragon Knight",
  },
  {
    id: 50,
    name: "npc_dota_hero_dazzle",
    displayName: "Dazzle",
  },
  {
    id: 51,
    name: "npc_dota_hero_rattletrap",
    displayName: "Clockwerk",
  },
  {
    id: 52,
    name: "npc_dota_hero_leshrac",
    displayName: "Leshrac",
  },
  {
    id: 53,
    name: "npc_dota_hero_furion",
    displayName: "Nature's Prophet",
  },
  {
    id: 54,
    name: "npc_dota_hero_life_stealer",
    displayName: "Lifestealer",
  },
  {
    id: 55,
    name: "npc_dota_hero_dark_seer",
    displayName: "Dark Seer",
  },
  {
    id: 56,
    name: "npc_dota_hero_clinkz",
    displayName: "Clinkz",
  },
  {
    id: 57,
    name: "npc_dota_hero_omniknight",
    displayName: "Omniknight",
  },
  {
    id: 58,
    name: "npc_dota_hero_enchantress",
    displayName: "Enchantress",
  },
  {
    id: 59,
    name: "npc_dota_hero_huskar",
    displayName: "Huskar",
  },
  {
    id: 60,
    name: "npc_dota_hero_night_stalker",
    displayName: "Night Stalker",
  },
  {
    id: 61,
    name: "npc_dota_hero_broodmother",
    displayName: "Broodmother",
  },
  {
    id: 62,
    name: "npc_dota_hero_bounty_hunter",
    displayName: "Bounty Hunter",
  },
  {
    id: 63,
    name: "npc_dota_hero_weaver",
    displayName: "Weaver",
  },
  {
    id: 64,
    name: "npc_dota_hero_jakiro",
    displayName: "Jakiro",
  },
  {
    id: 65,
    name: "npc_dota_hero_batrider",
    displayName: "Batrider",
  },
  {
    id: 66,
    name: "npc_dota_hero_chen",
    displayName: "Chen",
  },
  {
    id: 67,
    name: "npc_dota_hero_spectre",
    displayName: "Spectre",
  },
  {
    id: 68,
    name: "npc_dota_hero_ancient_apparition",
    displayName: "Ancient Apparition",
  },
  {
    id: 69,
    name: "npc_dota_hero_doom_bringer",
    displayName: "Doom",
  },
  {
    id: 70,
    name: "npc_dota_hero_ursa",
    displayName: "Ursa",
  },
  {
    id: 71,
    name: "npc_dota_hero_spirit_breaker",
    displayName: "Spirit Breaker",
  },
  {
    id: 72,
    name: "npc_dota_hero_gyrocopter",
    displayName: "Gyrocopter",
  },
  {
    id: 73,
    name: "npc_dota_hero_alchemist",
    displayName: "Alchemist",
  },
  {
    id: 74,
    name: "npc_dota_hero_invoker",
    displayName: "Invoker",
  },
  {
    id: 75,
    name: "npc_dota_hero_silencer",
    displayName: "Silencer",
  },
  {
    id: 76,
    name: "npc_dota_hero_obsidian_destroyer",
    displayName: "Outworld Destroyer",
  },
  {
    id: 77,
    name: "npc_dota_hero_lycan",
    displayName: "Lycan",
  },
  {
    id: 78,
    name: "npc_dota_hero_brewmaster",
    displayName: "Brewmaster",
  },
  {
    id: 79,
    name: "npc_dota_hero_shadow_demon",
    displayName: "Shadow Demon",
  },
  {
    id: 80,
    name: "npc_dota_hero_lone_druid",
    displayName: "Lone Druid",
  },
  {
    id: 81,
    name: "npc_dota_hero_chaos_knight",
    displayName: "Chaos Knight",
  },
  {
    id: 82,
    name: "npc_dota_hero_meepo",
    displayName: "Meepo",
  },
  {
    id: 83,
    name: "npc_dota_hero_treant",
    displayName: "Treant Protector",
  },
  {
    id: 84,
    name: "npc_dota_hero_ogre_magi",
    displayName: "Ogre Magi",
  },
  {
    id: 85,
    name: "npc_dota_hero_undying",
    displayName: "Undying",
  },
  {
    id: 86,
    name: "npc_dota_hero_rubick",
    displayName: "Rubick",
  },
  {
    id: 87,
    name: "npc_dota_hero_disruptor",
    displayName: "Disruptor",
  },
  {
    id: 88,
    name: "npc_dota_hero_nyx_assassin",
    displayName: "Nyx Assassin",
  },
  {
    id: 89,
    name: "npc_dota_hero_naga_siren",
    displayName: "Naga Siren",
  },
  {
    id: 90,
    name: "npc_dota_hero_keeper_of_the_light",
    displayName: "Keeper of the Light",
  },
  {
    id: 91,
    name: "npc_dota_hero_wisp",
    displayName: "Io",
  },
  {
    id: 92,
    name: "npc_dota_hero_visage",
    displayName: "Visage",
  },
  {
    id: 93,
    name: "npc_dota_hero_slark",
    displayName: "Slark",
  },
  {
    id: 94,
    name: "npc_dota_hero_medusa",
    displayName: "Medusa",
  },
  {
    id: 95,
    name: "npc_dota_hero_troll_warlord",
    displayName: "Troll Warlord",
  },
  {
    id: 96,
    name: "npc_dota_hero_centaur",
    displayName: "Centaur Warrunner",
  },
  {
    id: 97,
    name: "npc_dota_hero_magnataur",
    displayName: "Magnus",
  },
  {
    id: 98,
    name: "npc_dota_hero_shredder",
    displayName: "Timbersaw",
  },
  {
    id: 99,
    name: "npc_dota_hero_bristleback",
    displayName: "Bristleback",
  },
  {
    id: 100,
    name: "npc_dota_hero_tusk",
    displayName: "Tusk",
  },
  {
    id: 101,
    name: "npc_dota_hero_skywrath_mage",
    displayName: "Skywrath Mage",
  },
  {
    id: 102,
    name: "npc_dota_hero_abaddon",
    displayName: "Abaddon",
  },
  {
    id: 103,
    name: "npc_dota_hero_elder_titan",
    displayName: "Elder Titan",
  },
  {
    id: 104,
    name: "npc_dota_hero_legion_commander",
    displayName: "Legion Commander",
  },
  {
    id: 105,
    name: "npc_dota_hero_techies",
    displayName: "Techies",
  },
  {
    id: 106,
    name: "npc_dota_hero_ember_spirit",
    displayName: "Ember Spirit",
  },
  {
    id: 107,
    name: "npc_dota_hero_earth_spirit",
    displayName: "Earth Spirit",
  },
  {
    id: 108,
    name: "npc_dota_hero_abyssal_underlord",
    displayName: "Underlord",
  },
  {
    id: 109,
    name: "npc_dota_hero_terrorblade",
    displayName: "Terrorblade",
  },
  {
    id: 110,
    name: "npc_dota_hero_phoenix",
    displayName: "Phoenix",
  },
  {
    id: 111,
    name: "npc_dota_hero_oracle",
    displayName: "Oracle",
  },
  {
    id: 112,
    name: "npc_dota_hero_winter_wyvern",
    displayName: "Winter Wyvern",
  },
  {
    id: 113,
    name: "npc_dota_hero_arc_warden",
    displayName: "Arc Warden",
  },
  {
    id: 114,
    name: "npc_dota_hero_monkey_king",
    displayName: "Monkey King",
  },
  {
    id: 119,
    name: "npc_dota_hero_dark_willow",
    displayName: "Dark Willow",
  },
  {
    id: 120,
    name: "npc_dota_hero_pangolier",
    displayName: "Pangolier",
  },
  {
    id: 121,
    name: "npc_dota_hero_grimstroke",
    displayName: "Grimstroke",
  },
  {
    id: 123,
    name: "npc_dota_hero_hoodwink",
    displayName: "Hoodwink",
  },
  {
    id: 126,
    name: "npc_dota_hero_void_spirit",
    displayName: "Void Spirit",
  },
  {
    id: 128,
    name: "npc_dota_hero_snapfire",
    displayName: "Snapfire",
  },
  {
    id: 129,
    name: "npc_dota_hero_mars",
    displayName: "Mars",
  },
  {
    id: 131,
    name: "npc_dota_hero_ringmaster",
    displayName: "Ringmaster",
  },
  {
    id: 135,
    name: "npc_dota_hero_dawnbreaker",
    displayName: "Dawnbreaker",
  },
  {
    id: 136,
    name: "npc_dota_hero_marci",
    displayName: "Marci",
  },
  {
    id: 137,
    name: "npc_dota_hero_primal_beast",
    displayName: "Primal Beast",
  },
  {
    id: 138,
    name: "npc_dota_hero_muerta",
    displayName: "Muerta",
  },
  {
    id: 145,
    name: "npc_dota_hero_kez",
    displayName: "Kez",
  },
];
export default heroes;
