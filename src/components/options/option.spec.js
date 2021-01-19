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


    it('should, when clicked and no elements are selected, select the element', async () => {
        const wrapper = shallowMount(Options)
		const expectedSelectedBefore = 0, expectedSelectedAfter = 1

		const actualSelectedBefore = wrapper.findAll('.option.selected').length
		const first = wrapper.find('.option');
		await first.trigger('click');

		const actualSelectedAfter = wrapper.findAll('.option.selected').length

		expect(actualSelectedBefore).toBe(expectedSelectedBefore)
		expect(actualSelectedAfter).toBe(expectedSelectedAfter)
    })


    it('should , when clicked and one element is selected, select the element', () => {
        
    })


    it('should remove a selection when a selected element is clicked', () => {
        
    })
})