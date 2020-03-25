define({ "api": [
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
  }
] });
