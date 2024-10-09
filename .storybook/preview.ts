import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS, // Includes default Storybook viewports
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
        mobile1: {
          name: 'Mobile Small',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
      },
      defaultViewport: 'desktop', // Start with desktop by default
    },
  },
};

export default preview;
