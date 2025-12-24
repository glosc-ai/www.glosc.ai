<script lang="ts" setup>
import SiteHeader from "@/components/SiteHeader.vue";
import { useTheme } from "@/composables/useTheme";

// 初始化主题，确保默认为暗色
const { isDark } = useTheme();
</script>

<template>
    <div class="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <slot />
    </div>
</template>

<style lang="less" scoped></style>
