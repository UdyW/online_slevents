import { Button } from '../../button/Button';
import { useTheme } from '../../theming/ThemeProvider';
import { Meta, StoryObj } from '@storybook/react';
import JSXStyle from 'styled-jsx/style';
import { CardMedia } from '../CardMedia';
import { CardContent } from '../CardContent';
import { Card, Props } from '../Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
  args: {
    orientation: 'horizontal',
    variant: 'primary',
  },
  argTypes: {
    orientation: {
      options: [
        'horizontal',
        'horizontal-reverse',
        'vertical',
        'vertical-feature',
      ],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
      control: { type: 'select' },
    },
  },
  decorators: [(Decorator) => <Decorator />],
} as Meta;
export default meta;

type Story = StoryObj<typeof Card>;

export const Template = ({ orientation, variant }) => {
  const theme = useTheme();

  const IMAGE_URL = '../img/slevents-logo.png';
  return (
    <>
      <div className={`cards cards--${orientation}`}>
        <Card orientation={orientation} variant={variant}>
          <CardMedia>
            <img className="img img--dynamic-load" src={IMAGE_URL} />
          </CardMedia>

          <CardContent>
            <h1>Supplier name</h1>

            <p>5.0 avg. rating</p>

            <Button
              element="a"
              href="https://www.google.co.uk"
              text="Check availability"
              variant="secondary"
            />
          </CardContent>
        </Card>
      </div>

      <JSXStyle id="cards__style">
        {`
          .cards {
            width: 100%;
            margin: auto;
          }

          .cards--horizontal {
            max-width: 1200px;
          }

          .cards--vertical {
            max-width: 500px;
          }

          .cards h1,
          .cards p {
            margin-bottom: ${theme.spacing.md};
          }

          .cards h1 {
            font-size: ${theme.fontSizes.xl4};
          }

          .img {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        `}
      </JSXStyle>
    </>
  );
};
