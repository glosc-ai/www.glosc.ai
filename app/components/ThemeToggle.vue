<script setup lang="ts">
import { computed } from "vue";
import { Moon, Sun } from "lucide-vue-next";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/composables/useTheme";

const { isDark, toggleTheme } = useTheme();

const label = computed(() => (isDark.value ? "切换到浅色" : "切换到暗色"));
</script>

<template>
    <Button
        variant="ghost"
        size="icon"
        type="button"
        :aria-label="label"
        :title="label"
        @click="toggleTheme"
    >
        <Moon v-if="isDark" />
        <Sun v-else />
    </Button>
</template>
