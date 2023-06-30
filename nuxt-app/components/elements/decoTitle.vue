<template>
    <div
        class="elements-deco-title"
        :class="{
            '-hero': hero,
            '-large': large,
            '-small': small,
            '-center': center,
        }"
        v-inview
        v-if="data !== {}"
    >
        <span
            v-for="(item, key) in data?.split(',')"
            :key="key"
        >
            <h1 v-text="item"></h1>
        </span>
        
    </div>
</template>
<script setup>
    const props = defineProps({
        data: {
            type: String,
            default: {},
        },
        hero: {
            type: Boolean,
            default: false,
        },
        large: {
            type: Boolean,
            default: false,
        },
        small: {
            type: Boolean,
            default: false,
        },
        center: {
            type: Boolean,
            default: false,
        },
    })
</script>
<style lang="scss">
    $class-name: elements-deco-title;
    .#{$class-name} {
        @include size(100%, auto);

        display: flex;
        flex-direction: column;
        
        &.-hero {
            align-items: center;

            > span {
                @include typo('display', 180);

                @include media-breakpoint-down(medium) {
                    @include typo('heading', 48);
                }
            }
        }

        &.-large {
            > span {
                @include typo('display', 140);
            }
        }

        &.-small {
            > span {
                @include typo('heading', 48);
            }
        }

        &.-center {
            > span {
                > h1 {
                    text-align: center;
                }
            }
        }

        &.is-inview {
            > span {
                .isLoaded & {
                    @for $i from 1 through 10 {
                        &:nth-child(#{$i}) {
                            
                            h1 {
                                transform: translateY(0);
                                transition: transform 1s #{$i * 0.1}s cubic-bezier(0.77, 0, 0.175, 1);
                            }
        
                            
                        }
                    }       
                }
            }
        }

        > span {
            @include typo('display', 80);

            overflow: hidden;

            @include media-breakpoint-down(medium) {
                @include typo('heading', 28);
            }

            > h1 {
                transform: translateY(100%);
                line-height: 1.1;
                text-transform: uppercase;
            }
        }
    }
</style>