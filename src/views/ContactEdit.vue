<template>
  <section v-if="contact" class="contact-edit-container">
    <form @submit.prevent="onSave" class="contact-edit">
      <h1>{{ formTitle }}</h1>
      <input v-model="contact.name" placeholder="Enter Name" type="text" />
      <input
        v-model="contact.phone"
        placeholder="+x (xxx) xxx-xxxx"
        type="tel"
      />
      <input
        v-model="contact.email"
        placeholder="nickname@mail.com"
        type="email"
      />
      <button>Save</button>
    </form>
    <button @click="$router.back()">Back</button>
  </section>
  <div v-else>Loading...</div>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
export default {
  data() {
    return {
      contact: null,
    }
  },
  methods: {
    async onSave() {
      await contactService.saveContact(this.contact)
      this.$router.back()
    },
  },
  async created() {
    const _id = this.$route.params._id
    if (_id) {
      this.contact = await contactService.getContactById(_id)
    } else {
      this.contact = await contactService.getEmptyContact()
    }
  },
  computed: {
    formTitle() {
      const _id = this.$route.params._id;
      return _id ? 'Edit Contact' : 'Add Contact'
    },
  },
}
</script>
