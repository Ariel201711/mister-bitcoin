<template>
    <ContactFilter @filter="onSetFilter"/>
    <ContactAdd/>
    <ContactList @contact-removed="onRemoveContact" :contacts="contactsToShow"/>
</template>

<script>
// import { contactService } from '@/services/contact.service.js'

import ContactFilter from '@/components/ContactFilter.vue'
import ContactList from '@/components/ContactList.vue'
import ContactAdd from '@/components/ContactAdd.vue'

export default {
  data() {
    return {
      // contacts: [],
      filterBy: {},
    }
  },
  async created() {
    // this.contacts = await contactService.getContacts()
    this.$store.dispatch({ type: 'loadContacts' })
  },
  methods: {
    onRemoveContact(contactId) {
        // try {
        //     const updatedContacts = await contactService.deleteContact(contactId)
        //     this.contacts = [...updatedContacts]
        // } catch {
        //     console.log('cannot remove contact!')
        // }

        this.$store.dispatch({ type: 'removeContact', contactId })
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
    contacts() { 
      return this.$store.getters.contacts 
    }
  },
  components: {
    ContactFilter,
    ContactAdd,
    ContactList,
  }
}
</script>
