<template>
    <div class="flexible-ig-show container" :style="{ backgroundImage: 'url(' + data?.bg_img?.url + ')' }">
        <div class="flexible-ig-show__bg"></div>
        <div class="flexible-ig-show__wrapper">
            <div class="flexible-ig-show__wrapper-title">
                <p
                    v-text="data?.title"
                    v-inview
                    v-fade
                ></p>
                <ElementsDecoTitle :data="data?.deco_title"/>
            </div>
            <div class="flexible-ig-show__wrapper-ig">
                <div
                    class="flexible-ig-show__wrapper-ig-wrapper"
                    v-for="(card, key) in data?.ig_cards"
                    :key="key"
                    v-inview
                    v-fade
                >
                    <ElementsIgCard :data="card" />
                </div>
            </div>
        </div>
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
    $class-name: flexible-ig-show;
    .#{$class-name} {
        @include size(100%, auto);

        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20rem;
        padding-bottom: 12rem;
        color: map-get($colors, white);
        background-attachment: fixed;

        &__bg {
            @include size(100%);

            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            &::after {
                @include size(100%);

                content: '';
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(#484036, .4);
            }
        }

        &__wrapper {
            @include set-col(10, 12, 0);

            display: flex;
            flex-direction: column;
            z-index: 1;

            &-title {
                display: flex;
                flex-direction: column;
                margin-bottom: 10.8rem;

                > p {
                    @include typo('heading', 32);

                    margin-bottom: 2rem;
                }
            }

            &-ig {
                @include size(100%, auto);

                display: flex;
                flex-wrap: wrap;

                &-wrapper {
                    @include set-col(3, 10, 1);

                    margin-bottom: 4.8rem;

                    &:nth-child(3n + 1) {
                        padding-top: 11.8rem;
                    }

                    &:nth-child(3n + 2) {
                        padding-top: 26.4rem;
                    }

                    &:not(:nth-child(3)) {
                        margin-right: 4.5rem;
                    }

                }
            }
        }
    }
</style>