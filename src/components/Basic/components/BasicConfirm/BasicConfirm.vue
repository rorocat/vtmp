<template>
  <div class="basic-confirm">
    <tm-modal
      v-bind="configOptions"
      v-model:show="show"
      @ok="configOptions.onConfirm"
      @close="configOptions.onClose"
      @cancel="configOptions.onCancel">
      <slot></slot>
    </tm-modal>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { ConfirmOptions } from "../../types/confirm";
  
  const show = ref(false);

  // confirm 默认配置
  const configOptions = ref<ConfirmOptions>({
    okText: '确定',
    okColor: 'primary',
    title: '',
    content: '',
    round: 6,
    border: 0,
    hideCancel: false,
    onConfirm: ()=> {},
    onCancel: ()=> {},
    onClose: ()=> {},
  });

  const showConfirm = (options: ConfirmOptions)=> {
    configOptions.value = {
      ...configOptions.value,
      ...options,
    }
    show.value = true;
  }

  defineExpose({
    showConfirm
  })

</script>