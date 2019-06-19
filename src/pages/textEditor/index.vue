<template>
    <div class="textEditor">
      <h2>富文本编辑器</h2>
      <quill-editor v-model="content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)"
                    @change="onEditorChange">
      </quill-editor>
      <el-button @click="printContent" class="print">打印</el-button>
    </div>
</template>
<script>
  import { quillEditor } from 'vue-quill-editor'
    export default {
        name: '',
        data() {
            return {
              content:'<div>one</div>' +
              '<div>two</div>',

              editorOption:{}
            }
        },
      components: {
          quillEditor
      },
      methods: {
        onEditorBlur(quill) {
        // console.log('editor blur!', quill)       
        },       
        onEditorFocus(quill) {
          // console.log('editor focus!', quill)       
        },       
        onEditorReady(quill) {
          // console.log('editor ready!', quill)       
        },       
        onEditorChange({ quill, html, text }) {
          // console.log('editor change!', quill, html, text)           
          this.content = html
        },
        printContent(){
          // let wpt = document.getElementById('table-content');
          let wpt = document.getElementsByClassName('ql-editor')
          let newContent = wpt[0].innerHTML;
          let oldContent = document.body.innerHTML;

          document.body.innerHTML = newContent;
          window.print(); //打印方法
          window.location.reload()
          document.body.innerHTML = oldContent;
          return false;
        }

      },   
      computed: {
        editor() {
          return this.$refs.myQuillEditor.quill       
        }
      },
    }
</script>
<style>
  .textEditor h2{
    text-align: center;
    margin: 20px auto;
  }
  .print{
    background-color: #2889d8;
    color: white;
    margin-left: 20px;
  }
</style>
