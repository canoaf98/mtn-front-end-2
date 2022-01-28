import { render } from "@testing-library/react"
import { LandingPage } from "./LandingPage"

describe('LandingPage', () => {
  test('it should render component', () => {
    const { container } = render(<LandingPage />);
    expect(container).toMatchSnapshot();
  })
})