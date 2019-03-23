import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Tabs from '../../Components/Tabs';
import Text from '../../Components/Text';

storiesOf('Components/Tabs', module)
    .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
    .addDecorator(withInfo)
    .add('Default', () => <Tabs>
        <div label='Tab 1'>
            <Text size='60px'>Hello Tab 1</Text>
            <Text size='16px'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </Text>
        </div>
        <div label='Tab 2'>
            <Text size='60px'>Hello Tab 2</Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </div>
        <div label='Tab 3'>
            <Text size='60px'>Hello Tab 3</Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </Text>
        </div>
    </Tabs>)
    .add('With a disabled tab', () => <Tabs>
        <div label='Tab 1'>
            <Text size='60px'>Hello Tab 1</Text>
        </div>
        <div label='Tab 2' isDisabled>
            <Text size='60px'>Hello Tab 2</Text>
        </div>
        <div label='Tab 3'>
            <Text size='60px'>Hello Tab 3</Text>
        </div>
    </Tabs>)
    .add('With all tabs disabled', () => <Tabs allDisabled>
        <div label='Tab 1'>
            <Text size='60px'>Hello Tab 1</Text>
        </div>
        <div label='Tab 2'>
            <Text size='60px'>Hello Tab 2</Text>
        </div>
        <div label='Tab 3'>
            <Text size='60px'>Hello Tab 3</Text>
        </div>
    </Tabs>);

const StoryWrapper = styled.div`
    padding: 20px;
    width: 800px;
`;