async function findUser()
{
    let usernameEntered = document.getElementById("username");
    try{
        EmptyTables();
        
        //retrieve info from api
        const response = await fetch("https://api.github.com/users/"+usernameEntered.value);
        const user = await response.json();

        let img = user.avatar_url;
        if(user.avatar_url == undefined){
            img = "profile.png"
        }
        let name = user.name;
        let userName = user.login;
        let email = user.email;
        let location = user.location;
        let numGist = user.public_gists;

        let profileTable = document.getElementById("UserProfile");
        let profileContent = ["Name : " + name, " Username : " +userName, "Email : " +email, "Location : " +location, "Number of Gists : "+ numGist];

        

        //filling the profile table
        let avatar = document.getElementById("avatar");
        avatar.src = img;
        for(let i = 0; i < profileContent.length; i++)
        {
            let row = document.createElement("tr");
            let UserData = document.createElement("td");
            UserData.innerHTML = profileContent[i];
            row.appendChild(UserData);
            profileTable.appendChild(row);
        }

        //retrieving the users repos
        const repoResponse = await fetch(user.repos_url);
        const repos = await repoResponse.json();
        let repoTable = document.getElementById("UserRepos");
        //putting in the info for the repos
        for(let  i = 0; i< repos.length; i++)
        {
            let row = document.createElement("tr");
            let UserRepoName = document.createElement("td");
            UserRepoName.innerHTML = "Name : " + repos[i].name;
            let UserRepoDesc = document.createElement("td");
            UserRepoDesc.innerHTML = "Description : " + repos[i].description;

            row.appendChild(UserRepoName)
            row.appendChild(UserRepoDesc);

            repoTable.appendChild(row);
        }

        //make a scroll bar if they have more than 5 repos
        if(repos.length > 5)
        {
            repoTable.style.display = "block";
            repoTable.style.height = "500px"
            repoTable.style.overflow = "auto";
        }else{
            repoTable.style.overflow = "";
        }
    }
    catch (e) {
        console.log(e);
        alert("there was no user found with this name")
    }

}

//clear tables
function EmptyTables() {
    document.getElementById("UserProfile").innerHTML = "";
    document.getElementById("UserRepos").innerHTML = "";
}