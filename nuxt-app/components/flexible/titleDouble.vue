<template>
    <div class="flexible-title-double container">
        <div class="flexible-title-double__wrapper">
            <div class="flexible-title-double__top">
                <div class="flexible-title-double__top-title">
                    <h3 v-text="data?.title"></h3>
                    <ElementsDecoTitle
                        :data="data?.deco_title"
                        :large="true"
                    />
                </div>
                <div class="flexible-title-double__top-img">
                    <figure>
                        <img
                            :src="data?.two_images[0]?.url"
                            :alt="data?.two_images[0]?.alt"
                        />
                    </figure>
                    <figure>
                        <img
                            :src="data?.two_images[1]?.url"
                            :alt="data?.two_images[1]?.alt"
                        />
                    </figure>
                </div>
            </div>
            <div
                class="flexible-title-double__editor"
                v-html="data?.editor"
            >

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
    $class-name: flexible-title-double;
    .#{$class-name} {
        @include size(100%, auto);

        display: flex;
        justify-content: center;
        padding-top: 9.6rem;
        padding-bottom: 19.5rem;

        &__wrapper {
            @include set-col(10, 12, 0);

            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__top {
            @include size(100%, auto);

            position: relative;
            display: flex;
            align-items: center;
            margin-bottom: 6.4rem;

            &-title {
                position: absolute;
                display: flex;
                flex-direction: column;
                z-index: 1;

                > h3 {
                    @include typo('heading', 32);

                    margin-bottom: 2rem;
                }
            }

            &-img {
                @include size(100%, auto);
                
                position: relative;
                display: flex;
                justify-content: center;
                padding-bottom: 7.5rem;

                > figure {
                    &:first-child {
                        @include set-col(4, 10, 1);
                        @include aspect(1.56);

                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;

                        > img {
                            @include size(100%);

                            position: absolute;
                            object-fit: cover;
                        }
                    }

                    &:last-child {
                        @include set-col(4, 10, 0);
                        @include aspect(0.66);

                        position: absolute;
                        right: 0;
                        bottom: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;

                        > img {
                            @include size(100%);

                            position: absolute;
                            object-fit: cover;
                        }
                    }
                }
            }
        }

        &__editor {
            @include set-col(6, 10, 0);

            > h1 {
                @include typo('heading', 32);

                &:not(:last-child) {
                    margin-bottom: 3.6rem;
                }
            }

            > h2 {
                @include typo('heading', 24);

                &:not(:last-child) {
                    margin-bottom: 3.6rem;
                }
            }

            > h3 {
                @include typo('body', 20);

                &:not(:last-child) {
                    margin-bottom: 3.6rem;
                }
            }

            > p {
                @include typo('body', 16);

                &:not(:last-child) {
                    margin-bottom: 3.6rem;
                }

                > strong {
                    font-weight: bold;
                }

                > em {
                    font-style: italic;
                }

                > a {
                    color: map-get($colors, brand-3);
                    text-decoration: underline;
                }
            }

            > blockquote {
                display: flex;
                justify-content: center;
                padding: 2.4rem 10.8rem;
                color: map-get($colors, brand-3);
                background-color: map-get($colors, white);

                &:not(:last-child) {
                    margin-bottom: 3.6rem;
                }

                > p {
                    @include typo('body', 20);

                    position: relative;
                    display: flex;
                    align-items: center;
                    text-align: center;

                    &::before {
                        position: absolute;
                        left: -1.2rem;
                        transform: translateX(-100%);
                        content: '“';
                        font-size: 4rem;
                        line-height: 0;
                    }

                    &::after {
                        position: absolute;
                        right: -1.2rem;
                        transform: translateX(100%);
                        content: '”';
                        font-size: 4rem;
                        line-height: 0;
                    }
                }
            }

            > ol {
                display: flex;
                flex-direction: column;
                list-style: decimal-leading-zero !important;
                counter-reset: item;

                &:not(:last-child) {
                    margin-bottom: 3.6rem;
                }
                
                > li {
                    @include typo('body', 16);
                    
                    display: flex;

                    &:not(:last-child) {
                        margin-bottom: 1.6rem;
                    }

                    &::before {
                        counter-increment: item;
                        content: counter(item, decimal-leading-zero);

                        margin-right: 0.8rem;
                        color: map-get($colors, brand-3);
                        font-weight: bold;
                    }
                }
            }

            > ul {
                display: flex;
                flex-direction: column;
                list-style: disc !important;

                &:not(:last-child) {
                    margin-bottom: 3.6rem;
                }
                
                > li {
                    @include typo('body', 16);
                    
                    display: flex;

                    &:not(:last-child) {
                        margin-bottom: 1.6rem;
                    }

                    &::before {
                        content: '＊';

                        margin-right: 0.8rem;
                        color: map-get($colors, brand-3);
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>