import path from 'path';
import { Meta, StoryObj } from '@storybook/react';
import * as AuroraIcons from '../index';

const icons = require.context('../../icons', true, /\.tsx$/);
const iconGroups = {};

icons.keys().forEach((fileName) => {
  const category = fileName.split(path.sep)[1];
  const baseName = path.basename(fileName, '.tsx');

  iconGroups[category] = {
    ...iconGroups[category],
    [baseName]: AuroraIcons[baseName],
  };
});

const Icons = () => (
  <>
    <div className="brand">
      <h2 className="brand__header--secondary">Brand</h2>
      <h1 className="brand__header">Iconography</h1>
    </div>

    {Object.keys(iconGroups).map((groupName) => {
      const group = iconGroups[groupName];

      return (
        <div key={groupName} className="section">
          <h3 className="brand__header--tertiary">
            {groupName.replaceAll('_', ' ')}
          </h3>

          <div className="section__items">
            {Object.keys(group).map((icon) => {
              const Icon = group[icon];

              return (
                <div key={icon} className="section__item">
                  <div className="section__item__icon">
                    <Icon key={Icon} size={30} />
                  </div>

                  {icon}
                </div>
              );
            })}
          </div>
        </div>
      );
    })}
  </>
);

const meta = {
  title: 'Components/Iconography/Icons',
  component: Icons,
  decorators: [(Decorator) => <Decorator />],
} satisfies Meta<typeof Icons>;

export default meta;
// export default {
//   title: 'Components/Iconography/Icons',
//   name: 'Icons',
//   component: Icons,
//   decorators: [(Decorator) => <Decorator />],
// } as Meta;

export { Icons };
