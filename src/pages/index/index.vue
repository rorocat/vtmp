<template>
  <BasicPage
    @register="register">
    <tm-button label="showConfirm" @click="showConfirm" />
    <tm-button label="showNotice" @click="showNotice" />
    <tm-button label="showMessage" @click="showMessage" />
    <tm-button label="切换主题" @click="changeTheme" />
    <tm-button label="切换模式" @click="changeDark" />
  </BasicPage>
</template>

<script setup lang="ts">
  import { usePage } from "/@/components/Basic/hooks/usePage";

  const [register, { createConfirm, createNotice, createMessage, setTheme, setDark }] = usePage();

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
  let msg = '通知信息'
  function showNotice() {
    msg += msg;
    createNotice({
      label: msg,
      placement: 'topRight'
    })
  }
  function showMessage() {
    createMessage({
      model: 'success',
      text: '操作成功'
    })
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
    setTheme(color[(colorIndex++) % color.length]);
  }
  let dark = true;
  function changeDark() {
    dark = !dark;
    setDark(dark);
  }
</script>