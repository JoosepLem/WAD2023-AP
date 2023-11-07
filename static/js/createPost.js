window.onload = function() {

    // fetch('https://json.extendsclass.com/bin/a5df0d29a8f2')
    fetch('static/posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            let body = document.body

            for (const post of json) {
                let section = document.createElement("section")
                section.className = "post"


                body.appendChild(section)

                let wrapper = document.createElement("div")
                wrapper.className = "post-wrapper"

                section.appendChild(wrapper)

                let postData = document.createElement("div")
                postData.className = "post-data"

                wrapper.appendChild(postData)

                let authorImg = document.createElement("img")
                authorImg.className = "author-img"
                authorImg.setAttribute("src", post.profileImage)

                let creationTime = document.createElement("p")
                let creationTimeData = document.createTextNode(post.created)
                creationTime.appendChild(creationTimeData)

                postData.appendChild(authorImg)
                postData.appendChild(creationTime)

                if (post.postImage != null){
                    let postImageWrapper = document.createElement("div")
                    let postImage = document.createElement("img")
                    postImage.className = "post-img"
                    postImage.setAttribute("src", post.postImage)
                    postImageWrapper.appendChild(postImage)
                    wrapper.appendChild(postImageWrapper)
                }

                let postContent = document.createElement("div")
                postContent.className = "post-content"
                let postText = document.createElement("p")
                let postTextData = document.createTextNode(post.postContent)
                postText.appendChild(postTextData)
                postContent.appendChild(postText)
                wrapper.appendChild(postContent)

                let likesDiv = document.createElement("div")
                let likes = document.createElement("img")
                likes.className = "likes"

                likes.setAttribute("src", post.likeIcon)

                likesDiv.appendChild(likes)

                wrapper.appendChild(likesDiv)

            }
        })
}