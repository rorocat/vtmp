<template>
  <div class="basic-notice">
    <tm-notification
      ref="instanceRef"
      v-bind="configOptions">
      <slot></slot>
    </tm-notification>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NoticeOptions } from '../../types/notice';

const instanceRef = ref();

const configOptions = ref<NoticeOptions>({
  duration: 2000,
  placement: 'topLeft',
  label: '',
  icon: ''
});

function show(options: NoticeOptions) {
  configOptions.value = {
    ...configOptions.value,
    ...options
  };
  instanceRef.value?.show()
}

function hide() {
  instanceRef.value?.hide();
}

defineExpose({
  show,
  hide
})

</script>