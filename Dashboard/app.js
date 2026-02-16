let storiesOfCurrentUser = [
    {
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Ali Khan",
        imageUrl: "https://picsum.photos/300/500?random=1",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Sara Ahmed",
        imageUrl: "https://picsum.photos/300/500?random=2",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Usman Tariq",
        imageUrl: "https://picsum.photos/300/500?random=3",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Ayesha Noor",
        imageUrl: "https://picsum.photos/300/500?random=4",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "Hamza Ali",
        imageUrl: "https://picsum.photos/300/500?random=5",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Hira Malik",
        imageUrl: "https://picsum.photos/300/500?random=6",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Bilal Hussain",
        imageUrl: "https://picsum.photos/300/500?random=7",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Zainab Sheikh",
        imageUrl: "https://picsum.photos/300/500?random=8",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Daniyal Raza",
        imageUrl: "https://picsum.photos/300/500?random=9",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
        name: "Fatima Iqbal",
        imageUrl: "https://picsum.photos/300/500?random=10",
    }
];
let storiesSection=document.querySelector(".stories-section")
let createStoriesThroughMap=
    storiesOfCurrentUser.map(story=>{
    return `
     <div class="story" style="background-image: url('${story.imageUrl}');">
                            <div class="profile-pic">
                                <img src="${story.profilePic}" alt="pfp">
                            </div>
                            <div class="profile-name"><p>${story.name}</p></div>
                        </div>
    `
});
storiesSection.innerHTML+=createStoriesThroughMap.join("")