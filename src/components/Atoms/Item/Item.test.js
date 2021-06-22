import Item from ".";
import { DefaultItem } from "./Item.stories";
import { render } from '@testing-library/react';

describe("item component", () => {
    const args = DefaultItem.args;

    it("test item component", () => {
        const item = render(<Item {...args} />);
        expect(item).toBeDefined();
    })
});