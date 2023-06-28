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

        &__title {
            margin-bottom: 3.6rem;

            > h3 {
                @include typo('heading', 32);

                margin-bottom: 2rem;
                text-align: center;
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
    }
</style>