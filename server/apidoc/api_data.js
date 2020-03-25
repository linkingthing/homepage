define({ "api": [
  {
    "type": "delete",
    "url": "/banner/:id",
    "title": "删除banner",
    "name": "DeleteBanner",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>banner ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/bannerController.js",
    "groupTitle": "Banner"
  },
  {
    "type": "get",
    "url": "/banner/list",
    "title": "请求banner列表",
    "name": "GetBannerList",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>banner位置信息.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>banner状态.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>跳转链接.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片地址.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>banner位置.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>banner状态.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/bannerController.js",
    "groupTitle": "Banner"
  },
  {
    "type": "Post",
    "url": "/banner",
    "title": "创建Banner",
    "name": "PostBanner",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>跳转链接.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片地址.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>banner位置.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>banner状态.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>跳转链接.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片地址.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>banner位置.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>banner状态.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/bannerController.js",
    "groupTitle": "Banner"
  },
  {
    "type": "put",
    "url": "/banner/:id",
    "title": "更新banner信息",
    "name": "PutBannerInfo",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>banner ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>跳转链接.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片地址.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>banner位置.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>banner状态.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>跳转链接.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片地址.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>banner位置.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>banner状态.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/bannerController.js",
    "groupTitle": "Banner"
  },
  {
    "type": "post",
    "url": "/common/upload",
    "title": "上传文件",
    "name": "UploadFile",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>文件名.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mimetype",
            "description": "<p>文件类型.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>原文件名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullpath",
            "description": "<p>文件路径.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/commonController.js",
    "groupTitle": "Common"
  },
  {
    "type": "Get",
    "url": "/common/:fullpath",
    "title": "下载文件",
    "name": "downloadFile",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullpath",
            "description": "<p>文件路径.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "File",
            "description": "<p>文件.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/commonController.js",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/company/info",
    "title": "请求公司信息",
    "name": "GetCompanyInfo",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>公司电话号码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>传真.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "qcode",
            "description": "<p>qcode（微信）.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>关于公司.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/companyController.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/company/info",
    "title": "创建公司信息",
    "name": "PostCompanyInfo",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>公司电话号码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>传真.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qcode",
            "description": "<p>qcode（微信）.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>关于公司.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>公司电话号码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>传真.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "qcode",
            "description": "<p>qcode（微信）.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>关于公司.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/companyController.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/company/info/:id",
    "title": "更新公司信息",
    "name": "PutCompanyInfo",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>公司 ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>公司电话号码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>传真.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qcode",
            "description": "<p>qcode（微信）.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>关于公司.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>公司电话号码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fax",
            "description": "<p>传真.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>公司地址.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "qcode",
            "description": "<p>qcode（微信）.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>关于公司.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/companyController.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/customer",
    "title": "请求客户列表",
    "name": "GetCustomer",
    "group": "Customer",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cname",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>城市.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "industry",
            "description": "<p>行业.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>职位.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product",
            "description": "<p>产品/解决方案.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "budget",
            "description": "<p>预算.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>描述.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/customerController.js",
    "groupTitle": "Customer"
  },
  {
    "type": "Post",
    "url": "/customer",
    "title": "创建客户/咨询/技术申请",
    "name": "PostCustomer",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cname",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>城市.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "industry",
            "description": "<p>行业.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>职位.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product",
            "description": "<p>产品/解决方案.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "budget",
            "description": "<p>预算.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>描述.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cname",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>城市.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "industry",
            "description": "<p>行业.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>职位.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product",
            "description": "<p>产品/解决方案.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "budget",
            "description": "<p>预算.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>描述.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/customerController.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/guestbook",
    "title": "请求留言列表",
    "name": "GetGuestbook",
    "group": "Guestbook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "current",
            "description": "<p>当前页，默认1.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页大小，默认10.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cname",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>内容.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/guestbookController.js",
    "groupTitle": "Guestbook"
  },
  {
    "type": "Post",
    "url": "/guestbook",
    "title": "创建留言簿",
    "name": "PostGuestbook",
    "group": "Guestbook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cname",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>内容.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cname",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>内容.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/guestbookController.js",
    "groupTitle": "Guestbook"
  },
  {
    "type": "delete",
    "url": "/news/:id",
    "title": "删除文章",
    "name": "DeleteNews",
    "group": "News",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文章 ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/newsController.js",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/news",
    "title": "请求新闻列表",
    "name": "GetNewsList",
    "group": "News",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "current",
            "description": "<p>当前页，默认1.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页大小，默认10.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>文章类型.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mainPicture",
            "description": "<p>主图.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>日期.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/newsController.js",
    "groupTitle": "News"
  },
  {
    "type": "Post",
    "url": "/news",
    "title": "创建新闻",
    "name": "PostNews",
    "group": "News",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mainPicture",
            "description": "<p>主图.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>日期.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mainPicture",
            "description": "<p>主图.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>日期.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/newsController.js",
    "groupTitle": "News"
  },
  {
    "type": "put",
    "url": "/news/:id",
    "title": "更新news信息",
    "name": "PutNewsInfo",
    "group": "News",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>news ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mainPicture",
            "description": "<p>主图.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>日期.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mainPicture",
            "description": "<p>主图.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>日期.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/newsController.js",
    "groupTitle": "News"
  }
] });
