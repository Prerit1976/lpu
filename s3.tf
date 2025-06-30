provider "aws" {
  region = "ap-south-1" # Mumbai Region
}

variable "bucket_name" {
  description = "The name of the S3 bucket"
  type        = string
}

resource "aws_s3_bucket" "prerit_bucket" {
  bucket = var.bucket_name
  acl    = "private"

  tags = {
    Name = var.bucket_name
    Environment = "Dev"
  }
}