<template>
  <div class="basic-page">
    <tm-app 
      v-bind="pageProps">
      <!-- 基础内容 -->
      <slot></slot>
      <!-- confirm -->
      <BasicConfirm ref="confirmRef" />
      <!-- notice -->
      <BasicNotice ref="noticeRef" />
      <!-- message -->
      <BasicMessage ref="messageRef" />
    </tm-app>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { ConfirmExpose, ConfirmOptions } from "../../types/confirm";
import { MessageExpose, MessageOptions } from "../../types/message";
import { NoticeExpose, NoticeOptions } from "../../types/notice";
import { PageActionType, PageProps, TMAppAction } from "../../types/page";

/**
 * props
 */
interface Props {
  darkColor?: string,
  color?: string,
};
const props = withDefaults(defineProps<Props>(), {
  color: '#f6f6f6',
})

/**
 * emit
 */
const emit = defineEmits(['register']);

/**
 * ref or computed
 */
const confirmRef = ref<Nullable<ConfirmExpose>>(null);
const noticeRef = ref<Nullable<NoticeExpose>>(null);
const messageRef = ref<Nullable<MessageExpose>>(null);
const pageProps = ref(props);

/**
 * lifecycle hooks
 */
onMounted(()=> {
  emit('register', action);
})

/**
 * instance action methods
 */
const action: PageActionType = {
  createConfirm(options: ConfirmOptions) {
    if(!!confirmRef.value) {
      confirmRef.value.showConfirm(options);
    }
  },
  createNotice(options: NoticeOptions) {
    if(!!noticeRef.value) {
      noticeRef.value.show(options);
    }
  },
  closeNotice() {
    if(!!noticeRef.value) {
      noticeRef.value.hide();
    }
  },
  createMessage(options: MessageOptions) {
    if(!!messageRef.value) {
      messageRef.value.show(options);
    }
  },
  closeMessage() {
    if(!!messageRef.value) {
      messageRef.value.hide();
    }
  },
  setProps(props: PageProps) {
    console.log(props);
    
    pageProps.value = props;
    console.log(pageProps.value);
    
  }
}

/**
 * expose
 */
defineExpose(action)

</script>
<style lang="scss" scoped>

</style>