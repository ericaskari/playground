import { setFailed, setOutput } from '@actions/core';
import { context } from '@actions/github';

enum InputNames {
}

enum OutputNames {
    BackendAssetDownloadUrl = 'BackendAssetDownloadUrl',
    FrontendAssetDownloadUrl = 'FrontendAssetDownloadUrl',
    TagName = 'TagName',
}

async function run(): Promise<void> {
    try {
        console.log(JSON.stringify(context, undefined, 3));

        if (context.payload.action !== 'published') {
            setFailed('Allowed to run only for release published');
            return;
        }

        const release = context.payload.release;

        const assets: Record<string, any>[] = release.assets;

        const tagName: Record<string, any>[] = release.tag_name;

        const backendAsset = assets.find(x => x.name === 'backend.tar.gz');

        const frontendAsset = assets.find(x => x.name === 'frontend.tar.gz');

        setOutput(OutputNames.BackendAssetDownloadUrl, backendAsset.browser_download_url);
        setOutput(OutputNames.FrontendAssetDownloadUrl, frontendAsset.browser_download_url);
        setOutput(OutputNames.TagName, tagName);
    } catch (error) {

        console.error(error);

        setFailed(error.message);
    }
}

run().then();
