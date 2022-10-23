<template>
    <section class="contact-actions flex">
        <RouterLink :to="`/contact/${contact._id}`" class="clean-link"><button class="btn-details">&nbsp;&nbsp;ℹ️&nbsp;&nbsp;</button></RouterLink>
        <RouterLink :to="`/contact/edit/${contact._id}`" class="clean-link"> <button class="btn-edit">✏️</button></RouterLink>
        <button @click="onRemoveContact(contact._id)" class="btn-remove">🗑️</button>
    </section>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        },
    },
    methods: {
        onRemoveContact(contactId) {
            this.$emit('contact-removed', contactId)
        },
    },

}
</script>