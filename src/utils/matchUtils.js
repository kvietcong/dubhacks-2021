export const initializeMatch = (sport, teams, start, isRanked) => {
    return {
        isRanked: isRanked,
        sport: sport,
        teams: teams.reduce((teamInfo, {name, players}) => {
            teamInfo[name] = {
                players: players,
                score: 0,
            };
            return teamInfo;
        }, {}),
        times: {
            start: start,
            end: null,
        },
    };
};