# Optimized Static Webpage on AWS S3

This project demonstrates how to deploy a highly optimized static website using AWS S3, CloudFront, and Route 53. The website is responsive, secure, and scalable.

## Project Features

- **Responsive Design**: Mobile-first approach with Flexbox for layout.
- **JavaScript Interactivity**: Includes dynamic weather data fetching using OpenWeather API.
- **CloudFront Integration**: Uses AWS CloudFront for faster global delivery.
- **SSL Certificate**: Secured with HTTPS for safe browsing.
- **Custom Domain**: Configured with Route 53 for a professional touch.


## Prerequisites

1. **AWS Account**: An active AWS account.
2. **OpenWeather API Key**: Required for fetching weather data.
3. **Custom Domain**: Optional, but recommended for Route 53 configuration.

## Steps to Deploy

### 1. Create an S3 Bucket for Static Website Hosting

1. Log in to your AWS account and go to the **S3** service.
2. Create a new S3 bucket with a unique name (e.g., `my-optimized-webpage-bucket`).
3. Enable **Static website hosting** under the bucket's **Properties** tab.
4. Upload the `index.html`, `style.css`, and `script.js` files to the bucket.
5. Set all files' permissions to **Public** for accessibility.

### 2. Configure CloudFront for Faster Delivery

1. Navigate to the **CloudFront** service in AWS.
2. Create a new CloudFront distribution.
3. Select your S3 bucket as the **Origin Domain Name**.
4. Enable **HTTPS** and request an **SSL certificate** from AWS Certificate Manager (ACM).
5. Deploy the CloudFront distribution.

### 3. Setup a Custom Domain with Route 53

1. Go to the **Route 53** service and create a hosted zone for your custom domain (e.g., `mywebsite.com`).
2. Purchase the domain or use an existing one.
3. In the hosted zone, create an **A Record** that points to the CloudFront distribution's domain name.
4. Set up the **SSL certificate** to secure your custom domain.

### 4. Access the Website

1. After the CloudFront distribution is deployed, use the **CloudFront URL** or your **custom domain** (if configured) to access the website.
2. The website will be globally distributed, responsive, and secured with HTTPS.

## Security Best Practices

- **Bucket Policy**: Ensure the S3 bucket only allows public read access and restricts write permissions.
- **HTTPS Enforcement**: CloudFront should always enforce HTTPS to ensure secure browsing.

## Future Improvements

- Implement form validation for user inputs.
- Add serverless back-end functions using AWS Lambda for dynamic content.
- Monitor website performance using AWS CloudWatch.

