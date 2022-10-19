<template>
    <section class="actions">
        <button>
            <RouterLink :to="`/contact/${contact._id}`">Details</RouterLink>
        </button>
        <!-- <button>
            <RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
        </button> -->
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
        onRemoveContact: {
            type: Function,
            required: true,
        }
    },
    // methods: {
    //     onRemoveContact(contactId){
    //         this.$emit('contact-removed', contactId)
    //     },
    // },
}
</script>