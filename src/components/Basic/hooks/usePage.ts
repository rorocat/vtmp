import { ref, unref, onUnmounted, watch } from 'vue';
import { ConfirmOptions } from '@/components/Basic/types/confirm';
import { MessageOptions } from '@/components/Basic/types/message';
import { NoticeOptions } from '@/components/Basic/types/notice';
import { PageActionType, PageProps } from "@/components/Basic/types/page";

export function usePage(props: PageProps)
:[(instance: PageActionType)=> void, PageActionType ] {
  const pageRef = ref<Nullable<PageActionType>>(null);
  const register = (instance: PageActionType)=> {
    onUnmounted(()=> {
      pageRef.value = null;
    });
    if(!!pageRef.value) return;
    pageRef.value = instance;

    watch(
      ()=> props,
      (value: PageProps)=> {
        value && instance.setProps(value);
      },
      {
        deep: true,
        immediate: true
      }
    );
  }

  const getPageStance = ()=> {
    const page = unref(pageRef);    
    if (!page) {
      throw new Error("尚未获取BasicPage组件实例，请确保在执行操作时显示该组件");
    }
    return page as PageActionType;
  }

  const action: PageActionType = {
    createConfirm(options: ConfirmOptions) {
      return getPageStance().createConfirm(options)
    },
    createNotice(options: NoticeOptions) {
      return getPageStance().createNotice(options)
    },
    closeNotice() {
      return getPageStance().closeNotice()
    },
    createMessage(options: MessageOptions) {
      return getPageStance().createMessage(options)
    },
    closeMessage() {
      return getPageStance().closeMessage()
    },
    setProps(props: PageProps) {
      return getPageStance().setProps(props);
    }
  }

  return [register, action]
}