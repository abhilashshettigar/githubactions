import { Octokit } from "octokit";
import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

const octokit = new Octokit();

// Define a route to fetch and return user's gists
app.get('/:username', async (req, res) => {
    try {
        const { username } = req.params;

        if (!username) {
            return res.status(400).json({ error: 'Username is required in the request params' });
        }

        // Initialize variables
        let gistsInfo = [];
        let page = 1;

        // Fetch user's public gists from GitHub API
        while (true) {
            const response = await octokit.request(`GET /users/${username}/gists`, {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                },
                // Pagination parameters
                per_page: 100,
                page: page
            });
            console.log(response);
            if (response.status == 404) break;
                return res.status(404).json({ error: 'User not found' });
            const gists = response.data;
            if (gists.length === 0) break; 
            
            const pageGistsInfo = gists.map(gist => ({
                description: gist.description || 'Unnamed Gist',
                url: gist.html_url
            }));
            gistsInfo = gistsInfo.concat(pageGistsInfo);
            page++;
        }

        // total list of gists
        res.json(gistsInfo);
    } catch (error) {
        console.error('Error fetching gists:', error);
        res.status(500).json({ error: 'Failed to fetch gists' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
