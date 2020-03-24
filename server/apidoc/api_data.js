define({ "api": [
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
