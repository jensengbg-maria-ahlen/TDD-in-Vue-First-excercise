import { shallowMount } from '@vue/test-utils'
import Counter from './Counter.vue'

describe('Counter.vue', () => {
    it('should display "1" when mounted', () => {
        const expected = '1'

        const componentWrapper = shallowMount(Counter)
        const spanWrapper = componentWrapper.find('.result')
        const actual = spanWrapper.text()

        expect(actual).toBe(expected)
    })

    it('should increase displayed value by 1 when increase button clicked', async () => {
        const expected = (1 + 1) + '' 

        const wrapper = shallowMount(Counter)
        const increaseButton = wrapper.find('button')
        await increaseButton.trigger('click')

        const span = wrapper.find('.result')
        const actual = span.text()
        expect(actual).toBe(expected)
    })
    
})