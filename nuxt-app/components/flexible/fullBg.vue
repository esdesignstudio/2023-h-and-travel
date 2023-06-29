<template>
    <div
        class="flexible-full-bg"
        :style="{
            backgroundImage: 'url(' + data?.image?.url + ')',
        }"
    >
        <div class="flexible-full-bg__title">
            <ElementsDecoTitle :data="data?.deco_title"/>
        </div>
        <h3 v-text="data?.title"></h3>
        <p v-text="data?.des"></p>
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
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        color: map-get($colors, white);

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
            margin: 3.2rem;
            z-index: 1;
        }

        > h3 {
            @include typo('heading', 32);

            margin-bottom: 3.2rem;
            z-index: 1;
            text-align: center;
            white-space: pre-line;
        }

        > p {
            @include typo('body', 20);

            white-space: pre-line;
            z-index: 1;
            text-align: center;
        }

        > a {
            @include typo('heading', 32);

            padding: 0.8rem 3.2rem;
            border: 1px solid map-get($colors, white);
            border-radius: 5rem;
            z-index: 1;
            margin-top: 3.2rem;
            transition: background-color .3s ease-in-out, color .3s ease-in-out;

            @include media-breakpoint-up(medium) {
                &:hover {
                    background-color: map-get($colors, white);
                    color: map-get($colors, brand-3);
                }
            }
        }
    }
</style>