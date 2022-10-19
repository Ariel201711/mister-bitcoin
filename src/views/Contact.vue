<template>
    <ContactFilter @filter="onSetFilter"/>
    <ContactList @contact-removed="onRemoveContact" :contacts="contactsToShow"/>
</template>

<script>
import { contactService } from '@/services/contact.service.js'

import ContactFilter from '@/components/ContactFilter.vue'
import ContactList from '@/components/ContactList.vue'

export default {
  data() {
    return {
      contacts: [],
      filterBy: {},
    }
  },
  async created() {
    this.contacts = await contactService.getContacts()
  },
  methods: {
    async onRemoveContact(contactId) {
        try {
            const updatedContacts = await contactService.deleteContact(contactId)
            this.contacts = [...updatedContacts]
            console.log('updatedContacts:', updatedContacts)
            console.log('this.contacts:', this.contacts)
        } catch {
            console.log('cannot remove contact!')
        }
    },
    onSetFilter(filterBy) {
        this.filterBy = filterBy
    }
  },
  computed: {
    contactsToShow() {
        const regex = new RegExp(this.filterBy.name, 'i')
        return this.contacts.filter(contact => regex.test(contact.name))       
    },
  },
  components: {
    ContactFilter,
    ContactList,
  }
}
</script>
