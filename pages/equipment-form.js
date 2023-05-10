import {getGeneralMixin, defaultInit} from '../mixins/general.js';
import {TEST_MODAL} from '../modules/modals.js';


export function initEquipmentFormApp(
    {
        select1 = '',
        options1 = [],
        select2 = '',
        options2 = [],
        date1 = '',
        date2 = '',
    } = {}
) {
    let appMixin = getGeneralMixin();

    const app = Vue.createApp({
            mixins: [
                appMixin,
            ],
            data() {
                return {
                    select1,
                    options1,
                    showSelect1: true,
                    select2,
                    options2,
                    showSelect2: true,
                    showDateUi1: true,
                    showDateUi2: true,
                    date1,
                    date2,
                    dummy: ''
                }
            },
            methods: {
                testChangeSelectValue1() {
                    this.select1 = 'uuid-3';
                },
                testChangeSelectOptions1() {
                    this.options1 = [
                        {
                            value: 'uuid-4',
                            label: 'foo 1',
                        },
                        {
                            value: 'uuid-5',
                            label: 'bar 1'
                        },
                        {
                            value: 'uuid-6',
                            label: 'baz 1'
                        }
                    ];
                },
                testToggleSelectOptions1() {
                    this.showSelect1 = !this.showSelect1;
                },
                testChangeSelectValue2() {
                    this.select2 = 'uuid-1';
                },
                testChangeSelectOptions2() {
                    this.options2 = [
                        {
                            value: 'uuid-8',
                            label: 'foo 2',
                        },
                        {
                            value: 'uuid-9',
                            label: 'bar 2'
                        },
                        {
                            value: 'uuid-10',
                            label: 'baz 2'
                        }
                    ];
                },
                testToggleSelectOptions2() {
                    this.showSelect2 = !this.showSelect2;
                },
                testChangeDate1() {
                    this.date1 = '2028-04-05'
                },
                testToggleDate1() {
                    this.showDateUi1 = !this.showDateUi1
                },
                testChangeDate2() {
                    this.date2 = '2028-03-03';
                },
                testToggleDate2() {
                    this.showDateUi2 = !this.showDateUi2;
                },
                async testOpenModal1() {
                    this.openModal(TEST_MODAL, {
                        hello: 'world',
                        title: 'Some interesting modal',
                    });
                },
                async testClosModal1() {
                    this.closeModal(TEST_MODAL);
                },
            },
        });

    defaultInit(app);

    app.mount('#app');

    // todo dev only
    window.___app = app
}
