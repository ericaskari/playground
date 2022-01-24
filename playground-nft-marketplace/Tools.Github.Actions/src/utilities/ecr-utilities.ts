import { ECR } from 'aws-sdk';

const ecr = new ECR({ region: 'eu-west-1' });


export async function getEcrTags(repositoryName: string): Promise<string[]> {
    const response = await ecr.describeImages({ repositoryName }).promise();

    return response.imageDetails.map(x => x.imageTags).reduce((previousValue, currentValue) => [ ...previousValue, ...currentValue ], []);

}

