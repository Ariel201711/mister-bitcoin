import { contactService } from '@/services/contact.service.js'
export default {
    state: {
        contacts: [],
    },
    mutations: {
        setContacts(state, { contacts }){
            state.contacts = contacts
        },
    },
    actions: {
        async loadContacts(context){
            const contacts = await contactService.getContacts()
            context.commit({ type: 'setContacts', contacts })
        },
    },
    getters: {
        contacts(state) { return state.contacts }
    }
}