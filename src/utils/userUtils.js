export const initializeUser = (displayName, profilePicture) => {
    return {
        availability: {
            "monday": [],
            "tuesday": [],
            "wednesday": [],
            "thursday": [],
            "friday": [],
            "saturday": [],
            "sunday": [],
        },
        communityRating: 0,
        displayName: displayName,
        profilePicture: profilePicture,
        following: [],
        phone: null,
        sports: {},
        preferences: {
            "gender": [],
            "mode": "casual",
        },
    };
};