import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

function HeaderMenu({auth}) {
  const [activeItem, setActiveItem] = React.useState('Super Chat');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const signOut = () => {
    auth.signOut();
  }

  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
          name='Super Chat'
          active={activeItem === 'Super Chat'}
          onClick={handleItemClick}
        />
        {auth.currentUser &&
        <Menu.Item
          name='logout'
          position='right'
          active={activeItem === 'logout'}
          onClick={signOut}
        />}
      </Menu>
    </Segment>
  )
}

export default HeaderMenu
