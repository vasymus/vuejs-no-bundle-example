export default {
    template: `
        <select :name="id" :id="id" @input="$emit('update:modelValue', $event.target.value)">
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
                :selected="isSelected(option)"
            >{{ option.label }}</option>
        </select>
    `,
    props: {
        options: {
            type: Array,
            default: [],
            validator(value = []) {
                return value.every(item => typeof item.label !== 'undefined' && typeof item.value !== 'undefined')
            },
            required: true,
        },
        id: String,
        modelValue: {
            type: [String, Number],
            required: false,
            default: '',
        },
    },
    emits: ['update:modelValue'],
    methods: {
        isSelected(option) {
            return `${option.value}` === `${this.modelValue}`
        },
    },
}
