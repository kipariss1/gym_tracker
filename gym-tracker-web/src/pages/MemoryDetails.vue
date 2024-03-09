<template>
    <base-layout page-title="The Details" page-default-back-link="/">
        <h2>The details page</h2>
        <!-- TODO:  -->
        <h1>{{ memory.description }}</h1>
    </base-layout>
</template>

<script>
    import BaseLayout from '../components/base/BaseLayout.vue';

    export default {
        props: {
            memory: {
                type: Object,
                required: true,
            },
        }
    }

</script>
