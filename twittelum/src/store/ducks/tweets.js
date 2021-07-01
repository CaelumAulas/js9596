import TweetService from "../../services/TweetService";

// Tipos de Ação (ActionTypes)
const ActionTypes = {
    LOAD_TWEETS: 'tweets/LOAD',
    ADD_TWEET: 'tweets/ADD',
    REMOVE_TWEET: 'tweets/REMOVE',
    ERROR_TWEET: 'tweets/ERROR'
}

// State inicial
const initialState = {
    data: [],
    error: ''
};

// Reducer 
export function tweetsReducer( state = initialState, action = {} ) {
    switch ( action.type )
    {
        case ActionTypes.LOAD_TWEETS:
            return {
                data: action.payload.tweets,
                error: ''
            };

        case ActionTypes.ADD_TWEET:
            return {
                data: [ action.payload.tweet, ...state.data ],
                error: ''
            };

        case ActionTypes.REMOVE_TWEET:
            return {
                data: state.data.filter(tweet => tweet._id !== action.payload.id),
                error: ''
            }

        case ActionTypes.ERROR_TWEET:
            return {
                ...state,
                error: action.payload.error
            };  

        default:
            return state;
    }
}

// ActionCreator (Middleware - React Thunk)
export const TweetsThunkActions = {
    loadTweets() {
        return async function(dispatch) {
            const tweets = await TweetService.getTweets();
            dispatch( { type: ActionTypes.LOAD_TWEETS, payload: { tweets } } );
        } 
    },

    addTweet(novoTweet) {
        return async function(dispatch) {
            try {
                const tweet = await TweetService.addTweet(novoTweet);
                dispatch( { type: ActionTypes.ADD_TWEET, payload: { tweet } } );
            }
            catch(error) {
                dispatch( { type: ActionTypes.ERROR_TWEET, payload: { error: error.message } });
            }
        }
    },

    deleteTweet(id) {
        return async function (dispatch) {
            try {
                await TweetService.deleteTweet(id);
                dispatch( { type: ActionTypes.REMOVE_TWEET, payload: { id } } );
            }
            catch(error) {
                dispatch( { type: ActionTypes.ERROR_TWEET, payload: { error: error.message } });
            }
        }
    }
}