<template>
    <div>
      <div>参考文章：<a href="https://www.jianshu.com/p/a0fb5b1e63b3" target="_blank">02vue+axios+form实现文件下载（附Java实现代码）</a></div>
      <div class="btn-div">
        <input type="button" value="下载" @click="handlerClick">
      </div>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
              files: []
            }
        },
      methods: {
        handlerClick: function () {
          //自定义form标签，初始化相关参数
          var form = document.createElement("form");
          var access_token = "1756467474";
          form.setAttribute("style",
            "display:none");
          form.setAttribute("method", "get");
          var params = {};
          params.Authorization = access_token;
          form.setAttribute("header",
            params);
          var path = 'E:\\';
          var input = document.createElement('input');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', 'path');
          input.setAttribute('value', path);
          form.append(input);
          form.setAttribute("action",
            "http://127.0.0.1:8080/download"
          );
          form.setAttribute("target", "_blank");
          var body = document.createElement("body");
          body.setAttribute("style", "display:none");
          document.body.appendChild(form);
          form.submit();
          form.remove();
        }
      }
    }
</script>
<style>
  .btn-div{
    text-align: center;
  }
  .btn-div input{
    width: 200px;
    height: 40px;
    background-color: aqua;
    color: white;
    font-size: 25px;
    text-align: center;
  }
</style>
