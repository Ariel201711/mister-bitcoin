<template>
    <section class="contact-list-container">
        <h1>Contact List</h1>
        <ul class="contact-list clean-list">
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact"/>
                <ContactActions :contact="contact" @contact-removed="onRemoveContact"/>
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
            onRemoveContact(contactId) {
                this.$emit('contact-removed', contactId)
            },
        },
        components: {
            ContactPreview,
            ContactActions
        }
    }
</script>