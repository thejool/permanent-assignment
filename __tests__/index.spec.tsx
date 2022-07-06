import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from '../pages/index'

jest.mock('@apollo/client')
jest.mock('utils/useOnScreen')

describe('pages | index', () => {
  it('renders with heading and markets', () => {
    const markets = [{
      location: {
        name: 'Test location',
        id: '123',
      }
    }]
    render(<Index markets={markets} />)

    expect(screen.getByRole('heading', {
      name: "Fellow Farmer",
    })).toBeInTheDocument()
    expect(screen.getByRole('heading', {
      name: "Test location",
    })).toBeInTheDocument()
  })
})