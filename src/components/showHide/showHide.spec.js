import { shallowMount } from '@vue/test-utils';
import Buttons from './ShowHide.vue'

describe('Buttons.vue', () => {
    it('should show the button with a specific text when mounted', () => {
        const expected = 'Visa/dölj alternativ';
        const wrapper = shallowMount(Buttons);
       
        const button = wrapper.find('button');
        const buttonExist = button.exists();
        
        const buttonHtmlElem = button.element;
        const buttonIsVisible = buttonHtmlElem.style.display !== 'none';
        
        const actualText = button.text()
        expect(buttonExist).toBe(true);
        
        expect(buttonIsVisible).toBe(true);
        expect(actualText).toBe(expected);
    })


   it('should show the other element when mounted', () => {
		const wrapper = shallowMount(Buttons);
		const content = wrapper.find('.content');

		expect( content.exists() ).toBe(true);
		expect( content.element.style.display ).not.toBe('none');
	})

	it('should hide the element when button is clicked', async () => {
		const wrapper = shallowMount(Buttons);
		const button = wrapper.find('button');

		await button.trigger('click');

		const content = wrapper.find('.content');
		expect( content.exists() ).toBe(true);
		expect( content.element.style.display ).toBe('none');
	})

/*
    it('should show the element when button is clicked when it is invisible', () => {

    })
    */
})