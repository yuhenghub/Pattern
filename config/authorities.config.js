/**
 * 权限配置
 */
module.exports = [
  {
    name: 'allAuth',
    description: '所有权限',
    code: 100000
  },
  {
    name: 'features',
    description: '企业管理',
    authorities: [
      {
        name: 'read',
        description: '查看',
        code: 100100
      },
      {
        name: 'edit',
        description: '编辑',
        code: 100101
      }
    ]
  },
  {
    name: 'contents',
    description: '工艺装备情况',
    authorities: [
      {
        name: 'read',
        description: '查看',
        code: 100200
      },
      {
        name: 'edit',
        description: '编辑',
        code: 100201
      }
    ]
  },
  {
    name: 'pages',
    description: '配套环保设施台账',
    authorities: [
      {
        name: 'read',
        description: '查看',
        code: 100300
      },
      {
        name: 'edit',
        description: '编辑',
        code: 100301
      }
    ]
  },
  {
    name: 'media',
    description: '污染治理设施水平评估',
    authorities: [
      {
        name: 'read',
        description: '查看',
        code: 100400
      },
      {
        name: 'edit',
        description: '编辑',
        code: 100401
      }
    ]
  },
  {
    name: 'account',
    description: '污染物排放现状',
    authorities: [
      {
        name: 'read',
        description: '查看',
        code: 109000
      },
      {
        name: 'edit',
        description: '编辑',
        code: 109001
      }
    ]
  },
  {
    name: 'siteInfo',
    description: '网站配置',
    authorities: [
      {
        name: 'read',
        description: '查看',
        code: 110100
      },
      {
        name: 'edit',
        description: '编辑',
        code: 110101
      }
    ]
  },
  {
    name: 'categories',
    description: '分类管理',
    authorities: [
      {
        name: 'read',
        description: '查看',
        code: 110200
      },
      {
        name: 'edit',
        description: '编辑',
        code: 110201
      }
    ]
  },
  {
    name: 'contentModels',
    description: '内容模型',
    authorities: [
      {
        name: 'read',
        description: '查看',
        code: 110300
      },
      {
        name: 'edit',
        description: '编辑',
        code: 110301
      }
    ]
  },
  {
    name: 'featureModels',
    description: '企业模型',
    authorities: [
      {
        name: 'read',
        description: '查看',
        code: 110400
      },
      {
        name: 'edit',
        description: '编辑',
        code: 110401
      }
    ]
  },
  {
    name: 'roles',
    description: '权限管理',
    authorities: [
      {
        name: 'read',
        description: '查看',
        code: 110500
      },
      {
        name: 'edit',
        description: '编辑',
        code: 110501
      }
    ]
  },
  {
    name: 'adminUsers',
    description: '后台用户管理',
    authorities: [
      {
        name: 'read',
        description: '查看',
        code: 110600
      },
      {
        name: 'edit',
        description: '编辑',
        code: 110601
      }
    ]
  }
];