# Express-curd

## 路由设计

| 请求方法 |     请求路径     | get参数 |           post 参数            |       备注       |
| :------: | :--------------: | :-----: | :----------------------------: | :--------------: |
|   GET    |    /students     |         |                                |     渲染页面     |
|   GET    |  /students/new   |         |                                | 渲染添加学生页面 |
|   POST   |  /students/new   |         |   name、age、gender、hobbies   | 处理添加学生请求 |
|   GET    |  /students/edit  |         |                                |   渲染编辑页面   |
|   POST   |  /students/edit  |   id    | id、name、age、gender、hobbies |   处理编辑请求   |
|   GET    | /students/delete |   id    |                                |   处理删除请求   |
