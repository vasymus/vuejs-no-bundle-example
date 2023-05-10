export default {
    template: `
        <ac-modal :type="type" :title="title" :z-index="zIndex">
            <template #default>
                <p>I'm test modal: {{hello}}.</p>
                <div>
                    <input placeholder="Some input" type="text"/>
                </div>
            </template>
            <template #footer>
                <ac-modal-close-button @close="close" :type="type">Nope</ac-modal-close-button>
                <button class="rounded-md bg-green-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="button" @click="save">Save</button>
            </template>
        </ac-modal>
    `,
    props: {
        type: {
            type: String,
            required: true,
        },
        zIndex: {
            type: [String, Number],
            required: false,
            default: 10,
        },
        title: String,
        hello: String,
    },
    methods: {
        close() {
            console.log('--- in modal-test')
            this.$emit('close', this.type);
        },
        save() {
            console.log('--- saving');
            this.$emit('close', this.type);
        }
    },
}
