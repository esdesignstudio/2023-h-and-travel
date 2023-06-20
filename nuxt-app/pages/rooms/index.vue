<template>
    <div class="page-rooms">
        <div class="container">
            <div class="page-rooms__wrap">
               <div class="page-rooms__wrap-title">
                    <h1>房型一覽</h1>
                    <span>ROOMS</span>
               </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        template: {
            type: Object,
            default: {},
        },
    })

    const pageloaded = usePageLoaded()
    // if (pageData.value) {
        pageloaded.value = true
    // } else {
    //     navigateTo('/404')
    // }
</script>
<style lang="scss">
    $class-name: page-rooms;
    .#{$class-name} {
        &__wrap {
            padding: 5rem 0;

            &-title {

                text-align: center;

                h1 {
                    @include typo('heading', 64);

                    padding: 0 0 1rem;
                }

                span {
                    @include typo('display', 140);
                }
            }
        }
    }
</style>