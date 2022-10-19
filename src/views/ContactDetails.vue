<template>
    <div v-if="contact" class="contact-details">
        <h1>contact Details</h1>
        <h2>{{contact.name}}</h2>
        <h3>Phone Number: {{contact.phone}}</h3>
        <h3>Email: {{contact.email}}</h3>
        <img src="https://robohash.org/{{contact._id}}" alt="No Contact Image">
        <button>
            <RouterLink to="/contact">Back</RouterLink>
        </button>
    </div>
    <div v-else>Loding contact details...</div>
</template>

<script>
    import { contactService } from '@/services/contact.service.js'
    export default {
        data(){
            return {
                contact: null,
            }
        },
        async created() {
            const _id = this.$route.params._id
            this.contact = await contactService.getContactById(_id)
        }
    }
</script>