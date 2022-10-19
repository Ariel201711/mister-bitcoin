<template>
    <section class="actions">
        <button>
            <RouterLink :to="`/contact/${contact._id}`">Details</RouterLink>
        </button>
        <button>
            <RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
        </button>
        <button @click="onRemoveContact(contact._id)">x</button>
    </section>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        },
        // onRemoveContact: {
        //     type: Function,
        //     required: true,
        // }
    },
    // inject: ["onRemoveContact"],
    methods: {
        onRemoveContact(contactId) {
            this.$parent.$emit('contact-removed', contactId) // this is not good solution! must find another solution!!!!
        },
        // removeContact(contactId) {
        //     this.onRemoveContact(contactId)
        // }
    },

}
</script>