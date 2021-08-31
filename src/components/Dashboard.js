import React from 'react';
import SideBar from '../components/SideBar';
import OpenConversation from '../components/OpenConversation';
import { useConversation } from '../contexts/ConversationProvider';
import useMediaQuery from 'react-use-media-query-hook';

const Dashboard = ({ userID, onLogout }) => {

    const { conversations } = useConversation();

    // Media Queries
    const isMobile = useMediaQuery('(max-width: 400px)');
    const isTablet = useMediaQuery('(min-width: 401px) and (max-width: 640px)');
    const isDesktop = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
    const isLargeDesktop = useMediaQuery('(min-width: 1025px)');

    // Tablet Styles
    const mediumDisplay = {
        position: 'absolute',
        left: '30vw'
    }

    const largeDisplay = {
        position: 'absolute',
        left: '17vw'
    }

    return (
        <div style={{ display: 'flex' }}>
            <SideBar userID={userID} onLogout={onLogout} />
            {/* {conversations.length && mediumDisplay ? <OpenConversation style={mediumDisplay} /> : ''} */}
            {conversations.length ? <OpenConversation style={largeDisplay} /> : ''}
        </div>
    )
}

export default Dashboard
