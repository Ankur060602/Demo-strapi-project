export async function Fetcher(url, option) {
    let response;
    if (!option) {
        response = await fetch(url);
    }
    else {
        response = await fetch(url, option);
    }
    const data = await response.json();
    return data;
}