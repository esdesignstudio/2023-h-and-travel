<template>
    <div class="error-page">
        <div class="container">
            <div class="container-inner error-page__wrap">
                <div>
                    <h1>
                        404 - 沒有此頁面
                    </h1>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script setup>
    const pageloaded = usePageLoaded()
    
    onMounted(() => {
        nextTick(() => {
            pageloaded.value = true
        })
    })
</script>
<style lang="scss">
    $class-name: error-page;
    .#{$class-name} {
        .container-inner {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;

            h1 {
                font-size: 5rem;
            }
        }
    }
</style>