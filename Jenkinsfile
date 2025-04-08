pipeline {
    agent any 
    tools {
        nodejs "node23"
    }
    stages{
        stage( "fetch code from git"){
            steps {
                git branch:"master", url: "https://github.com/Phyllis-K/docker_workshop"
            }
        }
        stage ("installing npm") {
            steps{
                sh 'npm install'
            }
        }
    }
}