<template>
    <section class="contact-list">
        <h1>Contact List</h1>
        <ul>
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact"/>
                <ContactActions :contact="contact" @onRemoveContact="onRemoveContact"/>
            </li>

        </ul>
    </section>
</template>

<script>
    import ContactPreview from '@/components/ContactPreview.vue'
    import ContactActions from '@/components/ContactActions.vue'
    export default {
        props: {
            contacts: {
                type: Array,
                required: true,
            }
        },
        methods:{
            onRemoveContact(contactId){
                console.log(contactId)
                this.$emit('contact-removed', contactId)
            },
        },
        components: {
            ContactPreview,
            ContactActions
        }
    }
</script>