const core = require('@actions/core');
const github = require('@actions/github');
const http = require('@actions/http-client')

function run() {
    const token = core.getInput('token'); 
    const octokit = github.getOctokit(token);

    let {data: latestRelease} = await octokit.rest.repos.getLatestRelease({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo
    });

    //let {data: latestReleaseAsset} = await octokit.rest.repos.getReleaseAsset

}

run();