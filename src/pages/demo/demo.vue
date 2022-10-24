<template>
  <BasicPage
    @register="register">
    {{ pageQuery }}
  </BasicPage>
</template>
<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { usePage } from "/@/components/Basic/hooks/usePage";
import { usePageRouter } from "/@/router";

const [register] = usePage({
})
const { pageQuery } = usePageRouter();
console.log("🚀 ~ file: demo.vue ~ line 15 ~ pageQuery", pageQuery.value)

</script>