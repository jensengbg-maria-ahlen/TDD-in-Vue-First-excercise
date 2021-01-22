import { shallowMount, mount } from '@vue/test-utils';
import Tabs from './Tabs.vue';
import TabContent from './TabContent.vue';

describe('Tabs.vue', () => {
    it('should show three buttons', () => {
        const wrapper = shallowMount(Tabs);
        const buttons = wrapper.findAll('button');
        const expectedAmount = 3;

        const actualAmout = buttons.length;
        
        expect(actualAmout).toBe(expectedAmount)
    })

    it('should display the correct content when a button is clicked', async () => {
        const wrapper = mount(Tabs);
        const buttonIndex = 1;
        const array = wrapper.vm.changeableContent;
        const expectedContent = array[buttonIndex].content;
        const allButtons = wrapper.findAll('button');
        const button = allButtons[buttonIndex];

        await button.trigger('click');

        const actualContent = wrapper.findComponent(TabContent).text();

        expect(actualContent).toBe(expectedContent);
    })
})