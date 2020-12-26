export const getStateTopic = (state) => state.topic;
export const getSelectedTab = (state) => getStateTopic(state).get('selectedTab');
export const getIsPendingTopic = (state) => getStateTopic(state).get('isPendingTopic');
export const getIsPostingTopic = (state) => getStateTopic(state).get('isPostingTopic');


export const getTabTopicCreator = (tab) => (state) => state.topic.get(tab);

export const getMatchedTopicId = (state, props) => props.match.params.topicid;