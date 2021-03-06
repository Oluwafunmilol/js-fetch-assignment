// BASIC DEMO WITH LOCAL FILE

/*
fetch('demo.json')
  .then(res => {
    console.log(res);
    return res.json();
  })
  .then(json => console.log(json));
*/

// BASIC DEMO WITH IMAGE API

/*
fetch('https://unsplash.it/600/400')
  .then(res => res.blob())
  .then(blob => {
    let img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.querySelector('body').appendChild(img);
  });
*/


// ADVANCED DEMO WITH JSONPLACEHOLDER API 

const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template');

getData()
  .catch(err => console.error(err));

async function getData() {
  const postStream = await fetch('/assets/info.json');
  const posts = await postStream.json();
  let i = 0;

  // throw 'Get Data Error';
  // console.log(posts);

  posts.forEach(post => {
    i++;
    if(i < 10) {
      const title = post.title;
      const body = post.body;
      const dob = post.dob;
      const id = post.id;

      fetch('https://unsplash.it/300/200')
        .then(res => res.blob())
        .then(blob => {
          const newPost = document.importNode(postTemplate.content, true);
          const postTitle = newPost.querySelector('.post__title');
          const postBody = newPost.querySelector('.post__body');
          const postImg = newPost.querySelector('.post__img');
          const postDob = newPost.querySelector('.post__dob');
          const postId = newPost.querySelector('.post__id');

          // throw 'Image Fetch Error';

          postImg.src = URL.createObjectURL(blob);
          postTitle.innerText = title;
          postBody.innerText = body;
          postDob.innerText = dob;
          postId.innerText = id;
          postSection.appendChild(newPost);
        })
        .catch(err => console.error(err));
    }
  })
}


// CREATE A NEW POST DEMO

/* 
const newPost = {
  title: 'New Post Title',
  body: 'Awesome post paragraph',
  userId: 1
}

const createNewPost = post => {
  const options = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }

  return fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(err => console.error(err));

}

createNewPost(newPost);
*/
