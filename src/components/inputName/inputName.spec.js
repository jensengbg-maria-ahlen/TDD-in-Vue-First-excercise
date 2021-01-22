import { shallowMount } from '@vue/test-utils';
import InputName from './InputName.vue';

describe('InputName.vue', () => { 
    it('should show input field and the text Anonymous when mounted', () => {
        const wrapper = shallowMount(InputName);
        const expected = 'Anonymous';

        let inputName = wrapper.find('.inputName');
        let actual = inputName.text();
        expect(actual).toBe(expected);
    })

    
    it('should show the input text instead of Anonymous when typed in', async () => {
        const wrapper = shallowMount(InputName);
        const textInput = wrapper.find('input[type="text"]');
        
        await textInput.setValue('maria');
        expect(textInput.element.value).toBe('maria')
    })


    it('should return the string with the first letter capitalized and the rest small', async () => {
        const wrapper = shallowMount(InputName);
        const expected = 'Maria';
        
        const textInput = wrapper.find('input[type="text"]');
        await textInput.setValue('maria');

        expect(textInput.element.value).toBe(expected);
    })
})