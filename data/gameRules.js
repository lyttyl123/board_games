const gameRules = {
  poker: {
    name: "斗地主",
    description: "一款经典的斗地主",
    players: "3人",
    duration: "60-120分钟",
    age: "10+",
    tokens: [
      {
        name: "木材",
        description: "用于建造道路和定居点",
        icon: "🌲"
      },
      {
        name: "砖块",
        description: "用于建造道路和定居点",
        icon: "🧱"
      },
      {
        name: "羊毛",
        description: "用于建造定居点和城市",
        icon: "🐑"
      },
      {
        name: "粮食",
        description: "用于建造定居点和城市",
        icon: "🌾"
      },
      {
        name: "矿石",
        description: "用于建造城市和购买发展卡",
        icon: "⛰️"
      }
    ],
    rules: {
      setup: "1. 放置初始定居点和道路\n2. 放置初始资源",
      turns: "1. 掷骰子获取资源\n2. 交易资源\n3. 建造建筑\n4. 购买发展卡",
      victory: "第一个获得10个胜利点的玩家获胜",
      tips: "合理规划道路和定居点的位置，注意资源的平衡"
    },
    details: {
      background: "玩家作为卡坦岛上的殖民者，通过收集木材、砖块、羊毛、小麦、矿石五种资源，建立村庄、城市和道路网络，在随机生成的地形版图上展开策略竞争。首个获得10分的玩家将成为岛屿霸主",
      features: {
        dynamicBoard: "每局游戏通过六边形地形板块随机拼接生成岛屿，沙漠作为强盗初始位置，数字标记按概率分布决定资源产出频率",
        strategies: {
          resourceMonopoly: "优先占领高频数字（6/8）或同资源密集区形成垄断优势，配合港口兑换强化资源转换效率",
          playStyles: [
            "修路流：专注建设最长道路（5+连续道路）获取2分奖励",
            "种田流：通过城市升级和资源港口建立经济优势",
            "发展卡流：利用士兵卡控制强盗，垄断卡掠夺资源，胜利点卡隐藏得分"
          ]
        }
      }
    }
  },
  catan: {
    name: "卡坦岛",
    description: "一款经典的资源收集和建设游戏",
    players: "2-4人",
    duration: "60-120分钟",
    age: "10+",
    tokens: [
      {
        name: "木材",
        description: "用于建造道路和定居点",
        icon: "🌲"
      },
      {
        name: "砖块",
        description: "用于建造道路和定居点",
        icon: "🧱"
      },
      {
        name: "羊毛",
        description: "用于建造定居点和城市",
        icon: "🐑"
      },
      {
        name: "粮食",
        description: "用于建造定居点和城市",
        icon: "🌾"
      },
      {
        name: "矿石",
        description: "用于建造城市和购买发展卡",
        icon: "⛰️"
      }
    ],
    rules: {
      setup: "1. 放置初始定居点和道路\n2. 放置初始资源",
      turns: "1. 掷骰子获取资源\n2. 交易资源\n3. 建造建筑\n4. 购买发展卡",
      victory: "第一个获得10个胜利点的玩家获胜",
      tips: "合理规划道路和定居点的位置，注意资源的平衡"
    },
    details: {
      background: "玩家作为卡坦岛上的殖民者，通过收集木材、砖块、羊毛、小麦、矿石五种资源，建立村庄、城市和道路网络，在随机生成的地形版图上展开策略竞争。首个获得10分的玩家将成为岛屿霸主",
      features: {
        dynamicBoard: "每局游戏通过六边形地形板块随机拼接生成岛屿，沙漠作为强盗初始位置，数字标记按概率分布决定资源产出频率",
        strategies: {
          resourceMonopoly: "优先占领高频数字（6/8）或同资源密集区形成垄断优势，配合港口兑换强化资源转换效率",
          playStyles: [
            "修路流：专注建设最长道路（5+连续道路）获取2分奖励",
            "种田流：通过城市升级和资源港口建立经济优势",
            "发展卡流：利用士兵卡控制强盗，垄断卡掠夺资源，胜利点卡隐藏得分"
          ]
        }
      }
    }
  },
  birmingham: {
    name: "伯明翰",
    description: "一款工业革命主题的经济策略游戏",
    players: "2-4人",
    duration: "120-180分钟",
    age: "14+",
    tokens: [
      {
        name: "煤炭",
        description: "用于建造工厂和发电",
        icon: "⚫"
      },
      {
        name: "铁",
        description: "用于建造工厂和铁路",
        icon: "⚙️"
      },
      {
        name: "啤酒",
        description: "用于建造工厂和贸易",
        icon: "🍺"
      },
      {
        name: "陶瓷",
        description: "用于建造工厂和出口",
        icon: "🏺"
      }
    ],
    rules: {
      setup: "1. 放置初始工厂\n2. 分配起始资源",
      turns: "1. 建造工厂\n2. 生产商品\n3. 贸易和出口\n4. 发展铁路网络",
      victory: "游戏结束时，拥有最多胜利点的玩家获胜",
      tips: "注意市场供需关系，合理规划铁路网络"
    },
    details: {
      background: "以18-19世纪英国工业革命为背景，玩家通过运河与铁路建设、产业链布局争夺经济霸权",
      features: {
        dualEra: [
          "运河时代：重点布局基础工业设施，建立煤铁供应链",
          "铁路时代：拆除运河升级铁路网络，引入股票市场机制"
        ],
        economicCycle: "煤矿→炼铁厂→工厂→货物运输→销售变现的完整产业链，需平衡短期收益与长期投资",
        strategies: [
          "网络效应：运输网络覆盖城市越多，批量计分收益越高",
          "风险控制：贷款获取资金需权衡终局扣分代价，股票投资需预测行业发展趋势"
        ],
        expansions: [
          "日本地图扩展：引入地震等地域性事件，调整资源分布规则",
          "新工业模块：增加化工厂、纺织厂等新型设施，丰富产业链组合"
        ]
      }
    }
  }
}

module.exports = gameRules 