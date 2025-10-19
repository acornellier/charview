export type WowClass =
  | 'Death Knight'
  | 'Demon Hunter'
  | 'Druid'
  | 'Evoker'
  | 'Hunter'
  | 'Mage'
  | 'Monk'
  | 'Paladin'
  | 'Priest'
  | 'Rogue'
  | 'Shaman'
  | 'Warlock'
  | 'Warrior'

export const classColors: Record<WowClass, string> = {
  'Death Knight': '#C41E3A',
  'Demon Hunter': '#A330C9',
  Druid: '#FF7C0A',
  Evoker: '#33937F',
  Hunter: '#AAD372',
  Mage: '#3FC7EB',
  Monk: '#00FF98',
  Paladin: '#F48CBA',
  Priest: '#FFFFFF',
  Rogue: '#FFF468',
  Shaman: '#0070DD',
  Warlock: '#8788EE',
  Warrior: '#C69B6D',
}

type SpecDetails = {
  icon: string
  isTank?: boolean
}

export type WowSpec = string

export const classSpecs: Record<WowClass, Record<WowSpec, SpecDetails>> = {
  'Death Knight': {
    Blood: {
      icon: 'spell_deathknight_bloodpresence',
      isTank: true,
    },
    Frost: {
      icon: 'spell_deathknight_frostpresence',
    },
    Unholy: {
      icon: 'spell_deathknight_unholypresence',
    },
  },
  'Demon Hunter': {
    Havoc: {
      icon: 'ability_demonhunter_specdps',
    },
    Vengeance: {
      icon: 'ability_demonhunter_spectank',
    },
  },
  Druid: {
    Balance: {
      icon: 'spell_nature_starfall',
    },
    Feral: {
      icon: 'ability_druid_catform',
    },
    Guardian: {
      icon: 'ability_racial_bearform',
      isTank: true,
    },
    Restoration: {
      icon: 'spell_nature_healingtouch',
    },
  },
  Evoker: {
    Augmentation: {
      icon: 'classicon_evoker_augmentation',
    },
    Devastation: {
      icon: 'classicon_evoker_devastation',
    },
    Preservation: {
      icon: 'classicon_evoker_preservation',
    },
  },
  Hunter: {
    'Beast Mastery': {
      icon: 'ability_hunter_bestialdiscipline',
    },
    Marksmanship: {
      icon: 'ability_hunter_focusedaim',
    },
    Survival: {
      icon: 'ability_hunter_camouflage',
    },
  },
  Mage: {
    Arcane: {
      icon: 'spell_holy_magicalsentry',
    },
    Fire: {
      icon: 'spell_fire_firebolt02',
    },
    Frost: {
      icon: 'spell_frost_frostbolt02',
    },
  },
  Monk: {
    Mistweaver: {
      icon: 'spell_monk_mistweaver_spec',
    },
    Windwalker: {
      icon: 'spell_monk_windwalker_spec',
    },
  },
  Paladin: {
    Holy: {
      icon: 'spell_holy_holybolt',
    },
    Protection: {
      icon: 'ability_paladin_shieldofthetemplar',
      isTank: true,
    },
    Retribution: {
      icon: 'spell_holy_auraoflight',
    },
  },
  Priest: {
    Discipline: {
      icon: 'spell_holy_powerwordshield',
    },
    Holy: {
      icon: 'spell_holy_guardianspirit',
    },
    Shadow: {
      icon: 'spell_shadow_shadowwordpain',
    },
  },
  Rogue: {
    Assassination: {
      icon: 'ability_rogue_eviscerate',
    },
    Outlaw: {
      icon: 'ability_rogue_waylay',
    },
    Subtlety: {
      icon: 'ability_stealth',
    },
  },
  Shaman: {
    Enhancement: {
      icon: 'spell_shaman_improvedstormstrike',
    },
    Elemental: {
      icon: 'spell_nature_lightning',
    },
    Restoration: {
      icon: 'spell_nature_magicimmunity',
    },
  },
  Warlock: {
    Affliction: {
      icon: 'spell_shadow_deathcoil',
    },
    Demonology: {
      icon: 'spell_shadow_metamorphosis',
    },
    Destruction: {
      icon: 'spell_shadow_rainoffire',
    },
  },
  Warrior: {
    Arms: {
      icon: 'ability_warrior_savageblow',
    },
    Fury: {
      icon: 'ability_warrior_innerrage',
    },
    Protection: {
      icon: 'ability_warrior_defensivestance',
      isTank: true,
    },
  },
} as const
