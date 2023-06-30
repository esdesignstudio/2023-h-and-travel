<template>
    <div id="wrapper" class="wrapper">
        <NuxtLoadingIndicator />
        <Header />
        <main id="mainBox">
            <NuxtPage />
        </main>
        <!-- <PageDev/> -->
    </div>
</template>

<script setup>
    onMounted(() => {
        document.getElementById('mainBox').style.paddingTop = document.getElementById('header').offsetHeight + 'px'
    })
</script>
<style lang="scss">
body {
    #wrapper {
        .nuxt-loading-indicator {
            top: initial !important;
            bottom: 0;
            background: repeating-linear-gradient(to right, rgb(84 74 64) 0%, rgb(155 129 90) 50%, rgb(84 74 64) 100%) !important;
        }
    }
}
</style>