<template>
  <BasicPage
    @register="register">
    {{ pageParams }}
  </BasicPage>
</template>
<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { onMounted } from "vue-demi";
import { usePage } from "/@/components/Basic/hooks/usePage";
import { usePageRouter } from "/@/router";

const [register] = usePage({
})
const { pageQuery, pageParams } = usePageRouter();
onMounted(()=> {
  console.log(pageParams);
  
})
</script>