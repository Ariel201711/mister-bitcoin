<template>
    <section class="contact-filter">
        <input @input="onSetFilter" v-model="filterBy.name" placeholder="Search" type="search">
    </section>
</template>

<script>
    export default {
        data() {
            return {
                filterBy: { name: '' }
            }
        },
        methods:{
            onSetFilter(){
                this.$emit('filter', this.filterBy)
            }
        }
    }
</script>