<template>
    <section class="contact-list-container">
        <ul class="contact-list clean-list flex column"> 
            <TransitionGroup name="contact-card-container">
                <li v-for="contact in contacts" :key="contact._id" class="contact-card flex column">
                    <ContactPreview :contact="contact"/>
                    <ContactActions :contact="contact" @contact-removed="onRemoveContact"/>
                </li>
            </TransitionGroup>
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