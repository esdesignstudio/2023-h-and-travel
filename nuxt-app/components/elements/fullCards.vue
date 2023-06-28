<template>
    <div class="elements-full-cards">
        <figure class="elements-full-cards__bg">
            <img
                :src="data?.image?.url"
                :alt="data?.image?.alt"
            />
        </figure>
        <div class="elements-full-cards__wrapper container">
            <div class="elements-full-cards__wrapper-title">
                <div class="elements-full-cards__wrapper-title-deco">
                    <ElementsDecoTitle :data="data?.deco_title"/>
                </div>
                <h3 v-text="data?.title"></h3>
            </div>
            <div
                class="elements-full-cards__wrapper-description"
                v-html="data?.des"
            ></div>
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
    $class-name: elements-full-cards;
    .#{$class-name} {
        @include size(100vw, calc(100vh - map-get($header-height, desktop)));

        position: relative;
        color: map-get($colors, white);

        &__bg {
            @include size(100%);

            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            background-color: map-get($colors, brand-1);

            &::after {
                @include size(100%);
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(#484036, .4);
            }

            > img {
                @include size(100%);

                position: absolute;
                object-fit: cover;
            }
        }

        &__wrapper {
            @include size(100%);
            
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 10rem;
            padding-bottom: 20rem;

            &-title {
                @include set-col-offset(1, 12, 1);

                display: flex;
                flex-direction: column;

                &-deco {
                    margin-bottom: 2rem;
                }

                > h3 {
                    @include typo('heading', 32);
                }
            }

            &-description {
                @include set-col(4, 12, 0);
                @include set-col-offset(7, 12, 1);
                @include typo('body', 16);

                white-space: pre-line;
            }
        }
    }
</style>