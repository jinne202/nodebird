// 유저 정보들만 담고 있는 sotre 안에 초기값을 넣어준다. 이게 초기 state

const dummyUser = {
    id : 1,
    nickname : 'JINNE',
    Post : [],
    Followings : [],
    Followers : [],
}

// 유저 정보들만 담고 있는 sotre 안에 초기값을 넣어준다.
export const initialState = {
    isLoggedIn : false, //로그인 여부
    isLoggingOut : false, //로그아웃 시도중
    isLoggingIn : false, //로그인 시도중
    logInErrorReason : '', //로그인 에러 사유
    isSignedUp : false, //회원가입 성공
    isSigningUp : false, //회원가입 시도중
    signUpErrorReason : '', //회원가입 실패 사유
    me : null, //내 정보
    followingList : [], //팔로잉 리스트
    followerList : [], //팔로워 리스트
    userInfo : null,
};
// 여기까지 store

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; //액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

// 팔로워, 팔로잉 목록 불러오기
export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';

// 팔로우 하는 액션
export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

// 중요한 액션!!!!! 리듀서의 단점때문에 만들어진 액션
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';

// // 실제 액션
// export const loginRequestAction = {
//     type : LOG_IN_REQUEST,
// };

// export const logoutAction = {
//     type : LOG_OUT_REQUEST,
// }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST : {
            return {
                ...state,
                isLoadng : true,
                isLoggingIn : true,
            };
        }
        case LOG_IN_SUCCESS : {
            return {
                ...state,
                isLoadng : false,
                isLoggedIn : true,
                me : action.data,
                isLoggingIn : false,
            }
        }
        case LOG_IN_FAILURE : {
            return {
                ...state,
                isLoadng : false,
                isLoggedIn : false,
                isLoggingIn : false,
                logInErrorReason : action.error,
                me : null,
            }
        }
        case LOG_OUT_REQUEST : {
            return {
                ...state,
                isLoggedIn : false,
                user : null,
            }
        }
        case SIGN_UP_REQUEST : {
            return {
                ...state,
                isSigningUp : true,
                isSignedUp : false,
            };
        }
        case SIGN_UP_SUCCESS : {
            return {
                ...state,
                isSigningUp : false,
                isSignedUp : true
            }
        }
        case SIGN_UP_FAILURE : {
            return {
                ...state,
                isSigningUp : false,
                signUpErrorReason : action.error,
            }
        }
        default : {
            return {
                ...state,
            }
        }
    }
};

export default reducer;