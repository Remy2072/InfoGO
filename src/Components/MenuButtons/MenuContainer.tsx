import React from 'react'
import NewLesson from '../NewLesson/NewLesson';
import OverviewLesson from '../OverviewLesson/OverviewLesson';
import Rapports from '../Rapports/Rapports';
import ActiveLesson from '../ActiveLesson/ActiveLesson';

function MenuContainer(props) {
    switch (props.menu) {
        case "new_lesson": return <NewLesson />;
        case "overview": return <OverviewLesson />;
        case "reports": return <Rapports />;
        case "active": return <ActiveLesson />;
    
        default: return null;
    }
}

export default MenuContainer