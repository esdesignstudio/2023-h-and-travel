<template>
    <div
        class="flexible-full-bg"
        v-inview
    >
        <div class="flexible-full-bg__bg" :style="{backgroundImage: 'url(' + data?.image?.url + ')',}"></div>
        <div class="flexible-full-bg__title">
            <ElementsDecoTitle
                v-if="data?.deco_title"
                :data="data?.deco_title"
                :large="true"
            />
        </div>
        <h3 v-if="data?.title" v-text="data?.title"></h3>
        <p v-if="data?.des" v-text="data?.des"></p>
        <nuxt-link
            v-if="data?.link"
            :to="data?.link?.url"
            :target="data?.link?.target"
        >
            {{ data.link.title }}
        </nuxt-link>
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
    $class-name: flexible-full-bg;
    .#{$class-name} {
        @include size(100%, auto);

        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 19rem 0 16.8rem;
        color: map-get($colors, white);

        @include media-breakpoint-down(medium) {
            padding: 20.8rem map-get($container-padding, mobile) 16.8rem;
        }

        &.is-inview {
            .#{$class-name}__bg {
                opacity: 1;
            }
        }

        &__bg {
            @include size(100vw, 100vh);

            position: fixed;
            z-index: 0;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            background-size: cover;
            background-position: center;
            opacity: 0;

            &.-show {
                opacity: 1;
            }

            &::after {
                @include size(100%);

                content: '';
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(#484036, .4);
            }
        }

        &::after {
            @include size(100%);

            content: '';
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(#484036, .4);
        }

        &__title {
            display: flex;
            margin-bottom: 3.2rem;
            z-index: 1;
        }

        > h3 {
            @include typo('heading', 32);

            margin-bottom: 3.2rem;
            z-index: 1;
            text-align: center;
            white-space: pre-line;

            @include media-breakpoint-down(medium) {
                @include typo('body', 20);
            }
        }

        > p {
            @include typo('body', 20);

            white-space: pre-line;
            z-index: 1;
            text-align: center;
            margin-bottom: 3.2rem;

            @include media-breakpoint-down(medium) {
                @include typo('body', 16);
            }
        }

        > a {
            @include typo('heading', 32);

            padding: 0.8rem 3.2rem;
            border: 1px solid map-get($colors, white);
            border-radius: 5rem;
            z-index: 1;
            transition: background-color .3s ease-in-out, color .3s ease-in-out;

            @include media-breakpoint-up(medium) {
                &:hover {
                    background-color: map-get($colors, white);
                    color: map-get($colors, brand-3);
                }
            }

            @include media-breakpoint-down(medium) {
                @include typo('body', 16);
            }
        }
    }
</style>