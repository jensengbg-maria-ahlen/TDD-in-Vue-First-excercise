import { shallowMount } from '@vue/test-utils'
import { enableFetchMocks } from 'jest-fetch-mock'
import Chuck from './ChuckNorris.vue'

describe('ChuckNorris.vue', () => {
    it('should display the button and description when mounted', () => {
        const wrapper = shallowMount(Chuck);
        const expectedDescription = 'Click on the button to get a new joke'

        const buttonExist = wrapper.find('button').exists();
        const paragraphExist = wrapper.find('p').exists();
        const actualDescription = wrapper.find('p').text();

        expect(buttonExist).toBeTruthy();
        expect(paragraphExist).toBeTruthy();
        expect(actualDescription).toBe(expectedDescription);
    })

    
    it('should send a request to the correct url when button clicked', async () => {
        const wrapper = shallowMount(Chuck);
        const button = wrapper.find('button');
        enableFetchMocks();
        const fakeData = {
            icon_url: 'https://example',
            value: 'Example joke'
        };
        fetch.mockResponseOnce(JSON.stringify(fakeData));

        await button.trigger('click');

        const numberOfCalls = fetch.mock.calls.length;
    })

    /*
    it('should display data from API correctly', () => {

    })
    */
})

//https://api.chucknorris.io/jokes/random