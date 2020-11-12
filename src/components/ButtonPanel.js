import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const buttonGroups = [
    {
      groupId: 1,
      buttons: [
        String.fromCharCode(65, 67),
        String.fromCharCode(0x00b1),
        String.fromCharCode(0x0025),
        String.fromCharCode(0x00f7),
      ],
    },
    {
      groupId: 2,
      buttons: ['7', '8', '9', String.fromCharCode(0x00d7)],
    },
    {
      groupId: 3,
      buttons: ['4', '5', '6', String.fromCharCode(0x2212)],
    },
    {
      groupId: 4,
      buttons: ['1', '2', '3', String.fromCharCode(0x002b)],
    },
    {
      groupId: 5,
      buttons: ['0', String.fromCharCode(0x002e), String.fromCharCode(0x003d)],
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
