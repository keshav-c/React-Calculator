import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const buttonGroups = [
    {
      groupId: 1,
      buttons: ['AC', '+/-', '%', '/'],
    },
    {
      groupId: 2,
      buttons: ['7', '8', '9', 'X'],
    },
    {
      groupId: 3,
      buttons: ['4', '5', '6', '-'],
    },
    {
      groupId: 4,
      buttons: ['1', '2', '3', '+'],
    },
    {
      groupId: 5,
      buttons: ['0', '.', '='],
    },
  ];
  const panelContents = buttonGroups.map(group => {
    const { groupId, buttons } = group;
    return (
      <div key={groupId}>
        {
          buttons.map(buttonName => <Button key={buttonName} name={buttonName} />)
        }
      </div>
    );
  });
  return (
    <>
      { panelContents }
    </>
  );
};

export default ButtonPanel;
