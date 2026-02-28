const { S3Client } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: "AKIARGZMZQ2O5MCYO5M7",
    secretAccessKey: "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",
  },
});

module.exports = s3;