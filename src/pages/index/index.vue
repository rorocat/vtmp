<template>
  <BasicPage
    @register="register">
      <tm-button label="showConfirm" @click="showConfirm" />
      <tm-button label="showNotice" @click="showNotice" />
      <tm-button label="showMessage" @click="showMessage" />
      <tm-button :label="`切换主题${appTheme}`" @click="changeTheme" />
      <tm-button :label="`切换模式${appDark}`" @click="changeDark" />
      <tm-button label="跳转Demo页面" @click="go" />
  </BasicPage>
</template>

<script setup lang="ts">
  import { usePage } from "/@/components/Basic/hooks/usePage";
  import { usePageRouter } from "/@/router";
  import { useApp } from '/@/hooks/useApp';

  const [register, { 
    createConfirm, 
    createNotice, 
    createMessage, 
    closeMessage, 
    setProps 
  }] = usePage();

  const { setAppDark, appDark, setAppTheme, appTheme } = useApp();

  const { goPage, pageQuery } = usePageRouter();  

  function showConfirm() {
    createConfirm({
      title: '警告',
      content: '警告信息',
      onConfirm() {
        console.log(`点击了确定`);
      },
      onCancel() {
        console.log(`点击了取消`);
      }
    })
  }
  let msgIndex = 0;
  function showNotice() {
    const msgList = [
      '通知啊实打实的',
      '阿三打撒三个',
      '没见过i我么干嘛'
    ]
    createNotice({
      icon: 'none',
      label: msgList[(msgIndex++) % msgList.length],
      placement: 'topRight'
    })
  }
  function showMessage() {
    createMessage({
      model: 'success',
      text: '操作成功'
    });
    setTimeout(()=> {
      closeMessage();
    }, 2000)
  }
  let colorIndex = 1;
  function changeTheme() {
    const color = [
      'primary',
      'red',
      'pink',
      'indigo',
      'orange',
      'brown'
    ]
    setAppTheme(color[(colorIndex++) % color.length]);
  }
  let dark = false;
  function changeDark() {
    dark = !dark;
    setAppDark(dark);
  }
  function go() {
    goPage({
      url: '/pages/demo/demo',
      mode: 'navigateTo',
      query: {
        a: 1,
        b: [{
          name: 'LiMing',
          age: 18
        },
        {
          name: 'LiHua',
          age: 20
        }],
        c: {
          d: [1,2,3,4,5,6,7,8,9],
          e: 2
        }
      },
      params: {
        formData: {
          name: 'LiHua',
          age: 18
        }
      }
    });
  }
</script>