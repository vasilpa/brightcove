export const getPlayList = async (playListName) => {
    const res = await fetch(`https://edge.api.brightcove.com/playback/v1/accounts/6277180416001/playlists/ref:${playListName}`, {
        headers: new Headers({
            'Accept': 'application/json;pk=BCpkADawqM1zzC7HVkBxNJrGZL8i8uE1Ih8qWYcnu31NOD9otUHwLlyq1IiUeIiWlXACt6HKQijVxoeZzKoFH4_HjiGA62c8Xipwazg0FfUakIaFrxIG1jpp2XbrdiqskFAtJFqtNEgYlA2g',
        }),
    });

    return await res.json();
}