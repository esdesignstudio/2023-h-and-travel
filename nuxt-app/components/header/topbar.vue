<template>
    <div class="head-topbar">
        <div v-if="!data.is_link">
            <div v-text="data.text" />
        </div>
        <NuxtLink
            v-else
            :to="data.link.url"
            :title="data.link.title"
            :target="data.link.target"
        >
            <div v-text="data.link.title" />
        </NuxtLink>
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
    $class-name: head-topbar;
    .#{$class-name} {
        padding: 1.6rem 0;
        color: #fff;
        text-align: center;
        transition: margin .3s;
        background-color: map-get($colors, brand-3);
    }
    .is-scrolled {
        .#{$class-name} {
            margin-top: -6rem;
            // transform: translateY(-102%);

            @include media-breakpoint-down(medium) {
                margin-top: -5.6rem;
            }
        }
    }
</style>