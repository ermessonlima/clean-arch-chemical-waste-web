import { faker } from "@faker-js/faker"
import axios from 'axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
    const mockedAxios = axios as jest.Mocked<typeof axios> 
    mockedAxios.post.mockResolvedValue({
        status: 200,
        data: {
            name: faker.name.firstName(),
            lastName: faker.name.lastName()
        }
    })

    return mockedAxios
}