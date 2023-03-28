import { createSlice } from "@reduxjs/toolkit";

const profile =
    {
        firstName: 'Jose',
        lastName: 'Annunziato',
        handle: '@jannunzi',
        headshot: 'jose.jpg',
        bannerPicture: 'polyglot.png',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',
        dateOfBirth: '3/21/1968',
        dateJoined: '4/2009',
        followingCount: 340,
        followersCount: 223
    };

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.handle = action.payload.handle;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;