import React from 'react';
import { Meta } from '@storybook/react';
import * as Icons from '../index';

const iconSizes = [16, 20, 30, 40, 50, 60];

const Guidance = () => (
  <>
    <div className="brand  hasContent">
      <h2 className="brand__header--secondary">Brand</h2>
      <h1 className="brand__header">Iconography - Guidance</h1>

      <p>
        We use Streamline icons for our icons. Creating a cohesive iconset that
        we can use across the website.{' '}
        <a
          href="http://viewer.streamlineicons.com/regular"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://viewer.streamlineicons.com/regular
        </a>
      </p>
    </div>

    <div className="sections">
      <div className="section  section--half">
        <h3 className="brand__header--tertiary">Size and color</h3>

        <p>Min size 16px | Max size 60px</p>

        <table className="icon-table">
          <tr>
            {iconSizes.map((size) => (
              <th
                key={size}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                }}
              >
                {size}x{size}
              </th>
            ))}
          </tr>

          <tr>
            {iconSizes.map((size) => (
              <td key={size}>
                <Icons.Settings size={size.toString()} />
              </td>
            ))}
          </tr>

          <tr
            style={{
              color: '#FBCE07',
            }}
          >
            {iconSizes.map((size) => (
              <td key={size}>
                <Icons.Settings size={size.toString()} />
              </td>
            ))}
          </tr>

          <tr
            style={{
              color: '#DD1D21',
            }}
          >
            {iconSizes.map((size) => (
              <td key={size}>
                <Icons.Settings size={size.toString()} />
              </td>
            ))}
          </tr>

          <tr
            style={{
              backgroundColor: '#0097BB',
              color: '#fff',
            }}
          >
            {iconSizes.map((size) => (
              <td key={size}>
                <Icons.Settings size={size.toString()} />
              </td>
            ))}
          </tr>
        </table>

        <p>
          <small>
            <strong>Note:</strong> Icons can be any size between 16px and 60px
          </small>
        </p>
      </div>

      <div className="section  section--half">
        <h3 className="brand__header--tertiary">Larger graphic</h3>

        <p>
          Any use of icons over 100px is considered a graphic and the stroke
          version of the icon must used to keep the line width at 4px
        </p>

        <table
          className="icon-table"
          style={{
            marginTop: '1.5rem',
          }}
        >
          <tr>
            <th
              style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
              }}
            >
              100x100
            </th>

            <th
              style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
              }}
            >
              150x150
            </th>

            <th
              style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
              }}
            >
              200x200
            </th>
          </tr>
          <td valign="top">
            <Icons.Energy size="100" />
          </td>
          <td valign="top">
            <Icons.Energy size="150" />
          </td>
          <td valign="top">
            <Icons.Energy size="200" />
          </td>
        </table>
      </div>
    </div>
  </>
);

export default {
  title: 'Components/Iconography/Guidance',
  name: 'Guidance',
  component: Guidance,
  decorators: [(Decorator) => <Decorator />],
} as Meta;

export { Guidance };
