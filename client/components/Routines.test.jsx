import React from 'react'
import {Provider} from 'react-redux'
import {screen, render} from '@testing-library/react'
import Routine from './Routine'
import {dispatchUserRoutine} from  '../actions/index'

const fakeStore = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
}

jest.mock('../actions', () => ({
  dispatchUserRoutine: jest.fn()
}))

fakeStore.getState.mockImplementation(() => ({
  routine: [
    { id: 1, time: '0630', task: 'Wake Up', importance: 'High', notification: true },
    { id: 2, time: '0745', task: 'Walk Dogs', importance: 'High', notification: true },
    { id: 3, time: '0819', task: 'Feed Dogs', importance: 'High', notification: false },
    { id: 4, time: '0830', task: 'Breakfast', importance: 'Medium', notification: true }
  ]
}))

describe('<Routine/>', () => {
  test('receiving routine list', async () => {
    render(<Provider store={fakeStore}><Routine/></Provider>)
    const items = await screen.findAllByRole('listitem')
    expect(items).toHaveLength(4)
  })
  test('loads routines from api on componentDidMount', () => {
    render(<Provider store={fakeStore}><Routine/></Provider>)
    expect(fakeStore.dispatch).toHaveBeenCalled()
    expect(dispatchUserRoutine).toHaveBeenCalled()
  })
})