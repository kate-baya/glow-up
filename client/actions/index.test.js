import { dispatchUserRoutine } from './index'

import { fetchRoutine } from '../apis/index'

jest.mock('../apis/index', () => ({
  fetchRoutine: jest.fn()
}))

const fakeDispatch = jest.fn()

describe('dispatchUserRoutine', () => {
  describe('set up', () => {
    const fakeRoutine = [
      { id: 1, time: '0630', task: 'Wake Up', importance: 'High', notification: true },
      { id: 2, time: '0745', task: 'Walk Dogs', importance: 'High', notification: true },
      { id: 3, time: '0819', task: 'Feed Dogs', importance: 'High', notification: false },
      { id: 4, time: '0830', task: 'Breakfast', importance: 'Medium', notification: true }
    ]

    beforeAll(() => {
      jest.clearAllMocks()
      fetchRoutine.mockImplementation(() => Promise.resolve(fakeRoutine))
    })

    test('call the api client', () => {
      dispatchUserRoutine()(fakeDispatch)
      expect(fetchRoutine).toHaveBeenCalled()
    })

    test('dispatch action', () => {
      expect(fakeDispatch.mock.calls[0][0].type).toEqual(RECEIVE_ROUTINE)
      expect(fakeDispatch.mock.calls[0][0].routine[0].id).toEqual(1)
    })
  })
})