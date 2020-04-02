export const name = [
    { required: true, message: "请输入姓名" },
    { min: 2, max: 5, message: "长度在 2 到 5 个字符" }
]

export const email = [
    { required: true, message: "请输入邮箱地址" },
    {
        type: "email",
        message: "请输入正确的邮箱地址"
    }
]

export const phone = [
    { required: true, message: "请填写手机号码" },
    {
        pattern: /^1\d{10}$/,
        message: "目前只支持中国大陆的手机号码"
    }
]

export const company = [
    { required: true, message: "请填写公司名称" },
    { min: 2, max: 20, message: "长度在 2 到 20 个字符" }
]
export const city = [
    { required: true, message: "请填写城市" },
    { min: 2, max: 20, message: "长度在 2 到 20 个字符" }
]

export const industry = [
    { required: true, message: "请填写行业" },
    { min: 2, max: 20, message: "长度在 2 到 20 个字符" }
]

export const job = [
    { required: true, message: "请填写职位" },

]

export const product = [
    { required: true, message: "请填写产品/解决方案" },

]
export const budget = [
    { required: true, message: "请填写预算" },

]
export const describe = [
    { required: true, message: "请填写描述" },
]