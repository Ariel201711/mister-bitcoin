<template>
    <section class="contact-preview">
        <h2>{{contact.name}}</h2>
        <h3>Phone Number: {{contact.phone}}</h3>
    </section>
</template>

<script>
    export default {
        props: {
            contact: {
                type: Object,
                required: true,
            }
        }
    }
</script>