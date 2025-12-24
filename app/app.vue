<template>
    <NuxtLayout>
        <NuxtPage v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </NuxtPage>
    </NuxtLayout>
</template>
