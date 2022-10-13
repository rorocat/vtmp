<template>
  <div class="basic-message">
    <tm-message 
      ref="instanceRef"
      v-bind="configOptions" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { MessageOptions } from '../../types/message';

const instanceRef = ref();

const configOptions = ref<MessageOptions>({
  width: 300,
  height: 300,
})

function show(options: MessageOptions) {
  configOptions.value = {
    width: options.width || configOptions.value.width,
    height: options.height || configOptions.value.height,
  }
  instanceRef.value?.show(options);
}

function hide() {
  instanceRef.value.hide();
}

defineExpose({
  show,
  hide
})

</script>