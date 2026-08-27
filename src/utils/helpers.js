export const getProfileLink = (platform, username) => {
    if (!platform || !username) return '#';

    const links = {
        instagram: `https://instagram.com/${username}`,
        youtube: `https://youtube.com/@${username}`,
        twitter: `https://twitter.com/${username}`,
        x: `https://x.com/${username}`,
        linkedin: `https://linkedin.com/in/${username}`,
        facebook: `https://facebook.com/${username}`
    };

    return links[platform.toLowerCase()] || '#';
};