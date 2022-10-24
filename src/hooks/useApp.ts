import { computed } from "vue";
import { isUnDef } from "/@/utils/is";
import { useTmpiniaStore } from "/@/tmui/tool/lib/tmpinia";

export const useApp = ()=> {
  const store = useTmpiniaStore();
  // app dark mode
  const appDark = computed<boolean>(()=> store.tmStore.dark);
  // app theme
  const appTheme = computed(()=> store.tmStore.color);

  function setAppDark(dark?: boolean) {
    if(isUnDef(dark)) {
      dark = !appDark.value;
    }
		store.setTmVuetifyDark(!!dark)
  }

  function setAppTheme(color: string) {
    store.setTmVuetifyTheme(color)
  }

  return {
    setAppDark,
    appDark,
    appTheme,
    setAppTheme,
  }
}