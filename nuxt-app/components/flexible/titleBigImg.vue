<template>
    <div class="flexible-title-big-img">
        <div class="flexible-title-big-img__title">
            <h3 v-text="data?.title"></h3>
            <ElementsDecoTitle :data="data?.deco_title"/>
        </div>
        <div class="flexible-title-big-img__wrapper container">
            <nuxt-link
                :to="data?.link?.url"
                :target="data?.link?.target"
            >
                <figure>
                    <img
                        :src="data?.image.url"
                        :alt="data?.image.alt"
                    >
                </figure>
            </nuxt-link>
        </div>
        <nuxt-link
            v-if="data?.link?.title && data?.link?.url"
            class="flexible-title-big-img__btn"
            :to="data?.link?.url"
            :target="data?.link?.target"
            v-text="data?.link?.title"
        >
            
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
    $class-name: flexible-title-big-img;
    .#{$class-name} {
        @include size(100%, auto);
        
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16rem 0;
        background-color: map-get($colors, white);
        z-index: 1;

        @include media-breakpoint-down(medium) {
            padding: 6.4rem 0;
        }

        &__title {
            margin-bottom: 3.6rem;

            @include media-breakpoint-down(medium) {
                display: flex;
                flex-direction: column-reverse;
            }

            > h3 {
                @include typo('heading', 32);

                margin-bottom: 2rem;
                text-align: center;

                @include media-breakpoint-down(medium) {
                    @include typo('body', 20);

                    margin-top: 0.8rem;
                }
            }
        }

        &__wrapper {
            display: flex;
            justify-content: center;

            > a {
                @include set-col(10, 12, 0);

                @include media-breakpoint-up(medium) {
                    &:hover {
                        > figure {
                            > img {
                                transform: scale(1.1);
                            }
                        }
                    }
                }

                @include media-breakpoint-down(medium) {
                    @include size(100%, auto);
                }

                > figure {
                    @include size(100%, auto);

                    overflow: hidden;
    
                    > img {
                        @include size(100%);
    
                        object-fit: cover;
                        transition: transform 0.3s ease;
                    }
                }
            }
        }

        &__btn {
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

            @include media-breakpoint-down(medium) {
                @include typo('body', 16);
            }
        }
    }
</style>