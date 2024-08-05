// aws-config.js
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: 'AKIA5FTZDPPGAKTE2L2W',
    secretAccessKey: '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',
    region: 'us-west-2',
});

const Polly = new AWS.Polly();

export default Polly;
