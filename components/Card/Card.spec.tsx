import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card'

jest.mock('utils/useOnScreen')

describe('components | Card', () => {
  it('renders with title and image', () => {
    render(<Card title="Title" image={{ src: '/ img.png', alt: 'image'}} />)

    expect(screen.getByRole('heading', {
      name: "Title",
    })).toBeInTheDocument()
    expect(screen.getByAltText('image')).toBeInTheDocument()
  })
  
  it('renders image placeholder if no image is provided', () => {
    render(<Card title="Title" />)
    expect(screen.getByRole('heading', {
      name: "Title",
    })).toBeInTheDocument()
    expect(screen.getByTestId('image-placeholder')).toBeInTheDocument()
  })
})