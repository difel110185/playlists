import React from 'react';
import { render } from '@testing-library/react';
import Song from './Song';

test('renders the correct number of stars', () => {
    for (let i = 1; i <= 5; i++) {
        let { queryByText } = render(<Song stars={i} title="title"/>); // 1

        for (let j = i; j <= 5; j++) {
            let stars = "";
            for (let k = 1; k <= j; k++)
                stars += "⭐";

            let star = queryByText(stars); // 2
            if (i === j)
                expect(star).toBeInTheDocument(); // 3
            else
                expect(star).not.toBeInTheDocument(); // 3
        }
    }
});

