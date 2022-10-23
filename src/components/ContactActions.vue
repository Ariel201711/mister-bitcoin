<template>
    <section class="contact-actions flex">
        <button class="btn-details">
            <RouterLink :to="`/contact/${contact._id}`" class="clean-link">ℹ️</RouterLink>
        </button>
        <button class="btn-edit">
            <RouterLink :to="`/contact/edit/${contact._id}`" class="clean-link">✏️</RouterLink>
        </button>
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