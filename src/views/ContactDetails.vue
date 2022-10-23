<template>
    <div v-if="contact" class="contact-details flex column">
        <RouterLink to="/contact" class="back-link clean-link"><button class="btn-back flex">←</button></RouterLink>
        <img :src="contactImgUrl" alt="No Contact Image">
        <h1>contact Details</h1>
        <h2>{{contact.name}}</h2>
        <h3>Phone Number: {{contact.phone}}</h3>
        <h3>Email: {{contact.email}}</h3>
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
        },
        computed: {
            contactImgUrl() {
                return `https://joeschmoe.io/api/v1/${this.contact._id}@ashallendesign.co.uk`
            }
        }
    }
</script>