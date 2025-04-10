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
        stage ("Test"){
            steps{
                sh "npm test"
            }
        }
        stage ("deploy to render"){
            steps{
                "node server"
            }
        }
        stage ("add a big "MILESTONE 2""){
            steps{
                sh 'echo "MILESTONE 2"'
            }
        }
    }
}