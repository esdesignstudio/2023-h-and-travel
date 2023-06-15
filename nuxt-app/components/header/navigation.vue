<template>
    <div class="navigation-main">
        <ul>
            <li
                v-for="(item, index) in data"
                :key="index"
            >
            
                <NuxtLink
                    :to="item.item.url"
                    :title="item.item.title"
                    :target="item.item.target"
                >
                    {{ item.item.title }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
    const props = defineProps({
        data: {
            type: Object,
            default: {},
        },
    })
    const navs = ref([
        {
            name: 'Home',
            link: '/',
        }, {
            name: 'About',
            link: '/about',
        }, {
            name: 'Blog',
            link: '/blog',
        }, {
            name: 'Form',
            link: '/form',
        },
    ])
</script>
<style lang="scss">
$class-name: navigation-main;
.#{$class-name} {
    ul {
        display: flex;
        gap: 1rem;

        li {
            a {
                padding: 3rem 0;
                &:hover {
                    opacity: .5;
                }
            }
        }
    }
}
</style>