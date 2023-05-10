export default {
    template: `
        <button class="rounded-md bg-red-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="button" @click="close">
            <slot>Cancel</slot>        
        </button>
    `,
    props: {
        type: {
            type: String,
            required: true,
        },
    },
    methods: {
        close() {
            this.$emit('close', this.type);
        }
    }
}
