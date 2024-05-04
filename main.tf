# main.tf

# providers
provider "aws" {
  region = "us-east-2"
}

resource "aws_instance" "inner-trail-app" {
    ami = "ami-07caf09b362be10b8" #need to develop a new EC2 instance, and replace the ami ID
    instance_type = "t2.micro"
}