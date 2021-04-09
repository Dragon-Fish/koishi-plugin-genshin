module.exports = {
  // command descriptions
  cmd_genshin_desc: '《原神 Genshin Impact》功能',
  cmd_profile: '查询玩家基本信息（宝箱、成就、声望）',
  cmd_abyss_desc: '查询原神深境螺旋数据。',
  cmd_character_desc: '查询指定名称的角色的等级与装备信息。',
  cmd_specify_uid: '查询指定 uid 的信息',
  // genshin
  info_regestered: '您的《原神》uid已注册为：{0}',
  invalid_cn_uid: '您输入的不是合法的《原神》国服uid~',
  not_registered:
    '您还没有注册您的《原神》用户信息，请艾特我输入“genshin 游戏内uid”进行注册~（注意打空格）',
  successfully_registered: '您的《原神》信息注册成功~',
  // abyss
  abyss_cur_not_active: '玩家 {0} 还没有开启本期深境螺旋。',
  abyss_cur_is_active: '玩家 {0} 的本期深境螺旋数据：',
  abyss_prev_not_active: '玩家 {0} 没有参与上一期深境螺旋。',
  abyss_prev_is_active: '玩家 {0} 的上一期深境螺旋数据：',
  abyss_basic_data:
    '〓基本信息〓\n到达层数：{{ max_floor }}\n战斗次数：{{ total_win_times }}次通关/{{ total_battle_times }}总尝试\n获得渊星：{{ total_star }}',
  abyss_top_stats:
    '〓最佳战绩〓\n最强一击：{{ damage_rank }}\n最高承伤：{{ take_damage_rank }}\n最常出场：{{ reveal_rank }}\n元素爆发：{{ energy_skill_rank }}',
  abyss_cur_time: '本期深境螺旋将于【{0}】结束，还剩 {1}。',
  abyss_prev_time: '上期深境螺旋从 {0} 开始，于 {1} 结束。',
  // characters
  has_character: '玩家 {0} 的 {1}：',
  no_character: '玩家 {0} 似乎没有名为 {1} 的角色。',
  character_basic:
    '{{ icon }}\n{{ name }} {{ rarity }}★ {{ constellation }}命\n等级：{{ level }}级，好感：{{ fetter }}级', // {{ icon }} -> 头像, {{ image }} -> 立绘
  character_weapon:
    '〓武器〓\n{{ name }} ({{ rarity }}★{{ type_name }})\n{{ level }}级 ({{ affix_level }}精炼)',
  character_reliquaries: '〓圣遗物〓\n{0}',
  has_x_star_characters: '玩家 {0} 一共拥有 {1} 个 {2}★ 角色。',
  no_x_star_character: '玩家 {0} 似乎没有 {1}★ 角色。',
  // error messages
  api_request_failed: '请求数据时出现问题（可能原因：米游社验证信息过期）',
  failed: '出现了亿点问题：{0}',
  fetch_data_failed:
    '出现了亿点问题……（可能原因：玩家uid注册错误或玩家未公开米游社资料。）',
  error_unknown: '未知问题',
  // 用于玩家信息截图
  profile: {
    ui: {
      title: '玩家 {0} 的原神信息',
      stats_title: '基本信息',
      avatar_title: '角色列表',
      city_explorations_title: '城市探索',
    },
    stats: {
      active_day_number: '活跃天数',
      achievement_number: '达成成就',
      win_rate: 'win_rate',
      anemoculus_number: '风神瞳',
      geoculus_number: '岩神瞳',
      avatar_number: '获得角色数',
      way_point_number: '解锁传送点',
      domain_number: '解锁秘境',
      spiral_abyss: '深境螺旋',
      precious_chest_number: '珍贵宝箱',
      luxurious_chest_number: '华丽宝箱',
      exquisite_chest_number: '精致宝箱',
      common_chest_number: '普通宝箱',
    },
  },
}
