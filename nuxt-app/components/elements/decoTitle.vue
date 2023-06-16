<template>
    <div class="elements-deco-title">
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
            type: Object,
            default: {},
        },
    })
</script>
<style lang="scss">
    $class-name: elements-deco-title;
    .#{$class-name} {
        @include size(100%, auto);

        display: flex;
        flex-direction: column;
        align-items: center;

        > span {
            @include typo('display', 180);

            overflow: hidden;

            @for $i from 1 through 10 {
                &:nth-child(#{$i}) {
                    .isLoaded & {
                        > h1 {
                            transform: translateY(0);
                            transition: transform 1s #{$i * 0.1}s cubic-bezier(0.77, 0, 0.175, 1);
                        }
                    }
                }
            }

            

            > h1 {
                transform: translateY(100%);
            }
        }
    }
</style>