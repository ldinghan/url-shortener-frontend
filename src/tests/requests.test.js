import getShortUrl from "../components/getShortUrl";
import shortenUrl from "../components/shortenUrl";


it("basic google test", async () => {
    await shortenUrl("https://www.google.com");
    const shortUrl = await getShortUrl("https://www.google.com");

    expect(shortUrl.data).toBe("uvs67l");
});

it("basic github test", async () => {
    await shortenUrl("https://github.com");
    const shortUrl = await getShortUrl("https://github.com");

    expect(shortUrl.data).toBe("8Mt2xV");
});