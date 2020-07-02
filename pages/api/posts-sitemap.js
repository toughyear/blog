import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";
import path from "path";

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    // going through file system
    const postsDirectory = path.join(process.cwd(), "writings");
    const filenames = fs.readdirSync(postsDirectory);

    // Create each URL row
    filenames.forEach((post) => {
      smStream.write({
        url: `/writings/${post}`,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
