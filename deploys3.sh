#!/bin/bash
export AWS_PROFILE=riotamoriya
export GATSBY_S3_BUCKET="3terms-news"
npm run build
yes | gatsby-plugin-s3 deploy