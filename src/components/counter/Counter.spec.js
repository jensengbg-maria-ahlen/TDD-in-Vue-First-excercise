import { shallowMount } from '@vue/test-utils'
import Counter from './Counter.vue'

describe('Counter.vue', () => {
    function getResult(wrapper) {
        const spanWrapper = wrapper.find('.result')
        return spanWrapper.text()

    }

    it('should display "1" when mounted', () => {
        const expected = '1'
        const wrapper = shallowMount(Counter)
        
        const actual = getResult(wrapper)
        expect(actual).toBe(expected)
    })

    it('should increase displayed value by 1 when increase button clicked', async () => {
        const expected = (1 + 1) + '' 

        const wrapper = shallowMount(Counter)
        const increaseButton = wrapper.find('.increaseButton')
        await increaseButton.trigger('click')

        const actual = getResult(wrapper)
        expect(actual).toBe(expected)
    })

    it('should decrease displayed value by 1 when decrease button is clicked', async () => {
        const expected = '0';
        const wrapper = shallowMount(Counter)
        const decreaseButton = wrapper.find('.decreaseButton');
        await decreaseButton.trigger('click');
        const actual = getResult(wrapper)
        expect(actual).toBe(expected)
    })


    it('should be able to handle multiple clicks on both buttons', async () => {
        const expected = (1+4-3) + '';

        const wrapper = shallowMount(Counter);
        const increaseButton = wrapper.find('.increaseButton')
        const decreaseButton = wrapper.find('.decreaseButton')

        await increaseButton.trigger('click')
        await increaseButton.trigger('click')
        await decreaseButton.trigger('click')
        await increaseButton.trigger('click')
        await decreaseButton.trigger('click')
        await decreaseButton.trigger('click')
        await increaseButton.trigger('click')

        const actual = getResult(wrapper)
        expect(actual).toBe(expected)
    })
    
})