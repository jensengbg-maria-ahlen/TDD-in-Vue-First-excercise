import { shallowMount } from '@vue/test-utils';
import Options from './Option.vue';

describe('Options.vue', () => {
    it('should display five element when it is mounted', () => {
        const wrapper = shallowMount(Options)
        const expected = 5;
        const actual = wrapper.findAll('.option').length;
        expect(actual).toBe(expected)
    })


    it('should have zero elements when it is mounted', () => {
        const wrapper = shallowMount(Options)
        const expected = 0;
        const actual = wrapper.findAll('.option.selected').length;
        expect(actual).toBe(expected)
    })


    it('should, when clicked and no elements are selected, select the element', () => {
        
    })


    it('should , when clicked and one element is selected, select the element', () => {
        
    })


    it('should remove a selection when a selected element is clicked', () => {
        
    })
})