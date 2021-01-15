import { shallowMount } from '@vue/test-utils';
import OnOff from './Onoff.vue';

describe('OnOff.vue', () => {
    it('should dispaly "On" when the component is mounted', () => {
       const expected = 'On';
       const wrapper = shallowMount(OnOff)

       expect(wrapper.text()).toBe(expected);
    })

    it('should display "Off" when it is clicked and text was "on"', async () => {
        const expected = 'Off';
        const wrapper = shallowMount(OnOff);
       
        await wrapper.trigger('click');
        let actual = wrapper.text();
        
        expect(actual).toBe(expected);
    })

    it('should display "On" when it is clicked and text was "Off"', async () => {
        const expected = 'On';
        const wrapper = shallowMount(OnOff);
       
        await wrapper.trigger('click');
        await wrapper.trigger('click');
        
        let actual = wrapper.text();
        expect(actual).toBe(expected);
    })

}) 