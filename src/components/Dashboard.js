import React from 'react';
import SideBar from '../components/SideBar';
import OpenConversation from '../components/OpenConversation';
import { useConversation } from '../contexts/ConversationProvider';
import useMediaQuery from 'react-use-media-query-hook';

const Dashboard = ({ userID, onLogout, chatModal }) => {

    const { conversations } = useConversation();

    // Media Queries
    const isMobile = useMediaQuery('(max-width: 400px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 991.98px)');
    const isDesktop = useMediaQuery('(min-width: 992px) and (max-width: 1199.98px)');
    const isLargeDesktop = useMediaQuery('(min-width: 1200px)');

    return (
        <div style={{ display: 'flex' }}>
            <SideBar userID={userID} onLogout={onLogout} chatModal={chatModal}/>
            {conversations.length ? <OpenConversation /> : ''}
        </div>
    )
}

export default Dashboard
