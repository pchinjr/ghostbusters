# Migrate from 2015 to 2020

This is one of the first static sites I built when learning how-2-web-dev. I found a template I liked and could work with to learn about Bootstrap. I don't remember altering the the JavaScript at all, and I didn't know what JQuery was at the time. It was originally developed on a Chromebook just using Cloud9 IDE and it was hosted on BitBalloon. Since 2015, web technologies kept changing and the site remained active and semi-working. Cloud9 was acquired by Amazon and BitBalloon was acquired by Netlify. I want to explore what the experience was like to update my early code to serverless. Taking JQuery to the serverless age! 

Here are the main issues I saw with my "legacy" code.

[x] restructure files and prune dead files for hosting on S3
 - Statically hosting full apps became popular because of comprehensive front end frameworks, but my site only needed a contact form, so I still had a warm VM running to catch the form submission. Updating it to serverless means putting public assets in an object store like AWS S3 and configuring it for public http access. 

[x] Optimize images and fix broken links, https cert
Performance is still important, and the old site was loading very large images. It's still not great, but running tools like Lighthouse can give you suggestions and improvements to think about. Luckily this site was mainly designed to be great for marketing and capturing leads, which I got a decent score on SEO

[x] Make contact form work without a dedicated server
Now comes the best part, where I can ditch a LAMP stack VM and replace it with AWS Lambda Functions. 


[] Add CI/CD and tests
By using OpenJS Architect and Begin, CI/CD becomes part of the process and now every push to `main` is a deploy to `staging`. 