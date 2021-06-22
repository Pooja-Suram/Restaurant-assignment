import MenuSearch from ".";
import { Default } from "./MenuSearch.stories";
import { render } from '@testing-library/react';

describe("search component", () => {
    const args = Default.args;

    it("test search component", () => {
        const element = render(<MenuSearch {...args} />);
        expect(element).toBeDefined();
    })
});