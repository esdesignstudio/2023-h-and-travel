<template>
    <div id="wrapper" class="wrapper">
        <NuxtLoadingIndicator />
        <Header />
        <main id="mainBox">
            <NuxtPage />
        </main>
        <PageDev/>
    </div>
</template>

<script setup>
    onMounted(() => {
        document.getElementById('mainBox').style.paddingTop = document.getElementById('header').offsetHeight + 'px'
    })
</script>
<style lang="scss">
</style>