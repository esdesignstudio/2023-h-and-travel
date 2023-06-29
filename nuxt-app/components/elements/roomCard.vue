<template>
    <div class="elements-room-card">
        <figure>
            <img :src="data.fields.key_visual?.slider[0]?.url" alt="">
        </figure>
        <div class="elements-room-card-info">
            <h3>{{ data.title }}</h3>
            <nuxt-link :to="'/rooms/' + data.slug">
                查看房型
                <nuxt-icon name="arrow_right"/>
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
    $class-name: elements-room-card;
    .#{$class-name} {
        @include set-col(3, 10, 1);

        margin-bottom: 6.4rem;

        > figure {
            @include size(100%, auto);
            @include aspect(1.18);

            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin-bottom: 1.6rem;

            > img {
                @include size(100%);

                position: absolute;
                object-fit: cover;
            }
        }

        &-info {
            padding: .8rem 0;
            border-top: 1px solid map-get($colors, gray-line);
            border-bottom: 1px solid map-get($colors, gray-line);

            > h3 {
                @include typo('body', 20);
            
                margin-bottom: 0.8rem;
            }
            
            > a {
                @include typo('body', 16);
            
                color: map-get($colors, brand-3);
                cursor: pointer;

                > span {
                    transition: margin-left .3s ease-in-out;
                }

                @include media-breakpoint-up(medium) {
                    &:hover {
                        span {
                            margin-left: .8rem;
                        }
                    }
                }
            }
        }
    }
</style>