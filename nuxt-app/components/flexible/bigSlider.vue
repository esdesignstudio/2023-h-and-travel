<template>
    <div class="flexible-big-slider">
        <div class="flexible-big-slider__title">
            <h2
                v-text="data?.title"
                v-inview
                v-fade
            ></h2>
            <ElementsDecoTitle :data="data?.deco_title"/>
        </div>
        <ElementsCarousel
            :data="data.sliders"
            v-inview
            v-fade
        />
    </div>
</template>
<script setup>
    const props = defineProps({
        data: {
            type: Object,
            default: {},
        },
    })
</script>
<style lang="scss">
    $class-name: flexible-big-slider;
    .#{$class-name} {
        @include size(100%, auto);

        padding-top: 16rem;
        padding-bottom: 24rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        @include media-breakpoint-down(medium) {
            padding-top: 4rem;
            padding-bottom: 8rem;
        }

        &__title {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 8.6rem;

            @include media-breakpoint-down(medium) {
                margin-bottom: 4rem;
                
                h1 {
                    @include typo('heading', 48);
                }
            }

            > h2 {
                @include typo('heading', 32);

                margin-bottom: 2rem;

                @include media-breakpoint-down(medium) {
                    @include typo('body', 20);

                    margin-bottom: 1.2rem;
                }
            }
        }
    }
</style>