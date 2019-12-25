export const config = {
  "dev": {
    "username": process.env.UDC_DB_UNAME,
    "password": process.env.UDC_DB_PASS,
    "database": process.env.UDC_DB,
    "host": process.env.UDC_DB_URL,
    "dialect": "postgres",
    "aws_reigion": process.env.AWS_REGION,
    "AWS_PROFILE": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
    "url": process.env.URL
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }

}
