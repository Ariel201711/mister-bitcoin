<template>
    <section class="actions">
        <button>
            <RouterLink :to="`/contact/${contact._id}`">Details</RouterLink>
        </button>
        <button>
            <RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
        </button>
        <button @click="onRemoveContact(contact._id)">Remove</button>
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