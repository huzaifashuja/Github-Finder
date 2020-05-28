class Github{
    constructor(){
        this.client_id='5762a964044a2d4fce40';
        this.client_secret='b146e53bf62a207b45dbd6e17a45fb4e9053867e';
        this.repos_count=5;
        this.repos_sort='created:asc';
    }
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        
        const profile= await profileResponse.json();
        const repos=await repoResponse.json();

        return{
            profile,
            repos
        }
           
    }

    
}