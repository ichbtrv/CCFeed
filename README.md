# CCFeed An example social media progressive web app with looping video posts

*Note phone must have low power mode off on iOS for videos to Autoplay/ Loop*

This app is an exercise in exploring the architecture of a more complex web app as well as working with a database. It has plenty of bugs as it stands right now, and overall I think I might have to take a step back and rethink my approach as opposed to going in and patching each fix. That's to come. 

# Tech Used
Next.JS
TypeScript
NextAuth
Prisma
PosgresSQL
TailwindCSS
Valtio
Formik
Yup
ImageKit for Storage

## Prisma w/PostgresSql

First off let me just say that Prisma is amazing. It made working with a postgres database really easy and their documentation is extremely thorough and legible. I did run into some issues with types and database synchronization, but that's probably due to an error on behalf of myself rather than the technology itself. Implementing changes to the schema in the middle of the project took some weird work arounds. 

## TypeScript

I've been using TS recently to the best of my ability recently, and nothing is new here. I figured especially when you're dealing with a database its pretty important to keep things type safe.

## Next.Js

With Next I was not only able to set up pagination and API routes but was able use SSR when it was needed. I think I may not have the best implementation of the latter because of the bugs I'll mention later. 

## TailwindCSS
Tailwind is fast! I was focusing more on the logic of the code and connecting all the pieces together so tailwind's ease of putting the paint on the canvas definitely helped facilitate this.

## Valtio
Very simple and barebones state management library. I recommend looking into it. Since I didn't have to worry about scalability too much I went with the most simple implementation of state management I could find in a third party library. I think on the rework I will have React-Query manage some of what it manages as there definitely is some Client/Server state confusion in this implementation. 

## Formik (and Yup for validation) 
I used Formik to manage form state and Yup to validate the inputs. To be honest I didn't end up liking the end result, as the code seemed a bit too verbose for what I was doing. Will definitely be rethinking this and maybe using something like React Hook Form next time. 

## Image Kit
I ended up going with ImageKit for storage for almost the same reason I am going to consider React Hook Form for form state. I originally went with Cloudinary but the code was a little weird, and configuring upload presets was a little bit frustrating. I didn't want to get bogged down in configuration at the cost of fulfilling what was the overall intent behind this project so I went with an alternative in ImageKit. Similarly, I didn't want to go with something like S3 because I didn't want to get lost in that ecosystem. 

## Next-Auth
I went with this for authorization because it is straightforward to implement and has compatibility with Prisma. It's a great library because of how it localizes authorization; users don't have to be managed on an external platform, the data is my own, and all of the configuration is done in the code. 





# Bugs and Features

## Working features:
-Authorization/ Registration
-Creation and Deletion of Posts 
-Chronological Feed 
-Capture Video from camera for Posts
-Can include description sticker on posts or not
-Profile Page

## Bugs/ToDos:
-Authorization needs two clicks to work (should just be a redirect issue, this came about after switching auth client keys)
-Profile page Feed not chronological 
-Renders not optimized 
-Slow loading time esp/ on sub-optimal connections 
-No incremental loading 
-Images not supported
-No comments or interactions
-Delete and Post require refresh 
-Can't view other's profiles
-Inconsistent styles (Was experimenting to see which ones would result in a smoother UI)

[![](https://i.vimeocdn.com/video/1340049845-7d7891254c2d2a22a25906e16753ef80625ff2b30361122cb50e7f4c0222abc9-d_640)](https://vimeo.com/662309138)
