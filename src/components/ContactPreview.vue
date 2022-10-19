<template>
    <h2>{{contact.name}}</h2>
    <h3>Phone Number: {{contact.phone}}</h3>
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